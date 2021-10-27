/*
- A `js/main.js` fájlban dolgozz!
- Írj egy olyan függvénykifejezést, amely paraméterként egy string-eket tartalmazó tömböt kap (inputellenőrzést nem kell végezni), és __visszaad__ egy HTML-template-et (string)! 
- A függvény neve `generateList` legyen!
- A HTML-template egy lista, amelynek a listaelemei a kapott tömb értékeit tartalmazzák.
*/


let arrayData = ['Gergely', 'Evelin', 'József', 'Mária'];

const generateList = function (arrayData) {
	let html = `<ul>`;
	for (const x of arrayData) {
	  html += `<li>${x}</li>`;
	}
	
	return html += `</ul>`;
}