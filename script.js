document.addEventListener('DOMContentLoaded', function() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(data => {
            const tableBody = document.querySelector('tbody');
            tableBody.innerHTML = ''; 
            let button = document.getElementById("evento");

            button.onclick = function() {
                tableBody.innerHTML = '';
                data.forEach((user, index) => {
                    const row = document.createElement('tr');

                    const idCell = document.createElement('th');
                    idCell.scope = 'row';
                    idCell.textContent = index + 1;
                    row.appendChild(idCell);

                    const firstNameCell = document.createElement('td');
                    firstNameCell.textContent = user.name.split(' ')[0];
                    row.appendChild(firstNameCell);

                    const lastNameCell = document.createElement('td');
                    lastNameCell.textContent = user.name.split(' ')[1] || '';
                    row.appendChild(lastNameCell);

                    const handleCell = document.createElement('td');
                    handleCell.textContent = `@${user.username}`;
                    row.appendChild(handleCell);

                    tableBody.appendChild(row);
                });
            };
        })
});
