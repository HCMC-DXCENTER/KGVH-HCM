const sources = [
  {
    name: "hochiminh.vn",
    type: "Tin tức - Tư liệu chính thống",
    description:
      "Kho bài viết, ảnh, audio, video và chuyên mục học tập, làm theo Bác.",
    url: "https://hochiminh.vn/",
    action: "Truy cập nguồn",
    tags: ["tin tức", "tư liệu", "audio", "video", "học tập"],
  },
  {
    name: "hochiminh.vn/bao-tang-3d",
    type: "Không gian 3D",
    description:
      "Danh sách bảo tàng và khu di tích 3D để tham quan trực tuyến theo địa điểm.",
    url: "https://hochiminh.vn/bao-tang-3d",
    action: "Tham quan 3D",
    tags: ["3D", "bảo tàng", "di tích"],
  },
  {
    name: "stbook.vn",
    type: "Sách điện tử",
    description:
      "Nền tảng sách điện tử của NXB Chính trị quốc gia Sự thật, phù hợp điều hướng đọc sách chính thống.",
    url: "https://stbook.vn/",
    action: "Mở stbook",
    tags: ["ebook", "sách", "NXB"],
  },
  {
    name: "thuviencoso.vn",
    type: "Thư viện sách cơ sở",
    description:
      "Danh mục sách chủ đề Chủ tịch Hồ Chí Minh, có liên kết đến trang chi tiết từng sách.",
    url: "https://thuviencoso.vn/BookStore.aspx?colid=26",
    action: "Mở danh mục",
    tags: ["thư viện", "sách", "chủ tịch Hồ Chí Minh"],
  },
  {
    name: "sachweb.com",
    type: "Sách trình bày online",
    description:
      "Nguồn sách dạng flipbook bổ sung cho chuyên đề học tập và truyền thông.",
    url: "https://sachweb.com/publish/nhungtamguongbinhdi_t5_id3430/nhungtamguongbinhdi_t5_id3430.aspx",
    action: "Mở sách web",
    tags: ["flipbook", "chuyên đề"],
  },
];

const documentsData = [
  {
    title: "Làm theo gương Bác Hồ",
    category: "Tin tức",
    source: "hochiminh.vn",
    date: "Cập nhật gần đây",
    url: "https://hochiminh.vn/hoc-va-lam-theo-bac/lam-theo-guong-bac-ho.html",
  },
  {
    title: "Tư liệu video: Việt Nam Hồ Chí Minh giữ trọn một con đường",
    category: "Video",
    source: "hochiminh.vn",
    date: "Tư liệu",
    url: "https://hochiminh.vn/tu-lieu-video/viet-nam-ho-chi-minh-giu-tron-mot-con-duong.html",
  },
  {
    title: "Tư liệu audio: Tuyên ngôn độc lập 2/9/1945",
    category: "Audio",
    source: "hochiminh.vn",
    date: "Tư liệu",
    url: "https://hochiminh.vn/audio/ho-chi-minh-chu-tich-lam-thoi-nuoc-viet-nam-dan-chu-cong-hoa-doc-ban-tuyen-ngon-doc-lap-ngay-2-9-1945-tai-quang-truong-1",
  },
  {
    title: "Tư liệu ảnh Chủ tịch Hồ Chí Minh với quốc tế",
    category: "Ảnh",
    source: "hochiminh.vn",
    date: "Tư liệu",
    url: "https://hochiminh.vn/tu-lieu-anh/tu-lieu-anh-chu-tich-ho-chi-minh-voi-quoc-te.html",
  },
  {
    title: "Chủ tịch Hồ Chí Minh đi bầu cử Quốc hội",
    category: "Tin tức",
    source: "hochiminh.vn",
    date: "Chuyên mục tư tưởng",
    url: "https://hochiminh.vn/tu-tuong-dao-duc-ho-chi-minh/chu-tich-ho-chi-minh-di-bau-cu-quoc-hoi.html",
  },
  {
    title: "Học Bác mỗi ngày: Cả nước sẵn sàng cho ngày hội lớn",
    category: "Video",
    source: "hochiminh.vn",
    date: "Da phương tiện",
    url: "https://hochiminh.vn/da-phuong-tien/video/hoc-bac-moi-ngay-ca-nuoc-san-sang-cho-ngay-hoi-lon.html",
  },
];

