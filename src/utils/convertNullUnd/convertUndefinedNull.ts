export const undefinedStringAndNull = (value:string | null | undefined) => {
    if(value === null || value === undefined){
        return ''
    }
    return value
}