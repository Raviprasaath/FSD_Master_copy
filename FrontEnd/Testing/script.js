const url = 'https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&interval=5min&symbol=NE&apikey=AO48IFCXLA3BX1O9';

async function fetchData() {
  try {
    const response = await fetch(url);
    const data = await response.json();

    if (data.hasOwnProperty('Time Series (5min)')) {
      const timeSeries = data['Time Series (5min)'];
      console.log(timeSeries)
      const latestEntry = Object.keys(timeSeries)[0];
      const latestPrice = timeSeries[latestEntry]['4. close'];

      console.log('Latest price:', latestPrice);
    } else {
      console.log('Time series data not found in the API response.');
    }
  } catch (error) {
    console.log('Error:', error);
  }
}

fetchData();
