function splitt(_txt) {
	return _txt.match(/[^\r\n]+/g);
}
///////////////////////////////
function cikl(_len, _text){
	for(i=0; i<len; i++){
		
	}
}
/////////////////////////////////
function id(idText){
	return document.getElementById(idText);
}
/////////////////////////////////
function showStartLayer() {
	$("body").append(`<div id="startLayer" class="bg-white">
		<div><i class="fa fa-spinner fa-spin text-primary" style="font-size: 50pt;"></i></div>
	</div>`);
	$("#startLayer").css({
		position: "absolute",
		width: "100%",
		height: "100%",
		"z-index": "99"
	});
	center($("#startLayer div"));
}
function hideStartLayer() {
	$("#startLayer").remove();
}
function center(_el) {
	$(_el).css("position", "absolute");
	$(_el).css("top", "50%");
	$(_el).css("left", "50%");
	$(_el).css("transform", "translate(-50%,-50%)");
}
function root(_el) {
	$(_el).css("position", "absolute");
	$(_el).css("width", "100%");
	$(_el).css("height", "100%");
}
function splith(el, arr) {
	var _len = arr.length;
	for (i=0; i<_len; i++) {
		$(el).children().eq(i)
			.css("width", arr[i]+"%")
			.css("float", "left");
	}
}
function splitv(el, arr) {
	var _len = arr.length;
	for (var i=0; i<_len; i++) {
		$(el).children().eq(i)
			.css("height", arr[i]+"%")
	}
}
function fullSize(el) {
	$(el).css("width", "100%");
  $(el).css("height", "100%");
}
function fullHeight(el) {
  $(el).css("height", "100%");
}
function fullWidth(el) {
  $(el).css("width", "100%");
}
// ---------- STD functions ----------
Array.prototype.shuffle = function() {
  this.sort(function(a, b){return 0.5 - Math.random()});
};
function id(obj) {
	return document.querySelector(obj);
}
function clog(obj) {
	console.log(obj)
}
// ---------- Clipboard ----------
function copyTextToClipboard(text) {
  if (!navigator.clipboard) {
    fallbackCopyTextToClipboard(text);
    return;
  }
  navigator.clipboard.writeText(text).then(function() {
    console.log('Async: Copying to clipboard was successful!');
  }, function(err) {
    console.error('Async: Could not copy text: ', err);
  });
}

function mathjax_load() {
	MathJax.typeset();
  MathJax.typesetPromise()
}
function katex_load() {
	renderMathInElement(document.body, {
		delimiters: [
		{left: '$$', right: '$$', display: true},
		{left: '$', right: '$', display: false},
		{left: '\\(', right: '\\)', display: false},
		{left: '\\[', right: '\\]', display: true},
		{left: '\\(', right: '\\)', inline: true},
		{left: '\\[', right: '\\]', inline: false}
		],
		strict: "unicodeTextInMathMode",
		throwOnError : false
	});
}
//////////////////////////COOKIES/////////////////////////
function setCookie(cname, cvalue, exdays) {
  var d = new Date();
  d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
  var expires = "expires="+d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
  var name = cname + "=";
  var ca = document.cookie.split(';');
  for(var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

function checkCookie() {
  var user = getCookie("tema");
  if (user != "") {
    
  } else {
  	setCookie("tema", user, 365);
  }
}