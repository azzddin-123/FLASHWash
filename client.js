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
        window.location.href = 'add_client.html';
    });

    // Affichage des employés dans le tableau
    const clientTab = document.querySelector('table tbody');
    const clients = JSON.parse(localStorage.getItem('clients')) || [];
    const afficherclient = () => {
        clientTab.innerHTML = ''; 
        clients.forEach((client, index) => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${client.id}</td>
                <td>${client.nom}</td>
                <td>${client.prenom}</td>
                <td>${client.cin}</td>
                <td>
                    <button class="btn modifier" onclick="editClient(${index})">Modifier</button>
                    <button class="btn supprimer" onclick="deleteClient(${index})">Supprimer</button>
                </td>
            `;
            clientTab.appendChild(row);
        });
    };
    afficherclient();

// Supprimer un client
window.deleteClient = (index) => {
    clients.splice(index, 1);
    localStorage.setItem('clients', JSON.stringify(clients));
    afficherclient();
};

// Modifier un client
window.editClient = (index) => {
    localStorage.setItem('modifierClientIndex', index);
    window.location.href = 'modifier_client.html';
};
});



document.getElementById('id-dashboard').addEventListener('click', function(event) {
    event.preventDefault(); // Empêche le comportement par défaut du lien
    window.location.href = 'dashboard.html'; // Redirige vers dashboard.html
});
document.getElementById('id-employee').addEventListener('click', function(event) {
    event.preventDefault(); // Empêche le comportement par défaut du lien
    window.location.href = 'employee.html'; // Redirige vers employee.html
});
document.getElementById('id-service').addEventListener('click', function(event) {
    event.preventDefault(); // Empêche le comportement par défaut du lien
    window.location.href = 'service.html'; // Redirige vers service.html
});

document.getElementById('id-facture').addEventListener('click', function(event) {
    event.preventDefault(); // Empêche le comportement par défaut du lien
    window.location.href = 'facture.html'; // Redirige vers facture.html
});

document.getElementById('id-reservation').addEventListener('click', function(event) {
    event.preventDefault(); // Empêche le comportement par défaut du lien
    window.location.href = 'reservation.html'; // Redirige vers reservation.html
});
document.getElementById('exit-link').addEventListener('click', function(event) {
    event.preventDefault(); // Empêche le comportement par défaut du lien
    window.location.href = 'login.html'; // Redirige vers employee.html
});
