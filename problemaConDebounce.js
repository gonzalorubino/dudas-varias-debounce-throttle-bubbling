var  timerId;
var  searchBoxDom  =  document.getElementById('search-box');

// Esto "simula" la llamada a API que tardaria mucho tiempo
function  makeAPICall() {
	var  debounceDom  =  document.getElementById('debounce-count');
	var  debounceCount  =  debounceDom.innerHTML  ||  0;
	
	debounceDom.innerHTML  =  parseInt(debounceCount) +  1
}

// Debounce: El evento que pasa en el input, necesita ser DEMORADO un X tiempo
var  debounceFunction  =  function (func, delay) {
	// Cancelamos el setTimeout
	clearTimeout(timerId)

	// ejecutamos la funcion despues de un X tiempo
	timerId  =  setTimeout(func, delay)
}

// Event listener en el input
searchBoxDom.addEventListener('input', function () {
	var  apiCallCountDom  =  document.getElementById('show-api-call-count');
	var  apiCallCount  =  apiCallCountDom.innerHTML  ||  0;
	apiCallCount  =  parseInt(apiCallCount) +  1;

	// Updateamos la cantidad de veces llamado
	apiCallCountDom.innerHTML  =  apiCallCount;

	// Debounce
	debounceFunction(makeAPICall, 200)
})