const style = {
    font: '8px retro',
    titleFont: '8px gameboy', // TODO fix placement issues in Firefox
    //titleFont: '8px retro', // this one works in Firefox correctly
    textShift: {
        sx: 0,
        sy: 0,
    },

    holdBeforeStart: 2.5,
    titleTimeout: 7,
    scoreTimeout: 20,

    fadeIn: .5,
    keep:   .3,
    fadeOut: 1,

    cellSize: 14,
    repairBlinkPeriod: 0.3,
    destroyExplosions: 150,

    border: '#252123',

    color: {
        // kirokaze - default palette
        c0: '#332c50',
        c1: '#46878f',
        c2: '#94e344',
        c3: '#e2f3e4',
    },

    palette: {
        sand: {
            c0: '#393829',
            c1: '#7b7162',
            c2: '#b4a56a',
            c3: '#e6d69c',
        },
        blue: {
            c0: '#102533',
            c1: '#42678e',
            c2: '#6f9edf',
            c3: '#cecece',
        },
        cga0: {
            c0: '#000000',
            c1: '#55ff55',
            c2: '#ff5555',
            c3: '#ffff55',
        },
        cga1: {
            c0: '#000000',
            c1: '#ff55ff',
            c2: '#55ffff',
            c3: '#ffffff',
        },
        sweet: {
            c0: '#253b46',
            c1: '#18865f',
            c2: '#61d162',
            c3: '#ebe7ad',
        },
        // jb4 for JetBoy
        jet: {
            c0: '#260016',
            c1: '#00bff3',
            c2: '#ed008c',
            c3: '#daf3ec',
        },
        boy: {
            c0: '#2a3d22',
            c1: '#597842',
            c2: '#6a9c44',
            c3: '#a8cc45',
        },

        // pokemon palette
        purple: {
            c0: '#181010',
            c1: '#84739c',
            c2: '#f7b58c',
            c3: '#ffefff',
        },
        vapor: {
            c0: '#521296',
            c1: '#8a1fac',
            c2: '#d4864a',
            c3: '#ebdb5e',
        },
        aqu4: {
            c0: '#002b59',
            c1: '#005f8c',
            c2: '#00b9be',
            c3: '#9ff4e5',
        },
        amber: {
            c0: '#0d0405',
            c1: '#6e2220',
            c2: '#d35600',
            c3: '#fed018',
        },
        astro: {
            c0: '#1f084d',
            c1: '#3d4466',
            c2: '#24b3b3',
            c3: '#e2e6cf',
        },
        // mist gb palette
        mist: {
            c0: '#2d1b00',
            c1: '#1e606e',
            c2: '#5ab9a8',
            c3: '#c4f0c2',
        },
        // earthbound gb plain flavour palette
        earthbound: {
            c0: '#1b1b1b',
            c1: '#564295',
            c2: '#9594c0',
            c3: '#d5e6cb',
        },
        // 2bit demichrome palette
        demichrome: {
            c0: '#211e20',
            c1: '#555568',
            c2: '#a0a08b',
            c3: '#e9efec',
        },
        // rustic gb palette
        rustic: {
            c0: '#2c2137',
            c1: '#764462',
            c2: '#a96868',
            c3: '#edb4a1',
        },
        // coral 4 palette
        coral: {
            c0: '#68518a',
            c1: '#7c9aac',
            c2: '#f4949c',
            c3: '#ffd0a4',
        },
        // deadland 2-bit palette
        deadland: {
            c0: '#330126',
            c1: '#7b6149',
            c2: '#8bb5b3',
            c3: '#d9e6fa',
        },
        // dune-gb palette
        dune: {
            c0: '#320404',
            c1: '#e67718',
            c2: '#dcac70',
            c3: '#edcda7',
        },
    },
}
