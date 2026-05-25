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

const flipbookFiles = [
  {
    id: "bup-sen-xanh",
    title: "Bup Sen Xanh",
    file: "./Flipbook/42.-Bup-Sen-xanh.pdf",
  },
  {
    id: "nhat-ky-trong-tu",
    title: "Nhat Ky Trong Tu",
    file: "./Flipbook/Nhat Ky Trong Tu.pdf",
  },
  {
    id: "tho-ho-chi-minh",
    title: "Tho Ho Chi Minh",
    file: "./Flipbook/Tho_HoChiMinh.pdf",
  },
  {
    id: "tu-lang-sen",
    title: "Tu Lang Sen den Ben Nha Rong",
    file: "./Flipbook/Ebook-Tu-lang-Sen-den-ben-Nha-Rong--Phan-1---Trinh-Quang-Phu-971874-e3595335-4787-4585-ad61-b1e17bf712b1.pdf",
  },
];

const museums = [
  {
    name: "Bảo tàng Hồ Chí Minh",
    region: "Toàn quốc",
    url: "https://baotang.hochiminh.vn/",
    image: "./assets/museums/baotanghochiminh.jpg",
  },
  {
    name: "Khu di tích Bến Nhà Rồng",
    region: "TP.HCM",
    url: "https://bennharong.hochiminh.vn/",
    image: "./assets/museums/khuditichbennharong.jpg",
  },
  {
    name: "Khu di tích Pác Bó",
    region: "Cao Bằng",
    url: "https://pacbo.hochiminh.vn/",
    image: "./assets/museums/khuditichpacbo.jpg",
  },
  {
    name: "Khu di tích Làng Sen Kim Liên",
    region: "Nghệ An",
    url: "https://langsenkimlien.hochiminh.vn/",
    image: "./assets/museums/khuditichlangsenkimlien.jpg",
  },
  {
    name: "Khu di tích Đá Chông (K9)",
    region: "Hà Nội",
    url: "https://k9dachong.hochiminh.vn/",
    image: "./assets/museums/khuditichdachong.jpg",
  },
  {
    name: "Khu di tích Tân Trào - Tuyên Quang",
    region: "Tuyên Quang",
    url: "https://tantrao.hochiminh.vn/",
    image: "./assets/museums/khuditichtantraotuyenquan.jpg",
  },
  {
    name: "Bảo tàng Hồ Chí Minh - Thừa Thiên Huế",
    region: "Thừa Thiên Huế",
    url: "https://baotanghcmtthue.hochiminh.vn/",
    image: "./assets/museums/baotanghochiminhthuathienhue.jpg",
  },
  {
    name: "Bảo tàng Hồ Chí Minh - Chi nhánh Cần Thơ",
    region: "Cần Thơ",
    url: "https://cantho.hochiminh.vn/",
    image: "./assets/museums/baotanghochiminhchinhanhcantho.jpg",
  },
  {
    name: "Nghĩa trang Hàng Dương",
    region: "Bà Rịa - Vũng Tàu",
    url: "https://nghiatranghangduong.tphcm.gov.vn/vi/maps",
    image: "./assets/museums/nghiatranghangduong.jpg",
    type: "Bản đồ",
    action: "Xem bản đồ",
    hint: "Bản đồ tham quan trực tuyến",
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
    imageCount: 12,
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
    imageCount: 3,
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
    imageCount: 20,
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
    imageCount: 27,
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
    imageCount: 32,
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
        ${
          item.image
            ? `<img class="card__thumb" src="${escapeHtml(item.image)}" alt="${escapeHtml(
                item.name,
              )}" loading="lazy" decoding="async" />`
            : ""
        }
        <div class="card__badges">
          <span class="badge success">${escapeHtml(item.type || "3D")}</span>
          <span class="badge">${escapeHtml(item.region)}</span>
        </div>
        <h3>${escapeHtml(item.name)}</h3>
        <p class="muted card__hint">${escapeHtml(item.hint || "Không gian tham quan trực tuyến")}</p>
        <div class="actions">
          <a class="btn primary" href="${item.url}" target="_blank" rel="noopener noreferrer">${escapeHtml(
            item.action || "Tham quan 3D",
          )}</a>
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

function setupFlipbookModule() {
  const moduleRoot = document.getElementById("flipbook-module");
  if (!moduleRoot) return;

  const statusEl = document.getElementById("flipbook-status");
  const outlinePanel = document.getElementById("flipbook-outline-panel");
  const outlineList = document.getElementById("flipbook-outline-list");
  const bookList = document.getElementById("flipbook-book-list");
  const pageInput = document.getElementById("flipbook-page-input");
  const totalPagesEl = document.getElementById("flipbook-total-pages");
  const zoomBadge = document.getElementById("flipbook-zoom-badge");
  const stage = document.getElementById("flipbook-stage");
  const sheet = document.getElementById("flipbook-sheet");
  const canvas = document.getElementById("flipbook-canvas");
  const menuBtn = document.getElementById("flipbook-menu-btn");
  const prevBtn = document.getElementById("flipbook-prev-btn");
  const nextBtn = document.getElementById("flipbook-next-btn");
  const zoomOutBtn = document.getElementById("flipbook-zoom-out-btn");
  const zoomInBtn = document.getElementById("flipbook-zoom-in-btn");
  const fitBtn = document.getElementById("flipbook-fit-btn");
  const fullscreenBtn = document.getElementById("flipbook-fullscreen-btn");

  const PDF = window.pdfjsLib;
  if (!PDF || typeof PDF.getDocument !== "function") {
    if (statusEl) {
      statusEl.textContent = "Khong tai duoc bo doc PDF. Vui long kiem tra ket noi mang.";
    }
    return;
  }

  PDF.GlobalWorkerOptions.workerSrc =
    "https://cdn.jsdelivr.net/npm/pdfjs-dist@3.11.174/build/pdf.worker.min.js";

  setCount("flipbook-books-count", flipbookFiles.length);

  const ZOOM_MIN = 0.65;
  const ZOOM_MAX = 2.4;
  const ZOOM_STEP = 0.15;
  const SWIPE_THRESHOLD = 48;

  const state = {
    activeBookId: flipbookFiles[0].id,
    pdf: null,
    page: 1,
    totalPages: 0,
    zoomFactor: 1,
    loadToken: 0,
    rendering: false,
    touchX: null,
  };

  renderShelf();
  bindEvents();
  openBook(state.activeBookId);

  async function openBook(bookId) {
    const book = flipbookFiles.find((item) => item.id === bookId);
    if (!book) return;

    state.activeBookId = bookId;
    state.page = 1;
    state.totalPages = 0;
    state.zoomFactor = 1;
    if (pageInput) pageInput.value = "1";
    if (totalPagesEl) totalPagesEl.textContent = "0";
    if (zoomBadge) zoomBadge.textContent = "100%";
    setStatus(`Dang tai: ${book.title}...`);
    renderOutlineHint("Dang doc muc luc...");
    syncActiveBook();

    const token = ++state.loadToken;

    try {
      if (state.pdf) {
        await state.pdf.cleanup();
        await state.pdf.destroy();
      }

      const task = PDF.getDocument({
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
      if (totalPagesEl) totalPagesEl.textContent = String(state.totalPages);
      if (pageInput) pageInput.max = String(state.totalPages);

      await buildOutline(pdf);
      await renderCurrentPage(false, "next");
    } catch (error) {
      console.error(error);
      renderOutlineHint("Khong doc duoc muc luc tai lieu.");
      setStatus("Khong mo duoc file PDF. Kiem tra ten file trong thu muc Flipbook.");
    }
  }

  function bindEvents() {
    if (menuBtn && outlinePanel) {
      menuBtn.addEventListener("click", () => {
        outlinePanel.hidden = !outlinePanel.hidden;
      });
    }

    if (prevBtn) prevBtn.addEventListener("click", () => changePage(-1));
    if (nextBtn) nextBtn.addEventListener("click", () => changePage(1));
    if (zoomOutBtn) zoomOutBtn.addEventListener("click", () => changeZoom(-ZOOM_STEP));
    if (zoomInBtn) zoomInBtn.addEventListener("click", () => changeZoom(ZOOM_STEP));
    if (fitBtn) {
      fitBtn.addEventListener("click", () => {
        state.zoomFactor = 1;
        renderCurrentPage(false, "next");
      });
    }

    if (fullscreenBtn) {
      fullscreenBtn.addEventListener("click", toggleFullscreen);
      document.addEventListener("fullscreenchange", syncFullscreenLabel);
    }

    if (pageInput) {
      pageInput.addEventListener("change", () => {
        const next = Number.parseInt(pageInput.value, 10);
        goToPage(next, "next");
      });
    }

    document.addEventListener("keydown", (event) => {
      if (!document.getElementById("thu-vien-flipbook")) return;
      if (event.key === "ArrowLeft") changePage(-1);
      if (event.key === "ArrowRight") changePage(1);
      if (event.key === "+" || event.key === "=") changeZoom(ZOOM_STEP);
      if (event.key === "-") changeZoom(-ZOOM_STEP);
    });

    if (stage) {
      stage.addEventListener(
        "touchstart",
        (event) => {
          if (!event.touches.length) return;
          state.touchX = event.touches[0].clientX;
        },
        { passive: true },
      );

      stage.addEventListener(
        "touchend",
        (event) => {
          if (state.touchX == null || !event.changedTouches.length) {
            state.touchX = null;
            return;
          }
          const deltaX = event.changedTouches[0].clientX - state.touchX;
          state.touchX = null;
          if (Math.abs(deltaX) < SWIPE_THRESHOLD) return;
          if (deltaX > 0) changePage(-1);
          if (deltaX < 0) changePage(1);
        },
        { passive: true },
      );
    }

    window.addEventListener("resize", debounce(() => renderCurrentPage(false, "next"), 180));
  }

  function renderShelf() {
    if (!bookList) return;
    bookList.innerHTML = "";

    flipbookFiles.forEach((book) => {
      const button = document.createElement("button");
      button.type = "button";
      button.className = "flipbook-book-btn";
      button.dataset.bookId = book.id;

      const img = document.createElement("img");
      img.className = "flipbook-book-cover";
      img.alt = `Bia sach ${book.title}`;
      img.decoding = "async";
      img.loading = "lazy";
      button.appendChild(img);

      const title = document.createElement("span");
      title.className = "flipbook-book-title";
      title.textContent = book.title;
      button.appendChild(title);

      button.addEventListener("click", () => {
        if (state.activeBookId === book.id) return;
        if (outlinePanel) outlinePanel.hidden = true;
        openBook(book.id);
      });

      bookList.appendChild(button);
      renderBookCover(book.file, img);
    });

    syncActiveBook();
  }

  async function renderBookCover(file, imageEl) {
    try {
      const task = PDF.getDocument({
        url: encodeURI(file),
        cMapPacked: true,
      });
      const pdf = await task.promise;
      const page = await pdf.getPage(1);
      const viewport = page.getViewport({ scale: 0.24 });
      const ratio = window.devicePixelRatio || 1;
      const offscreen = document.createElement("canvas");
      offscreen.width = Math.floor(viewport.width * ratio);
      offscreen.height = Math.floor(viewport.height * ratio);
      const ctx = offscreen.getContext("2d");
      ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
      await page.render({
        canvasContext: ctx,
        viewport,
      }).promise;
      imageEl.src = offscreen.toDataURL("image/jpeg", 0.86);
      await pdf.destroy();
    } catch (error) {
      imageEl.alt = "Khong tai duoc bia sach";
    }
  }

  function syncActiveBook() {
    if (!bookList) return;
    bookList.querySelectorAll(".flipbook-book-btn").forEach((button) => {
      const isActive = button.dataset.bookId === state.activeBookId;
      button.classList.toggle("is-active", isActive);
      if (isActive) {
        button.scrollIntoView({
          behavior: "smooth",
          inline: "center",
          block: "nearest",
        });
      }
    });
  }

  function changePage(delta) {
    if (!state.pdf || state.rendering) return;
    const direction = delta < 0 ? "prev" : "next";
    goToPage(state.page + delta, direction);
  }

  function goToPage(targetPage, direction) {
    if (!state.pdf || state.rendering || !Number.isFinite(targetPage)) return;
    const page = clamp(Math.round(targetPage), 1, state.totalPages);
    if (page === state.page) {
      if (pageInput) pageInput.value = String(page);
      return;
    }
    state.page = page;
    renderCurrentPage(true, direction);
  }

  function changeZoom(delta) {
    if (!state.pdf) return;
    const next = clamp(state.zoomFactor + delta, ZOOM_MIN, ZOOM_MAX);
    if (next === state.zoomFactor) return;
    state.zoomFactor = Number(next.toFixed(2));
    renderCurrentPage(false, "next");
  }

  async function renderCurrentPage(animate, direction) {
    if (!state.pdf || !canvas || !stage) return;
    state.rendering = true;
    updateControls();

    try {
      const page = await state.pdf.getPage(state.page);
      const baseViewport = page.getViewport({ scale: 1 });
      const availableWidth = Math.max(stage.clientWidth - 30, 280);
      const fitScale = Math.min(availableWidth / baseViewport.width, 1.8);
      const viewport = page.getViewport({ scale: fitScale * state.zoomFactor });
      const ratio = window.devicePixelRatio || 1;
      const context = canvas.getContext("2d", { alpha: false });
      canvas.width = Math.floor(viewport.width * ratio);
      canvas.height = Math.floor(viewport.height * ratio);
      canvas.style.width = `${Math.floor(viewport.width)}px`;
      canvas.style.height = `${Math.floor(viewport.height)}px`;
      context.setTransform(ratio, 0, 0, ratio, 0, 0);

      await page.render({
        canvasContext: context,
        viewport,
      }).promise;

      if (animate) triggerFlip(direction);
      if (pageInput) pageInput.value = String(state.page);
      if (zoomBadge) zoomBadge.textContent = `${Math.round(state.zoomFactor * 100)}%`;

      const activeBook = flipbookFiles.find((item) => item.id === state.activeBookId);
      setStatus(`${activeBook ? activeBook.title : "Tai lieu"} | Trang ${state.page}/${state.totalPages}`);
    } catch (error) {
      console.error(error);
      setStatus("Khong render duoc trang. Thu tai lai tai lieu.");
    } finally {
      state.rendering = false;
      updateControls();
    }
  }

  async function buildOutline(pdf) {
    let outline = [];
    try {
      outline = (await pdf.getOutline()) || [];
    } catch (error) {
      outline = [];
    }

    if (!outline.length) {
      renderOutlineHint("Tai lieu nay chua co muc luc noi bo.");
      return;
    }

    const root = document.createElement("ul");
    await appendOutlineItems(root, outline, pdf);
    if (outlineList) {
      outlineList.innerHTML = "";
      outlineList.appendChild(root);
    }
  }

  async function appendOutlineItems(container, items, pdf) {
    for (const item of items) {
      const li = document.createElement("li");
      const button = document.createElement("button");
      button.type = "button";
      button.textContent = item.title || "Muc luc";
      const pageNum = await resolveDestinationPage(item.dest, pdf);
      if (pageNum) {
        button.addEventListener("click", () => {
          goToPage(pageNum, "next");
          if (outlinePanel) outlinePanel.hidden = true;
        });
      } else {
        button.disabled = true;
        button.style.opacity = "0.5";
      }
      li.appendChild(button);

      if (Array.isArray(item.items) && item.items.length) {
        const child = document.createElement("ul");
        await appendOutlineItems(child, item.items, pdf);
        li.appendChild(child);
      }
      container.appendChild(li);
    }
  }

  async function resolveDestinationPage(dest, pdf) {
    if (!dest) return null;
    try {
      const explicitDest = typeof dest === "string" ? await pdf.getDestination(dest) : dest;
      if (!explicitDest || !explicitDest[0]) return null;
      const pageIndex = await pdf.getPageIndex(explicitDest[0]);
      return pageIndex + 1;
    } catch (error) {
      return null;
    }
  }

  function renderOutlineHint(text) {
    if (!outlineList) return;
    outlineList.innerHTML = `<p class="flipbook-hint">${escapeHtml(text)}</p>`;
  }

  function triggerFlip(direction) {
    if (!sheet) return;
    sheet.classList.remove("is-flip-next", "is-flip-prev");
    void sheet.offsetWidth;
    sheet.classList.add(direction === "prev" ? "is-flip-prev" : "is-flip-next");
  }

  function updateControls() {
    const disabled = !state.pdf || state.rendering;
    if (prevBtn) prevBtn.disabled = disabled || state.page <= 1;
    if (nextBtn) nextBtn.disabled = disabled || state.page >= state.totalPages;
    if (pageInput) pageInput.disabled = disabled;
    if (zoomInBtn) zoomInBtn.disabled = disabled || state.zoomFactor >= ZOOM_MAX;
    if (zoomOutBtn) zoomOutBtn.disabled = disabled || state.zoomFactor <= ZOOM_MIN;
    if (fitBtn) fitBtn.disabled = disabled;
  }

  function setStatus(text) {
    if (statusEl) statusEl.textContent = text;
  }

  async function toggleFullscreen() {
    try {
      if (!document.fullscreenElement) {
        await moduleRoot.requestFullscreen();
      } else {
        await document.exitFullscreen();
      }
    } catch (error) {
      console.error(error);
    }
  }

  function syncFullscreenLabel() {
    if (!fullscreenBtn) return;
    fullscreenBtn.textContent = document.fullscreenElement ? "Exit" : "Full";
  }
}

function clamp(value, min, max) {
  return Math.max(min, Math.min(max, value));
}

function debounce(fn, wait) {
  let timerId = null;
  return (...args) => {
    if (timerId) {
      clearTimeout(timerId);
    }
    timerId = setTimeout(() => fn(...args), wait);
  };
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
  setupFlipbookModule();
  setupYear();
}

init();
