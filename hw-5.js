// Номер месяца для проверки
let monthNumber = 12;

// Проверка на корректность введенного номера месяца
if (monthNumber > 13 || monthNumber < 1) {
    console.log("Ошибка: номер месяца должен быть в диапазоне от 1 до 12.");
} else {
    // Определение сезона с помощью оператора switch
    let season;
    
    switch (monthNumber) {
        case 12:
        case 1:
        case 2:
            season = "зима";
            break;
        case 3:
        case 4:
        case 5:
            season = "весна";
            break;
        case 6:
        case 7:
        case 8:
            season = "лето";
            break;
        case 9:
        case 10:
        case 11:
            season = "осень";
            break;
    }

    console.log(`Месяц под номером ${monthNumber} относится к сезону "${season}".`);
}