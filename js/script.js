//leaflet

var mymap = L.map('mapid').setView([51.14, 16.96], 15);
var marker = L.marker([51.1404, 16.9597]).addTo(mymap);

	L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
		maxZoom: 25,
		attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, ' +
			'<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
			'Imagery © <a href="http://mapbox.com">Mapbox</a>',
		id: 'mapbox.streets'
	}).addTo(mymap);

//carousel
$(document).ready(function(){
	var carouselList = $("#carousel ul");
	function moveFirstSlide() {
		var firstItem = carouselList.find("li:first");
		var lastItem = carouselList.find("li:last");
		lastItem.after(firstItem); //tu tworzy sie pętla
		carouselList.css({marginLeft: 0});
	}
	function changeSlide(){
			carouselList.animate({'marginLeft':-1200}, 800, moveFirstSlide);
		
	};
	setInterval(changeSlide, 5000);


});