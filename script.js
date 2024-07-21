function showContent(tabId, element) {
    // Hide all content divs
    var contents = document.querySelectorAll('.content');
    contents.forEach(function(content) {
        content.classList.remove('active');
    });

    // Show the clicked tab content
    var activeContent = document.getElementById(tabId);
    activeContent.classList.add('active');

    // Reset tab colors
    var tabs = document.querySelectorAll('.tab');
    tabs.forEach(function(tab) {
        tab.classList.remove('active-tab');
    });

    // Set the clicked tab color
    element.classList.add('active-tab');
}

function isElementInViewport(el) {
    var rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Show the first tab's content initially
document.addEventListener('DOMContentLoaded', function() {
    showContent('work', document.querySelector('.tab'));
});

// Show the first tab's content when the section is scrolled into view
document.addEventListener('scroll', function() {
    var whatWeDoSection = document.getElementById('whatwedo');
    if (isElementInViewport(whatWeDoSection)) {
        showContent('work', document.querySelector('.tab'));
    }
});


// hamburger

const hamburger = document.querySelector(".hamburger");
const navigatmenu = document.querySelector(".navigat-menu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navigatmenu.classList.toggle("active");
})

document.querySelectorAll(".navigat-link").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navigatmenu.classList.remove("active");
}))
