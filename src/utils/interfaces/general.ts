/**
 * General Component Interface. Use this or extend when providing an interface for new component
 */

export interface IPropsGeneral {
    className?: string,
    onClick?: () => void,
    fill?: string,
}

/**
 * Interface for option value. 
 * Use for simple components as BaseDropDown, some listing and others
 */
 export interface IOption<T = string, G = string | number> {
    label: T,
    value: G,
}

export interface IArticleGeneral {
    text: string,
    title: string
}

export type TServerLanguages = "ru" | "zh"
export type TClientLanguages = "ru" | "cn"

export interface IGeneralResponse<T> {
    success: boolean,
    data: T
}

