async function apidata() {

    let data = await fetch('https://inshorts-news.vercel.app/entertainment');
    console.log(await data.json())
}

apidata()