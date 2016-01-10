function checkHTML5Support() {
}

function checkIfMobile() {
}

function embedHtml(htmlFile, config) {
    var l = '<iframe style="width:100%; height: 100%; border: none; overflow: hidden" seamless="seamless" scrolling="no" ';
    l += 'src="' + htmlFile;
    l += "></iframe>";

    return l;
}

function closeFullscreen() {
}

function appendCloseButton() {
}

function embedImg() {
}

function openFullscreen() {
}

$(document).ready(function() {

    $('#crea5-reklama').on('mouseenter', function(e) {
        $(e.target).animate({ width: '100%', height: 700}, 200);
    });
    $('#crea5-reklama').on('mouseleave', function(e) {
        $(e.target).animate({width:config.width, height: config.height}, 200);
    });

});

function embedCreative(config) {
    // TODO: wstaw element div z tłem w kolorze ustawionym w configu, 
    //       a dopiero do niego html5, obrazek

    var div =document.getElementById('crea5-reklama');
    div.innerHTML =' <img src="'+config.imgFile+'">'



    //document.write('<div background-color:'+config.backgroundcolor+'><img src="'+config.imgFile+'"></div>');

}

embedCreative(config);
var ul=document.getElementById('crea5-reklama')
console.log(ul.innerHTML)

