"use strict";

document.addEventListener('pointerlockchange', () => {
	if (document.pointerLockElement === document.body) {
		console.log('The pointer lock status is now locked');
		document.addEventListener("mousemove", PLMouseMove, false);
	}
	else {
		console.log('The pointer lock status is now unlocked');
		document.removeEventListener("mousemove", PLMouseMove, false);
	}
}, false);

document.addEventListener("mouseup", () => {
	if (document.pointerLockElement) {
		document.exitPointerLock();
		x = 0;
		y = 0;
	}
});

let x = 0;
let y = 0;

function PLMouseMove(e) {
	x += e.movementX;
	y += e.movementY;
	// console.log(e.movementX);
	$("#pixelMovedCount").val(Math.abs(x))
	let dpi = Math.abs(x) / parseInt($("#distance").val())
	$("#resultantDpi").text(dpi.toFixed(2))
}

$(() => {

	$("body").on("mousedown", (e) => {
		// dont lock the pointer if user is inc/dec distance
		if (!$(".material-icons:hover").length)
			document.body.requestPointerLock();
	});

	$("body").on("click", ".minus", (e) => {
		let input = $(e.currentTarget).parent().children("input")
		input.val(parseInt(input.val()) - 1)
	});

	$("body").on("click", ".add", (e) => {
		let input = $(e.currentTarget).parent().children("input")
		input.val(parseInt(input.val()) + 1)
	});
})