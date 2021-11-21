var  timerId;
var  searchBoxDom  =  document.getElementById('search-box');

// Esto "simula" la llamada a API que tardaria mucho tiempo
function  makeAPICall() {
	var  throttleDom  =  document.getElementById('throttle-count');
	var  throttleCount  =  throttleDom.innerHTML  ||  0;
	
	throttleDom.innerHTML  =  parseInt(throttleCount) +  1
}

// Throttle: El input de busqueda, necesita ser "regulado" y ejecutado cada X tiempo
var  throttleFunction  =  function (func, delay) {
	// console.log('1- timerID es:', timerId);

	// Si el timeout esta seteado, no necesita setearse de vuelta
	if (timerId) {
		// console.log('2- timerID es:', timerId);
		return
	}

	// "Agendamos" un setTimeout con un X delay especifico
	timerId  =  setTimeout(function () {
		func()
		
		// Una vez que se ejecuto este timeout, recien se a a ejecutar el otro
		timerId  =  undefined;
	}, delay)
}

// Event listener en el input
searchBoxDom.addEventListener('input', function () {
	var  apiCallCountDom  =  document.getElementById('show-api-call-count');
	var  apiCallCount  =  apiCallCountDom.innerHTML  ||  0;
	apiCallCount  =  parseInt(apiCallCount) +  1;

	// Updateamos la cantidad de veces llamado
	apiCallCountDom.innerHTML  =  apiCallCount;

	// Throttle
	throttleFunction(makeAPICall, 1000)
})


// RESIZE
if(window.attachEvent) {
    window.attachEvent('onresize', function() {
        alert('attachEvent - resize');
    });
}
else if(window.addEventListener) {
    window.addEventListener('resize', function() {
        console.log('addEventListener - resize');
    }, true);
}
else {
    //The browser does not support Javascript event binding
}


// SCROLL
window.addEventListener('scroll',(event) => {
    console.log('Scrolling...');
});