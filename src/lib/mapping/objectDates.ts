export const datetoDayFormat = (date: string) => {
    return date.substring(0,10).split('-').reverse().join('.');
}

export const datetoQuarterFormat = (date: string) => {
    let quarter = 1
    if (+date.substring(6,7) > 3 && +date.substring(6,7) < 7) quarter = 2
    if (+date.substring(6,7) > 6 && +date.substring(6,7) < 10) quarter = 3
    if (+date.substring(6,7) > 9) quarter = 4
    return `${quarter} квартал ${date.substring(0,4)}`
}

export const datetoMonthFormat = (date: string) => {
    let month = 'Январь'
    if (+date.substring(6,7) === 2) month = 'Февраль'
    if (+date.substring(6,7) === 3) month = 'Март'
    if (+date.substring(6,7) === 4) month = 'Апрель'
    if (+date.substring(6,7) === 5) month = 'Май'
    if (+date.substring(6,7) === 6) month = 'Июнь'
    if (+date.substring(6,7) === 7) month = 'Июль'
    if (+date.substring(6,7) === 8) month = 'Август'
    if (+date.substring(6,7) === 9) month = 'Сентябрь'
    if (+date.substring(6,7) === 10) month = 'Октябрь'
    if (+date.substring(6,7) === 11) month = 'Ноябрь'
    if (+date.substring(6,7) === 12) month = 'Декабрь'
    return `${month} ${date.substring(0,4)}`
}