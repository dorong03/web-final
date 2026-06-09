// 다크모드

const darkBtn = document.getElementById("darkBtn");

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


// 프로젝트 필터

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


// 스크롤 애니메이션

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
