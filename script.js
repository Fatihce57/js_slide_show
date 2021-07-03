var i = 0
var images = ["http://lorempixel.com/400/200/", "http://lorempixel.com/g/400/200", "http://lorempixel.com/400/200/sports", "http://lorempixel.com/400/200/sports/Dummy-Text", "http://lorempixel.com/400/200/sports/1/Dummy-Text"
];

var duration = 1500;

function slideImg() {
    document.slide.src = images[i];

    if (i < images.length - 1) {
        i++;
    } else {
        i = 0;
    };
    setTimeout("slideImg()", duration);
};

window.onload = slideImg;