const books = [
  {
    title: "Bác Hồ trong trái tim những người bạn quốc tế",
    platform: "thuviencoso.vn",
    author: "Bùi Phúc Hải (Sưu tầm, tổ chức biên soạn)",
    url: "https://thuviencoso.vn/ViewBook.aspx?eid=702",
  },
  {
    title: "Hồ Chí Minh về chống quan liêu, tham nhũng, tiêu cực",
    platform: "thuviencoso.vn",
    author: "Phạm Minh Tuấn (Chủ biên)",
    url: "https://thuviencoso.vn/ViewBook.aspx?eid=676",
  },
  {
    title: "Tư tưởng Hồ Chí Minh về văn hóa",
    platform: "thuviencoso.vn",
    author: "Hội đồng chỉ đạo xuất bản sách xã, phường, thị trấn",
    url: "https://thuviencoso.vn/ViewBook.aspx?eid=664",
  },
  {
    title: "Bác Hồ của chúng em",
    platform: "thuviencoso.vn",
    author: "Hội đồng chỉ đạo xuất bản sách xã, phường, thị trấn",
    url: "https://thuviencoso.vn/ViewBook.aspx?eid=667",
  },
  {
    title: "Kho sách điện tử NXB Chính trị quốc gia Sự thật",
    platform: "stbook.vn",
    author: "Nhiều tác giả",
    url: "https://stbook.vn/",
  },
  {
    title: "Những tấm gương bình dị",
    platform: "sachweb.com",
    author: "Ấn phẩm sách trực tuyến",
    url: "https://sachweb.com/publish/nhungtamguongbinhdi_t5_id3430/nhungtamguongbinhdi_t5_id3430.aspx",
  },
];

const museums = [
  {
    name: "Bảo tàng Hồ Chí Minh",
    region: "Toàn quốc",
    url: "https://baotang.hochiminh.vn/",
  },
  {
    name: "Khu di tích Bến Nhà Rồng",
    region: "TP.HCM",
    url: "https://bennharong.hochiminh.vn/",
  },
  {
    name: "Khu di tích Pác Bó",
    region: "Cao Bằng",
    url: "https://pacbo.hochiminh.vn/",
  },
  {
    name: "Khu di tích Làng Sen Kim Liên",
    region: "Nghệ An",
    url: "https://langsenkimlien.hochiminh.vn/",
  },
  {
    name: "Khu di tích Đá Chông (K9)",
    region: "Hà Nội",
    url: "https://k9dachong.hochiminh.vn/",
  },
  {
    name: "Khu di tích Tân Trào - Tuyên Quang",
    region: "Tuyên Quang",
    url: "https://tantrao.hochiminh.vn/",
  },
  {
    name: "Bảo tàng Hồ Chí Minh - Thừa Thiên Huế",
    region: "Thừa Thiên Huế",
    url: "https://baotanghcmtthue.hochiminh.vn/",
  },
  {
    name: "Bảo tàng Hồ Chí Minh - Chi nhánh Cần Thơ",
    region: "Cần Thơ",
    url: "https://cantho.hochiminh.vn/",
  },
];

