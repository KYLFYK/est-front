import * as React from "react";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import TableHead from "@mui/material/TableHead";
import TableSortLabel from "@mui/material/TableSortLabel";
import { visuallyHidden } from "@mui/utils";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { FC } from "react";
import {
  getComparator,
  rows,
  stableSort,
} from "../../../../../Agency/components/MyObjectsTab/components/PersonalCabinetTab/components/Agents/Transformation";
export type Order = "asc" | "desc";
import Typography from "../../../../../../../shared/Typography/Typography";
import css from "./PurseTableOperation.module.scss";

type HeadCell = {
  disablePadding: boolean;
  id: keyof Data;
  label: string;
  numeric: boolean;
};

type Data = {
  date: string | number;
  sum: string;
  ads: string;
  typeTransaction: string;
  comment: string;
};

const headCells: HeadCell[] = [
  {
    id: "date",
    numeric: true,
    disablePadding: true,
    label: "Дата",
  },
  {
    id: "sum",
    numeric: true,
    disablePadding: false,
    label: "Сумма",
  },
  {
    id: "ads",
    numeric: true,
    disablePadding: false,
    label: "Объявление",
  },
  {
    id: "typeTransaction",
    numeric: true,
    disablePadding: false,
    label: "Тип сделки",
  },
  {
    id: "comment",
    numeric: true,
    disablePadding: false,
    label: "Комментарий",
  },
];

type ActualObjectType = {
  operations: Array<{
    id: string;
    date: string;
    sum: string;
    ads: string;
    typeTransaction: string;
    comment: string;
  }>;
};

export const PurseTableOperation: FC<ActualObjectType> = ({ operations }) => {
  const [order, setOrder] = React.useState<Order>("asc");
  const [orderBy, setOrderBy] = React.useState<keyof Data>("date");
  const [selected, setSelected] = React.useState<readonly string[]>([]);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(12);

  // useEffect(() => {
  //     dispatch(getObjects())
  // }, [dispatch])

  const handleRequestSort = (
    event: React.MouseEvent<unknown>,
    property: keyof Data
  ) => {
    if (property !== "typeTransaction") {
      const isAsc = orderBy === property && order === "asc";
      setOrder(isAsc ? "desc" : "asc");
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

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const isSelected = (name: string) => selected.indexOf(name) !== -1;

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  return (
    <Box >
      <>
        <div>
          <TableContainer>
            <Table
              aria-labelledby="tableTitle"
              size={"small"}
            >
              <EnhancedTableHead
                numSelected={selected.length}
                order={order}
                orderBy={orderBy}
                onSelectAllClick={handleSelectAllClick}
                onRequestSort={handleRequestSort}
                rowCount={operations.length}
                headCells={headCells}
              />

              <TableBody>
                {/* if you don't need to support IE11, you can replace the `stableSort` call with:
              rows.slice().sort(getComparator(order, orderBy)) */}
                {stableSort(operations, getComparator(order, orderBy))
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((operat, index) => {
                    const isItemSelected = isSelected(operat.date);
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
                          width={"350px"}
                        >
                          <Typography
                            size={"small"}
                            className={css.heightTable}
                          >
                            {operat.date
                              .substring(0, 10)
                              .split("-")
                              .reverse()
                              .join(".")}
                            <div style={{ marginLeft: "5px" }}>
                              {operat.date.substring(11, 16)}
                            </div>
                          </Typography>
                        </TableCell>
                        <TableCell width={"100px"} align="left">
                          <Typography
                            size={"small"}
                            className={css.heightTable}
                          >
                            {operat.sum}
                          </Typography>
                        </TableCell>
                        <TableCell width={"230px"} align="left">
                          <Typography
                            size={"small"}
                            className={css.heightTable}
                          >
                            {operat.ads}
                          </Typography>
                        </TableCell>
                        <TableCell width={"230px"} align="left">
                          <Typography size={"small"}>
                            {operat.typeTransaction}
                          </Typography>
                        </TableCell>
                        <TableCell width={"100px"} align="left">
                          <Typography
                            size={"small"}
                            className={css.heightTable}
                          >
                            {operat.comment}
                          </Typography>
                        </TableCell>
                      </TableRow>
                    );
                  })}

                {emptyRows > 0 && (
                  <TableRow
                    style={{
                      height: 33 * emptyRows,
                    }}
                  >
                    <TableCell colSpan={6} />
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
};

type EnhancedTableProps = {
  numSelected?: number;
  onRequestSort: (
    event: React.MouseEvent<unknown>,
    property: keyof Data
  ) => void;
  onSelectAllClick: (event: React.ChangeEvent<HTMLInputElement>) => void;
  order: Order;
  orderBy: string;
  rowCount: number;
  headCells: HeadCell[];
};

const EnhancedTableHead: React.FC<EnhancedTableProps> = ({
  numSelected,
  onRequestSort,
  onSelectAllClick,
  order,
  orderBy,
  rowCount,
  headCells,
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
            align={"left"}
            padding={headCell.disablePadding ? "none" : "normal"}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              // active={orderBy === headCell.id}
              hideSortIcon={false}
              active
              direction={orderBy === headCell.id ? order : "asc"}
              onClick={createSortHandler(headCell.id)}
              IconComponent={() => {
                return (
                  <KeyboardArrowDownIcon
                    fontSize={"small"}
                    style={{
                      color: orderBy === headCell.id ? "#C5A28E" : "#96A2B5",
                      transform:
                        order === "asc" && orderBy === headCell.id
                          ? "rotate(180deg)"
                          : "",
                    }}
                  />
                );
              }}
            >
              <Typography>
                {headCell.label !== "none" ? headCell.label : ""}
              </Typography>
              {orderBy === headCell.id ? (
                <Box component="span" sx={visuallyHidden}>
                  {order === "desc" ? "sorted descending" : "sorted ascending"}
                </Box>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
};

export default PurseTableOperation;
