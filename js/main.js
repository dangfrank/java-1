// Get articles from GNews
fetch('https://gnews.io/api/v4/top-headlines?&token=feab2f26e7e82022df41e5d51fb87c41&lang=en')
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data);
        let htmls = data.articles.map(function (info){
            return `
            <div class='article col-4 col-mb-12 col-t-6'>
            <div> <img src = '${info.image}'> </div>
            <div class='image-title'>
            <a href = '${info.url}' target='_blank'>
            <b> '${info.title}' </b>
            </a></div>
           
            <div > <p> '${info.description}'</p> </div>
            
            </div>`;
        })
        let html = htmls.join(' ');
        document.getElementById('container').innerHTML = html;
    });
$(document).ready(function(){
    $('#search').click(function(){
        var keyword = $('#keywords').val();
        var searchFrom = $('#search-from').val();
        var searchTo = $('#search-to').val();

        var dateFrom = new Date(searchFrom).toISOString();
        var dateTo = new Date(searchTo).toISOString();
        // dateFrom = dateFrom.substring(0, 19);
        // dateTo = dateTo.substring(0, 19);

        fetch('https://gnews.io/api/v4/search?q='+keyword+'&token=feab2f26e7e82022df41e5d51fb87c41&lang=en')
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);
            let htmls = data.articles.map(function (info){
                return  `<div class='article col-4 col-mb-12 col-t-6'>
                <div> <img src = '${info.image}'> </div>
                <div class='image-title'>
                <a href = '${info.url}' target='_blank'>
                <b> '${info.title}' </b>
                </a>
                </div>
                
                <div> <p> '${info.description}'</p> </div>
               
                </div>`;
            })
            let html = htmls.join(' ');
            document.getElementById('container').innerHTML = html;
        });

        document.getElementById('myModal').style.display = 'none';
        document.getElementsByClassName('modal').style.display = 'none';


    })
})
