import { AnyRecord } from 'dns';
import {
    EarlyPaymentButtonsTypes,
    IEarlyPaymentState,
    IPaymentGraph,
    IPeriodPayments,
    PaymentPeriodSelectTypes
} from './ipotek';

export const paymentSchedule = (payments: any, term: any, termPeriodPayments: any, payPeriodPayments: any, payment: any, rate: any ) => {

    //let payments: IPaymentGraph[] = [{month: 0, payment: 0, debt: 0, percent: 0, remainder: statePrice}];
    let flagRecountPayment: boolean
    for (let i = 1; i <= term * 12; i++) {
        // переменная для накопления суммы досрочных платежей за каждый из месяцев
        let summEarlyPay = 0;
        flagRecountPayment = false;
        termPeriodPayments.forEach((pp: any) => {
            if (pp.month === i && pp.payment > 0) {
                summEarlyPay += pp.payment
            }
        });
        for (let j = 0; j < payPeriodPayments.length; j++) {
            if (payPeriodPayments[j].month === i && payPeriodPayments[j].payment > 0) {
                flagRecountPayment = true;
                summEarlyPay += payPeriodPayments[j].payment;
            }
        }
        payments.push({
            month: i,
            payment: payments[i - 1].remainder < payment - payments[i - 1].remainder * rate / Number((12 * 100).toFixed(0))
                ? payments[i - 1].remainder + Number((payments[i - 1].remainder * rate / (12 * 100)).toFixed(0))
                : Number(payment.toFixed(0)) - Number(summEarlyPay),                                                        // fix date(payment) - срок - отображение (Ваш ежемесячный прятёж)
            debt: payments[i - 1].remainder < payment - payments[i - 1].remainder * rate / Number((12 * 100).toFixed(0))
                ? payments[i - 1].remainder + Number((payments[i - 1].remainder * rate / (12 * 100)).toFixed(0)) - Number((payments[i - 1].remainder * rate / (12 * 100)).toFixed(0))
                : Number(payment.toFixed(0)) + Number(summEarlyPay) - Number((payments[i - 1].remainder * rate / (12 * 100)).toFixed(0)),
            percent: Number((payments[i - 1].remainder * rate / (12 * 100)).toFixed(0)),
            remainder: payments[i - 1].remainder < payment - payments[i - 1].remainder * rate / Number((12 * 100).toFixed(0))
                ? 0
                : Number(payments[i - 1].remainder) - (Number((payment - payments[i - 1].remainder * rate / (12 * 100)).toFixed(0)) + Number(summEarlyPay)),
        })
        if (flagRecountPayment) {
            payment = payments[i].remainder * (rate / 1200 + ((rate / 1200) / (Math.pow(1 + rate / 1200, term * 12 - i) - 1)))
        }
    }
}

export const pivotData = (term: any, termPeriodPayments: any, payPeriodPayments: any, earlyPayments: any) => {
    
    for (let i = 0; i < term * 12; i++) {
        termPeriodPayments.push({month: i + 1, payment: 0,})
        payPeriodPayments.push({month: i + 1, payment: 0})
    }

    for (let i = 0; i < term * 12; i++) {
        earlyPayments.filter((er: any) => er.diff === termPeriodPayments[i].month && er.select === PaymentPeriodSelectTypes.ONCE && er.buttons === EarlyPaymentButtonsTypes.TERM).forEach((er: any) => {
            termPeriodPayments[i].payment += er.summ;
            console.log(`${i}`, termPeriodPayments)
        });
        earlyPayments.filter((er: any) => er.diff === payPeriodPayments[i].month && er.select === PaymentPeriodSelectTypes.ONCE && er.buttons === EarlyPaymentButtonsTypes.PAYMENT).forEach((er: any) => {
            payPeriodPayments[i].payment += er.summ;
        });
        earlyPayments.filter((er: any) => er.diff === termPeriodPayments[i].month && er.select === PaymentPeriodSelectTypes.MONTHLY && er.buttons === EarlyPaymentButtonsTypes.TERM).forEach((er: any) => {
            for (let j = er.diff; j < termPeriodPayments.length; j++) {
                termPeriodPayments[j].payment += er.summ
            }
        });
        earlyPayments.filter((er: any) => er.diff === payPeriodPayments[i].month && er.select === PaymentPeriodSelectTypes.MONTHLY && er.buttons === EarlyPaymentButtonsTypes.PAYMENT).forEach((er: any) => {
            for (let j = er.diff; j < payPeriodPayments.length; j++) {
                payPeriodPayments[j].payment += er.summ
            }
        });
    }
}