import localFont from 'next/font/local'

export const helios = localFont({
    src: [
        {
            path: './Helios/helios_regular.otf',
            weight: '400',
            style: 'normal',
            variable: '--helios'
        },
        {
            path: './Helios/helios_light.otf',
            weight: '300',
            style: 'normal',
            variable: '--helios-light'
        },
        {
            path: './Helios/helios_thin.otf',
            weight: '100',
            style: 'normal',
            variable: '--helios-thin'
        },
        {
            path: './Helios/helios_bold.otf',
            weight: '700',
            style: 'normal',
            variable: '--helios-bold'
        },
        {
            path: './Helios/helios_black.otf',
            weight: '900',
            style: 'normal',
            variable: '--helios-black'
        },
    ],
})