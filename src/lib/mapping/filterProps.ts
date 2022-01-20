const compare = [['objectType', 'object-type'], ['secondaryType', 'building-type'], ['floors', 'floor'], ['priceFrom', 'price-from'],
                    ['priceTo', 'price-to'], ['squareFrom', 'square-from'], ['squareTo', 'square-to'], ['planning', 'rooms'], 
                    ['actionType', 'order-type'], ['searchValue', '']]

const optionsMapMemo = () => {
    const map = new Map<any, string>();
    for (const item of compare)
        map.set(item[0], item[1]);
    return map;
}
    
export const getValue = (value: any) => {
    const _value = optionsMapMemo().get(value);
    return _value ? _value : '';
};

const reverseOptionsMapMemo = () => {
    const map = new Map<any, string>();
    for (const item of compare)
        map.set(item[1], item[0]);
    return map;
}
    
export const getProp = (value: any) => {
    const _value = reverseOptionsMapMemo().get(value);
    return _value ? _value : '';
};