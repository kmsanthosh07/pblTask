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
document.addEventListener("DOMContentLoaded",() => {
    const assignments = [
        { title: "JS Assignment", status: "Pending"},
        { title: "CSS Project", status: "Submitted"},
        { title: "HTML Quiz", status: "Late"},
    ];
    const list = document.getElementById("assignmentList");

    assignments.forEach((item,index) =>{
        const card = document.createElement("div");
        card.className = "assignment-card";

         const title = document.createElement("h3");
         title.textContent = item.title;

         const status = document.createElement("p");
         status.textContent = item.status;
         status.className = `status ${item.status.toLowerCase()}`;

         const button = document.createElement("button");
         button.textContent = "Submit Assignment";

         if(item.status !=="Pending"){
            button.disabled = true;
         }
         button.addEventListener("click",() =>{
            item.status = "Submitted";
            status.textContent = "Submitted";
            status.className = "status submitted";
            button.disabled = true;
            alert("Assignment submitted successfully!");
         });
         card.append(title,status,button);
         list.appendChild(card);      
    });
});