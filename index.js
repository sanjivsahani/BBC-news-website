

// get ready for fetch 
const testData = async function requestData() {
    let response = await fetch('https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=d0c699b779ac4b3097a0da9ed8caae13');
    // console.log(response);

    // api responsed


    let parsedData = await response.json();
    let cont = parsedData.articles;
    console.log(cont);
    // api target


    let newsHtml = "";
    for(let i=0;i<cont.length;i++) {
        console.log(i);

        let news = `  </div">
        <img src='${cont[i].urlToImage}'className="card-img-top" alt="..." />
        <div className="card-body ">
        <h5 className="card-text">${cont[i].author}</h5>
            <h5 className="card-title">${cont[i].title}  </h5>
            <p className="card-text">${cont[i].description}</p>

            <button  type="button" class="btn btn-outline-success text-light">
            <a rel="noreferrer" href=${cont[i].url} target="_blank">Read More</a>
            </button>
        </div>`
        newsHtml += news;
    };
    newsAccordion.innerHTML = newsHtml;

} 

testData();

const tData = async function requestData() {
    let response = await fetch('https://newsapi.org/v2/top-headlines?sources=The-times-of-india&apiKey=d0c699b779ac4b3097a0da9ed8caae13');
    // console.log(response);

    // api responsed


    let parsedData = await response.json();
    let cont = parsedData.articles;
    console.log(cont);
    // api target


    let newsHtml = "";
    for(let i=0;i<cont.length;i++) {
        console.log(i);

        let news = `  </div">
        <img src='${cont[i].urlToImage}'className="card-img-top" alt="..." />
        <div className="card-body">
        <h5 className="card-text">${cont[i].author}</h5>
            <h5 className="card-title">${cont[i].title}  </h5>
            <p className="card-text">${cont[i].description}</p>
            <button  type="button" class="btn btn-outline-success text-light">
            <a rel="noreferrer" href=${cont[i].url} target="_blank">Read More</a>
            </button>
        </div>`
        newsHtml += news;
    };
    main.innerHTML = newsHtml;

} 

tData();





//   const data = async fun