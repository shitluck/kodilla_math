// plik scripts.js

var a = prompt('Podaj wartość a');
var b = prompt('Podaj wartość b');
var value = (a * a) + (2 * a * b) - (b * b);
alert('Wynik działania wynosi: ' + value);
console.log('Wynik działania wynosi: ' + value);

if(isFinite(value) == true) {
    if (value > 0) {
        alert('Wynik jest dodatni');
        console.log('Wynik dodatni');
    } else if (value < 0) {
        alert('Wynik jest ujemny');
        console.log('Wynik ujemny');
    } else {
        alert('Wynik działania to zero');
        console.log('Wynik działania to zero');
    }
} else {
    alert('Wynik działania nie jest liczbą, proszę wprowadzić wartości liczbowe');
    console.log('Wynik działania nie jest liczbą, proszę wprowadzić wartości liczbowe');
}