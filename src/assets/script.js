(() => {
	function masonry() {
		const width = window.screen.width;
		let gutter = 10;
		let columnWidth = 200;

		if (width > 1000) {
			gutter = 30;
		} else if (width > 798) {
			gutter = 20;
		} else {
			columnWidth = 150;
		}
		const elem = document.querySelector(".homepage-images");
		new Masonry(elem, {
			itemSelector: "a",
			columnWidth: columnWidth,
			gutter: gutter,
		});
	}

	addEventListener("DOMContentLoaded", () => {
		masonry();
		addEventListener("resize", masonry, false, false);
	});
})();
