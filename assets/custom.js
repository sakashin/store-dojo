// デスクトップ画面の「垂直」表示フィルターを、最初から全て展開しておく
(() => {
  const initFacets = () => {
    document.querySelector('.facets-vertical')
      ?.querySelectorAll('summary')
      .forEach(summary => {
        summary.setAttribute('aria-expanded', 'true');
        summary.closest('details')?.setAttribute('open', 'true');
      });
  };

  const runIfMobile = () => {
    if (window.innerWidth <= 750) {
      initFacets();
    }
  };

  // ページ読み込み時
  document.addEventListener('DOMContentLoaded', runIfMobile);

  // リサイズ時
  window.addEventListener('resize', runIfMobile);
})();