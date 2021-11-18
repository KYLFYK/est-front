/**
 * General Component Interface. Use this or extend when providing an interface for new component
 */

export interface IPropsGeneral {
    className?: string,
    onClick?: () => void
}

/**
 * Interface for option value. 
 * Use for simple components as BaseDropDown, some listing and others
 */
 export interface IOption<T = string | number> {
    value: T,
    label: string,
}

export type TServerLanguages = "ru" | "zh"
export type TClientLanguages = "ru" | "cn"

export interface IGeneralResponse<T> {
    success: boolean,
    data: T
}

interface IPaging {
    total_pages: number,
    page_size: number,
}
export interface IGeneralObjectResponse<T> {
    objects: T[],
    paging: IPaging
}

