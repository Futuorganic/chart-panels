window.onload = function(){
	var ctx = document.getElementById("canvas").getContext("2d");
	window.myLine = new Chart(ctx).Line(lineChartData, {
		responsive: true
	});
	var ctxBar = document.getElementById("bar-chart-canvas").getContext("2d");
	window.myBar = new Chart(ctxBar).Bar(barChartData, {
		responsive : true
	});
}


