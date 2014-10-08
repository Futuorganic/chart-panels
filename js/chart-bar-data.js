var randomScalingFactor = function(){ return Math.round(Math.random()*10)};

var barChartData = {
	labels : ["Week 48","Week 49","Week 50","Week 51","Week 52"],
	datasets : [
		{
			fillColor : "rgb(236, 138, 100)",
			strokeColor : "rgba(220,220,220,0.8)",
			highlightFill: "rgba(220,220,220,0.75)",
			highlightStroke: "rgba(220,220,220,1)",
			data : [6,7,8,9,3]
		},
		{
			fillColor : "rgb(37, 158, 0)",
			strokeColor : "rgba(151,187,205,0.8)",
			highlightFill : "rgba(151,187,205,0.75)",
			highlightStroke : "rgba(151,187,205,1)",
			data : [4,3,5,7,2]
		},
		{
			fillColor : "rgb(21, 160, 200)",
			strokeColor : "rgba(151,187,205,0.8)",
			highlightFill : "rgba(151,187,205,0.75)",
			highlightStroke : "rgba(151,187,205,1)",
			data : [3,1,3,3,1]
		}
	]

}
