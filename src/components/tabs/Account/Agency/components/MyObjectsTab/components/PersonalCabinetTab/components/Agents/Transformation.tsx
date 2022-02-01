
export type Order = 'asc' | 'desc';
type Data ={
    name: string;
    object_id: number;
    address: string;
    price: number;
    total_area: string;
    action: number
}

export function createData(
    name: string,
    object_id: number,
    address: string,
    price: number,
    total_area: string,
    action: number,
): Data {
    return {
        name: name,
        object_id,
        address,
        price,
        total_area,
        action
    };
}
export const rows = [
    createData('Cupcake', 1, 'Moscow', 67, '4.3', 0),
    createData('Donut', 2, 'Moscow', 51, '4.9', 0),
    createData('Eclair', 3, 'Moscow', 24, '6.0', 0),
];


export function descendingComparator<T>(a: T, b: T, orderBy: keyof T) {
    if (b[orderBy] < a[orderBy]) {
        return -1;
    }
    if (b[orderBy] > a[orderBy]) {
        return 1;
    }
    return 0;
}

export function getComparator<Key extends keyof any>(
    order: Order,
    orderBy: Key,
): (
    a: { [key in Key]: number | string },
    b: { [key in Key]: number | string },
) => number {
    return order === 'desc'
        ? (a, b) => descendingComparator(a, b, orderBy)
        : (a, b) => -descendingComparator(a, b, orderBy);
}

// This method is created for cross-browser compatibility, if you don't
// need to support IE11, you can use Array.prototype.sort() directly
export function stableSort<T>(array: readonly T[], comparator: (a: T, b: T) => number) {
    const stabilizedThis = array.map((el, index) => [el, index] as [T, number]);
    stabilizedThis.sort((a, b) => {
        const order = comparator(a[0], b[0]);
        if (order !== 0) {
            return order;
        }
        return a[1] - b[1];
    });
    return stabilizedThis.map((el) => el[0]);
}
