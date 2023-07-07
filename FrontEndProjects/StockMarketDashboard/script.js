// async function apidata() {
//     let data = await fetch('https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=AM&apikey=7U9C9UPR93ZJ0KTP');
//     console.log(await data.json())
// }
// apidata()

// async function searchResult() {
//     let data = await fetch('https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=micro&apikey=7U9C9UPR93ZJ0KTP');
//     console.log(await data.json())
// }

// searchResult()

// const apiKey = '7U9C9UPR93ZJ0KTP';
// const url = `https://www.alphavantage.co/query?&apikey=${apiKey}`;



function searchHandler(event) {
    console.log(event.target.value)
}

//  `${url}&function=${functionPara}&symbol=${companySymbol}${intradayTime}`

let url = "https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=tesco&apikey=7U9C9UPR93ZJ0KTP";

async function fetchApiData(apiUrl) {
    const response = await fetch(apiUrl);
    const data = await response.json();
    console.log(data);
} 

fetchApiData(url)





// graph

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

