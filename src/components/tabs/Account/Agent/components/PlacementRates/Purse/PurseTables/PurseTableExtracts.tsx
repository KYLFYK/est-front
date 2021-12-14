import * as React from 'react';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import TableHead from "@mui/material/TableHead";
import TableSortLabel from "@mui/material/TableSortLabel";
import {visuallyHidden} from "@mui/utils";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
export type Order = 'asc' | 'desc';
import css from './PurseTableOperation.module.scss'
import { FC } from 'react';
import {getComparator, rows, stableSort} from "../../../PersonalCabinetTab/components/Agents/Transformation";
import Typography from "../../../../../../../shared/Typography/Typography";

type HeadCell = {
    disablePadding: boolean;
    id: keyof Data;
    label: string;
    numeric: boolean;
}

type Data ={
    id: string
    dateFrom: string
    sum: string
}

const headCells: HeadCell[] = [
    {
        id: 'id',
        numeric: true,
        disablePadding: true,
        label: 'Номер',
    },
    {
        id: 'dateFrom',
        numeric: true,
        disablePadding: false,
        label: 'Дата',
    },
    {
        id: 'sum',
        numeric: true,
        disablePadding: false,
        label: 'Сумма',
    }
];

type  PurseTableExtractsType={
    extracts:Array<{
        id:string
        dateFrom:string
        dateTo:string
        sum:string
    }>
}

export const  PurseTableExtracts :FC<PurseTableExtractsType> = ({extracts}) => {

    const [order, setOrder] = React.useState<Order>('asc');
    const [orderBy, setOrderBy] = React.useState<keyof Data>('sum');
    const [selected, setSelected] = React.useState<readonly string[]>([]);
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(12);

    const handleRequestSort = (
        event: React.MouseEvent<unknown>,
        property: keyof Data,
    ) => {
        if (property !== "sum") {
            const isAsc = orderBy === property && order === 'asc';
            setOrder(isAsc ? 'desc' : 'asc');
            setOrderBy(property);
        }
    };

    const handleSelectAllClick = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.checked) {
            const newSelecteds = rows.map((n) => n.name);
            setSelected(newSelecteds);
            return;
        }
        setSelected([]);
    };

    const handleChangePage = (event: unknown, newPage: number) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
        console.log(event.target.value)
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    const isSelected = (name: string) => selected.indexOf(name) !== -1;

    // Avoid a layout jump when reaching the last page with empty rows.
    const emptyRows =
        page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

    return (
        <Box sx={{ minWidth: 670 }}>
            <>
                <div>
                    <TableContainer>
                        <Table
                            sx={{ minWidth: 650 }}
                            aria-labelledby="tableTitle"
                            size={'small'}
                        >
                            <EnhancedTableHead
                                numSelected={selected.length}
                                order={order}
                                orderBy={orderBy}
                                onSelectAllClick={handleSelectAllClick}
                                onRequestSort={handleRequestSort}
                                rowCount={extracts.length}
                                headCells={headCells}
                            />


                            <TableBody>
                                {/* if you don't need to support IE11, you can replace the `stableSort` call with:
              rows.slice().sort(getComparator(order, orderBy)) */}
                                {stableSort(extracts, getComparator(order, orderBy))
                                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                    .map((extract, index) => {
                                        const isItemSelected = isSelected(extract.dateFrom);
                                        const labelId = `enhanced-table-checkbox-${index}`;
                                        return (
                                            <TableRow
                                                hover
                                                role="checkbox"
                                                aria-checked={isItemSelected}
                                                tabIndex={-1}
                                                key={index}
                                                selected={isItemSelected}
                                            >
                                                <TableCell
                                                    component="th"
                                                    id={labelId}
                                                    scope="row"
                                                    padding="none"
                                                    width={'50px'}
                                                >
                                                    <div style={{display:'flex' ,alignItems:'center'}}>
                                                        <svg style={{marginRight:"6px"}}  width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M4 0H9.5V1H4C3.73478 1 3.48043 1.10536 3.29289 1.29289C3.10536 1.48043 3 1.73478 3 2V14C3 14.2652 3.10536 14.5196 3.29289 14.7071C3.48043 14.8946 3.73478 15 4 15H12C12.2652 15 12.5196 14.8946 12.7071 14.7071C12.8946 14.5196 13 14.2652 13 14V4.5H14V14C14 14.5304 13.7893 15.0391 13.4142 15.4142C13.0391 15.7893 12.5304 16 12 16H4C3.46957 16 2.96086 15.7893 2.58579 15.4142C2.21071 15.0391 2 14.5304 2 14V2C2 1.46957 2.21071 0.960859 2.58579 0.585786C2.96086 0.210714 3.46957 0 4 0V0Z" fill="#1A4862"/>
                                                            <path d="M9.5 3V0L14 4.5H11C10.6022 4.5 10.2206 4.34196 9.93934 4.06066C9.65804 3.77936 9.5 3.39782 9.5 3Z" fill="#1A4862"/>
                                                            <path fillRule="evenodd" clipRule="evenodd" d="M5 11.5C5 11.3674 5.05268 11.2402 5.14645 11.1464C5.24021 11.0527 5.36739 11 5.5 11H7.5C7.63261 11 7.75979 11.0527 7.85355 11.1464C7.94732 11.2402 8 11.3674 8 11.5C8 11.6326 7.94732 11.7598 7.85355 11.8536C7.75979 11.9473 7.63261 12 7.5 12H5.5C5.36739 12 5.24021 11.9473 5.14645 11.8536C5.05268 11.7598 5 11.6326 5 11.5ZM5 9.5C5 9.36739 5.05268 9.24021 5.14645 9.14645C5.24021 9.05268 5.36739 9 5.5 9H10.5C10.6326 9 10.7598 9.05268 10.8536 9.14645C10.9473 9.24021 11 9.36739 11 9.5C11 9.63261 10.9473 9.75979 10.8536 9.85355C10.7598 9.94732 10.6326 10 10.5 10H5.5C5.36739 10 5.24021 9.94732 5.14645 9.85355C5.05268 9.75979 5 9.63261 5 9.5ZM5 7.5C5 7.36739 5.05268 7.24021 5.14645 7.14645C5.24021 7.05268 5.36739 7 5.5 7H10.5C10.6326 7 10.7598 7.05268 10.8536 7.14645C10.9473 7.24021 11 7.36739 11 7.5C11 7.63261 10.9473 7.75979 10.8536 7.85355C10.7598 7.94732 10.6326 8 10.5 8H5.5C5.36739 8 5.24021 7.94732 5.14645 7.85355C5.05268 7.75979 5 7.63261 5 7.5Z" fill="#1A4862"/>
                                                        </svg>
                                                        <Typography size={"small"}  >
                                                            {extract.id}
                                                        </Typography>
                                                    </div>

                                                </TableCell>
                                                <TableCell
                                                    width={'100px'}
                                                    align="left">
                                                        <Typography size={"small"} className={css.marginTypo}   >
                                                            {extract.dateFrom.substring(0,10).split('-').reverse().join('.')}-
                                                            {extract.dateTo.substring(0,10).split('-').reverse().join('.')}

                                                        </Typography>
                                                </TableCell>
                                                <TableCell
                                                    width={'100px'}
                                                    align="left">
                                                        <Typography size={"small"} className={css.marginTypo}   >
                                                            {extract.sum}
                                                        </Typography>
                                                </TableCell>

                                            </TableRow>
                                        );
                                    })}

                                {emptyRows > 0 && (
                                    <TableRow
                                        style={{
                                            height: (33) * emptyRows,
                                        }}
                                    >
                                        <TableCell colSpan={6}/>
                                    </TableRow>
                                )}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </div>
                <TablePagination
                    rowsPerPageOptions={[12]}
                    component="div"
                    count={rows.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                />
            </>
        </Box>
    );
}

