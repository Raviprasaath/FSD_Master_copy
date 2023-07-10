let searchEvent = document.getElementById('search-bar');
let searchBtn = document.getElementById('fetchStart');
const keyForApi = 'AO48IFCXLA3BX1O9'
let tableDataTrigger = false;
let choosingTradeDetails="";

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

    

    document.querySelector('.searching-option-li').innerHTML = "";
    if (!tableDataTrigger) {
      const result = await data.bestMatches;
      searchBarRender(result);
    } else {
      if (data.hasOwnProperty(choosingTradeDetails)) {
        const timeSeries = data[choosingTradeDetails];
        tableDataFill(timeSeries);
      }      
    }

  } catch (error) {
    document.getElementsByClassName('table-data-filling-in-script')[0].innerHTML = "";
  
    console.log(error, " Error is here");
  }
}


let searchResultData = [];

function searchBarRender(searchValue) {
  console.log(searchValue, " search value")
  searchResultData = (searchValue);

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

getWatchListObjectstore = JSON.parse(localStorage.getItem('wishList'));
(getWatchListObjectstore && getWatchListObjectstore.length > 0) && (watchListCardRender(getWatchListObjectstore))

function symboltesting(e) {
  let watchListObject = [];
  searchResultData.forEach((item) => {
    if (item["1. symbol"] == e) {
      const objtopush = {
        name: item["2. name"],
        symbol: item["1. symbol"],
        region: item["4. region"]
      };

      let getWatchListObject = [];
      let getWatchListObjectstore = JSON.parse(localStorage.getItem('wishList'));
      (getWatchListObjectstore && getWatchListObjectstore.length > 0) && (getWatchListObject = getWatchListObjectstore)
      getWatchListObject.push(objtopush);
      localStorage.setItem('wishList', JSON.stringify(getWatchListObject));
      watchListObject = getWatchListObject;
    }
  })

  watchListCardRender(watchListObject);
  watchListDataContainer(e);
}

function watchListCardRender(searchResultData) {
  document.getElementsByClassName('random-data-main-page')[0].innerHTML = "";
  for (const item of searchResultData) {
    document.getElementsByClassName('random-data-main-page')[0].innerHTML =
      `
      <div class="stock">
        <div>
            <i class="fa-sharp fa-solid fa-money-bill-trend-up"></i>
            <span class="stock-name">${item.name} </span>
        </div>
        <div class="stock-region"> 
            <span class="stock-symbol"> ${item.symbol} </span>            
            <span class="region-heading">Region</span>
            <span class="region">${item.region}</span>
            
        </div>
        <span>
            <button class="trade-data remove">Take off</button>
            <button class="trade-data analytics">Data Analytics</button>
        </span>
      </div>
    `
      + document.getElementsByClassName('random-data-main-page')[0].innerHTML
  }
}


// testing
intiallyCallingWatchListDataContainer()
function intiallyCallingWatchListDataContainer() {
  let symbol = "";
  let tradeDataAttachingInDataContainer = document.querySelectorAll('.analytics');
  tradeDataAttachingInDataContainer.forEach((item) => {
    item.addEventListener('click', (e) => {      
      symbol = (e.target.parentElement.parentElement.childNodes[3].innerText.split(" ")[0],'hi');
    });
  });
  console.log(symbol)
  typeOfTrade(symbol);
}



function watchListDataContainer(e) {
  // let tradeDataAttachingInDataContainer = document.querySelectorAll('.analytics');
  // tradeDataAttachingInDataContainer.forEach((item) => {
  //   item.addEventListener('click', () => {
  //     typeOfTrade(e);
  //     console.log(e, 'hi');
  //   });
  // });
  typeOfTrade(e);
}

function typeOfTrade(entry) {
  let keyWordOfTrade;
  document.querySelectorAll(".trade-selection").forEach((item) => {
    item.addEventListener('click', (e) => {
      if (e.target.innerHTML === 'INTRADAY') {
        keyWordOfTrade = "TIME_SERIES_INTRADAY&interval=5min";
        choosingTradeDetails="Time Series (5min)";
      } else if (e.target.innerHTML === 'DAILY') {
        keyWordOfTrade = "TIME_SERIES_DAILY_ADJUSTED"
        choosingTradeDetails="Time Series (Daily)";
      } else if (e.target.innerHTML === 'WEEKLY') {
        keyWordOfTrade = "TIME_SERIES_WEEKLY"
        choosingTradeDetails="Weekly Time Series";
      } else if (e.target.innerHTML === 'MONTHLY') {
        keyWordOfTrade = "TIME_SERIES_MONTHLY"
        choosingTradeDetails="Monthly Time Series";
      }
      let tradeUrl = `https://www.alphavantage.co/query?function=${keyWordOfTrade}&symbol=${entry}&apikey=${keyForApi}`;
      console.log(tradeUrl, " urllllllllllllllll")

      tableDataTrigger = true;
      fetchApiData(tradeUrl);  

    });
  });
}


// Table data filling

function tableDataFill(e) {
  console.log(e)
  tableDataTrigger = false;

  let tableBody = document.getElementsByClassName('table-data-filling-in-script')[0];
  
  tableBody.innerHTML = '';
 
  let count = 0;

  for (let date in e) {
    if (e.hasOwnProperty(date)) {
      var rowData = e[date];
      var row = `
        <tr>
          <td>${date}</td>
          <td>${rowData['1. open']}</td>
          <td>${rowData['2. high']}</td>
          <td>${rowData['3. low']}</td>
          <td>${rowData['4. close']}</td>
        </tr>
      `;
      tableBody.innerHTML += row;
      count++;

      if (count >= 100) {
        break;
      }
    }
  }
}
















// Search Result toggle


// const searchToggle = document.querySelectorAll('body :not(#search-bar)');

// searchToggle.forEach(element => {
//   element.addEventListener('click', () => {
//     document.getElementsByClassName('searching-option-li')[0].style.display = "none";
//   });
// });

// const searchBtn2 = document.getElementById('searchBtn');
// searchBtn2.addEventListener('click', () => {
//   document.getElementsByClassName('searching-option-li')[0].style.display = "block";
// });

// graph
// function graph() {
//   const xValues = [20, 10, 70, 10, 90, 100, 110, 120, 130, 140, 150];
//   const yValues = [7, 15, 8, 9, 9, 9, 10, 11, 14, 14, 15];

//   new Chart("myChart", {
//     type: "line",
//     data: {
//       labels: xValues,
//       datasets: [{
//         fill: false,
//         lineTension: 0,
//         backgroundColor: "rgba(0,0,0,1.0)",
//         borderColor: "rgba(0,0,0,0.5)",
//         data: yValues
//       }]
//     },
//     options: {
//       legend: { display: false },
//       scales: {
//         yAxes: [{
//           ticks: {
//             min: 6,
//             max: 16
//           }
//         }]
//       }
//     }
//   });
// }

// graph()


// my code
// function symboltesting(e) {
//   let watchListObject = [];

//   // console.log(e, " symbol");
//   // console.log(searchResultData);

//   // let storedData = JSON.parse(localStorage.getItem('wishList'));
//   // if (storedData) {
//     // searchResultData = storedData;
//   // }

//   searchResultData.forEach((item) => {
//     if (item["1. symbol"] == e) {
//       watchListObject.push({
//         name: item["2. name"],
//         symbol: item["1. symbol"],
//         region: item["4. region"]
//       }
//       );
//     }
//   })

//   // localStorage.setItem('wishList', JSON.stringify(watchListObject));

//   watchListCardRender(watchListObject);

//   watchListDataContainer(e);
// }

// getWatchListObjectstore = JSON.parse(localStorage.getItem('wishList'));
// (getWatchListObjectstore && getWatchListObjectstore.length > 0) && (watchListCardRender(getWatchListObjectstore))
