function showDiv(id) {
	document.getElementById(id).style.opacity = 1;
	document.getElementById(id).style.visibility = 'visible';

};

function hideDiv(id) {
	document.getElementById(id).style.opacity = 0;
};

document.getElementById('title').onmouseover = function() {
	showDiv('header')
};

document.getElementById('left-intro').onmouseover = function() {
	showDiv('left-header')
};

document.getElementById('right-intro').onmouseover = function() {
	showDiv('right-header')
};

document.getElementById('left-link').onmouseover = function() {
	showDiv('left-side')
};

document.getElementById('right-link').onmouseover = function() {
	showDiv('right-side')
};

document.getElementById('left-img').onmouseover = function() {
	showDiv('pin-arrow')
	showDiv('left-footer')
};

document.getElementById('left-img').onmouseout = function() {
	hideDiv('pin-arrow')
};

document.getElementById('right-img').onmouseover = function() {
	showDiv('git-arrow')
	showDiv('right-footer')
};

document.getElementById('right-img').onmouseout = function() {
	hideDiv('git-arrow')
};

document.getElementById('appetizer').onmouseover = function() {
	showDiv('image-gallery')
	document.getElementById('image').src = 'static/images/potato-balls.png'
}

document.getElementById('entree').onmouseover = function() {
	showDiv('image-gallery')
	document.getElementById('image').src = 'static/images/chicken.png'
}

document.getElementById('dessert').onmouseover = function() {
	showDiv('image-gallery')
	document.getElementById('image').src = 'static/images/tiramisu.png'
}

document.getElementById('groupool').onmouseover = function() {
	showDiv('image-gallery')
	document.getElementById('image').src = 'static/images/groupool.png'
}

document.getElementById('smash').onmouseover = function() {
	showDiv('image-gallery')
	document.getElementById('image').src = 'static/images/smash.png'
}

document.getElementById('justadd').onmouseover = function() {
	showDiv('image-gallery')
	document.getElementById('image').src = 'static/images/justadd.png'
}

