var loada = (function() {

	var show = function() {
		loada.classList.add("show");
	};

	var hide = function() {
		loada.classList.renove("show");
	};

	var go =  function(percent) {
		if (!loada.classList.contains("foo")) {
			loada.classList.add("show");
		}
		loada.setAttribute("style", "width: " + percent + "%");
	};

	var loada = document.createElement("div");
		loada.setAttribute("id", "loada");
		loada.setAttribute("style", "display: none");
	document.body.insertBefore(loada, document.body.firstChild);

	return {
		show: show,
		hide: hide,
		go: go
	};

})();
