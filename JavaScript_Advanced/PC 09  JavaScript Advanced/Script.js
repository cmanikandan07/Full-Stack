// Function to check access based on role and file
function checkAccess() {
    // Get the values from the input fields
    const role = document.getElementById("role").value.trim().toLowerCase();
    const file = document.getElementById("file").value.trim().toLowerCase();
    const accessResult = document.getElementById("access-result");

    // Access control rules
    const accessRules = {
        teacher: ['attendance', 'home-work'],
        student: ['class-work', 'home-work']
    };

    // Check if the role and file are valid
    if (!accessRules[role] || !accessRules[role].includes(file)) {
        if (!accessRules[role]) {
            console.error("ERROR: INVALID ROLE");
        }
        if (!accessRules[role] || !accessRules[role].includes(file)) {
            console.error("ERROR: INVALID FILE");
        }
        accessResult.textContent = "ACCESS DENIED";
        accessResult.className = "access-denied"; // Set class for denied access
    } else {
        accessResult.textContent = "ACCESS GRANTED";
        accessResult.className = "access-granted"; // Set class for granted access
    }
}
