import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles(() => ({
    root: {
       marginBottom: 4,
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
           padding: '10px 15px 10px 12px !important',
           "&:focus": {
               backgroundColor: 'inherit'
           }
       }
    },
    icon: {
        top: "43% !important",
        right: "10px !important"
    },
    label: {
        marginBottom: 5,
        color: '#CAD1DA'
    },
    error: {
        position: "absolute",
    },
    wrapper: {
        position: "relative",
    }
}))
