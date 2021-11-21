/**
 * Vainilla JS:
 * 
 * 
*/

for(let elem of document.querySelectorAll('*')) {
        // elem.addEventListener("click", e => alert(`Capturing: ${elem.tagName}`), true);
        elem.addEventListener("click", e => {
            e.stopPropagation();
            alert(`Bubbling: ${elem.tagName}`)
        });
    };