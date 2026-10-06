const PORTFOLIO_DATA = {
  bio: {
    name: "Bello Tolulope Oluwafirepemi",
    description:
      "A Lagos-based content creator, filmmaker, and brand storyteller known for producing engaging, high-impact digital content. She specializes in translating ideas into compelling visual stories that connect with audiences and drive meaningful engagement.",
    extended_bio: `
        <p>As a filmmaker and on-screen talent, she has featured in a number of film productions, bringing characters to life with a natural and expressive performance style.</p>
        <p>In addition to her work in film and content, Tolulope is the founder of a growing gift and experience brand, where she curates thoughtful, personalized moments.</p>
    `,
    email: "bellotolu99@gmail.com",
    whatsapp: "+234 906 934 7061",
    cv_url: "images/Bello_Tolulope_Oluwafirepemi_Social_Media_Scheduler_CV.pdf",
    avatar: "T",
    image_url: "images/bio.jpeg",
  },
  projects: [
    {
      type: "instagram",
      instagram_id: "DUk58blDMII",
      title: "Creative Reel: Storytelling",
      description:
        "A high-impact visual narrative focused on brand storytelling and emotional resonance.",
      tags: ["Reel", "Creative"],
      details_url: "#",
      size: "featured",
    },
    {
      type: "instagram",
      instagram_id: "DWYf3dIDKWa",
      title: "Social Impact Strategy",
      description: "Strategic content execution that leverages trending audio.",
      tags: ["Strategy", "Reel"],
      details_url: "#",
      size: "standard",
    },

    //  videos3

    {
      type: "editing",
      editing_url: "images/IMG_8542.MOV",
      title: "Creative Reel: Lifestyle & Storytelling",
      description:
        "A native-style TikTok production focusing on high-retention editing and visual hooks.",
      tags: ["Editing"],
      details_url: "#",
      size: "standard",
    },
  ],
  tools: [
    {
      name: "Canva",
      category: "Design",
      logo_url: "https://www.vectorlogo.zone/logos/canva/canva-icon.svg",
    },
    {
      name: "CapCut",
      category: "Video",
      logo_url: "images/logos/capcut.jpeg",
    },
    // {
    //   name: "Adobe Premiere",
    //   category: "Video",
    //   logo_url:
    //     "https://www.vectorlogo.zone/logos/adobe_premiere_pro/adobe_premiere_pro-icon.svg",
    // },
    {
      name: "Meta Business",
      category: "Management",
      logo_url:
        "https://www.vectorlogo.zone/logos/facebook/facebook-official.svg",
    },
    {
      name: "ChatGPT",
      category: "AI Copy",
      logo_url: "images/logos/chatgpt.png",
    },
    {
      name: "Notion",
      category: "Planning",
      logo_url: "images/logos/notion.png",
    },
    // {
    //   name: "Buffer",
    //   category: "Scheduling",
    //   logo_url: "https://www.vectorlogo.zone/logos/buffer/buffer-icon.svg",
    // },
    // {
    //   name: "Lightroom",
    //   category: "Photo",
    //   logo_url:
    //     "https://www.vectorlogo.zone/logos/adobe_lightroom/adobe_lightroom-icon.svg",
    // },
    {
      name: "InShot",
      category: "Video Editor",
      logo_url: "images/logos/inshot.jpeg",
    },
  ],
  socials: [
    {
      name: "Instagram",
      url: "https://www.instagram.com/oluwafirepemi_tolulope",
    },
    { name: "TikTok", url: "https://www.tiktok.com/@oluwafirepemi_tolulope" },
    // { name: "LinkedIn", url: "#" },
    // { name: "YouTube", url: "#" },
  ],
};

function initTheme() {
  const savedTheme = localStorage.getItem("theme") || "light";
  document.documentElement.setAttribute("data-theme", savedTheme);
}

function toggleTheme() {
  const current = document.documentElement.getAttribute("data-theme");
  const next = current === "dark" ? "light" : "dark";
  document.documentElement.setAttribute("data-theme", next);
  localStorage.setItem("theme", next);
}