/** Dòng đời Chủ tịch Hồ Chí Minh — theo đề cương triển lãm ảnh */
const roadmap = [
  {
    phase: "1890 – 1911",
    name: "Người học trò yêu nước, dấn thân",
    imageCount: 16,
    detail:
      "Từ quê hương Sen – Chùa (Kim Liên, Nam Đàn) đến Huế, Phan Thiết và Sài Gòn: Nguyễn Sinh Cung – Nguyễn Tất Thành hun đúc ý chí yêu nước, dấn thân vào đấu tranh (như phong trào chống thuế 1908) rồi ra đi tìm đường cứu nước.",
    highlights: [
      "Quê ngoại Hoàng Trù, quê nội Làng Sen và gia đình (cụ Nguyễn Sinh Sắc, bà Hoàng Thị Loan).",
      "Học chữ Hán, theo học Trường Quốc học Huế; dạy học tại Trường Dục Thanh (Phan Thiết).",
      "Năm 1911, từ bến Sài Gòn lên tàu Amiral Latouche Tréville rời Tổ quốc.",
    ],
  },
  {
    phase: "1911 – 1920",
    name: "Người thanh niên và con đường cứu nước",
    imageCount: 7,
    detail:
      "Thời kỳ Nguyễn Tất Thành – Nguyễn Ái Quốc sống và làm việc ở Pháp, Anh, tham gia đấu tranh của người Việt yêu nước tại Pháp, tìm con đường giải phóng dân tộc.",
    highlights: [
      "Đặt chân tới Marseille (6/7/1911); làm việc tại khách sạn Carlton (London, 1913).",
      "Trụ sở Hội Những người Việt Nam yêu nước tại Paris (6 Villa des Gobelins).",
      "Đại hội Tours (12/1920): tán thành Quốc tế III, trở thành người cộng sản đầu tiên của dân tộc Việt Nam.",
    ],
  },
  {
    phase: "1920 – 1924",
    name: "Chiến sĩ cộng sản quốc tế — đại biểu nhân dân thuộc địa",
    imageCount: 7,
    detail:
      "Nguyễn Ái Quốc hoạt động trong phong trào cộng sản và công đoàn Pháp, sáng tác trên báo Le Paria, đại diện nhân dân Đông Dương tại các diễn đàn quốc tế.",
    highlights: [
      "Vẽ tranh châm biếm trên báo Le Paria, vạch trần luận điệu “khai hóa” của thực dân Pháp.",
      "Dự Hội nghị Quốc tế Nông dân (Moskva, 10/1923); được bầu vào Ban Chấp hành.",
      "Đại hội V Quốc tế Cộng sản (1924): kêu gọi tập trung sức lực vào vấn đề thuộc địa theo lời giáo huấn của Lenin.",
    ],
  },
  {
    phase: "1924 – 1930",
    name: "Người nhóm lửa cách mạng",
    imageCount: 12,
    detail:
      "Sau Đại hội V Quốc tế Cộng sản, Nguyễn Ái Quốc về Quảng Châu vừa tham gia cách mạng Trung Quốc vừa xây dựng phong trào cách mạng Việt Nam và Đông Dương, chuẩn bị thành lập Đảng.",
    highlights: [
      "Đào tạo cán bộ cách mạng; chuẩn bị Hội nghị thành lập Đảng Cộng sản Việt Nam (1930).",
      "Trần Phú — học trò xuất sắc, Tổng bí thư đầu tiên, người khởi thảo Luận cương chính trị.",
    ],
  },
  {
    phase: "1930 – 1945",
    name: "Người lãnh đạo Tổng khởi nghĩa thắng lợi",
    imageCount: 24,
    detail:
      "Từ phong trào Xô Viết Nghệ Tĩnh đến về nước (1941), lãnh đạo Việt Minh, thành lập Quân đội nhân dân và chỉ huy Cách mạng Tháng Tám — khai sinh nước Việt Nam Dân chủ Cộng hòa.",
    highlights: [
      "28/1/1941 về Pác Bó (Cao Bằng); Hội nghị Trung ương 8 (5/1941) thành lập Mặt trận Việt Minh.",
      "22/12/1944: thành lập đội Việt Nam tuyên truyền giải phóng quân — tiền thân Quân đội Nhân dân.",
      "16/8/1945 Quốc dân Đại hội Tân Trào; 2/9/1945 đọc Tuyên ngôn Độc lập tại Quảng trường Ba Đình.",
    ],
  },
  {
    phase: "1945 – 1954",
    name: "Người xây nền độc lập",
    imageCount: 28,
    detail:
      "Chủ tịch nước Việt Nam Dân chủ Cộng hòa đầu tiên: kiến thiết chính quyền dân chủ, đàm phán với Pháp, quyết định kháng chiến trường kỳ và lãnh đạo đến thắng lợi Điện Biên Phủ.",
    highlights: [
      "Quốc hội khóa I (bầu cử 6/1/1946); Chính phủ dân chủ cách mạng do Hồ Chí Minh làm Chủ tịch.",
      "“Nhất định không chịu làm nô lệ lần nữa” — quyết tâm toàn dân sau Hiệp định 14/9/1946.",
      "Chiến dịch Biên giới (1950), chiến dịch Điện Biên Phủ — toàn thắng 7/5/1954.",
    ],
  },
  {
    phase: "1954 – 1969",
    name: "Lãnh tụ của nhân dân",
    imageCount: 35,
    detail:
      "Lãnh đạo miền Bắc xây dựng chủ nghĩa xã hội, đấu tranh thống nhất Tổ quốc; gần gũi công nhân, nông dân, thanh niên, phụ nữ; đối ngoại và động viên miền Nam anh hùng.",
    highlights: [
      "1/1/1960: ký sắc lệnh công bố Hiến pháp xã hội chủ nghĩa đầu tiên của nước ta.",
      "Đại hội Đảng lần thứ III (9/1960): xây dựng CNXH ở miền Bắc, đấu tranh hòa bình thống nhất.",
      "“Mỗi người làm việc bằng hai” — kêu gọi đền đáp đồng bào miền Nam; thăm bộ đội, anh hùng miền Nam.",
    ],
  },
  {
    phase: "Di chúc · 1969",
    name: "Di chúc của Chủ tịch Hồ Chí Minh",
    imageCount: null,
    detail:
      "Bản Di chúc thể hiện tâm nguyện trọn đời vì Tổ quốc, vì nhân dân: xây dựng nước Việt Nam hòa bình, thống nhất, độc lập, dân chủ và giàu mạnh; gìn giữ Đảng trong sạch, gần gũi nhân dân.",
    highlights: [
      "Công bố năm 1969 — di sản chính trị và đạo đức cách mạng cho mọi thế hệ.",
      "Nhắc nhở về đoàn kết toàn dân, xây dựng chủ nghĩa xã hội và thực hiện thống nhất đất nước.",
    ],
  },
  {
    phase: "1969 – 2011",
    name: "Chủ tịch Hồ Chí Minh sống mãi trong sự nghiệp của chúng ta",
    imageCount: null,
    detail:
      "Sau khi Người đi xa, tư tưởng, đạo đức và sự nghiệp cách mạng của Bác tiếp tục soi đường cho dân tộc — từ kháng chiến thống nhất đến đổi mới, hội nhập và xây dựng đất nước ngày càng vững mạnh.",
    highlights: [
      "Nhân dân Việt Nam thực hiện di nguyện thống nhất non sông (30/4/1975).",
      "Học tập và làm theo tư tưởng, đạo đức, phong cách Hồ Chí Minh trong mọi lĩnh vực đời sống.",
    ],
  },
];

