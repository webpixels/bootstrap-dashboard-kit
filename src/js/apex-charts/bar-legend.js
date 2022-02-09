//
// Line chart
//

'use strict';

import ApexCharts from 'apexcharts'

var BarLegendChart = (function() {

	var $chart = document.querySelector("#chart-bar-legend"),
		chart;

	var colorPalette = [
		'#36B37E',
		'#5F1F7A',
		'#f36f21'
	]

	function init($this) {
		var options = {
			chart: {
				type: 'line',
				// stacked: false,
				zoom: {
					enabled: false
				},
				toolbar: {
					show: false
				},
				shadow: {
					enabled: false,
				},
				animations: {
					enabled: true,
					easing: 'easeinout',
					speed: 800,
					animateGradually: {
						enabled: true,
						delay: 150
					},
					dynamicAnimation: {
						enabled: true,
						speed: 350
					}
				},
				fontFamily: 'Inter, Helvetica, Arial, sans-serif'
			},
			colors: colorPalette,
			plotOptions: {
				bar: {
					columnWidth: '24%',
					borderRadius: 6
				}
			},
			stroke: {
				width: 0,
				curve: 'smooth'
			},
			series: [{
					name: 'Incasat partial',
					type: 'bar',
					data: [15, 20, 20, 15, 15, 30, 20, 15, 30]
				},
				{
					name: 'Nefacturat',
					type: 'bar',
					data: [60, 80, 80, 60, 60, 120, 80, 60, 120]
				},
				{
					name: 'Facturat',
					type: 'bar',
					data: [30, 40, 40, 30, 30, 60, 40, 30, 60]
				},
			],
			markers: {
				size: 0
			},
			xaxis: {
				axisBorder: {
					show: false
				},
				axisTicks: {
					show: false
				},
				categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
				labels: {
					style: {
						colors: '#999',
						fontSize: '13px',
						cssClass: 'apexcharts-xaxis-label',
					}
				}
			},
			yaxis: {
				axisBorder: {
					show: false
				},
				axisTicks: {
					show: false
				},
				labels: {
					style: {
						colors: ['#999'],
						fontSize: '13px',
						cssClass: 'apexcharts-xaxis-label',
					}
				}
			},
			legend: {
				show: true
			},
			grid: {
				borderColor: '#e3ebf6',
				strokeDashArray: 3,
			},
			dataLabels: {
				enabled: false
			},
			tooltip: {
				shared: true,
				intersect: false,
				y: {
					formatter: function(y) {
						if (typeof y !== "undefined") {
							return y.toFixed(0) + " orders";
						}
						return y;
					}
				}
			}
		}


		// Get data from data attributes
		var height = $this.dataset.height;

		// Inject synamic properties
		options.colors = colorPalette;

		options.chart.height = height ? height : 350;

		var chart = new ApexCharts($this, options);

		// Draw chart
		setTimeout(function() {
			chart.render();
		}, 300);

	}

	if ($chart) {

		init($chart);
	}

})();
