// to make arrow btn
window.addEventListener("scroll", (e) => {
    let toTop = document.querySelector(".arrow");
    if (
        document.documentElement.scrollTop > 50 ||
        document.body.scrollTop > 50
    ) {
        toTop.style.display = "block";
        toTop.onclick = function () {
            document.documentElement.scrollTo({
                top:0,
                left:0,
                behavior: 'smooth'
            });
        };
    } else {
        toTop.style.display = "none";
    }
});

// navbar section
let openBtn = document.getElementsByClassName("open-button")[0];
let closeBtn = document.getElementsByClassName("close-button")[0];
let container = document.getElementsByClassName("navbar")[0];
let navUl = document.getElementsByClassName("nav-ul")[0];

openBtn.addEventListener("click", function () {
    navUl.style.cssText = "transform: translateX(0);";
    this.style.cssText = "display:none";
});
closeBtn.addEventListener("click", function () {
    navUl.style.cssText = "transform: translateX(-400);";
    openBtn.style.cssText = "display:block";
});
document.addEventListener("click", (e) => {
    if (
        e.target.className !== "open-button " &&
        e.target.parentElement.className !== "open-button" &&
        e.target.className !== "navbar"
    ) {
        navUl.style.cssText = "transform: translateX(-400);";
        openBtn.style.cssText = "display:block";
    }
});
