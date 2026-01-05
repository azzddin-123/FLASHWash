
const sidebarLinks = document.querySelectorAll("aside .sidebar a");
const sections = document.querySelectorAll("main .section");

sidebarLinks.forEach((link, index) => {
    link.addEventListener("click", (event) => {
        event.preventDefault();

        sidebarLinks.forEach(link => link.classList.remove("active"));
        
        link.classList.add("active");

        sections.forEach(section => section.style.display = "none");
        
        if (sections[index]) {
            sections[index].style.display = "block";
        }
    });
})
document.getElementById('id-employee').addEventListener('click', function(event) {
    event.preventDefault(); 
    window.location.href = 'employee.html'; 
});
document.getElementById('id-service').addEventListener('click', function(event) {
    event.preventDefault(); 
    window.location.href = 'service.html'; 
});

document.getElementById('id-facture').addEventListener('click', function(event) {
    event.preventDefault(); 
    window.location.href = 'facture.html'; 
});

document.getElementById('id-reservation').addEventListener('click', function(event) {
    event.preventDefault(); 
    window.location.href = 'reservation.html'; 
});
document.getElementById('id-client').addEventListener('click', function(event) {
    event.preventDefault(); 
    window.location.href = 'client.html';
});
document.getElementById('exit-link').addEventListener('click', function(event) {
    event.preventDefault(); 
    window.location.href = 'login.html'; 
});
