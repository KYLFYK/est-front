export const countNameAds = (count: number) => {
    if (count === 0) return "Объявлений не найдено"
    if (count > 100) {
        if (count % 10 === 5 || count % 10 === 6 || count % 10 === 7 || count % 10 === 8 || count % 10 === 9 || count % 10 === 0) return `Найдено ${count} объявлений`
        if (count % 10 === 2 || count % 10 === 3 || count % 10 === 3 || count % 10 === 4) return `Найдено ${count} объявления`
        if (count % 10 === 1) return `Найдено ${count} объявление`
    }
    if (count > 20) {
        if (count % 10 === 5 || count % 10 === 6 || count % 10 === 7 || count % 10 === 8 || count % 10 === 9 || count % 10 === 0) return `Найдено ${count} объявлений`
        if (count % 10 === 2 || count % 10 === 3 || count % 10 === 3 || count % 10 === 4) return `Найдено ${count} объявления`
        if (count % 10 === 1) return `Найдено ${count} объявление`
    }
    if (count > 10) {
        if (count % 10 === 5 || count % 10 === 6 || count % 10 === 7 || count % 10 === 8 || count % 10 === 9 || count % 10 === 0) return `Найдено ${count} объявлений`
        if (count % 10 === 2 || count % 10 === 3 || count % 10 === 3 || count % 10 === 4) return `Найдено ${count} объявлений`
        if (count % 10 === 1) return `Найдено ${count} объявлений`
    }
    if (count % 10 === 1) return `Найдено ${count} объявление`
    if (count % 10 === 2 || count % 10 === 3 || count % 10 === 3 || count % 10 === 4) return `Найдено ${count} объявления`
    if (count % 10 === 5 || count % 10 === 6 || count % 10 === 7 || count % 10 === 8 || count % 10 === 9 || count % 10 === 0) return `Найдено ${count} объявлений`
}