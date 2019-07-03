document.getElementById('SliderRight').onclick = MoveSliderRight;
document.getElementById('SliderLeft').onclick = MoveSliderLeft;
var pos = 0;

function MoveSliderRight() {
	var poloska = document.getElementById('polosa');
	pos = pos + 128;
	if (pos > 0)
		pos = -512;
	poloska.style.left = pos + 'px';
}

function MoveSliderLeft() {
	var poloska = document.getElementById('polosa');
	pos = pos - 128;
	if (pos < -512)
		pos = 0;
	poloska.style.left = pos + 'px';
}
