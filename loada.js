var loada = (function() {

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

		loada.setAttribute("style", "width: " + percent + "%");
		show();

	};

	var loada = document.createElement("div");
		loada.setAttribute("id", "loada");
	document.body.insertBefore(loada, document.body.firstChild);

	var styles = document.createElement("link");
		styles.setAttribute("rel", "stylesheet");
		styles.setAttribute("href", "https://cdn.rawgit.com/keinu/loada/master/css.css");
	document.head.appendChild(styles);

	return {
		show: show,
		hide: hide,
		go: go
	};

})();
