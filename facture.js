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

const factureTableBody = document.getElementById('factureTableBody');
const factures = JSON.parse(localStorage.getItem('factures')) || [];

const afficherFactures = () => {
    factureTableBody.innerHTML = ''; 
    factures.forEach((facture, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${facture.id}</td>
            <td>${facture.clientName}</td>
            <td>${facture.entreprise}</td>
            <td>${facture.adresse}</td>
            <td>${facture.email}</td>
            <td>
                <button class="btn modifier" onclick="editFacture(${index})">Modifier</button>
                <button class="btn supprimer" onclick="deleteFacture(${index})">Supprimer</button>
            </td>
        `;
        factureTableBody.appendChild(row);
    });
};

afficherFactures();

window.deleteFacture = (index) => {
    factures.splice(index, 1);
    localStorage.setItem('factures', JSON.stringify(factures));
    afficherFactures();
};

window.editFacture = (index) => {
    localStorage.setItem('modifierFactureIndex', index);
    window.location.href = 'modifier_facture.html';
};



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