import { CALCULATORS } from './config.js';

document.addEventListener('DOMContentLoaded', () => {
  initSearch();
  initPopularGrid();
});

function initSearch() {
  const input = document.getElementById('searchInput');
  const results = document.getElementById('searchResults');
  if (!input || !results) return;

  input.addEventListener('input', (e) => {
    const val = e.target.value.toLowerCase().trim();
    if (val.length < 1) {
      results.style.display = 'none';
      return;
    }

    const matches = CALCULATORS.filter(c => 
      c.title.toLowerCase().includes(val) || 
      c.keywords.some(k => k.toLowerCase().includes(val))
    );

    if (matches.length > 0) {
      results.innerHTML = matches.map(c => `
        <a href="/${c.slug}" class="search-item">
          <strong>${c.title}</strong>
          <div style="font-size: 0.75rem; color: var(--text-muted);">${c.description}</div>
        </a>
      `).join('');
      results.style.display = 'block';
    } else {
      results.innerHTML = `<div class="search-item" style="color:var(--text-muted);">No calculators found</div>`;
      results.style.display = 'block';
    }
  });

  document.addEventListener('click', (e) => {
    if (!input.contains(e.target) && !results.contains(e.target)) {
      results.style.display = 'none';
    }
  });
}

function initPopularGrid() {
  const container = document.getElementById('popularGrid');
  if (!container) return;

  const popular = CALCULATORS.filter(c => c.popular);
  container.innerHTML = popular.map(c => `
    <a href="/${c.slug}" class="card">
      <h3>${c.title}</h3>
      <p>${c.description}</p>
    </a>
  `).join('');
}
