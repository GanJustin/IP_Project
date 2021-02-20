document.getElementById("quiz_page").addEventListener("click", function() {
  alert("Hello World!");
});

function correct() {
    location.replace("https://www.w3schools.com")/*'quiz_q1_correct.html'*/;
}
const settings = {
	"async": true,
	"crossDomain": true,
    "url": "https://coronavirus-smartable.p.rapidapi.com/news/v1/SG/",
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "f0c50aa126mshfd23d1bc90551a2p175934jsnf725e24c401f",
		"x-rapidapi-host": "coronavirus-smartable.p.rapidapi.com"
	}
};

$.ajax(settings).done(function (response) {
    console.log(response);
    /*article zero*/
    var zeroTitle = response.news[0].title
    $(".covid-zero-title").text(`${zeroTitle}`);
    
    /*if code*/
    if (response.news[0].images !== null){
        var zeroPic = response.news[0].images[0].url
        $(".covid-zero-img").attr("src",zeroPic);
    
    }
    var zeroUrl = response.news[0].webUrl
    /*console.log(zeroUrl)*/
    $(".covid-zero-title").attr("href",zeroUrl);

    /*article one*/
    var oneTitle = response.news[1].title
    $(".covid-one-title").text(`${oneTitle}`);
    
    if (response.news[1].images !== null){
        var onePic = response.news[1].images[0].url
        $(".covid-one-img").attr("src",onePic);
            /*make covid picture height all same*/

    }
    var oneUrl = response.news[1].webUrl
    $(".covid-one-title").attr("href",oneUrl);

    /*article two*/
    var twoTitle = response.news[2].title
    $(".covid-two-title").text(`${twoTitle}`);

    if (response.news[2].images !== null){
        var twoPic = response.news[2].images[0].url
        $(".covid-two-img").attr("src",twoPic);
    }
    var twoUrl = response.news[2].webUrl
    $(".covid-two-title").attr("href",twoUrl);

    /*article three*/
    var threeTitle = response.news[3].title
    $(".covid-three-title").text(`${threeTitle}`);
    
    if (response.news[3].images !== null){
        var threePic = response.news[3].images[0].url
        $(".covid-three-img").attr("src",threePic);
    }
    var threeUrl = response.news[3].webUrl
    $(".covid-three-title").attr("href",threeUrl);

    /*article four*/
    var fourTitle = response.news[4].title
    $(".covid-four-title").text(`${fourTitle}`);
    
    if (response.news[4].images !== null){
        var fourPic = response.news[4].images[0].url
        $(".covid-four-img").attr("src",fourPic);
    }
    var fourUrl = response.news[4].webUrl
    $(".covid-four-title").attr("href",fourUrl);

    /*article five*/
    var fiveTitle = response.news[5].title
    $(".covid-five-title").text(`${fiveTitle}`);
    if (response.news[5].images !== null){
        var fivePic = response.news[5].images[0].url
        $(".covid-five-img").attr("src",fivePic);
    }
    var fiveUrl = response.news[5].webUrl
    $(".covid-five-title").attr("href",fiveUrl);
    /*console.log(response);*/

});