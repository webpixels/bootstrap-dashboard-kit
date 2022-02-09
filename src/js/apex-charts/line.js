//
// Apex line chart
//

'use strict';

var apexCharts = require('apexcharts');
var themeStyles = require('../theme-styles');

function apexLineChart() {
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
					zoom: {
				        enabled: false
				    },
				    toolbar: {
				        show: false
				    },
				    shadow: {
				        enabled: false,
				    }
				},
				colors: colorPalette,
				// plotOptions: {
				// 	bar: {
				// 		columnWidth: '20%',
				// 		endingShape: 'rounded'
				// 	}
				// },
				stroke: {
				    width: 7,
				    curve: 'smooth'
				},
				series: [{
					name: 'Delivered',
					type: 'line',
					data: [50, 30, 40, 60, 80, 100, 90, 90, 70, 90, 100]
				}],
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
					categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
					labels: {
						style: {
							colors: '#999',
							fontSize: '13px',
							fontFamily: '#333',
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
							colors: '#999',
							fontSize: '13px',
							fontFamily: 'Inter',
							cssClass: 'apexcharts-xaxis-label',
						}
					}
				},
				legend: {
					show: false
				},
				grid: {
					borderColor: '#f3f3f3',
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

module.exports = apexLineChart;
