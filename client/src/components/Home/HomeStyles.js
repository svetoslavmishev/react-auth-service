import { createStyles } from '@material-ui/styles';

const styles = (theme: Theme) => createStyles({
    root: {
        height: 'calc(100vh - 64px)',
        width: '100%',
    },
    image: {
        backgroundImage: 'url(https://source.unsplash.com/random)',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    },
});

export default styles;
