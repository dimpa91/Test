// typed.js plugin
var typed = new Typed('.typed-strings', {
	strings: ["project finance", "second phrase", "third phrase"],
	typeSpeed: 40,
	backDelay: 2000,
	backSpeed: 40,
	showCursor: false,
	loop: true,
});


//height of columns
var heightFirstColumn = $("#column-description1").height();
var heightSecondColumn = $("#column-description2").height();
var heightThirdColumn = $("#column-description3").height();
var maxHeightColumn = Math.max(heightFirstColumn, heightSecondColumn, heightThirdColumn);
$("#column-description1").css("height", maxHeightColumn);
$("#column-description2").css("height", maxHeightColumn);
$("#column-description3").css("height", maxHeightColumn);

var heightLeftBottomcolumn  = $(".left-bottom-column .description").height();
var heightRightBottomcolumn  = $(".right-bottom-column .description").height();
var maxHeight = Math.max(heightLeftBottomcolumn, heightRightBottomcolumn);
$(".left-bottom-column .description").css("height", maxHeight);
$(".right-bottom-column .description").css("height", maxHeight);

