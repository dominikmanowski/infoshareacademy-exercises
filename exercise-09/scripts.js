/*Zadanie domowe nr9.

Na podstawie tablicy userów: [ {firstName: 'Tomasz', lastName: 'Doe', age: 23, city: 'London', id: 1}, {firstName: 'Monika', lastName: 'Brosman', age: 35, city: 'Sosnowiec', id: 2}, {firstName: 'Witek', lastName: 'Pitt', age: 40, city: 'Chicago', id: 3}, {firstName: 'Kasia', lastName: 'Belucci', age: 15, city: 'Bruksela', id: 4} ];

    stworzyć dynamicznie tabelę i wypełnić ją danymi z tablicy users. (mamy!)

    A.
        Pierwsza komórka powinna zawierać checkbox, zaznaczenie checkboxa ma wyświetlić w konsoli ID danego użytkownika
        Ostatnia komórka powinna zawierać X z klasą remove-icon, który usuwa dany rząd
        rząd powinien zawierać klasę table-row
        komórka powinna zawierać klasę table-cell
        najechanie na rząd ma go podświetlić

    B.
        nad tabela być formularz, który pobiera dane usera i puszuje go do tablicy users i od razu pokazuje na widoku.
        formularz ma mieć select, z 5 miastami do wyboru (Twoja decyzja), pozostałe wartości pobrane z inputów textowych
        przycisk do dodania użytkownika ma być odblokowany jeśli wiek age > 18 a firstName ma więcej niż 3 litery *!/

    Wykonać A. i B.! Powodzenia!

    Stan początkowy (gotowa tabica z zajęć)*/

const users = [
    {firstName: 'Tomasz', lastName: 'Doe', age: 23, city: 'London', id: 1},
    {firstName: 'Monika', lastName: 'Brosman', age: 35, city: 'Sosnowiec', id: 2},
    {firstName: 'Witek', lastName: 'Pitt', age: 40, city: 'Chicago', id: 3},
    {firstName: 'Kasia', lastName: 'Belucci', age: 15, city: 'Bruksela', id: 4}
];

const $table = $('<table class="table table-dark">').appendTo('body');

const getRowsWithUsers = () => {
    return users.map(user => {
        return $(`
        <tr>
            <td id="id">${user.id}</td>
            <td>${user.firstName}</td>
            <td>${user.lastName}</td>
            <td>${user.age}</td>
            <td>${user.city}</td>
        </tr>
        `)
    })
};

$table.append(getRowsWithUsers());

// Pierwsza komórka powinna zawierać checkbox, zaznaczenie checkboxa ma wyświetlić w konsoli ID danego użytkownika

function addCheckbox() {

    const $firstTdInRow = $('td:first-of-type');

    $firstTdInRow.before('<td><input type="checkbox"></td>');

    function logIDCheckbox() {
        console.log($(this).parent().next().text());
    }

    $('input').on('click', logIDCheckbox);

}
addCheckbox();

// Ostatnia komórka powinna zawierać X z klasą remove-icon, który usuwa dany rząd

function addRowRemover () {

    const $lastTdInRow = $('td:last-of-type');

    $lastTdInRow.after('<td class="remove-icon">X</td>');

    function removeRow() {
        $(this).parent().remove()
    }

    $('.remove-icon').on('click', removeRow);

}
addRowRemover();

// rząd powinien zawierać klasę table-row

$('tr').addClass('table-row');

// komórka powinna zawierać klasę table-cell

$('td').addClass('table-cell');

//najechanie na rząd ma go podświetlić

const $row = $('.table-row');

function highlightOnOver() {
    $(this).addClass('highlight');
}

function highlightOnLeave() {
    $(this).removeClass('highlight');
}

$row.on('mouseenter', highlightOnOver);
$row.on('mouseleave', highlightOnLeave);

// nad tabela być formularz, który pobiera dane usera i puszuje go do tablicy users i od razu pokazuje na widoku.
// formularz ma mieć select, z 5 miastami do wyboru (Twoja decyzja), pozostałe wartości pobrane z inputów textowych
// przycisk do dodania użytkownika ma być odblokowany jeśli wiek age > 18 a firstName ma więcej niż 3 litery

$table.before(`
<form>
    <input type="text" id="firstName" placeholder="Imię">
    <input type="text" id="lastName" placeholder="Nazwisko">
    <input type="text" id="age" placeholder="Wiek">
    <select id="city">
        <option value="Gdańsk">Gdańsk</option>
        <option value="Sopot">Sopot</option>
        <option value="Warszawa">Warszawa</option>
        <option value="Kraków">Kraków</option>
        <option value="Wrocław">Wrocław</option>
    </select>
    <button id="submit" disabled>Dodaj</button>
</form>
`);

const $submitBtn = $('#submit');
const $firstName = $('#firstName');
const $lastName = $('#lastName');
const $age = $('#age');

function isNameAndAgeValid() {
    const MIN_REQUIRED_NAME_LENGTH = 3;
    const MIN_REQUIRED_AGE = 18;
    return $firstName.val().length < MIN_REQUIRED_NAME_LENGTH ||
        $age.val() === '' ||
        parseInt($age.val()) < MIN_REQUIRED_AGE;
}

function validateSubmitBtn() {
    $submitBtn.prop('disabled', isNameAndAgeValid());
}

$firstName.add($age).on('keyup', validateSubmitBtn);

const newUser = () => {
    return $(`
        <tr>
            <td>${$('tr').length + 1}</td>
            <td>${$firstName.val()}</td>
            <td>${$lastName.val()}</td>
            <td>${$age.val()}</td>
            <td>${$('#city').val()}</td>
        </tr>
        `);
};

$submitBtn.on('click', function(event){
    event.preventDefault();
    $table.append(newUser());
    $('input').on('click', logIDCheckbox);
    $('tr').on('click', 'input',logIDCheckbox);
});