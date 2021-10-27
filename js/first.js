/*
- Írj egy olyan függvénykifejezést, amely paraméterként vár egy egész számokat tartalmazó tömböt! (Inputellenőrzést nem kell végezni.)
- A függvény neve `brutto` legyen!
- A függvény szorozza meg a tömbelemek értékét 1.27-tel, majd pedig 
__térjen vissza__ az elemek egész számra kerekített összegével!
*/

/*let numberArray = [1, 589, 467, 2332]; */
let numberArray = [100, 200, 300];
const brutto = function (numberArray) {
	let accuVar = 0;
	let sum = 0;
	for (let i = 0; i < numberArray.length; i++) {
		sum += numberArray[i]

	}
	sum *= 1.27;
	console.log(sum)
	return sum;
}