const contacts = [
  {
    unit: "hochiminh.vn",
    role: "Nguồn tư liệu, bài viết, multimedia",
    url: "https://hochiminh.vn/",
  },
  {
    unit: "stbook.vn",
    role: "Nguồn sách điện tử chính thống",
    url: "https://stbook.vn/",
  },
  {
    unit: "thuviencoso.vn",
    role: "Danh mục sách cơ sở theo chuyên đề",
    url: "https://thuviencoso.vn/BookStore.aspx?colid=26",
  },
];

function byKeyword(item, keyword, keys) {
  if (!keyword) return true;
  const value = keys.map((k) => String(item[k] || "")).join(" ").toLowerCase();
  return value.includes(keyword.toLowerCase());
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function exhibitionImageUrl(entry) {
  if (typeof EXHIBITION === "undefined") return "";
  const base = EXHIBITION.dir.replace(/\/?$/, "/");
  if (entry.id != null) {
    return encodeURI(`${base}H ${entry.id}.jpg`);
  }
  return encodeURI(`${base}${entry.file}`);
}

function exhibitionImageCode(entry) {
  if (entry.id != null) return `H ${entry.id}`;
  return entry.file.replace(/\.[^.]+$/, "");
}

function setCount(id, value) {
  const el = document.getElementById(id);
  if (el) {
    el.textContent = String(value);
  }
}

function renderSources(items) {
  const grid = document.getElementById("source-grid");
  if (!grid) return;
  grid.innerHTML = items
    .map(
      (item) => `
      <article class="card">
        <span class="badge">${item.type}</span>
        <h3>${item.name}</h3>
        <p>${item.description}</p>
        <div class="actions">
          <a class="btn primary" href="${item.url}" target="_blank" rel="noopener noreferrer">${item.action}</a>
        </div>
      </article>
    `,
    )
    .join("");
  setCount("source-count", items.length);
}

function renderDocuments(items) {
  const grid = document.getElementById("documents-grid");
  if (!grid) return;
  grid.innerHTML = items
    .map(
      (item) => `
      <article class="card">
        <span class="badge">${item.category}</span>
        <h3>${item.title}</h3>
        <p class="meta">Nguồn: ${item.source} - ${item.date}</p>
        <div class="actions">
          <a class="btn secondary" href="${item.url}" target="_blank" rel="noopener noreferrer">Xem nội dung</a>
        </div>
      </article>
    `,
    )
    .join("");
  setCount("documents-count", items.length);
}

function renderBooks(items) {
  const grid = document.getElementById("books-grid");
  if (!grid) return;
  grid.innerHTML = items
    .map(
      (item) => `
      <article class="card">
        <span class="badge success">${item.platform}</span>
        <h3>${item.title}</h3>
        <p>${item.author}</p>
        <div class="actions">
          <a class="btn secondary" href="${item.url}" target="_blank" rel="noopener noreferrer">Đọc/Chi tiết</a>
        </div>
      </article>
    `,
    )
    .join("");
  setCount("books-count", items.length);
}

function renderMuseums(items) {
  const grid = document.getElementById("museums-grid");
  if (!grid) return;
  grid.innerHTML = items
    .map(
      (item) => `
      <article class="card card--museum">
        <div class="card__badges">
          <span class="badge success">3D</span>
          <span class="badge">${escapeHtml(item.region)}</span>
        </div>
        <h3>${escapeHtml(item.name)}</h3>
        <p class="muted card__hint">Không gian tham quan trực tuyến</p>
        <div class="actions">
          <a class="btn primary" href="${item.url}" target="_blank" rel="noopener noreferrer">Tham quan 3D</a>
        </div>
      </article>
    `,
    )
    .join("");
  setCount("museums-count", items.length);
}

function renderRoadmap(items) {
  const container = document.getElementById("roadmap-list");
  if (!container) return;
  const phaseImages =
    typeof EXHIBITION !== "undefined" && EXHIBITION.phaseImages
      ? EXHIBITION.phaseImages
      : [];

  container.innerHTML = items
    .map((item, index) => {
      const images = phaseImages[index] || [];
      const countLabel = images.length
        ? ` · ${images.length} ảnh triển lãm`
        : item.imageCount != null
          ? ` · ${item.imageCount} ảnh triển lãm`
          : "";
      const gallery = images.length
        ? `<div class="timeline-gallery" role="list">${images
            .map((img) => {
              const src = exhibitionImageUrl(img);
              const code = exhibitionImageCode(img);
              const title = escapeHtml(img.title);
              return `
            <figure class="timeline-figure" role="listitem">
              <a class="timeline-figure__link" href="${src}" target="_blank" rel="noopener noreferrer">
                <img src="${src}" alt="${title}" loading="lazy" decoding="async" width="320" height="240" />
              </a>
              <figcaption>
                <span class="timeline-figure__code">${escapeHtml(code)}</span>
                <span class="timeline-figure__title">${title}</span>
              </figcaption>
            </figure>`;
            })
            .join("")}</div>`
        : "";
      return `
      <div class="timeline-item">
        <p class="kpi">${escapeHtml(item.phase)}${countLabel}</p>
        <h3>${escapeHtml(item.name)}</h3>
        <p class="muted">${escapeHtml(item.detail)}</p>
        ${gallery}
      </div>`;
    })
    .join("");
}

function renderContacts(items) {
  const grid = document.getElementById("contacts-grid");
  if (!grid) return;
  grid.innerHTML = items
    .map(
      (item) => `
      <article class="card">
        <h3>${item.unit}</h3>
        <p>${item.role}</p>
        <div class="actions">
          <a class="btn secondary" href="${item.url}" target="_blank" rel="noopener noreferrer">Mở nguồn</a>
        </div>
      </article>
    `,
    )
    .join("");
}

function setupFilters() {
  const sourceSearch = document.getElementById("source-search");
  if (sourceSearch) {
    sourceSearch.addEventListener("input", (event) => {
      const filtered = sources.filter((item) =>
        byKeyword(item, event.target.value, ["name", "type", "description", "tags"]),
      );
      renderSources(filtered);
    });
  }

  const docSearch = document.getElementById("document-search");
  const docCategory = document.getElementById("document-category");
  if (docSearch || docCategory) {
    const filterDocs = () => {
      const q = docSearch ? docSearch.value : "";
      const c = docCategory ? docCategory.value : "";
      const filtered = documentsData.filter(
        (item) =>
          byKeyword(item, q, ["title", "source", "category"]) &&
          (c === "all" || item.category === c),
      );
      renderDocuments(filtered);
    };
    if (docSearch) docSearch.addEventListener("input", filterDocs);
    if (docCategory) docCategory.addEventListener("change", filterDocs);
  }

  const bookSearch = document.getElementById("book-search");
  const bookPlatform = document.getElementById("book-platform");
  if (bookSearch || bookPlatform) {
    const filterBooks = () => {
      const q = bookSearch ? bookSearch.value : "";
      const p = bookPlatform ? bookPlatform.value : "";
      const filtered = books.filter(
        (item) =>
          byKeyword(item, q, ["title", "author", "platform"]) &&
          (p === "all" || item.platform === p),
      );
      renderBooks(filtered);
    };
    if (bookSearch) bookSearch.addEventListener("input", filterBooks);
    if (bookPlatform) bookPlatform.addEventListener("change", filterBooks);
  }

  const museumSearch = document.getElementById("museum-search");
  if (museumSearch) {
    museumSearch.addEventListener("input", (event) => {
      const filtered = museums.filter((item) =>
        byKeyword(item, event.target.value, ["name", "region"]),
      );
      renderMuseums(filtered);
    });
  }
}

function setupStats() {
  setCount("stat-sources", sources.length);
  setCount("stat-docs", documentsData.length);
  setCount("stat-books", books.length);
  setCount("stat-museums", museums.length);
}

function setupYear() {
  const el = document.getElementById("current-year");
  if (el) el.textContent = String(new Date().getFullYear());
}

function setupFeatured() {
  const featuredDocs = document.getElementById("featured-documents");
  if (featuredDocs) {
    featuredDocs.innerHTML = documentsData
      .slice(0, 3)
      .map(
        (item) => `
        <article class="card">
          <span class="badge">${item.category}</span>
          <h3>${item.title}</h3>
          <p class="meta">Nguồn: ${item.source}</p>
          <div class="actions">
            <a class="btn secondary" href="${item.url}" target="_blank" rel="noopener noreferrer">Xem nội dung</a>
          </div>
        </article>
      `,
      )
      .join("");
  }
  const featuredBooks = document.getElementById("featured-books");
  if (featuredBooks) {
    featuredBooks.innerHTML = books
      .slice(0, 3)
      .map(
        (item) => `
        <article class="card">
          <span class="badge success">${item.platform}</span>
          <h3>${item.title}</h3>
          <p>${item.author}</p>
          <div class="actions">
            <a class="btn secondary" href="${item.url}" target="_blank" rel="noopener noreferrer">Xem sách</a>
          </div>
        </article>
      `,
      )
      .join("");
  }
}

function init() {
  renderSources(sources);
  renderDocuments(documentsData);
  renderBooks(books);
  renderMuseums(museums);
  renderRoadmap(roadmap);
  renderContacts(contacts);
  setupFilters();
  setupStats();
  setupFeatured();
  setupYear();
}

init();
