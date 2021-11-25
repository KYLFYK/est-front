/**
 * Interface for option value. 
 * Use for simple components as BaseDropDown and others
 */
export interface IOption  {
    value: string | number,
    label: string,
}

export type TServerLanguages = "ru" | "zh"
export type TClientLanguages = "ru" | "cn"
