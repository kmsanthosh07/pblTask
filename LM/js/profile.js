document.addEventListener("DOMContentLoaded", () =>{
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const editBtn = document.getElementById("editBtn");

    let isEditMode = false;
     editBtn.addEventListener("click", () =>
    {
        isEditMode = !isEditMode;

        nameInput.disabled = !isEditMode;
        emailInput.disabled =!isEditMode;

        editBtn.textContent = isEditMode ? "Save Profile" : "Edit Profile";
          

        if (!isEditMode)
        {
            alert("Profile updated successfully!");
        }
        });
});