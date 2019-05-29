import { createMuiTheme } from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/purple';
import green from '@material-ui/core/colors/green';


const muiTheme = createMuiTheme({
    palette: {
        primary: purple,
        secondary: green,
    }
});

const theme = {
    ...muiTheme
    // custom styles
};

export default theme;