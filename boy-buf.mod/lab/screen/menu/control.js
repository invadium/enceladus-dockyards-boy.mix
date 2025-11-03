const items = [
    'new game',
    'options',
    { section: true, title: 'player A'},
    ['human', 'bot', 'hybrid'],
    ['$1000', '$1200', '$1600', '$2000', '$400', '$600', '$800'],
    { section: true, title: 'player B'},
    ['bot', 'human', 'hybrid'],
    ['$1000', '$1200', '$1600', '$2000', '$400', '$600', '$800'],
]
const SELECT = 3

function onSelect(item) {
    if (item === 'new game') {
        this.__.control.newGame()
    } else if (item === 'options') {
        this.__.control.options()
    }
}

function onIdle() {
    if (env.state !== 'menu') return

    let budget = 1000
    switch(RND(2)) {
        case 0: budget = 1200; break;
        case 1: budget = 1600; break;
        case 2: budget = 2000; break;
    }

    log('======================')
    log('===   AUTOBATTLE   ===')
    log('======================')
    log(`budget: ${budget}`)
    log(`state: ${env.state}`)
    this.__.control.newGame({
        playerA: {
            human: false,
            hybrid: false,
            budget: budget,
        },
        playerB: {
            human: false,
            hybrid: false,
            budget: budget,
        },
    })
}

function setup() {
    const W = 70
    const B = floor((ctx.width-W)/2)
    const menu = this.__.spawn(dna.hud.Menu, {
        Z: 1,
        name: 'menu',
        x: B,
        y: 30,
        w: W,
        h: ctx.height-30,
        background: false,
    })
    this.menu = menu

    augment(this.__, {
        show: function(preservePos) {
            this.hidden = false
            this.control.state = 0
            this.menu.selectFrom({
                items,
                onSelect,
                onIdle,
                preservePos: preservePos,
            })
            //lab.control.player.bindAll(menu)
        },
        hide: function() {
            this.hidden = true
            lab.monitor.controller.releaseAll(menu)

        },
    })
}

function gameConfig() {
    const playerA = this.menu.selectedValue(SELECT)
    const playerB = this.menu.selectedValue(SELECT+3)

    return {
        playerA: {
            human: playerA === 'human' || playerA === 'hybrid',
            hybrid: playerA === 'hybrid',
            budget: parseInt(this.menu.selectedValue(SELECT+1).substring(1)),
        },
        playerB: {
            human: playerB === 'human' || playerB === 'hybrid',
            hybrid: playerB === 'hybrid',
            budget: parseInt(this.menu.selectedValue(SELECT+4).substring(1)),
        },
    }
}

function newGame(config) {
    if (this.state) return
    this.state = 1
    lab.monitor.controller.releaseAll(this.menu)

    config = config || this.gameConfig()

    const activeScreen = this.__
    lab.vfx.itransit(() => {
        activeScreen.hide()
        trap('newGame', config)
    })
}

function options() {
    if (this.state) return
    this.state = 1

    this.__.hide()
    lab.monitor.controller.releaseAll(this.menu)

    trap('options')
}
