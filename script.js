(() => {
  const state = {
    query: '',
    location: 'all',
    price: 'all',
    bedrooms: 'all',
  };

  const form = document.getElementById('search-form');
  const searchInput = document.getElementById('search-input');
  const chips = document.querySelectorAll('.chip');
  const listings = Array.from(document.querySelectorAll('.listing'));
  const resultCount = document.getElementById('result-count');
  const emptyState = document.getElementById('empty-state');
  const resetButton = document.getElementById('reset-filters');

  const priceRules = {
    all: () => true,
    under: (price) => price < 1500000,
    mid: (price) => price >= 1500000 && price <= 3000000,
    over: (price) => price > 3000000,
  };

  function matchesBedrooms(bedrooms, selected) {
    if (selected === 'all') return true;
    if (selected === '4') return bedrooms >= 4;
    return bedrooms === Number(selected);
  }

  function matchesQuery(listing) {
    const text = listing.textContent.toLowerCase();
    return state.query
      .split(/\s+/)
      .filter(Boolean)
      .every((term) => text.includes(term));
  }

  function matchesFilters(listing) {
    const { location, price, bedrooms } = listing.dataset;
    return (
      matchesQuery(listing) &&
      (state.location === 'all' || state.location === location) &&
      priceRules[state.price](Number(price)) &&
      matchesBedrooms(Number(bedrooms), state.bedrooms)
    );
  }

  function render() {
    let visible = 0;

    listings.forEach((listing) => {
      const show = matchesFilters(listing);
      listing.hidden = !show;
      if (show) visible += 1;
    });

    resultCount.textContent =
      visible === 1 ? '1 property found' : `${visible} properties found`;
    emptyState.hidden = visible !== 0;
  }

  function selectChip(filter, value) {
    state[filter] = value;

    chips.forEach((chip) => {
      if (chip.dataset.filter === filter) {
        chip.setAttribute('aria-pressed', String(chip.dataset.value === value));
      }
    });
  }

  function updateQuery() {
    state.query = searchInput.value.trim().toLowerCase();
    render();
  }

  function resetAll() {
    searchInput.value = '';
    state.query = '';
    ['location', 'price', 'bedrooms'].forEach((filter) => selectChip(filter, 'all'));
    render();
    searchInput.focus();
  }

  chips.forEach((chip) => {
    chip.addEventListener('click', () => {
      selectChip(chip.dataset.filter, chip.dataset.value);
      render();
    });
  });

  searchInput.addEventListener('input', updateQuery);

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    updateQuery();
  });

  resetButton.addEventListener('click', resetAll);

  render();
})();
