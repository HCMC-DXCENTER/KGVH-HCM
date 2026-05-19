import * as pdfjsLib from "https://cdn.jsdelivr.net/npm/pdfjs-dist@4.6.82/build/pdf.min.mjs";

pdfjsLib.GlobalWorkerOptions.workerSrc =
  "https://cdn.jsdelivr.net/npm/pdfjs-dist@4.6.82/build/pdf.worker.min.mjs";

const BOOKS = [
  {
    id: "bup-sen-xanh",
    title: "42 - Bup Sen xanh",
    file: "./42.-Bup-Sen-xanh.pdf",
  },
  {
    id: "nhat-ky-trong-tu",
    title: "Nhat Ky Trong Tu",
    file: "./Nhat Ky Trong Tu.pdf",
  },
  {
    id: "tho-ho-chi-minh",
    title: "Tho Ho Chi Minh",
    file: "./Tho_HoChiMinh.pdf",
  },
  {
    id: "tu-lang-sen-den-ben-nha-rong",
    title: "Tu Lang Sen den Ben Nha Rong (Phan 1)",
    file: "./Ebook-Tu-lang-Sen-den-ben-Nha-Rong--Phan-1---Trinh-Quang-Phu-971874-e3595335-4787-4585-ad61-b1e17bf712b1.pdf",
  },
];

const ZOOM_MIN = 0.65;
const ZOOM_MAX = 2.5;
const ZOOM_STEP = 0.15;
const SWIPE_THRESHOLD = 52;

const state = {
  activeBookId: BOOKS[0].id,
  pdf: null,
  page: 1,
  totalPages: 0,
  zoomFactor: 1,
  loadToken: 0,
  touchX: null,
  isRendering: false,
};

const appShell = document.getElementById("appShell");
const bookList = document.getElementById("bookList");
const outlineContainer = document.getElementById("outlineContainer");
const pageCanvas = document.getElementById("pageCanvas");
const pageSheet = document.getElementById("pageSheet");
const pageInput = document.getElementById("pageInput");
const totalPages = document.getElementById("totalPages");
const statusText = document.getElementById("statusText");
const zoomBadge = document.getElementById("zoomBadge");
const pageStage = document.getElementById("pageStage");
const toggleSidebarBtn = document.getElementById("toggleSidebarBtn");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const zoomOutBtn = document.getElementById("zoomOutBtn");
const zoomInBtn = document.getElementById("zoomInBtn");
const fitBtn = document.getElementById("fitBtn");
const fullscreenBtn = document.getElementById("fullscreenBtn");
const viewerRoot = document.getElementById("viewerRoot");

renderBookList();
wireEvents();
openBook(state.activeBookId);

function renderBookList() {
  const frag = document.createDocumentFragment();

  BOOKS.forEach((book) => {
    const li = document.createElement("li");
    const button = document.createElement("button");
    button.type = "button";
    button.className = "book-btn";
    button.dataset.bookId = book.id;
    button.textContent = book.title;
    button.addEventListener("click", () => {
      if (state.activeBookId === book.id) {
        closeSidebarOnMobile();
        return;
      }
      openBook(book.id);
      closeSidebarOnMobile();
    });
    li.appendChild(button);
    frag.appendChild(li);
  });

  bookList.replaceChildren(frag);
  syncActiveBookUI();
}

