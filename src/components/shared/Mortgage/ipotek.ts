export enum PaymentPeriodSelectTypes {
    ONCE = 'once',
    MONTHLY = 'monthly'
}


export enum EarlyPaymentButtonsTypes {
    TERM = "term",
    PAYMENT = "payment"
}

export interface IEarlyPaymentState {
    id: string,
    summ: number,
    date?: string,
    diff: number,
    select: PaymentPeriodSelectTypes,
    buttons: EarlyPaymentButtonsTypes
}

export interface IPeriodPayments {
    month: number,
    payment: number
}

export interface IPaymentGraph {
    month: number,
    payment: number,
    debt: number,
    percent: number,
    remainder: number,
}

