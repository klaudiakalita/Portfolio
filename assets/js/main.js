/*
	Miniport by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function($) {

	var	$window = $(window),
		$body = $('body'),
		$nav = $('#nav');

	// Breakpoints.
	breakpoints({
		xlarge:  [ '1281px',  '1680px' ],
		large:   [ '981px',   '1280px' ],
		medium:  [ '737px',   '980px'  ],
		small:   [ null,      '736px'  ]
	});

	// Play initial animations on page load.
	$window.on('load', function() {
		window.setTimeout(function() {
			$body.removeClass('is-preload');
		}, 100);
	});

	// Scrolly.
	$('#nav a, .scrolly').scrolly({
		speed: 1000,
		offset: function() { return $nav.height(); }
	});


	// 🔥 TUTAJ WKLEJASZ MÓJ KOD 🔥

	const modal = document.getElementById("imageModal");
	const modalImg = document.getElementById("modalImg");
	const links = document.querySelectorAll(".open-modal");
	const closeBtn = document.querySelector(".close");

	links.forEach(link => {
		link.addEventListener("click", function(e) {
			e.preventDefault();
			modal.style.display = "block";
			modalImg.src = this.href;
		});
	});

	closeBtn.onclick = function() {
		modal.style.display = "none";
	}

	modal.onclick = function(e) {
		if (e.target === modal) {
			modal.style.display = "none";
		}
	}

})(jQuery);