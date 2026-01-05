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
        window.location.href = 'add_employee.html';
    });

    const employeesTable = document.querySelector('table tbody');
    const employees = JSON.parse(localStorage.getItem('employees')) || [];

    const displayEmployees = () => {
        employeesTable.innerHTML = ''; 
        employees.forEach((employee, index) => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${employee.id}</td>
                <td>${employee.name}</td>
                <td>${employee.salary}</td>
                <td>
                    <button class="btn modifier" onclick="editEmployee(${index})">Modifier</button>
                    <button class="btn supprimer" onclick="deleteEmployee(${index})">Supprimer</button>
                </td>
            `;
            employeesTable.appendChild(row);
        });
    };

    displayEmployees();

    window.deleteEmployee = (index) => {
        employees.splice(index, 1);
        localStorage.setItem('employees', JSON.stringify(employees));
        displayEmployees();
    };
    window.editEmployee = (index) => {
        localStorage.setItem('editEmployeeIndex', index);
        window.location.href = 'modify_employee.html';
    };
});



document.getElementById('id-dashboard').addEventListener('click', function(event) {
    event.preventDefault();
    window.location.href = 'dashboard.html'; 
});document.getElementById('id-service').addEventListener('click', function(event) {
    event.preventDefault(); 
    window.location.href = 'service.html'; 
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