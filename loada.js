var loada = (function() {

	var loada;

	var show = function() {
		if (!loada.classList.contains("show")) {
			loada.classList.add("show");
		}
	};

	var hide = function() {
		loada.classList.remove("show");
	};

	var go =  function(percent) {

		if (percent > 100) {
			percent = 100;
		}
		loada.style.transitionDuration = "1s, 1s, 1s";
		loada.style.width = percent + "%";
		show();

	};

	var linearProgress = function(totalDuration, remainingDuration) {

		var initialProgress = 100 - (remainingDuration / totalDuration * 100);
			initialProgress = initialProgress.toFixed(4);

		go(initialProgress);
		loada.style.transitionDuration = "1s, 1s, " + (remainingDuration / 1000) + "s";
		setTimeout(function() {
			loada.style.width = "100%";
		}, 10);

	};

	loada = document.createElement("div");
	loada.setAttribute("id", "loada");
	document.body.insertBefore(loada, document.body.firstChild);

	var styles = document.createElement("link");
		styles.setAttribute("rel", "stylesheet");
		styles.setAttribute("href", "https://cdn.rawgit.com/keinu/loada/master/css.css");
	document.head.appendChild(styles);

	return {
		show: show,
		hide: hide,
		go: go,
		linearProgress: linearProgress
	};

})();
