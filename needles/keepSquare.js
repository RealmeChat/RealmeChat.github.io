var p_keepSquare = PINE.Needle("[keepSquare");

p_keepSquare.updateSize = function(initMe) {
	initMe.style.maxHeight = "inherit";
	initMe.style.maxWidth = "inherit";

	var width = initMe.offsetWidth;
	var height = initMe.offsetHeight;
	
	if(width > height) {
		initMe.style.maxWidth = height+"px";
		initMe.style.maxHeight = "inherit";
	}
	else if(width < height) {
		initMe.style.maxHeight = width+"px"
		initMe.style.maxWidth = "inherit";
	}
}

p_keepSquare.addFunction(function(initMe) {
	var needle = this;
	needle.updateSize(initMe);

	window.addEventListener("resize", function() {
		needle.updateSize(initMe)
	});
});