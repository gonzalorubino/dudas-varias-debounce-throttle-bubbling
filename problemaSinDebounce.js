var  searchBoxDom  =  document.getElementById('search-box');

function  makeAPICall() {
	// Aca llamariamos una API
}

// Agregamos un evento para escuchar el 'search'
searchBoxDom.addEventListener('input', function () {
	var  showApiCallCountDom  =  document.getElementById('show-api-call-count');
	var  apiCallCount  =  showApiCallCountDom.innerHTML  ||  0;
	
	// Una llamada a la API
	makeAPICall()
	
	apiCallCount  =  parseInt(apiCallCount) +  1;
	// Updateemos el numero de veces llamado el codigo
	showApiCallCountDom.innerHTML  =  apiCallCount;
})