
const url = "https://fakestoreapi.com/products";
const resultsContainer = document.querySelector(".results");

async function getApi() {

  const response = await fetch(url);

  const facts = await response.json();

  resultsContainer.innerHTML = "";


  for (let i = 0; i < facts.length; i++) {
    console.log(facts[i].title);

    

    if (i === 12) {
        break;
    }

    

    resultsContainer.innerHTML +=`<div class="result">
    <h4>${facts[i].title}</h4>
    <p>Price: <b>${facts[i].price}</b></p>
    <button>Button</button>
    </div>`;
}
}

getApi();