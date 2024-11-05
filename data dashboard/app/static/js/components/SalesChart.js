document.addEventListener("DOMContentLoaded", function() {
    const salesData = {{ sales_data | tojson }}; // Fetching sales data from the server
    const ctx = document.getElementById("salesChart").getContext("2d");

    // Create a new Chart instance
    const salesChart = new Chart(ctx, {
        type: 'line', // Line chart for sales data visualization
        data: {
            labels: salesData.map(item => item.date), // Extract dates for x-axis
            datasets: [{
                label: 'Sales',
                data: salesData.map(item => item.value), // Extract sales values for y-axis
                borderColor: '#42a5f5', // Color for the line
                backgroundColor: 'rgba(66, 165, 245, 0.2)', // Background color under the line
                borderWidth: 2, // Line width
                pointRadius: 5, // Radius of the points on the line
                pointHoverRadius: 7, // Radius of the points on hover
                fill: true // Enable filling under the line
            }]
        },
        options: {
            responsive: true, // Make the chart responsive
            maintainAspectRatio: false, // Maintain the aspect ratio
            scales: {
                x: {
                    title: {
                        display: true,
                        text: 'Date', // Title for the x-axis
                    },
                    grid: {
                        display: false // Hide the grid lines
                    }
                },
                y: {
                    title: {
                        display: true,
                        text: 'Sales ($)', // Title for the y-axis
                    },
                    beginAtZero: true // Start y-axis from 0
                }
            },
            plugins: {
                tooltip: {
                    enabled: true, // Enable tooltips
                    mode: 'index', // Show tooltip for the whole index
                    intersect: false // Allow multiple tooltips at a time
                },
                legend: {
                    display: true, // Display the legend
                    position: 'top' // Position of the legend
                }
            },
            animation: {
                duration: 1500, // Animation duration
                easing: 'easeOutBounce' // Easing function for animation
            }
        }
    });
});
