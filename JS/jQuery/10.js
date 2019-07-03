var hp = vp = null;

function changeview() {
	hp = $('.primer p:hidden');
	vp = $('.primer p:visible');
	hp.show();
	vp.hide();
}

setInterval(changeview, 1000);