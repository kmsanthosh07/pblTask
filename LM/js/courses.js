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
document.addEventListener("DOMContentLoaded", () => {
  const courses = [
    { name: "JavaScript Basics", status: "Active" },
    { name: "HTML & CSS", status: "Completed" },
    { name: "React Introduction", status: "Active" }
  ];

  const courseList = document.getElementById("courseList");

  courses.forEach(course => {
    const card = document.createElement("div");
    card.className = "course-card";

    const title = document.createElement("h3");
    title.textContent = course.name;

    const status = document.createElement("span");
    status.textContent = course.status;
    status.className = "status";

    if (course.status === "Active") {
      status.classList.add("active");
    } else {
      status.classList.add("completed");
    }

    card.appendChild(title);
    card.appendChild(status);
    courseList.appendChild(card);
  });
});
