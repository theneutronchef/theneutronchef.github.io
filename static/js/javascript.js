function showDiv(id) {
	document.getElementById(id).style.opacity = 1;
	document.getElementById(id).style.visibility = 'visible';

}

function hideDiv(id) {
	document.getElementById(id).style.opacity = 0;
}

document.getElementById('container').onmouseover = function() {
	showDiv('header')
};

document.getElementById('left-link').onmouseover = function() {
	showDiv('pin-arrow')
	showDiv('left-img')
};

document.getElementById('left-link').onmouseout = function() {
	hideDiv('pin-arrow')
};

document.getElementById('right-link').onmouseover = function() {
	showDiv('git-arrow')
	showDiv('right-img')
};

document.getElementById('right-link').onmouseout = function() {
	hideDiv('git-arrow')
};

document.getElementById('left-img').onmouseover = function() {
	showDiv('left-footer')
};

document.getElementById('right-img').onmouseover = function() {
	showDiv('right-footer')
};