type EnhancedTableProps ={
    numSelected?: number;
    onRequestSort: (event: React.MouseEvent<unknown>, property: keyof Data) => void;
    onSelectAllClick: (event: React.ChangeEvent<HTMLInputElement>) => void;
    order: Order;
    orderBy: string;
    rowCount: number;
    headCells:HeadCell[]
}

const EnhancedTableHead :React.FC<EnhancedTableProps> = ({numSelected,onRequestSort,onSelectAllClick,order,orderBy,rowCount,headCells}) => {

    const createSortHandler =
        (property: keyof Data) => (event: React.MouseEvent<unknown>) => {
            onRequestSort(event, property);
        };

    return (
        <TableHead>
            <TableRow>
                {headCells.map((headCell) => (
                    <TableCell
                        key={headCell.id}
                        align={'left'}
                        padding={headCell.disablePadding ? 'none' : 'normal'}
                        sortDirection={orderBy === headCell.id ? order : false}
                    >
                        <TableSortLabel
                            // active={orderBy === headCell.id}
                            hideSortIcon={false}
                            active
                            direction={orderBy === headCell.id ? order : 'asc'}
                            onClick={createSortHandler(headCell.id)}
                            IconComponent={() => {
                                return <KeyboardArrowDownIcon fontSize={'small'}
                                                              style={{
                                                                  color: orderBy===headCell.id ? '#C5A28E': '#96A2B5',
                                                                  transform: order==='asc' && orderBy===headCell.id ?'rotate(180deg)':''
                                                              }}
                                />
                            }}
                        >
                            <Typography>
                                {headCell.label !== 'none' ? headCell.label : ''}
                            </Typography>
                            {orderBy === headCell.id ? (
                                <Box component="span" sx={visuallyHidden}>
                                    {order === 'desc' ? 'sorted descending' : 'sorted ascending'}

                                </Box>
                            ) : null}
                        </TableSortLabel>
                    </TableCell>
                ))}
            </TableRow>
        </TableHead>
    );
}


export default PurseTableExtracts;