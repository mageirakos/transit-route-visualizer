var newsDiv = document.getElementById("news-div");

// console.log(newsDiv)

fetch("http://localhost:3000/api/news")
    .then(response => response.json())
    .then((jsonData) => {
        // jsonData is parsed json object received from url
        // console.log(jsonData)
        renderNews(jsonData)
    })
    .catch((error) => {
        // handle your errors here
        console.error(error)
    })



function renderNews(jsonData) {
    for (article in jsonData) {
        const title = jsonData[article].title
        const body = jsonData[article].body
        let date = new Date (jsonData[article].dateAuthored)        
        date = date.getDate() + "-" + (date.getMonth() + 1) + "-" + date.getFullYear() +" " +date.getHours() +":"+ date.getMinutes();
        

        
        var first_Div = document.createElement("div");
        var second_Div = document.createElement("div");
        var title_h5 = document.createElement("h5")
        var body_p = document.createElement("p")
        var date_h6 = document.createElement("h6")

        first_Div.className = 'col-md-4'
        first_Div.cssFloat = 'left'
        second_Div.className = 'card  text-white mb-3'
        third_Div = document.createElement("div");
        third_Div.className = 'card-body'
        title_h5.className = 'card-title'
        date_h6.className = 'card-subtitle mb-2 card-light'
        body_p.className = 'card-text card-light'

        title_h5.innerHTML = title
        date_h6.innerHTML = date
        body_p.innerHTML = body

        first_Div.appendChild(second_Div)
        second_Div.appendChild(third_Div)
        third_Div.appendChild(title_h5)
        third_Div.appendChild(date_h6)
        third_Div.appendChild(body_p)
        newsDiv.appendChild(first_Div)
    }
}