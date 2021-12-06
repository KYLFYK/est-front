import * as React from 'react';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Link from "next/link";
import Button from "@mui/material/Button";
import {getComparator, rows, stableSort} from "./Transformation";
import TableHead from "@mui/material/TableHead";
import TableSortLabel from "@mui/material/TableSortLabel";
import {visuallyHidden} from "@mui/utils";
import Toolbar from "@mui/material/Toolbar";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import copy from './copy.svg'
import Image from 'next/image'
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';

export type Order = 'asc' | 'desc';
import css from './Agents.module.scss'
import { FC } from 'react';
type HeadCell = {
    disablePadding: boolean;
    id: keyof Data;
    label: string;
    numeric: boolean;
}

type Data ={
    name: string
    status: boolean
    experience: string
    phone:string
    email:string
    rating: string
    url: string
}

const headCells: HeadCell[] = [
    {
        id: 'name',
        numeric: true,
        disablePadding: true,
        label: 'Имя',
    },
    {
        id: 'status',
        numeric: true,
        disablePadding: false,
        label: 'Статус',
    },
    {
        id: 'experience',
        numeric: true,
        disablePadding: false,
        label: 'Стаж',
    },
    {
        id: 'phone',
        numeric: true,
        disablePadding: false,
        label: 'Контакты',
    },
    {
        id: 'rating',
        numeric: true,
        disablePadding: false,
        label: 'Рейтинг',
    },
    {
        id: 'url',
        numeric: true,
        disablePadding: true,
        label: 'Ссылка-преглашение',
    },
];

type ActualObjectType={
    agents:Array<{
        name:string,
        status:number,
        experience:string,
        phone:string,
        email:string
        rating:number,
        url:string,
        id:number}>
}

export const  ActualObject :FC<ActualObjectType> = ({agents}) => {

    const [order, setOrder] = React.useState<Order>('asc');
    const [orderBy, setOrderBy] = React.useState<keyof Data>('name');
    const [selected, setSelected] = React.useState<readonly string[]>([]);
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(12);

    // useEffect(() => {
    //     dispatch(getObjects())
    // }, [dispatch])

    const handleRequestSort = (
        event: React.MouseEvent<unknown>,
        property: keyof Data,
    ) => {
        if (property !== "phone") {
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
        <Box sx={{width: '1440px'}}>
            <>
                <div>
                    <TableContainer>
                        <Table
                            sx={{width: '1420px'}}
                            aria-labelledby="tableTitle"
                            size={'small'}
                        >
                            <EnhancedTableHead
                                numSelected={selected.length}
                                order={order}
                                orderBy={orderBy}
                                onSelectAllClick={handleSelectAllClick}
                                onRequestSort={handleRequestSort}
                                rowCount={agents.length}
                                headCells={headCells}
                            />


                            <TableBody>
                                {/* if you don't need to support IE11, you can replace the `stableSort` call with:
              rows.slice().sort(getComparator(order, orderBy)) */}
                                {stableSort(agents, getComparator(order, orderBy))
                                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                    .map((agent, index) => {
                                        const isItemSelected = isSelected(agent.name);
                                        const labelId = `enhanced-table-checkbox-${index}`;
                                        return (
                                            <TableRow
                                                hover
                                                role="checkbox"
                                                aria-checked={isItemSelected}
                                                tabIndex={-1}
                                                key={agent.id}
                                                selected={isItemSelected}
                                            >
                                                <div style={{width: '10px'}}></div>
                                                <TableCell
                                                    component="th"
                                                    id={labelId}
                                                    scope="row"
                                                    padding="none"
                                                    title={agent.name}
                                                    width={'350px'}
                                                >
                                                    <Typography className={css.heightTable} >
                                                        {agent.name}
                                                    </Typography>
                                                </TableCell>
                                                <TableCell
                                                    width={'100px'}
                                                    title={agent.status.toString()}
                                                    align="left">
                                                    <Typography className={css.heightTable} color={agent.status === 0 ? "red" :'green'} >
                                                        {agent.status === 0 ? "Не в сети" : "Активен"}
                                                    </Typography>
                                                </TableCell>
                                                <TableCell
                                                    width={'230px'}
                                                    title={agent.experience.toString()}
                                                    align="left">
                                                    <Typography className={css.heightTable}>
                                                        {agent.experience}
                                                    </Typography>
                                                </TableCell>
                                                <TableCell
                                                    width={'230px'}
                                                    title={agent.email.toString()}
                                                    align="left">
                                                    <div className={css.heightTableColumn} >
                                                        <Typography >{agent.phone}</Typography>
                                                        <Typography >{agent.email}</Typography>
                                                    </div>

                                                </TableCell>
                                                <TableCell
                                                    width={'100px'}
                                                    title={agent.rating.toString()}
                                                    align="left"
                                                >
                                                    <Typography className={css.heightTable}>
                                                        {agent.rating}
                                                    </Typography>
                                                </TableCell>
                                                <TableCell >
                                                    <div style={{display:"flex",alignItems:'center'}} className={css.heightTableNude}>
                                                        <Typography color={'nude'}  className={css.heightTable}>
                                                            {agent.url}
                                                            <div className={css.marginImage}>
                                                                <Image src={copy} width={'19'} height={'22'} />
                                                            </div>
                                                        </Typography>
                                                        <DriveFileRenameOutlineIcon className={css.IconPosition}/>
                                                    </div>
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

export const EnhancedTableHead :React.FC<EnhancedTableProps> = ({numSelected,onRequestSort,onSelectAllClick,order,orderBy,rowCount,headCells}) => {

    const createSortHandler =
        (property: keyof Data) => (event: React.MouseEvent<unknown>) => {
            onRequestSort(event, property);
        };

    return (
        <TableHead>
            <TableRow>
                <div style={{width: '10px'}}></div>
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

