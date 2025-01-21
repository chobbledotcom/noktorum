(() => {
	function masonry() {
		const width = window.screen.width;
		let gutter = 10;
		if (width > 1000) {
			gutter = 30;
		} else if (width > 798) {
			gutter = 20;
		}
		const elem = document.querySelector(".homepage-images");
		new Masonry(elem, {
			itemSelector: "picture",
			columnWidth: 200,
			gutter: gutter,
		});
	}

	addEventListener("DOMContentLoaded", () => {
		masonry();
		addEventListener("resize", masonry, false, false);
	});
})();
