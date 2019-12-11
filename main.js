window.addEventListener("load", () => {
	const $hambugerMenu = document.getElementById("hambugerMenu");

	const $mainMenu = document.getElementById("mainMenu");
	const $fragmentOne = document.getElementById("fragmentOne");
	const $fragmentTwo = document.getElementById("fragmentTwo");

	$hambugerMenu.addEventListener("click", () => {
		$mainMenu.classList.toggle("active");
		$fragmentOne.classList.toggle("active");
		$fragmentTwo.classList.toggle("active");
	});
});
