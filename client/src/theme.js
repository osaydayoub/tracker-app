import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        primary: { main: '#0f766e' },
        secondary: { main: '#9333ea' },
    },
    shape: { borderRadius: 12 },
    typography: {
        fontFamily: `'Inter', system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif`,
    },
});

export default theme;