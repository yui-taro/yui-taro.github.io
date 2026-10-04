"use strict";

// 作品ごとの色（番号と細い罫線にだけ使う）。works.js の theme に名前か色コードを書く
const THEME_COLORS = { kansei: "#b3321f", onegai: "#b7802f", bonsai: "#5b7a49" };

const esc = (s) => String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
const pad = (n) => String(n).padStart(2, "0");
const colorOf = (theme) => (typeof theme === "string" ? THEME_COLORS[theme] || theme : theme?.accent || theme?.bg) || "#111214";

// watch?v= / youtu.be / shorts / embed のどれでも ID を取り出す
function youtubeId(url) {
  if (!url) return "";
  const m = String(url).match(/(?:youtu\.be\/|v=|shorts\/|embed\/)([\w-]{11})/);
  return m ? m[1] : /^[\w-]{11}$/.test(url) ? url : "";
}

function renderFacts(works) {
  const dates = works.map((w) => w.date || "").filter(Boolean).sort();
  document.getElementById("factCount").textContent = pad(works.length);
  document.getElementById("factUpdated").textContent = dates.at(-1) || "";
  document.getElementById("heroYear").textContent = (dates.at(-1) || "").slice(0, 4);
}

function renderIndex(works) {
  document.getElementById("indexList").innerHTML = works.map((w, i) => `
    <li><a class="row" href="#${esc(w.id)}" style="--work:${esc(colorOf(w.theme))}">
      <span class="row-no">${pad(i + 1)}</span>
      <span class="row-main"><span class="row-title">${esc(w.title)}</span><span class="row-catch">${esc(w.catch)}</span></span>
      <span class="row-kind">${esc(w.kicker)}</span>
      <span class="row-year">${esc(w.date)}</span>
      <span class="row-thumb"><img src="${esc(w.thumb)}" alt="" loading="lazy"></span>
    </a></li>`).join("");
}

function renderCase(w, i) {
  const primary = (w.links || []).filter((l) => l.primary);
  const others = (w.links || []).filter((l) => !l.primary);
  return `
  <article class="case" id="${esc(w.id)}" style="--work:${esc(colorOf(w.theme))}">
    <div class="wrap">
      <header class="case-head">
        <span class="case-no">${pad(i + 1)}</span>
        <div class="case-heading">
          <p class="case-kind">${esc(w.kicker)}<span>${esc(w.date)}</span></p>
          <h2 class="case-title">${esc(w.title)}</h2>
          <p class="case-catch">${esc(w.catch)}</p>
        </div>
      </header>

      <div class="screen">
        ${youtubeId(w.youtube) || w.video ? `
        <button class="player" type="button" data-index="${i}" aria-label="${esc(w.title)} の紹介動画を再生">
          <img src="${esc(w.thumb)}" alt="${esc(w.title)} の紹介動画" loading="lazy">
          <span class="play" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M8 5.5v13l10.5-6.5z"/></svg></span>
          <span class="play-label" aria-hidden="true">Play video</span>
        </button>` : `<img class="still" src="${esc(w.thumb)}" alt="${esc(w.title)} のゲーム画面" loading="lazy">`}
      </div>

      <div class="case-body">
        <aside class="spec">
          <dl>
            <div><dt>Category</dt><dd>${esc(w.kicker)}</dd></div>
            <div><dt>Year</dt><dd>${esc(w.date)}</dd></div>
          </dl>
          <div class="links">
            ${primary.map((l) => `<a class="btn" href="${esc(l.url)}" target="_blank" rel="noopener">${esc(l.label)}<span aria-hidden="true">↗</span></a>`).join("")}
            <ul>${others.map((l) => `<li><a href="${esc(l.url)}" target="_blank" rel="noopener">${esc(l.label)}<span aria-hidden="true">↗</span></a></li>`).join("")}</ul>
          </div>
        </aside>

        <div class="text">
          <p class="about">${esc(w.about)}</p>
          ${(w.points || []).length ? `
          <h3 class="text-label">工夫した点</h3>
          <ol class="points">${w.points.map((p, k) => `<li><span>${pad(k + 1)}</span><p>${esc(p)}</p></li>`).join("")}</ol>` : ""}
          ${w.learned || w.next ? `
          <div class="reflect">
            ${w.learned ? `<div><h3 class="text-label">学んだこと</h3><p>${esc(w.learned)}</p></div>` : ""}
            ${w.next ? `<div><h3 class="text-label">次の課題</h3><p>${esc(w.next)}</p></div>` : ""}
          </div>` : ""}
        </div>
      </div>
    </div>
  </article>`;
}

function play(button) {
  const w = window.WORKS[Number(button.dataset.index)];
  const id = youtubeId(w.youtube);
  const box = button.parentElement;
  if (id) {
    box.innerHTML = `<iframe src="https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0&playsinline=1" title="${esc(w.title)} の紹介動画"
      allow="autoplay; encrypted-media; picture-in-picture; fullscreen" allowfullscreen></iframe>`;
  } else if (w.video) {
    box.innerHTML = `<video src="${esc(w.video)}" poster="${esc(w.thumb)}" controls autoplay playsinline></video>`;
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const works = window.WORKS || [];
  renderFacts(works);
  renderIndex(works);
  const cases = document.getElementById("cases");
  cases.innerHTML = works.map(renderCase).join("");
  cases.addEventListener("click", (e) => { const b = e.target.closest(".player"); if (b) play(b); });

  // ヘッダー: 動画の上では白、スクロールしたら紙色に
  const header = document.getElementById("header");
  const hero = document.querySelector(".hero");
  const onScroll = () => header.classList.toggle("solid", window.scrollY > hero.offsetHeight - 80);
  onScroll(); window.addEventListener("scroll", onScroll, { passive: true });

  // 動きを減らす設定のときは背景動画を止める
  if (matchMedia("(prefers-reduced-motion: reduce)").matches) document.querySelector(".hero-video")?.pause();
});