function toggleContactModal() {
  const modal = document.getElementById("contact-modal");
  const { bio } = PORTFOLIO_DATA;
  if (!modal) return;

  if (modal.classList.contains("hidden")) {
    document.getElementById("display-email").textContent = bio.email;
    document.getElementById("modal-email").href = `mailto:${bio.email}`;
    document.getElementById("display-whatsapp").textContent = bio.whatsapp;
    const waNumber = bio.whatsapp.replace(/\D/g, "");
    document.getElementById("modal-whatsapp").href =
      `https://wa.me/${waNumber}`;
    modal.classList.remove("hidden");
    modal.classList.add("flex");
    setTimeout(() => modal.classList.add("active"), 10);
    document.body.style.overflow = "hidden";
  } else {
    modal.classList.remove("active");
    setTimeout(() => {
      modal.classList.remove("flex");
      modal.classList.add("hidden");
      document.body.style.overflow = "";
    }, 300);
  }
}

function downloadCV() {
  const cvUrl = PORTFOLIO_DATA.bio.cv_url;
  if (!cvUrl) return;

  const link = document.createElement("a");
  link.href = cvUrl;
  link.target = "_blank";
  link.rel = "noopener noreferrer";
  link.download = cvUrl.split("/").pop() || "BelloTolulopeOluwafirepemi-Cv.pdf";
  document.body.appendChild(link);
  link.click();
  link.remove();
}

function renderBio() {
  const bioContent = document.getElementById("bio-content");
  const bioAvatar = document.getElementById("bio-avatar");
  const footerName = document.getElementById("footer-name");
  const { bio } = PORTFOLIO_DATA;

  bioContent.innerHTML = `
      <span class="inline-block px-4 py-1 rounded-full bg-accent/10 text-accent font-bold text-sm mb-6 uppercase tracking-widest">Available for Hire</span>
      <h2 class="text-4xl sm:text-5xl lg:text-7xl font-extrabold mb-6 sm:mb-8 leading-tight">
          Crafting <span class="text-primary">Visual</span> <br>Stories.
      </h2>
      <p class="text-lg sm:text-xl lg:text-2xl leading-relaxed opacity-80 mb-6 max-w-2xl mx-auto lg:mx-0">
          Hi, I'm <span class="font-bold text-primary">${bio.name}</span>. ${bio.description}
      </p>
      <div class="text-lg sm:text-xl lg:text-2xl leading-relaxed opacity-80 mb-6 max-w-2xl mx-auto lg:mx-0">
          ${bio.extended_bio}
      </div>
      <div class="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center lg:justify-start">
          <button type="button" onclick="downloadCV()" class="bg-primary text-white px-8 sm:px-10 py-3 sm:py-4 rounded-2xl font-bold shadow-lg shadow-primary/30 text-base sm:text-lg text-center whitespace-nowrap">
              Download CV
          </button>
          <button onclick="toggleContactModal()" class="bg-card text-primary px-8 sm:px-10 py-3 sm:py-4 rounded-2xl font-bold border-2 border-primary hover:bg-primary/5 transition-all text-base sm:text-lg text-center shadow-sm whitespace-nowrap">
              Get In Touch
          </button>
      </div>
  `;

  bioAvatar.innerHTML = `
        <div class="absolute -inset-2 bg-gradient-to-tr from-primary to-accent rounded-[3rem] blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-1000"></div>
        <div class="relative w-full h-full bg-card rounded-[2.5rem] md:rounded-[3.5rem] overflow-hidden border-4 md:border-[12px] border-background shadow-xl">
            ${bio.image_url ? `<img src="${bio.image_url}" alt="${bio.name}" class="w-full h-full object-cover">` : `<div class="w-full h-full bg-primary flex items-center justify-center text-white text-6xl sm:text-8xl font-black">${bio.avatar}</div>`}
        </div>
    `;
  footerName.textContent = bio.name;
}

