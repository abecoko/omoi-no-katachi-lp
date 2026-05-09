// 申込フォームURLが決まったら、この文字列だけ差し替えてください。
const FORM_URL = "https://forms.gle/q43JifaEsiEx31nY8";

const ctaLinks = document.querySelectorAll("[data-cta-link]");

ctaLinks.forEach((link) => {
  if (FORM_URL.trim()) {
    link.href = FORM_URL;
    link.target = "_blank";
    link.rel = "noopener";
  } else {
    link.href = "#apply";
  }
});
