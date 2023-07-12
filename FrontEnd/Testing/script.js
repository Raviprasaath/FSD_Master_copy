// const url = 'https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=SEA&apikey=AO48IFCXLA3BX1O9';

// async function closingPointfetchData(url) {
//   try {
//     const response = await fetch(url);
//     const data = await response.json();
//     console.log(data)
//     if (data.hasOwnProperty('Time Series (Daily)')) {
//       const timeSeries = data['Time Series (Daily)'];
//       const latestEntry = Object.keys(timeSeries)[0];
//       const latestPrice = timeSeries[latestEntry]['4. close'];

//       console.log('Latest price:', latestPrice);
//     } else {
//       console.log('Time series data not found in the API response.');
//     }
//   } catch (error) {
//     console.log('Error:', error);
//   }
// }

// closingPointfetchData(url);



const fetchQuotesByCategory = async (category) => {
  try {
    const response = await fetch(`https://api.api-ninjas.com/v1/quotes?category=${category}`, {
      method: 'GET',
      headers: {
        'X-Api-Key': 'E8PgODjCuHl37Fg9L1GDIg==j4zCl9yImLIk9l8b',
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error('Error: ' + response.status);
    }

    const result = await response.json();
    console.log(result);
  } catch (error) {
    console.error('Error: ', error);
  }
};

const category = 'business';
fetchQuotesByCategory(category);
