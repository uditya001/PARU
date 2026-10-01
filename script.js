```javascript
/* =========================
   SMOOTH SCROLL
========================= */

function scrollToSection(id) {

    const section = document.getElementById(id);

    if (section) {

        section.scrollIntoView({
            behavior: "smooth"
        });

    }

}


/* =========================
   SCROLL REVEAL
========================= */

const revealElements =
    document.querySelectorAll(
        ".timeline-card, .knowledge-card, .memory-card, .song-card, .series-card, .notice-list div, .birthday-content"
    );


const observer =
    new IntersectionObserver(

        (entries) => {

            entries.forEach((entry) => {

                if (entry.isIntersecting) {

                    entry.target.style.opacity = "1";

                    entry.target.style.transform =
                        "translateY(0)";

                }

            });

        },

        {
            threshold: 0.15
        }

    );


revealElements.forEach((element) => {

    element.style.opacity = "0";

    element.style.transform =
        "translateY(30px)";

    element.style.transition =
        "opacity 0.8s ease, transform 0.8s ease";

    observer.observe(element);

});


/* =========================
   PARALLAX
========================= */

window.addEventListener("scroll", () => {

    const stars =
        document.querySelector(".stars");

    if (stars) {

        stars.style.transform =
            `translateY(${window.scrollY * 0.03}px)`;

    }

});


/* =========================
   IMAGE FALLBACK
========================= */

document.querySelectorAll("img").forEach((image) => {

    image.addEventListener("error", () => {

        image.style.display = "none";

        const parent =
            image.parentElement;

        if (parent) {

            parent.style.minHeight = "250px";

            parent.style.display = "grid";

            parent.style.placeItems = "center";

            parent.style.background = "#eee8ef";

            parent.innerHTML += `
                <p style="
                    font-family:Caveat;
                    font-size:28px;
                    color:#8b72a8;
                ">
                    Your memory photo goes here ♡
                </p>
            `;

        }

    });

});


/* =========================
   SECRET CONSOLE MESSAGE
========================= */

console.log(`
♡

You found the little corner's source code.

Some things were remembered,
but not displayed.

That's kind of the point.

— No One's website
`);
```
