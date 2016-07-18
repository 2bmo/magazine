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
let bottomTabContent, bottomLinks;
    bottomTabContent = document.getElementsByClassName("bottomTabContent");
    bottomTabContent[1].style.display = "block";
    function openBottomTab(evt, tabName) {
    for (i = 0; i < bottomTabContent.length; i++) {
        bottomTabContent[i].style.display = "none";
    }
    bottomLinks = document.getElementsByClassName("bottomLink");
    for (i = 0; i < bottomLinks.length; i++) {
        bottomLinks[i].className = bottomLinks[i].className.replace("active", "");
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}
$(document).ready(function(){
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
$.fn.datepicker.language['en'] = {
    days: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    daysShort: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
    daysMin: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
    months: ['January','February','March','April','May','June', 'July','August','September','October','November','December'],
    monthsShort: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    today: 'Today',
    clear: 'Clear',
    dateFormat: 'mm/dd/yyyy',
    timeFormat: 'hh:ii aa',
    firstDay: 0
};
let disabledDays = [5, 6];
$('#calendar').datepicker({
    inline: true,
    language: 'en',
    keyboardNav: false,
    onRenderCell: function (date, cellType) {
        if (cellType == 'day') {
            var day = date.getDay(),
                isDisabled = disabledDays.indexOf(day) != -1;

            return {
                disabled: isDisabled
            }
        }
    }
});
