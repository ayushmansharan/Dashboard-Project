// Populate stats cards
const statsData = [
    { title: 'Total Revenue', value: '$54,230', increase: '8.3%' },
    { title: 'Total Users', value: '2,430', increase: '12.1%' },
    { title: 'New Orders', value: '485', increase: '5.7%' },
    { title: 'Conversion Rate', value: '3.45%', increase: '2.4%' }
];

const statsGrid = document.querySelector('.stats-grid');
statsData.forEach(stat => {
    const card = document.createElement('div');
    card.className = 'stat-card';
    card.innerHTML = `
        <h3>${stat.title}</h3>
        <div class="value">${stat.value}</div>
        <div class="increase">↑ ${stat.increase}</div>
    `;
    statsGrid.appendChild(card);
});

// Initialize Charts
const revenueCtx = document.getElementById('revenueChart').getContext('2d');
const userCtx = document.getElementById('userChart').getContext('2d');

// Revenue Chart
new Chart(revenueCtx, {
    type: 'line',
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [{
            label: 'Monthly Revenue',
            data: [30000, 35000, 32000, 40000, 38000, 45000],
            borderColor: '#3498db',
            tension: 0.4,
            fill: false
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                display: false
            }
        }
    }
});

// User Growth Chart
new Chart(userCtx, {
    type: 'bar',
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [{
            label: 'New Users',
            data: [150, 200, 180, 250, 220, 300],
            backgroundColor: '#2ecc71'
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                display: false
            }
        }
    }
});