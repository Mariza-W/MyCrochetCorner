// Create button
const button = document.createElement("button");

button.id = "toTopBtn";
button.title = "Go to top";
button.innerHTML = "⬆";

document.body.appendChild(button);

// Show/hide on scroll
window.onscroll = function () {

    if (
        document.body.scrollTop > 20 ||
        document.documentElement.scrollTop > 20
    ) {
        button.style.display = "block";
    }
    else {
        button.style.display = "none";
    }

};

// Scroll to top
button.addEventListener("click", function () {

    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;

});