/*
- A `js/second.js` fájlban dolgozz!
- Írj egy olyan függvénykifejezést, amely paraméterként kap egy tetszőleges 
típusú elemeket tartalmazó tömböt és egy tetszőleges primitív értéket!
- A függvény neve `checker` legyen!
- A függvény __visszatérési értéke__ egy objektum, amely a következő 
property-ket tartalmazza:
- `exists`: Értéke true/false attól függően, hogy a második paraméterként 
megadott érték megtalálható-e a tömbben
- `index`: Értéke egy szám; ha a második paraméterként megadott érték 
megtalálható a tömbben, akkor a tömbben lévő indexe, 
ha nem, akkor -1 legyen az értéke
- `allElementsAreNumbers`: Értéke true/false attól függően, 
hogy a tömb minden eleme number típusú-e vagy sem
- `someElementsAreNumbers`: Értéke true/false attól függően, 
hogy a tömbben van-e number típusú elem vagy sem
*/
let numberArray = ['Gergely', 'Evelin', '145', 'József'];
let primitive = 'ly';
let output;
const checker = function (numberArray, primitive) {
	output = ({
		exists: numberArray.includes(primitive) ? true : false,
		index: numberArray.indexOf(primitive),
		allElementsAreNumbers: numberArray.every(function (element) {
			return typeof element === 'number';
		}), // Értéke true/false attól függően, hogy a tömb minden eleme number típusú-e vagy sem
		someElementsAreNumbers: numberArray.some(function (element) {
			return typeof element === 'number';
		}),
	});
	console.log(output);
	return output;
}