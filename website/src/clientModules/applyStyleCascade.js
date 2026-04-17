/**
 * clientModule: ページ遷移のたびにカスケードCSSを動的に適用する
 * baseUrl /ConiferFruits/ から _map.json をフェッチしてルートとCSSを対応付ける
 */

let mapPromise = null;
let lastInjected = null;

// _map.json をフェッチして解決マップを返す
async function getMap() {
  if (!mapPromise) {
    const baseUrl = document.querySelector('meta[name="docusaurus-base-url"]')?.content
      || window.__DOCUSAURUS_BASE_URL__
      || '/ConiferFruits/';
    mapPromise = fetch(baseUrl + 'styles-cascade/_map.json')
      .then(r => r.json())
      .catch(() => ({}));
  }
  return mapPromise;
}

// 現在のパスに対応するCSSを<head>に注入・差し替えする
async function applyForRoute(pathname) {
  const map = await getMap();
  if (!map) return;

  // 完全一致 → 末尾スラッシュ除去 → 末尾スラッシュ付与 の順で検索する
  let url = map[pathname]
    || map[pathname.replace(/\/$/, '')]
    || map[pathname + '/'];

  // URLデコードで再試行する
  if (!url) {
    try {
      const decoded = decodeURI(pathname);
      url = map[decoded] || map[decoded.replace(/\/$/, '')];
    } catch (_) {}
  }

  // 前回注入したCSSが今回と異なる場合は削除する
  if (lastInjected && lastInjected.url !== url) {
    lastInjected.el.remove();
    lastInjected = null;
  }

  // 新しいCSSを注入する
  if (url && (!lastInjected || lastInjected.url !== url)) {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = url;
    link.dataset.styleCascade = '1';
    document.head.appendChild(link);
    lastInjected = { url, el: link };
  }
}

if (typeof window !== 'undefined') {
  // 初回ロード時に適用する
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => applyForRoute(window.location.pathname));
  } else {
    applyForRoute(window.location.pathname);
  }

  // SPA遷移（pushState / replaceState / popstate）をすべて捕捉する
  const origPush = history.pushState;
  history.pushState = function (...args) {
    const r = origPush.apply(this, args);
    setTimeout(() => applyForRoute(window.location.pathname), 0);
    return r;
  };
  const origReplace = history.replaceState;
  history.replaceState = function (...args) {
    const r = origReplace.apply(this, args);
    setTimeout(() => applyForRoute(window.location.pathname), 0);
    return r;
  };
  window.addEventListener('popstate', () => {
    setTimeout(() => applyForRoute(window.location.pathname), 0);
  });
}
