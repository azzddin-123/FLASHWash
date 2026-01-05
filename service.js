
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
});

document.addEventListener('DOMContentLoaded', () => {
    const addButton = document.querySelector('.btn.ajouter');

    addButton.addEventListener('click', () => {
        window.location.href = 'add_service.html';
    });
const serviceTable = document.querySelector('table tbody');
const services = JSON.parse(localStorage.getItem('services')) || [];

const displayService = () => {
    serviceTable.innerHTML = ''; 
    services.forEach((service, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${service.type_vihe}</td>
            <td>${service.nom_service}</td>
            <td>
                <button class="btn modifier" onclick="editEmployee(${index})">Modifier</button>
                <button class="btn supprimer" onclick="deleteEmployee(${index})">Supprimer</button>
            </td>
        `;
        serviceTable.appendChild(row);
    });
};

displayService();
window.deleteEmployee = (index) => {
    services.splice(index, 1);
    localStorage.setItem('services', JSON.stringify(services));
    displayService();
};
window.editEmployee = (index) => {
    localStorage.setItem('modifierServiceIndex', index);
    window.location.href = 'modifier_service.html';
};
});



document.getElementById('id-dashboard').addEventListener('click', function(event) {
    event.preventDefault(); 
    window.location.href = 'dashboard.html'; 
});
document.getElementById('id-employee').addEventListener('click', function(event) {
    event.preventDefault(); 
    window.location.href = 'employee.html'; 
});
document.getElementById('id-reservation').addEventListener('click', function(event) {
    event.preventDefault(); 
    window.location.href = 'reservation.html'; 
});
document.getElementById('id-facture').addEventListener('click', function(event) {
    event.preventDefault(); 
    window.location.href = 'facture.html'; 
});
document.getElementById('id-client').addEventListener('click', function(event) {
    event.preventDefault(); 
    window.location.href = 'client.html'; 
});

document.getElementById('exit-link').addEventListener('click', function(event) {
    event.preventDefault(); 
    window.location.href = 'login.html';
});
