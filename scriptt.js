```javascript
/* =====================================
   ENTER OUR LITTLE UNIVERSE BUTTON
===================================== */

const enterButton = document.getElementById("enterBtn");
const storySection = document.getElementById("story");

if (enterButton && storySection) {

    enterButton.addEventListener("click", function () {

        storySection.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

    });

}


/* =====================================
   SCROLL REVEAL
===================================== */

const revealElements = document.querySelectorAll(
    ".timeline-card, " +
    ".knowledge-card, " +
    ".memory-card, " +
    ".song-card, " +
    ".series-card, " +
    ".notice-list div, " +
    ".birthday-content"
);


const observer = new IntersectionObserver(

    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

                observer.unobserve(entry.target);

            }

        });

    },

    {
        threshold: 0.12
    }

);


revealElements.forEach((element) => {

    element.classList.add("reveal");

    observer.observe(element);

});


/* =====================================
   FLOATING STARS
===================================== */

window.addEventListener("scroll", () => {

    const stars = document.querySelector(".stars");

    if (!stars) return;

    stars.style.transform =
        `translateY(${window.scrollY * 0.02}px)`;

});


/* =====================================
   IMAGE FALLBACK
===================================== */

document.querySelectorAll("img").forEach((image) => {

    image.addEventListener("error", () => {

        image.style.display = "none";

        const parent = image.parentElement;

        if (parent) {

            parent.classList.add("image-missing");

            parent.innerHTML += `
                <p>
                    Your memory photo goes here ♡
                </p>
            `;

        }

    });

});


/* =====================================
   LITTLE CONSOLE MESSAGE
===================================== */

console.log(`
♡ A Little Corner For You ♡

Some memories were remembered,
but not everything needs to be displayed.

— No One's little corner
`);
```
