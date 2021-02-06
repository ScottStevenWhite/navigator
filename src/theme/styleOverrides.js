import PALETTE from './palette';

export default {
    MuiFormControl: {
        root: {
            zIndex: 'initial'
        }
    },
    MuiTab: {
        root: {
            '&$selected': {
                color: `${PALETTE.primary.dark} !important`
            }
        }
    },
    MuiTouchRipple: {
        root: {
            child: {
                opacity: 0.5
            }
        }
    }
};