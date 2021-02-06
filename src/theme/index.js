import { createMuiTheme } from '@material-ui/core/styles';

import PALETTE from './palette';
import propOverrides from './propOverrides';
import styleOverrides from './styleOverrides';

export default createMuiTheme({
    props: propOverrides,
    overrides: styleOverrides,
    palette: PALETTE
});

export { PALETTE };