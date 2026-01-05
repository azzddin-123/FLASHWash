
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

// Gestion du clic sur LES BOUTTONS
document.addEventListener('DOMContentLoaded', () => {
    const addButton = document.querySelector('.btn.ajouter');

    addButton.addEventListener('click', () => {
        window.location.href = 'add_reservation.html';
    });
const reservationtable = document.querySelector('table tbody');
const reservations = JSON.parse(localStorage.getItem('reservations')) || [];

const displayReservation = () => {
    reservationtable.innerHTML = ''; 
    reservations.forEach((reservation, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${reservation.nom}</td>
            <td>${reservation.date}</td>
            <td>
                <button class="btn modifier" onclick="editReservation(${index})">Modifier</button>
                <button class="btn supprimer" onclick="deleteReservation(${index})">Supprimer</button>
            </td>
        `;
        reservationtable.appendChild(row);
    });
};
displayReservation();

window.deleteReservation = (index) => {
    reservations.splice(index, 1);
    localStorage.setItem('reservations', JSON.stringify(reservations));
    displayReservation();
};

window.editReservation = (index) => {
    localStorage.setItem('editReservation', index);
    window.location.href = 'modifier_reservation.html';
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
document.getElementById('id-service').addEventListener('click', function(event) {
    event.preventDefault(); 
    window.location.href = 'service.html'; 
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
