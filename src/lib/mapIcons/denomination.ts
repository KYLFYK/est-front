export const Denomination = (summ: number) => {
    return summ / 100000 > 1 ? `${summ / 1000000} млн` : `${summ / 1000} тыс`
}