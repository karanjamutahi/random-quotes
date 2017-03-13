$.ajaxSetup({
    cache:false
});

$(document).ready(function(){

    $('#getQuote').on('click', function(){
    $.getJSON("https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1&callback=",function(quoter){
        var quoteActual = quoter[0].content;
        var tweetQuote = quoteActual.replace(/^([a-z]|[A-Z]|[0-9]|\s)|<p>|<\/p>/g,"");
        var tweetQuoteEdit = tweetQuote.replace(/\s/g,"+");
        var quoteAuthor = quoter[0].title;
    $('#quote-text').html(quoter[0].content); $('#author').html(quoter[0].title);
     var pathname = window.location;
     var tweeturl = "https://twiter.com/share?url="+encodeURI(pathname)+"&text="+tweetQuoteEdit;
    $('#tweetLink').attr("href", tweeturl);
    console.log(tweetQuoteEdit);
    console.log(pathname);
    console.log(tweeturl);
     });
    });
});