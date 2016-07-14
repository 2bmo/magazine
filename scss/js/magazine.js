let i, tabcontent, tablinks;
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
function fbToggle() {
    let toggle = document.getElementById("fb-toggle"),
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
        let toggle = document.getElementById("tw-toggle"),
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
$(document).ready(function(){
    fbToggle();
    twToggle();
    $('.story').slick({
       dots: true,
       focusOnSelect: true,
       speed: 500,
       infinite: true,
       slidesToShow: 1,
       slidesToScroll: 1,
       draggable: false,
       respondTo: window
    });
    rmText();
});
function rmText() {
    let dots = $(".slick-dots button"),
        arrows = $(".slick-arrow");
    for (i = 0; i<dots.length; i++) {
        dots[i].innerHTML = "";
    }
    for (i = 0; i<arrows.length; i++) {
        arrows[i].innerHTML = "";
    }
}
