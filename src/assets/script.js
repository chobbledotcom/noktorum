(() => {
	let masonryObject;

	function masonry() {
		masonryObject?.destroy();

		const width = window.screen.width;
		let gutter = 10;
		let columnWidth = 200;

		if (width > 1000) {
			gutter = 30;
		} else if (width > 660) {
			gutter = 20;
		} else {
			return;
		}

		const elem = document.querySelector(".homepage-images");
		masonryObject = new Masonry(elem, {
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
