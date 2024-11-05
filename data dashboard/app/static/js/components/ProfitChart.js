// ProfileChart.js

document.addEventListener("DOMContentLoaded", function() {
    // Example data for user activity
    const profileData = {{ profile_data | tojson }};
    
    const ctx = document.getElementById("profileChart").getContext("2d");

    new Chart(ctx, {
        type: 'line',
        data: {
            labels: profileData.map(item => item.date),
            datasets: [{
                label: 'User Engagement',
                data: profileData.map(item => item.engagement_score),
                borderColor: '#4caf50',
                backgroundColor: 'rgba(76, 175, 80, 0.1)',
                fill: true
            }]
        },
        options: {
            responsive: true,
            plugins: {
                title: {
                    display: true,
                    text: 'User Engagement Over Time'
                }
            },
            scales: {
                x: {
                    title: {
                        display: true,
                        text: 'Date'
                    }
                },
                y: {
                    title: {
                        display: true,
                        text: 'Engagement Score'
                    }
                }
            },
            animation: {
                duration: 2000,
                easing: 'easeInOutCubic'
            }
        }
    });
});
