import { red } from '@mui/material/colors';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

const theme = createTheme({
    typography: {
        fontFamily: [
            'Roboto',
            'Helvetica',
            'Arial'
        ]
    },
    palette: {
        primary: {
            main: red[500],
        },
    },
});

const App = () => {
    return <ThemeProvider theme={theme}>...</ThemeProvider>
}

export default App;
