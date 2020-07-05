const search = document.getElementById("search");
const matchList = document.getElementById("match-list");

// Show results in HTML
function templateHTML(matches) {
  let html;
  if (matches.length > 0) {
    html = matches
      .map(
        (match) => `
        <div class="card card-body mb-1">
            <h4>${match.name} (${match.abbr}) <span className="text-primary">${match.capital}</span></h4>
            <small>Lat: ${match.lat} / Long: ${match.long}</small>
        </div>`
      )
      .join("");
  } else {
    html = `
    <div class="card card-body mb-1">
        <h4>No match :(</h4>
    </div>`;
  }

  matchList.innerHTML = html;
}

// Search states.json and filter it
async function searchStates(searchText) {
  const res = await fetch("./assets/js/states.json");
  const states = await res.json();

  // Get matches to current text input
  let matches = states.filter((state) => {
    const regex = new RegExp(`^${searchText}`, "gi");
    return state.name.match(regex) || state.abbr.match(regex);
  });

  if (searchText.length === 0) {
    matches = [];
  }

  templateHTML(matches);
}

search.addEventListener("input", () => searchStates(search.value));
