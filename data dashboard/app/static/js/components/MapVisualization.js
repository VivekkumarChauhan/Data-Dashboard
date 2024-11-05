// static/js/MapVisualization.js
async function drawMap() {
    const response = await fetch('/api/sales-data');
    const data = await response.json();

    const width = 600, height = 400;
    const svg = d3.select("#feedbackChart")
                  .append("svg")
                  .attr("width", width)
                  .attr("height", height);
    
    // Example of animated data circles
    svg.selectAll("circle")
       .data(data)
       .enter()
       .append("circle")
       .attr("cx", (d, i) => i * 50)
       .attr("cy", d => height - d.feedback_score * 10)
       .attr("r", 5)
       .style("fill", "steelblue")
       .transition()
       .duration(1000)
       .attr("r", 10);
}

drawMap();
