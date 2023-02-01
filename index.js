const form = document.getElementById('FilterForm');
const table = document.getElementById('myTable');

form.addEventListener('submit', function (e) {
    e.preventDefault();

    const filter = document.getElementById('Name').value;
    const value = document.getElementById('Age').value;
    
    for (const row of table.rows) {
        if ((row.dataset.filter === filter || filter === 'all') && (row.dataset.value === value || value === 'all')) {
            row.style.display = '';
        } else {
            row.style.display = 'none';
        }
    }

})

