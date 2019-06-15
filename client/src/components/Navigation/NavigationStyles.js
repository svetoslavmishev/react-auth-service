import { createStyles } from '@material-ui/styles';

const styles = (theme: Theme) => createStyles({
    root: {
        flexGrow: 1,
        background: 'red'
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
});

export default styles;