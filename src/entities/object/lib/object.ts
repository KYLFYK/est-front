export const formatNumbersToCurrency = (value: number) => {
    return new Intl.NumberFormat('ru-RU').format(value)
}