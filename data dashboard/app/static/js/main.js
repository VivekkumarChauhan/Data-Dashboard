// main.js

// Smooth scrolling for in-page links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
    });
});

// Toggle active class on navigation links
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener("click", function() {
        document.querySelectorAll('.nav-link').forEach(nav => nav.classList.remove('active'));
        this.classList.add('active');
    });
});

// Loading animation on page load
window.addEventListener("load", function() {
    const loader = document.getElementById("loader");
    if (loader) {
        loader.classList.add("fade-out");
        setTimeout(() => loader.style.display = "none", 500);
    }
});

// Helper function to load data dynamically via AJAX
async function fetchData(url) {
    try {
        let response = await fetch(url);
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        return await response.json();
    } catch (error) {
        console.error("Failed to fetch data:", error);
    }
}

// Usage of fetchData to load data on specific page sections
document.addEventListener("DOMContentLoaded", async function() {
    const salesData = await fetchData("/sales-data");
    if (salesData) {
        // Process and display data as needed
        console.log("Sales Data Loaded:", salesData);
    }
});
