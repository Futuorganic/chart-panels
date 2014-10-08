	var randomScalingFactor = function(){ return Math.round(Math.random()*1000)};
	var lineChartData = {
		labels : ["Week 48","Week 49","Week 50","Week 51","Week 52"],
		datasets : [
			{
				label: "My First dataset",
				fillColor : "rgb(231, 246, 255)",
				strokeColor : "rgb(255,0,0)",
				pointColor : "rgb(255,0,0)",
				pointStrokeColor : "#fff",
				pointHighlightFill : "#fff",
				pointHighlightStroke : "rgb(255,0,0)",
				data : [600, 740, 825, 900, 260]
			},
			{
				label: "My Second dataset",
				fillColor : "rgb(231, 246, 255)",
				strokeColor : "rgb(37, 158, 0)",
				pointColor : "rgb(37, 158, 0)",
				pointStrokeColor : "#fff",
				pointHighlightFill : "#fff",
				pointHighlightStroke : "rgb(37, 158, 0)",
				data : [390, 380, 600, 700, 175]
			},
			{
				label: "My Third dataset",
				fillColor : "#fff",
				strokeColor : "rgb(21, 160, 200)",
				pointColor : "rgb(21, 160, 200)",
				pointStrokeColor : "#fff",
				pointHighlightFill : "#fff",
				pointHighlightStroke : "rgb(21, 160, 200)",
				data : [290, 130, 300, 290, 20]
			}
		]

	}
