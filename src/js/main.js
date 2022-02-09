// Bootstrap JS
var bootstrap = require('bootstrap');

// Charts
let apexLineChart = require('./apex-charts/line');
let apexBarChart = require('./apex-charts/bar');

document.addEventListener('DOMContentLoaded', () => {

    // Line chart
    const lineChartEl = document.querySelector("#chart-line");
    if(lineChartEl) {
        new apexLineChart().init(lineChartEl);
    }

    // Bar chart
    const barChartEl = document.querySelector("#chart-bar");
    if(barChartEl) {
        new apexBarChart().init(barChartEl);
    }



});