function renderPortfolio() {
  const portfolioGrid = document.getElementById("portfolio-grid");
  const { projects } = PORTFOLIO_DATA;
  portfolioGrid.innerHTML = projects
    .map((item) => {
      let spanClass = "";
      if (item.type === "instagram" || item.type === "tiktok") {
        spanClass = "md:row-span-3";
      } else if (item.size === "wide") {
        spanClass = "md:col-span-2 md:row-span-2";
      } else if (item.size === "featured") {
        spanClass = "md:col-span-2 md:row-span-3";
      } else {
        spanClass = "md:row-span-2";
      }
      return `
            <div class="group bg-card rounded-3xl overflow-hidden shadow-sm border border-accent/5 hover:border-primary/30 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/5 fade-in flex flex-col h-full ${spanClass}">
                <div class="relative overflow-hidden bg-gray-100 flex-1">
                    ${
                      item.type === "youtube"
                        ? `<iframe class="absolute inset-0 w-full h-full" src="https://www.youtube.com/embed/${item.youtube_id}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen loading="lazy"></iframe>`
                        : item.type === "instagram"
                          ? `<iframe class="absolute inset-0 w-full h-full" src="https://www.instagram.com/p/${item.instagram_id}/embed" frameborder="0" scrolling="no" allowtransparency="true" loading="lazy"></iframe>`
                          : item.type === "tiktok"
                            ? `<iframe class="absolute inset-0 w-full h-full" src="https://www.tiktok.com/embed/v2/${item.tiktok_url.split("/").pop()}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen loading="lazy"></iframe>`
                            : item.type === "editing"
                              ? `<video class="absolute inset-0 w-full h-full object-cover block" src="${item.editing_url}" type="video/quicktime" controls playsinline muted loop preload="metadata" poster="images/bio.jpeg" style="display:block;width:100%;height:100%;object-fit:cover;"><source src="${item.editing_url}" type="video/quicktime" /></video>`
                              : `<img src="${item.image_url}" alt="${item.title}" class="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" loading="lazy">`
                    }
                    <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-6 pointer-events-none">
                        <span class="text-white font-bold text-lg translate-y-4 group-hover:translate-y-0 transition-transform">View Details</span>
                    </div>
                </div>
                <div class="p-5 bg-card/50 backdrop-blur-sm">
                    <div class="flex justify-between items-center mb-1">
                        <h3 class="text-lg font-extrabold tracking-tight group-hover:text-primary transition-colors line-clamp-1">${item.title}</h3>
                        <a href="${item.details_url}" class="text-primary hover:scale-110 transition-transform">
                            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
                        </a>
                    </div>
                    <div class="flex flex-wrap gap-2">
                        ${(item.tags || []).map((tag) => `<span class="text-[9px] font-bold px-2 py-0.5 rounded-md bg-primary/10 text-primary tracking-wide uppercase">${tag}</span>`).join("")}
                    </div>
                </div>
            </div>
        `;
    })
    .join("");
}

function renderTools() {
  const toolsGrid = document.getElementById("tools-grid");
  const { tools } = PORTFOLIO_DATA;
  toolsGrid.innerHTML = tools
    .map(
      (tool) => `
        <div class="bg-card p-6 rounded-2xl border border-accent/10 hover:border-primary/40 transition-all group flex items-center gap-4 fade-in">
            <div class="w-12 h-12 rounded-xl bg-white/5 p-2 flex items-center justify-center group-hover:scale-110 transition-transform">
                <img src="${tool.logo_url}" alt="${tool.name} logo" class="w-full h-full object-contain" loading="lazy">
            </div>
            <div>
                <h4 class="font-bold text-lg">${tool.name}</h4>
                <p class="text-sm opacity-50 uppercase tracking-wider">${tool.category}</p>
            </div>
        </div>
    `,
    )
    .join("");
}

function renderSocials() {
  const socialsContainer = document.getElementById("socials-container");
  const { socials } = PORTFOLIO_DATA;
  socialsContainer.innerHTML = socials
    .map(
      (social) =>
        `<a href="${social.url}" class="hover:text-primary transition-all" target="_blank" rel="noopener noreferrer">${social.name}</a>`,
    )
    .join("");
}

document.addEventListener("DOMContentLoaded", () => {
  initTheme();
  const closeBtn = document.getElementById("close-modal-btn");
  if (closeBtn) closeBtn.onclick = toggleContactModal;
  window.onclick = (e) => {
    const modal = document.getElementById("contact-modal");
    if (e.target === modal) toggleContactModal();
  };
  setTimeout(() => {
    renderBio();
    renderPortfolio();
    renderTools();
    renderSocials();
  }, 1000);
});
