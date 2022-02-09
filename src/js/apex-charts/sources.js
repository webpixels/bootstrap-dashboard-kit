//
// Sources chart
//

'use strict';

import ApexCharts from 'apexcharts'

var ApexSourcesChart = (function() {

	// Variables

	var $chart = document.querySelector("#chart-sources"),
		chart;

	var colorPalette = [
		'#5F1F7A',
		'#e31a8f',
		'#36B37E',
		'#f36f21',
		'#659ad1',
		'#f5365c'
	]

	function init() {
		var options = {
			chart: {
				type: 'pie',
				fontFamily: 'Inter, Helvetica, Arial, sans-serif'
			},
			series: [44, 55, 13, 43, 22],
			labels: ['Chitanta', 'Factura', 'OP', 'Ramburs', 'Card'],
			dataLabels: {
				dropShadow: {
					enabled: false,
					top: 1,
					left: 1,
					blur: 1,
					color: '#000',
					opacity: 0.45
				}
			},
			legend: {
				position: 'bottom',
				offsetY: 0,
				offsetX: -20,
				horizontalAlign: 'left',
				width: 'auto',
				floating: false,
				labels: {
					colors: ['#999'],
				},
				markers: {
					width: 9,
					height: 9,
					strokeWidth: 0,
					strokeColor: '#fff',
					fillColors: undefined,
					radius: 30,
					customHTML: undefined,
					onClick: undefined,
					offsetX: 0,
					offsetY: 1
				},
			},
			responsive: [{
				breakpoint: 375,
				options: {
					chart: {
						width: 'auto'
					}
				}
			}]
		};

		// Get data from data attributes
		var height = $chart.dataset.height;

		// Inject synamic properties
		options.colors = colorPalette;

		options.chart.height = height ? height : 350;

		chart = new ApexCharts($chart, options);

		// Draw chart
		setTimeout(function() {
			chart.render();
		}, 300);
	}

	if ($chart) {
		init();
	}

})();
