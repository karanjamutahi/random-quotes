$.ajaxSetup({
    cache:false
});

$(document).ready(function(){

    $('#getQuote').on('click', function(){
    $.getJSON("http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1&callback=",function(quoter){
    $('#quote-text').html(quoter[0].content); $('#author').html(quoter[0].title);
    });
    });
});