export default {
    MuiTabs: {
        role: 'navigation'
    },
    MuiSvgIcon: {
        width: 40,
        height: 40
    },

    MuiDialog: {
        onEnter: dialogContainer =>
            dialogContainer.addEventListener('focus', () => {
                const input = dialogContainer.querySelector('input');
                const button = dialogContainer.querySelector('button');
                if (input) input.focus();
                else if (button) button.focus();
            })
    }
};