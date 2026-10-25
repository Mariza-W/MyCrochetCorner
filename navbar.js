document.addEventListener("DOMContentLoaded", function () {

    const navbar = `
        <nav class="navbar navbar-expand-lg sticky-top navbar-light bg-light shadow-sm">

            <div class="container-fluid">

                <a class="navbar-brand" href="index.html">
                    My Crochet Corner
                </a>

                <button
                    class="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#mainNavbar"
                    aria-controls="mainNavbar"
                    aria-expanded="false"
                    aria-label="Toggle navigation">

                    <span class="navbar-toggler-icon"></span>

                </button>

                <div class="collapse navbar-collapse" id="mainNavbar">

                    <ul class="navbar-nav ms-auto nav nav-pills">

                        <li class="nav-item">
                            <a class="nav-link" href="indexBS.html">
                                Home
                            </a>
                        </li>

                        <li class="nav-item">
                            <a class="nav-link" href="aboutJS.html">
                                About Me
                            </a>
                        </li>

                        <li class="nav-item">
                            <a class="nav-link" href="ai-patterns.html">
                                Spotting AI Patterns
                            </a>
                        </li>

                        <li class="nav-item">
                            <a class="nav-link" href="learn-crochet.html">
                                Learning Crochet
                            </a>
                        </li>

                        <li class="nav-item">
                            <a class="nav-link" href="markets.html">
                                Markets
                            </a>
                        </li>

                        <li class="nav-item">
                            <a class="nav-link" href="under_construction.html">
                                Playground
                            </a>
                        </li>

                    </ul>

                </div>

            </div>

        </nav>
    `;

    document.getElementById("navbar-placeholder").innerHTML = navbar;

    // Highlight current page

    const currentPage =
        window.location.pathname.split("/").pop() || "index.html";

    document.querySelectorAll(".nav-link").forEach(link => {

        if (link.getAttribute("href") === currentPage) {

            link.classList.add("active");

        }

    });

});