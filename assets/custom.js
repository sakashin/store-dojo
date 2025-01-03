(() => {
    const initFacets = () => {
        document.querySelector('.facets-vertical')
            ?.querySelectorAll('summary')
            .forEach(summary => {
                summary.setAttribute('aria-expanded', 'true');
                summary.closest('details')?.setAttribute('open', 'true');
            });
    };
    document.addEventListener('DOMContentLoaded', initFacets);
})();