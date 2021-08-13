/* jshint unused:false , strict:global , esversion: 10, evil:true*/
"use strict"; 

$(document).ready(()=>{

/** Filenames for photos */
let photoNames = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "11",
    "12",
    "13",
    "14",
    "21",
    "22",
    "23",
    "24",
    "25",
    "31",
    "32",
    "33",
    "34",
    "35",
    "41",
    "42",
    "43",
    "44",
    "45",
    "46",
    "47",
];

/** The innerText of #showcase */
var showCaseContent = '';

// For every photo name, make a a-img fancybox component
(() =>{
    photoNames.forEach(name => {
        let imgSrc = `photos/${name}.jpeg`;
        let photoElement = `<a data-fancybox="gallery" href="${imgSrc}"><img src="${imgSrc}" loading="lazy"></a>`;
        showCaseContent += photoElement;
    });
})();       //self executing function
// Populate content /
$("#showcase").html(showCaseContent);


//code for fancybox
$('[data-fancybox="gallery"]').fancybox({
    buttons: [
    //"zoom",
    //"share",
    "slideShow",
    //"fullScreen",
    //"download",
    //"thumbs",
    "close"
]
});


});