export function saveFavoriteShowsToStorage(shows) {
  localStorage.setItem("Favorite", JSON.stringify(shows));
}

export function getFavoriteShowsFromStorage() {
  return JSON.parse(localStorage.getItem("Favorite"));
}

export function saveQueryToStorage(query) {
  localStorage.setItem("Query", JSON.stringify(query));
}

export function getQueryFromStorage() {
  return JSON.parse(localStorage.getItem("Query"));
}

export function setEventHandlersToLocaleStorage(store) {
  window.addEventListener("unload", function() {
    saveFavoriteShowsToStorage(store.state.favoriteShows);
    saveQueryToStorage(store.state.query);
  });
}
