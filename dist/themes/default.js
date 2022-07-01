// example theme with variants
const white = [
    'hsla(250, 100%, 100%, 0)',
    'hsla(250, 100%, 100%, 0.1)',
    'hsla(250, 100%, 100%, 0.2)',
    'hsla(250, 100%, 100%, 0.3)',
    'hsla(250, 100%, 100%, 0.4)',
    'hsla(250, 100%, 100%, 0.5)',
    'hsla(250, 100%, 100%, 0.6)',
    'hsla(250, 100%, 100%, 0.7)',
    'hsla(250, 100%, 100%, 0.8)',
    'hsla(250, 100%, 100%, 0.9)',
    'hsla(250, 100%, 100%, 1)',
];
const black = [
    'hsla(250, 0%, 0%, 0)',
    'hsla(250, 0%, 0%, 0.1)',
    'hsla(250, 0%, 0%, 0.2)',
    'hsla(250, 0%, 0%, 0.3)',
    'hsla(250, 0%, 0%, 0.4)',
    'hsla(250, 0%, 0%, 0.5)',
    'hsla(250, 0%, 0%, 0.6)',
    'hsla(250, 0%, 0%, 0.7)',
    'hsla(250, 0%, 0%, 0.8)',
    'hsla(250, 0%, 0%, 0.9)',
    'hsla(250, 0%, 0%, 1)',
];
const fontSizes = [
    '0.8rem',
    '0.9rem',
    '1.125rem',
    '1.68rem',
    '1.5rem',
    '2.375rem',
    '2.2rem',
    '5.68rem'
];
export default {
    colors: {
        background: '#030303',
        primary: 'dodgerblue',
        esmerald: '#7CE3CB',
        text: white,
        white: white,
        black: black
    },
    fontSizes: fontSizes,
    shadows: {
        card: '0 0 4px rgba(0, 0, 0, 0.125)',
    },
    gradients: {
        primary: 'linear-gradient(90deg, #7CE3CB -0.15%, #7963B2 83.01%)',
        backgroundGradient: 'linear-gradient(236.03deg, rgba(64, 65, 65, 0.501961) -20.26%, hsla(255, 0%, 0%, 0))'
    },
    variants: {
        card: {
            p: 2,
            bg: 'blue',
            boxShadow: 'card',
            borderRadius: 100,
        },
        badge: {
            display: 'inline-block',
            p: 1,
            color: 'white',
            bg: 'primary',
            borderRadius: 2,
        },
        ['hidden-bullets']: {
            listStyle: 'none'
        },
        ['default-logo']: {
            filter: 'none'
        }
    },
    layouts: {
        expanded: {
            width: [
                'calc(100% - 3.5rem)',
                'calc(100% - 3.5rem)',
                'calc(100% - 3.5rem)',
                '68.75rem'
            ],
            maxWidth: 'calc(100% - 3.5rem)',
            mx: 'auto',
        },
        main: {
            width: [
                'calc(100% - 3.5rem)',
                'calc(100% - 3.5rem)',
                '31rem',
                '61.375rem'
            ],
            mx: 'auto',
        }
    },
    buttons: {
        primary: {
            bg: 'dodgerblue',
            color: 'black',
            p: 2
        }
    },
    text: {
        medium: {
            fontSize: [
                fontSizes[1],
                fontSizes[1],
                fontSizes[2],
                fontSizes[3]
            ],
            lineHeight: [
                '1.8rem',
                '1.8rem',
                '1.8rem',
                '2.75rem'
            ],
            color: 'blue'
        },
        esmerald: {
            color: '#7CE3CB'
        }
    }
};
