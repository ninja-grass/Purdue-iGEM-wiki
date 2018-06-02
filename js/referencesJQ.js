let $reference;
let originalRefColor;

$(document).ready(() => {
	$('a.ref-link').on('click', event => {
		let refNum = $(event.currentTarget)[0].innerHTML.split('[')[1].split(']')[0];
		console.log(refNum);
		$reference = $('.references').children()[refNum-1];
		originalRefColor = $($reference).css('backgroundColor');
		$('html, body').animate({
			scrollTop: $($reference).offset().top-100
		}, 1000);//.promise().then(briefHighlight());
		briefHighlight()
	});
});

function briefHighlight() {
	console.log(originalRefColor);
	console.log($reference);
	$reference.style.transition = "background-color 0s";
	$($reference).addClass('highlight');
	//$reference.style.transition = "background-color 3s";
	// $($reference).css({
	// 	backgroundColor:originalRefColor
	// });
	setTimeout(removeHighlight, 1000);
	//$($reference).toggle('highlight');
}

function removeHighlight() {
	$reference.style.transition = "background-color 2s";
	$($reference).removeClass('highlight');
}