import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles(() => ({
    root: {
       backgroundColor: "#fff",
       width: 200,
       borderRadius: 8,
       border: '1px solid #CAD1DA',
       "&::before": {
           display: 'none'
       },
       "&.MuiInput-underline::after": {
           display: 'none'
       },
       "& > .MuiSelect-root": {
           padding: '11px 15px 12px 12px !important',
           "&:focus": {
               backgroundColor: 'inherit'
           }
       }
    },
    icon: {
        top: "43% !important",
        right: "10px !important"
    }
}))
