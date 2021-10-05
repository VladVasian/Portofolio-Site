// Navigation Menu
const burger = document.querySelector(".burger");
const navbar = document.querySelector(".navigation-bar");
const menuItems = document.querySelector(".navbar");

burger.addEventListener('click', () => {

    if ( navbar.classList.contains('clasa-test') ) {
        navbar.classList.remove('clasa-test');
        menuItems.classList.remove('clasa-test-2');
    } else {
        navbar.classList.add('clasa-test');
        menuItems.classList.add('clasa-test-2');
    }
})

window.addEventListener("resize", function() {
    if (window.innerWidth > 700){
         navbar.classList.remove('clasa-test');
         menuItems.classList.remove('clasa-test-2');
    }
  });


// Navigation Menu