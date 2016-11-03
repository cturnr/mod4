(function (window) {
	var byeSpeaker = {};
	var speakWord = "Good Bye";
	byeSpeaker.speak = function (name) {
	  console.log(speakWord + " " + name);
	  document.write(speakWord + " " + name + "<br>");
	}
	window.byeSpeaker = byeSpeaker; 
})(window);