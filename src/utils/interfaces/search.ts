export enum SearchFieldsTypes {
    HOUSE_TYPE = 'objectType',
    BUILDING_TYPE = 'secondaryType',
    FLOORS = 'floors',
    PRICE_FROM = 'priceFrom',
    PRICE_TO = 'priceTo',
    SQUARE_FROM = 'squareFrom',
    SQUARE_TO = 'squareTo',
    PLANNING = 'planning',
    SORT = 'sort',
    PAGE = 'page',
    ACTION_TYPE = 'actionType',
    SEARCH_VALUE = 'searchValue',
}

export interface ISearchParamsModel {
    [SearchFieldsTypes.HOUSE_TYPE]?: string,
    [SearchFieldsTypes.BUILDING_TYPE]?: string,
    [SearchFieldsTypes.FLOORS]?: string,
    [SearchFieldsTypes.PRICE_FROM]?: string,
    [SearchFieldsTypes.PRICE_TO]?: string,
    [SearchFieldsTypes.SQUARE_FROM]?: string,
    [SearchFieldsTypes.SQUARE_TO]?: string,
    [SearchFieldsTypes.PLANNING]?: string,
    [SearchFieldsTypes.SORT]?: string,
    [SearchFieldsTypes.PAGE]?: string,
    [SearchFieldsTypes.ACTION_TYPE]?: string,
    [SearchFieldsTypes.SEARCH_VALUE]?: string,
}