// 21.02.2022
export const  conversionDate = (date:string) => {
    return  date.substr(0,10).split('-').reverse().join('.')
}