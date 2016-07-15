"use strict";

var i = void 0,
    tabcontent = void 0,
    tablinks = void 0;
tabcontent = document.getElementsByClassName("tabcontent");
tabcontent[2].style.display = "block";
function openTab(evt, tabName) {
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace("active", "");
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}
var bottomTabContent = void 0,
    bottomLink = void 0;
bottomTabContent = document.getElementsByClassName("bottomTabContent");
bottomTabContent[1].style.display = "block";
function openBottomTab(evt, tabName) {
    for (i = 0; i < bottomTabContent.length; i++) {
        bottomTabContent[i].style.display = "none";
    }
    bottomLink = document.getElementsByClassName("tablinks");
    for (i = 0; i < bottomLink.length; i++) {
        bottomLink[i].className = bottomLink[i].className.replace("active", "");
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}
$(document).ready(function () {
    fbToggle();
    twToggle();
    $('.story').slick({
        dots: true,
        speed: 500,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        draggable: false
    });
    $('.hot-sliders').slick({
        dots: true,
        speed: 500,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        draggable: false,
        appendDots: $(".hot")
    });
    rmText();
});
function fbToggle() {
    var toggle = document.getElementById("fb-toggle"),
        text = document.getElementById("fb-text"),
        logo = document.getElementById("fb-logo");
    toggle.onclick = function () {
        if (text.innerHTML == "Follow") {
            text.innerHTML = 'Following';
            logo.classList.remove("sign");
            logo.classList.add("fb-signed");
        } else {
            text.innerHTML = 'Follow';
            logo.classList.remove("fb-signed");
            logo.classList.add("sign");
        }
    };
}
function twToggle() {
    var toggle = document.getElementById("tw-toggle"),
        text = document.getElementById("tw-text"),
        logo = document.getElementById("tw-logo");
    toggle.onclick = function () {
        if (text.innerHTML == "Follow") {
            text.innerHTML = 'Following';
            logo.classList.remove("sign");
            logo.classList.add("tw-signed");
        } else {
            text.innerHTML = 'Follow';
            logo.classList.remove("tw-signed");
            logo.classList.add("sign");
        }
    };
}
function rmText() {
    var dots = $(".slick-dots button"),
        arrows = $(".slick-arrow");
    for (i = 0; i < dots.length; i++) {
        dots[i].innerHTML = "";
    }
    for (i = 0; i < arrows.length; i++) {
        arrows[i].innerHTML = "";
    }
}