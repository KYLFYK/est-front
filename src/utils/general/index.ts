export const formatNumbersToCurrency = (value: number) => {
    return new Intl.NumberFormat('ru-RU').format(value)
}

export const isUndefined = (value: any) => {
    return value === undefined
}