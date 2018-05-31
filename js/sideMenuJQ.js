let originalLeft;
let sideMenuOut;
let beforeSideMenuExpand;

$(document).ready(() => {
	console.log($('.basic-page-side-menu').position().left);
	originalLeft = $('.basic-page-side-menu').position().left;
	sideMenuOut = false;

	let $sideMenu = $('.basic-page-side-menu');

	$('.menu-hamburger').on('click', () => {
		toggleSideMenu($sideMenu);
	});

	$('.basic-page').on('click', () => {
		moveSideMenuIn($sideMenu);
	});	

	$sideMenu.on('mouseenter', () => {
		beforeSideMenuExpand = $sideMenu.position().left;
		$sideMenu.css({
			left: beforeSideMenuExpand + Math.abs(originalLeft)
		});
	});
	$sideMenu.on('mouseleave', () => {
		$sideMenu.css({
			left: beforeSideMenuExpand
		});
	});
});

function toggleSideMenu($sideMenu) {
	if(!sideMenuOut) {
		moveSideMenuOut($sideMenu);
	} else {
		moveSideMenuIn($sideMenu);
	}
}

function moveSideMenuOut($sideMenu) {
	let initLeft = originalLeft + 300;
		$sideMenu.css({
			left:initLeft+'px'
		});
	sideMenuOut = true;
}

function moveSideMenuIn($sideMenu) {
	$sideMenu.css({
		left:originalLeft
	});
	sideMenuOut = false;
	beforeSideMenuExpand = originalLeft;
}