function wireEvents() {
  prevBtn.addEventListener("click", () => changePage(-1));
  nextBtn.addEventListener("click", () => changePage(1));

  pageInput.addEventListener("change", () => {
    const page = Number.parseInt(pageInput.value, 10);
    goToPage(page, "next");
  });

  zoomOutBtn.addEventListener("click", () => changeZoom(-ZOOM_STEP));
  zoomInBtn.addEventListener("click", () => changeZoom(ZOOM_STEP));

  fitBtn.addEventListener("click", () => {
    state.zoomFactor = 1;
    renderCurrentPage(false, "next");
  });

  fullscreenBtn.addEventListener("click", toggleFullScreen);
  toggleSidebarBtn.addEventListener("click", () => appShell.classList.toggle("is-sidebar-open"));

  document.addEventListener("keydown", (event) => {
    if (event.key === "ArrowRight") changePage(1);
    if (event.key === "ArrowLeft") changePage(-1);
    if (event.key === "+" || event.key === "=") changeZoom(ZOOM_STEP);
    if (event.key === "-") changeZoom(-ZOOM_STEP);
  });

  pageStage.addEventListener(
    "touchstart",
    (event) => {
      if (!event.touches.length) return;
      state.touchX = event.touches[0].clientX;
    },
    { passive: true }
  );

  pageStage.addEventListener(
    "touchend",
    (event) => {
      if (state.touchX == null || !event.changedTouches.length) {
        state.touchX = null;
        return;
      }
      const deltaX = event.changedTouches[0].clientX - state.touchX;
      state.touchX = null;

      if (Math.abs(deltaX) < SWIPE_THRESHOLD) return;
      if (deltaX < 0) changePage(1);
      if (deltaX > 0) changePage(-1);
    },
    { passive: true }
  );

  window.addEventListener("resize", debounce(() => renderCurrentPage(false, "next"), 180));
  document.addEventListener("fullscreenchange", syncFullscreenLabel);
}

async function openBook(bookId) {
  const book = BOOKS.find((item) => item.id === bookId);
  if (!book) return;

  state.activeBookId = bookId;
  state.page = 1;
  state.zoomFactor = 1;
  state.totalPages = 0;
  totalPages.textContent = "0";
  pageInput.value = "1";

  syncActiveBookUI();
  setStatus(`Dang tai: ${book.title}...`);
  renderOutlineHint("Dang doc muc luc...");

  const token = ++state.loadToken;

  try {
    if (state.pdf) {
      await state.pdf.cleanup();
      await state.pdf.destroy();
    }

    const task = pdfjsLib.getDocument({
      url: encodeURI(book.file),
      cMapPacked: true,
    });
    const pdf = await task.promise;

    if (token !== state.loadToken) {
      await pdf.destroy();
      return;
    }

    state.pdf = pdf;
    state.totalPages = pdf.numPages;
    totalPages.textContent = String(state.totalPages);
    pageInput.max = String(state.totalPages);
    await buildOutline(pdf);
    await renderCurrentPage(false, "next");
  } catch (error) {
    console.error(error);
    renderOutlineHint("Khong doc duoc muc luc.");
    setStatus("Khong mo duoc file PDF. Kiem tra duong dan file hoac ket noi CDN.");
  }
}

function changePage(delta) {
  if (!state.pdf || state.isRendering) return;
  goToPage(state.page + delta, delta >= 0 ? "next" : "prev");
}

function goToPage(targetPage, direction) {
  if (!state.pdf || state.isRendering) return;
  if (!Number.isFinite(targetPage)) return;

  const page = clamp(Math.round(targetPage), 1, state.totalPages);
  if (page === state.page) {
    pageInput.value = String(page);
    return;
  }

  state.page = page;
  renderCurrentPage(true, direction);
}

function changeZoom(delta) {
  const next = clamp(state.zoomFactor + delta, ZOOM_MIN, ZOOM_MAX);
  if (next === state.zoomFactor) return;
  state.zoomFactor = Number(next.toFixed(2));
  renderCurrentPage(false, "next");
}

async function renderCurrentPage(animate, direction) {
  if (!state.pdf) return;
  state.isRendering = true;
  updateButtonState();

  try {
    const page = await state.pdf.getPage(state.page);
    const baseViewport = page.getViewport({ scale: 1 });
    const availableWidth = Math.max(pageStage.clientWidth - 40, 280);
    const fitScale = Math.min(availableWidth / baseViewport.width, 1.8);
    const finalScale = fitScale * state.zoomFactor;
    const viewport = page.getViewport({ scale: finalScale });

    const ratio = window.devicePixelRatio || 1;
    const context = pageCanvas.getContext("2d", { alpha: false });
    pageCanvas.width = Math.floor(viewport.width * ratio);
    pageCanvas.height = Math.floor(viewport.height * ratio);
    pageCanvas.style.width = `${Math.floor(viewport.width)}px`;
    pageCanvas.style.height = `${Math.floor(viewport.height)}px`;
    context.setTransform(ratio, 0, 0, ratio, 0, 0);

    await page.render({
      canvasContext: context,
      viewport,
    }).promise;

    if (animate) triggerFlipAnimation(direction);

    pageInput.value = String(state.page);
    zoomBadge.textContent = `${Math.round(state.zoomFactor * 100)}%`;

    const activeBook = BOOKS.find((item) => item.id === state.activeBookId);
    setStatus(
      `${activeBook ? activeBook.title : "Tai lieu"} | Trang ${state.page}/${state.totalPages}`
    );
  } catch (error) {
    console.error(error);
    setStatus("Loi render trang. Thu tai lai tai lieu.");
  } finally {
    state.isRendering = false;
    updateButtonState();
  }
}

