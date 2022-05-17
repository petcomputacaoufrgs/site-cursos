window.onscroll = function () { stickyNavbar() };
var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;
const screen_width = screen.width;

function stickyNavbar() {
    if (screen_width > 600) {
        if (window.pageYOffset >= sticky) {
            navbar.classList.add("sticky")
        } else {
            navbar.classList.remove("sticky");
        }
    }
}

function showMenuTab(evt, menuName) {
    var i, tabMenu, buttonMenu;

    tabMenu = document.getElementsByClassName("tab-menu");
    for (i = 0; i < tabMenu.length; i++) {
        tabMenu[i].style.display = "none";
    }

    buttonMenu = document.getElementsByClassName("button-tab-menu");
    for (i = 0; i < buttonMenu.length; i++) {
        buttonMenu[i].className = buttonMenu[i].className.replace(" active", "");
    }

    document.getElementById(menuName).style.display = "flex";

    evt.currentTarget.className += " active";
}

function openTab(evt, tabName) {
    // Declare all variables
    var i, tabcontent, tablinks;

    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the link that opened the tab
    document.getElementById(tabName).style.display = "block";

    evt.currentTarget.className += " active";
}