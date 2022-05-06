
let menuBtn = document.querySelector('.menu-btn');
let sideDrawer = document.getElementById('side-drawer');
let closeBtn = document.querySelector('.close-btn');
let navItems = sideDrawer.querySelectorAll('.nav-item');

menuBtn.onclick = function () {
    sideDrawer.classList.add('show-side-drawer');
};

function hideSideDrawer() {
    sideDrawer.classList.remove('show-side-drawer');
}

closeBtn.onclick = hideSideDrawer;

for (navItem of navItems) {
    navItem.onclick = hideSideDrawer;
}

