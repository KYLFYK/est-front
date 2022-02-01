// тут описываем горизонтальный подтаб "Каталог заявок", который является частью таба "Заявки на просмотр"
import * as React from "react";
import {getComparator, rows, stableSort} from "../../../../../Agency/components/MyObjectsTab/components/PersonalCabinetTab/components/Agents/Transformation";
import Box from "@mui/material/Box";
import TableContainer from "@mui/material/TableContainer";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";

import TablePagination from "@mui/material/TablePagination";
import {Order} from "../../../../../Agency/components/MyObjectsTab/components/PersonalCabinetTab/components/Agents/AgentsTable";
import {makeStyles} from "@material-ui/core";
import TableHead from "@mui/material/TableHead";
import TableSortLabel from "@mui/material/TableSortLabel";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import {visuallyHidden} from "@mui/utils";
import css from "./Catalog.module.scss";
import Typography from "../../../../../../../shared/Typography/Typography";

type Data = {
    name: string
    convenientTime: string
    applicationDate: string
    agentName: string
    typeContract: string
    object: string
    priceObject: string
    status: string
}
type HeadCell = {
    disablePadding: boolean;
    id: keyof Data;
    label: string;
    numeric: boolean;
}
const headCells: HeadCell[] = [
    {
        id: 'name', numeric: true, disablePadding: false, label: 'Контакты',
    },
    {
        id: 'convenientTime', numeric: true, disablePadding: false, label: 'Удобное время',
    },
    {
        id: 'applicationDate', numeric: true, disablePadding: false, label: 'Дата заявки',
    },
    {
        id: 'agentName', numeric: true, disablePadding: false, label: 'Агент',
    },
    {
        id: 'typeContract', numeric: true, disablePadding: false, label: 'Тип сделки',
    },
    {
        id: 'object', numeric: true, disablePadding: true, label: 'Объекты',
    },
    {
        id: 'priceObject', numeric: true, disablePadding: true, label: 'Цена объекта',
    },
    {
        id: 'status', numeric: true, disablePadding: true, label: 'Статус',
    },
];

export const useStyles = makeStyles(() => ({
    grid: {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr'
    },
    cursor:{
        cursor:"pointer",
        height: 80 ,

    }
}))
type ActualObjectType = {
    onClick?:(idOffers:string)=>void
    agents: Array<{
        name: string
        phone: string
        email: string
        convenientTime: string
        applicationDate: string
        applicationTime: string
        agentName: string
        typeContract: string
        object: string
        priceObject: string
        status: string
        idOffers: string
        url: string
    }>
}

const ApplicationsViewCatalog: React.FC<ActualObjectType> = ({agents,onClick}) => {

    const classes = useStyles()

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
        if (property !== "name") {
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
                                        const fullName = agent.agentName.split(' ')
                                        const object =agent.object.split(' ')
                                        return (
                                            <TableRow
                                                hover
                                                role="checkbox"
                                                aria-checked={isItemSelected}
                                                tabIndex={-1}
                                                key={agent.idOffers}
                                                selected={isItemSelected}
                                                onClick={()=>{
                                                    onClick &&  onClick(agent.idOffers)
                                                }}
                                                className={classes.cursor}
                                            >
                                                <TableCell
                                                    component="th"
                                                    id={labelId}
                                                    scope="row"
                                                    padding="none"
                                                    width={'165px'}
                                                >
                                                    <Typography className={css.heightTable} size={'small'}>
                                                        {agent.name}
                                                    </Typography> <Typography className={css.heightTable}>
                                                        {agent.email}
                                                    </Typography> <Typography className={css.heightTable}>
                                                        {agent.phone}
                                                    </Typography>
                                                </TableCell>
                                                <TableCell
                                                    width={'128px'}
                                                    title={agent.status.toString()}
                                                    align="left">
                                                    <Typography className={css.heightTable}>
                                                        {agent.convenientTime}
                                                    </Typography>
                                                </TableCell>
                                                <TableCell
                                                    width={'114px'}
                                                    align="left">
                                                    <Typography className={css.heightTable}>
                                                        {agent.applicationDate}
                                                    </Typography>
                                                    <Typography className={css.heightTable}>
                                                        {agent.applicationTime}
                                                    </Typography>
                                                </TableCell>
                                                <TableCell
                                                    width={'83px'}
                                                    align="left"
                                                >
                                                    <Typography className={css.heightTable}>
                                                        {fullName[0]}
                                                    </Typography>
                                                    <Typography className={css.heightTable}>
                                                        {fullName[1]}
                                                    </Typography>
                                                </TableCell>
                                                <TableCell
                                                    width={'114px'}>
                                                    <Typography className={css.heightTable}>
                                                        {agent.typeContract}
                                                    </Typography>
                                                </TableCell>
                                                <TableCell width={'102px'}>
                                                    <Typography className={css.heightTable}>
                                                        {object[0]}
                                                    </Typography>
                                                    <Typography className={css.heightTable}>
                                                        {object[1]}
                                                    </Typography>
                                                </TableCell>
                                                <TableCell width={'110px'}>
                                                    <Typography className={css.heightTable}>
                                                        {agent.priceObject}
                                                    </Typography>
                                                </TableCell>
                                                <TableCell width={'110px'}>
                                                    <Typography className={css.heightTable}>
                                                        {agent.status}
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

type EnhancedTableProps = {
    numSelected?: number;
    onRequestSort: (event: React.MouseEvent<unknown>, property: keyof Data) => void;
    onSelectAllClick: (event: React.ChangeEvent<HTMLInputElement>) => void;
    order: Order;
    orderBy: string;
    rowCount: number;
    headCells: HeadCell[]
}

const EnhancedTableHead: React.FC<EnhancedTableProps> = ({
                                                                    numSelected,
                                                                    onRequestSort,
                                                                    onSelectAllClick,
                                                                    order,
                                                                    orderBy,
                                                                    rowCount,
                                                                    headCells
                                                                }) => {

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
                                                                  color: orderBy === headCell.id ? '#C5A28E' : '#96A2B5',
                                                                  transform: order === 'asc' && orderBy === headCell.id ? 'rotate(180deg)' : ''
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

export default ApplicationsViewCatalog