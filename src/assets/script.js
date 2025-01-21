(() => {
	function masonry() {
		var elem = document.querySelector(".homepage-images");
		new Masonry(elem, {
			itemSelector: "picture",
			columnWidth: 200,
			gutter: 20,
		});
	}

	addEventListener("DOMContentLoaded", () => {
		masonry();
		addEventListener("resize", masonry, false, false);
	});
})();
