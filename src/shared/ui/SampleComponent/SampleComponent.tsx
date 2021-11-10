import { makeStyles, Theme, ThemeOptions } from "@material-ui/core"


const useStyles = makeStyles((theme: Theme) => ({
    root: {
        color: theme.colors.primary
    }
}))

const SampleComponent = () => {
    const classes = useStyles()

    return <div className={classes.root}>this is sample</div>
}

export default SampleComponent

