let searchEvent = document.getElementById('search-bar');
let searchBtn = document.getElementById('fetchStart');
const keyForApi = 'AO48IFCXLA3BX1O9'

searchBtn.onclick = function () {
  let searchingKeyWords = searchEvent.value;
  let url = `https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=${searchingKeyWords}&apikey=${keyForApi}`
  fetchApiData(url);
}


async function fetchApiData(apiUrl = "https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=ama&apikey=7U9C9UPR93ZJ0KTP") {
  try {
    const response = await fetch(apiUrl);

    if (!response.ok) {
      throw new Error("Error occurs");
    }
    const data = await response.json();

    const result = await data.bestMatches;

    document.querySelector('.searching-option-li').innerHTML = "";
    searchBarRender(result);

  } catch (error) {
    console.log(error);
  }
}



function searchBarRender(searchValue) {
  console.log(searchValue, " search value")
  searchResultData = searchValue;

  for (const item of searchValue) {
    document.querySelector('.searching-option-li').innerHTML +=
        `
          <li>
              <div>
                  <h3>${item["2. name"]}</h3>
                  <h5>${item["1. symbol"]}</h5>
              </div>
              <h4>
                  ${item["9. matchScore"]}
              </h4>
              <i id="eye" onclick="symboltesting(this.getAttribute('symbol'))" symbol=${item["1. symbol"]} class="fa-solid fa-eye"></i>
          </li>
        `;
  }
}



function symboltesting(e) {
  console.log(e, " symboll")
  let watchListObject=[];
  searchResultData.forEach((item)=> {
    if (item["1. symbol"] == e) {
      watchListObject.push({
        name: item["2. name"],
        symbol: item["1. symbol"],
        region: item["4. region"]
      }
      );
    }
  })
  watchListCardRender(watchListObject);
  typeOfTrade(e);
}



function typeOfTrade(entry) {
  let keyWordOfTrade;
  document.querySelectorAll(".trade-selection").forEach((item) => {
    item.addEventListener('click', (e) => {
      if (e.target.innerHTML === 'Intraday') {
        keyWordOfTrade = "TIME_SERIES_INTRADAY&interval=5min";
      } else if (e.target.innerHTML === 'Daily') {
        keyWordOfTrade = "TIME_SERIES_DAILY_ADJUSTED"
      } else if (e.target.innerHTML === 'Weekly') {
        keyWordOfTrade = "TIME_SERIES_WEEKLY"
      } else if (e.target.innerHTML === 'Monthly') {
        keyWordOfTrade = "TIME_SERIES_MONTHLY"
      }
      let tradeUrl = `https://www.alphavantage.co/query?function=${keyWordOfTrade}&symbol=${entry}&apikey=${keyForApi}`;
      console.log(tradeUrl, " urkllllllllllllllll")
    })
  })
  
}



function watchListCardRender(searchResultData) {  
  for (const item of searchResultData) {
  document.getElementsByClassName('random-data-main-page')[0].innerHTML =
    `
    <div class="stock">
        <i class="fa-sharp fa-solid fa-money-bill-trend-up"></i>
        <span class="stock-name">${item.name} </span>
        <span class="stock-symbol">${item.symbol} </span>
        <span class="stock-price"><span class>Region</span> <span class="region">${item.region}</span></span>
        <button class="trade-remove">Remove From Watchlist</button>
    </div>
  `+document.getElementsByClassName('random-data-main-page')[0].innerHTML
  }
}


function watchListDataContainer() {

}



// graph
function graph() {
  const xValues = [20, 10, 70, 10, 90, 100, 110, 120, 130, 140, 150];
  const yValues = [7, 15, 8, 9, 9, 9, 10, 11, 14, 14, 15];

  new Chart("myChart", {
    type: "line",
    data: {
      labels: xValues,
      datasets: [{
        fill: false,
        lineTension: 0,
        backgroundColor: "rgba(0,0,0,1.0)",
        borderColor: "rgba(0,0,0,0.5)",
        data: yValues
      }]
    },
    options: {
      legend: { display: false },
      scales: {
        yAxes: [{
          ticks: {
            min: 6,
            max: 16
          }
        }]
      }
    }
  });
}

// graph()

