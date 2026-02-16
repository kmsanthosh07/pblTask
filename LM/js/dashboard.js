document.addEventListener("DOMContentLoaded", () =>{
    const menuBtn = document.getElementById("menuBtn");
    const sidebar = document.getElementById("sidebar");
    const sidebarItem = document.querySelectorAll(".sidebar-item");

    menuBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        sidebar.classList.toggle("active");
        menuBtn.classList.toggle("menuBtn-active");
    });

    //Click inside sidebar should NOT close it
    sidebar.addEventListener("click", (e) =>{
        e.stopPropagation();
    });

    document.addEventListener("click", () => {
        sidebar.classList.remove("active");
        menuBtn.classList.remove("menuBtn-active");
    });

    sidebarItem.forEach(item => {
        item.addEventListener("click", (e) => {
            sidebarItem.forEach(i => i.classList.remove("sidebar-active"));
            e.target.classList.add("sidebar-active");
            sidebar.classList.remove("active");
        })
    })
});   
document.addEventListener("DOMContentLoaded", () =>{
    const currentPage = window.location.pathname.split("/").pop();
    const menuItems = document.querySelectorAll("#sidebar li");

    menuItems.forEach(item => {
        
        if(item.dataset.page === currentPage)
        {
            item.classList.add("active");
        }

        item.addEventListener("click", () => {
            window.location.href = item.dataset.page;
        });
    });
});


// Dynamic Dashboard

const dashboardData = [
    {title: "Total Courses", value : 6},
    {title: "Asssignments Due", value : 3},
    {title: "Attendance", value : "85%"},
    {title: "GPA", value : 8.4}
];

const cardsContainer = document.getElementById("dashboardCards");

dashboardData.forEach(item => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
        <h3>${item.title}</h3>
        <p>${item.value}</p>
    `;

    cardsContainer.appendChild(card);
});
