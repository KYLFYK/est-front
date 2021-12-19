// функции для преобразования дат, например при получении с датапикера дату в текстовом формате, перевести её в число, добавить месяц, вернуть обратно
export const dateToDigit = (date: string = currentDate()) => {
    return Number(date.split('-')[0]) * 12 + Number(date.split('-')[1]);
}
export const digitToDate = (digit?: number) => {
    if (digit) {
        return `${Math.trunc(digit % 12 !== 0
            ? digit / 12
            : digit / 12 - 1)}-${digit % 12 === 0
            ? 12 : digit % 12 < 10
                ? '0' + digit % 12 : digit % 12}-${new Date().getDate() < 10
            ? '0' + new Date().getDate()
            : new Date().getDate()}`
    }
}
export const currentDate = () => {
    return `${new Date().getFullYear()}-${new Date().getMonth() + 1}-${new Date().getDate() < 10 ? '0' + new Date().getDate() : new Date().getDate()}`
}