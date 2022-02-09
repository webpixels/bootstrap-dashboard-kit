//
// Apex bar chart
//

'use strict';

var apexCharts = require('apexcharts');
var themeStyles = require('../theme-styles');

function apexBarChart() {
    this.init = function(chartEl) {
		var styles = new themeStyles();

		var colorPalette = [
			styles.colors().theme.primary,
			styles.colors().theme.tertiary,
			styles.colors().theme.warning
		];

		function init($this) {
			var options = {
				chart: {
					type: 'line',
					stacked: false,
					zoom: {
						enabled: false
					},
					toolbar: {
						show: false
					},
					shadow: {
						enabled: false,
					},
                    offsetX: 0,
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
					fontFamily: styles.fonts().base
				},
				colors: colorPalette,
				plotOptions: {
					bar: {
						columnWidth: '26%',
						borderRadius: 5
					}
				},
				stroke: {
					colors: ['transparent'],
    				width: 4,
					curve: 'smooth'
				},
				series: [
					{
						name: 'Delivered',
						type: 'bar',
						data: [10, 17, 12, 8, 10, 10, 20]
					},
					{
						name: 'Rejected',
						type: 'bar',
						data: [20, 10, 14, 20, 10, 14, 15]
					},
					{
						name: 'Rejected',
						type: 'bar',
						data: [15, 8, 16, 15, 15, 18, 10]
					}
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
					categories: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
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
					show: false
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

			// Inject dynamic properties
			options.colors = colorPalette;
			options.chart.height = height ? height : 350;

            // Create chart
			new apexCharts($this, options).render();
		}

		if (chartEl) {
			init(chartEl);
		}
    }
}

module.exports = apexBarChart;
