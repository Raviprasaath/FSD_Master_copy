
const allCategoryUrl = "https://content.newtonschool.co/v1/pr/64806cf8b7d605c99eecde47/news";

const cardContainer = document.getElementsByClassName("news-bar")[0];
let alldata=[];
async function getApiData(url) {
  try {
    const response = await fetch(url);
    const data =  await response.json();
    alldata=data;     // this will return object ,but outside it will return promise
    return data;
  } catch (error) {
    console.log("Error is:" + error);
  }
}



function createCards(dataArray) {
  // console.log(dataArray);
  dataArray.map((item) => {
    cardContainer.innerHTML += `<div class="news-item">
        <div class="news-title">
        <p>by ${item[" author"]}</p>
        <p>category ${item[" category"]}</p>
        </div>
        <div class="news-content">
                ${item.content}
                <a href="${item.url}">Read More</a></div>
                <i class="fa-regular fa-heart"></i>
                </div>
                </div>`;
  });
}

async function fetchAndGenerate(url, myFunction) {
  const data = await getApiData(url);
  myFunction(data);
}

fetchAndGenerate(allCategoryUrl, createCards);
// ------------

const categoryselect=document.querySelectorAll(".business");
console.log(categoryselect)

// categoryselect.addEventListener('click', () =>{
//   // console.log(alldata)
//   let filtereddata= alldata.filter((item)=>{
//         // console.log(item[" category"])
//       item[" category"]=="sports";
//       // return 1;
//   })
//  console.log(filtereddata)
// })