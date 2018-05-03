//1. Napisz funkcję, która przyjmuje trzy parametry - (sender, sms, receiver) a następnie zwraca stringa w następującym formacie:
//
//     "(FROM: sender) (TO: receiver) (MESSAGE: sms)"
//
// UWAGA: - Zwróć uwagę na wielkość liter w imionach oraz brak whitespaces dla sms
//
// Przykładowy wynik dla następujących zmiennych:
//     var sender = 'mikey';
// var sms = '   Hello Jane, i am really tired today, i will call you tommorrow.         ';
// var receiver = 'JANE';
//
// WYNIK = "(FROM: Mikey) (TO: Jane) (MESSAGE: Hello Jane, i am really tired today, i will call you tommorrow.)";

function showSms(sender, sms, receiver) {
    return '(FROM: ' + sender.charAt(0).toUpperCase() + sender.slice(1).toLocaleLowerCase() + ') (TO: ' + receiver.charAt(0).toUpperCase() + receiver.slice(1).toLocaleLowerCase()  + ') (MESSAGE: ' + sms.trim() + ')';
}


//2. Napisz funkcję, która przyjmuje dwa parametry - firstName oraz lastName, a następnie zwraca inicjały rozdzielone kropką, zwrócony string powinien składać się z wielkich liter. Przykładowy wynik dla następujących zmiennych: var firstName = 'john'; var lastName = 'doe';
//
// WYNIK = 'J.D';


function showInitials(firstName, lastName) {
    return firstName[0].toUpperCase() + '.' + lastName[0].toUpperCase();
}

//3. Napisz funkcję, która generuje losową liczbę, zaokrągloną do dwóch liczb po przecinku a następnie zwraca stringa "Twoja szczęśliwa liczba to: TUTAJ_TA_LOSOWA_LICZBA"

function showLuckyNumber() {
    var luckyNumber = Math.random().toFixed(2);
    return 'Twoja szczęśliwa liczba to: ' + luckyNumber;
}

//4. Napraw bugi we funkcji oraz popraw formatowanie nazewnictwa. Funkcja powinna zwrocić sumę tip i price
//
function getDinnerPrice() {
    var tip = 20;
    var price = 100;
    return tip + price;
}

getDinnerPrice(); // musi zwrócić liczbę o wartości 120 (100 + 20)

