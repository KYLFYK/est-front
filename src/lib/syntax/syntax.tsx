// для создания окончания слов, в зависимости от количества
export const digitToSyntax = (num: number) => {
    if(num % 10 === 0 || num % 10 > 4 || (num % 100 > 4 && num % 100 < 21)) return 'ов'
    if(num % 10 === 1) return ''
    if(num % 10 > 1 && num % 10 < 5) return 'a'
}

// для перевода в формат денег
export const formatNumbersToCurrency = (value: number, currency = "RUB" ) => {
    return `${new Intl.NumberFormat('ru-RU').format(value)} ₽`
}