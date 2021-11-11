/**
 * General Component Interface. Use this or extend when providing an interface for new component
 */

export interface IPropsGeneral {
    className?: string,
    onClick?: () => void
}

/**
 * Interface for option value. 
 * Use for simple components as BaseDropDown and others
 */
 export interface IOption  {
    value: string | number,
    label: string,
}