async function buildOutline(pdf) {
  let outline = [];
  try {
    outline = (await pdf.getOutline()) || [];
  } catch (error) {
    console.warn("Cannot read PDF outline", error);
  }

  if (!outline.length) {
    renderOutlineHint("Tai lieu nay chua co muc luc bookmark.");
    return;
  }

  const list = document.createElement("ul");
  await appendOutlineItems(list, outline, pdf);
  outlineContainer.replaceChildren(list);
}

async function appendOutlineItems(container, items, pdf) {
  for (const item of items) {
    const li = document.createElement("li");
    const button = document.createElement("button");
    button.type = "button";
    button.textContent = item.title || "Muc luc";

    const targetPage = await resolveDestinationPage(item.dest, pdf);
    if (targetPage) {
      button.addEventListener("click", () => goToPage(targetPage, "next"));
    } else {
      button.disabled = true;
      button.style.opacity = "0.55";
      button.style.cursor = "not-allowed";
      button.title = "Khong xac dinh duoc trang";
    }

    li.appendChild(button);

    if (Array.isArray(item.items) && item.items.length) {
      const childList = document.createElement("ul");
      await appendOutlineItems(childList, item.items, pdf);
      li.appendChild(childList);
    }

    container.appendChild(li);
  }
}

async function resolveDestinationPage(dest, pdf) {
  if (!dest) return null;

  try {
    const explicitDest = typeof dest === "string" ? await pdf.getDestination(dest) : dest;
    if (!explicitDest || !explicitDest[0]) return null;
    const pageRef = explicitDest[0];
    const pageIndex = await pdf.getPageIndex(pageRef);
    return pageIndex + 1;
  } catch (error) {
    return null;
  }
}

function renderOutlineHint(text) {
  outlineContainer.innerHTML = "";
  const p = document.createElement("p");
  p.className = "hint";
  p.textContent = text;
  outlineContainer.appendChild(p);
}

function setStatus(text) {
  statusText.textContent = text;
}

function triggerFlipAnimation(direction) {
  pageSheet.classList.remove("flip-next", "flip-prev");
  void pageSheet.offsetWidth;
  pageSheet.classList.add(direction === "prev" ? "flip-prev" : "flip-next");
}

function updateButtonState() {
  const disabled = !state.pdf || state.isRendering;
  prevBtn.disabled = disabled || state.page <= 1;
  nextBtn.disabled = disabled || state.page >= state.totalPages;
  pageInput.disabled = disabled;
  zoomInBtn.disabled = disabled || state.zoomFactor >= ZOOM_MAX;
  zoomOutBtn.disabled = disabled || state.zoomFactor <= ZOOM_MIN;
  fitBtn.disabled = disabled;
}

function syncActiveBookUI() {
  const buttons = bookList.querySelectorAll(".book-btn");
  buttons.forEach((button) => {
    button.classList.toggle("is-active", button.dataset.bookId === state.activeBookId);
  });
}

function closeSidebarOnMobile() {
  if (window.matchMedia("(max-width: 1080px)").matches) {
    appShell.classList.remove("is-sidebar-open");
  }
}

async function toggleFullScreen() {
  try {
    if (!document.fullscreenElement) {
      await viewerRoot.requestFullscreen();
    } else {
      await document.exitFullscreen();
    }
  } catch (error) {
    console.error("Fullscreen failed", error);
  }
}

function syncFullscreenLabel() {
  fullscreenBtn.textContent = document.fullscreenElement ? "Exit" : "Full";
}

function clamp(value, min, max) {
  return Math.max(min, Math.min(max, value));
}

function debounce(fn, waitMs) {
  let timeoutId = null;
  return (...args) => {
    if (timeoutId) clearTimeout(timeoutId);
    timeoutId = setTimeout(() => fn(...args), waitMs);
  };
}
