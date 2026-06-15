const darkBtn =
document.getElementById("darkBtn");

darkBtn.addEventListener("click", () =>
{
    document.body.classList.toggle("light");

    localStorage.setItem(
        "theme",
        document.body.classList.contains("light")
        ? "light"
        : "dark"
    );
});

if(localStorage.getItem("theme") === "light")
{
    document.body.classList.add("light");
}


const typing =
document.getElementById("typing");

const text =
"Game Client Developer";

let index = 0;

function typeEffect()
{
    if(index < text.length)
    {
        typing.textContent +=
        text.charAt(index);

        index++;

        setTimeout(typeEffect,100);
    }
}

typeEffect();


const buttons =
document.querySelectorAll(".filter-btn");

const projects =
document.querySelectorAll(".project");

buttons.forEach(button =>
{
    button.addEventListener("click", () =>
    {
        const filter =
        button.dataset.filter;

        projects.forEach(project =>
        {
            if(filter === "all")
            {
                project.style.display =
                "block";
            }
            else if(
                project.classList.contains(filter)
            )
            {
                project.style.display =
                "block";
            }
            else
            {
                project.style.display =
                "none";
            }
        });
    });
});


const observer =
new IntersectionObserver(entries =>
{
    entries.forEach(entry =>
    {
        if(entry.isIntersecting)
        {
            entry.target.classList.add("show");
        }
    });
});

document
.querySelectorAll(".hidden")
.forEach(item =>
{
    observer.observe(item);
});


const skillObserver =
new IntersectionObserver(entries =>
{
    entries.forEach(entry =>
    {
        if(entry.isIntersecting)
        {
            const bars =
            entry.target.querySelectorAll(".fill");

            bars.forEach(bar =>
            {
                bar.style.width =
                bar.dataset.width + "%";
            });
        }
    });
});

skillObserver.observe(
document.getElementById("skills")
);