function configure() {
    if ($.env.config.fast) {
        env.style.holdBeforeStart = 0
        env.style.fadeIn = 0
        env.style.fadeOut = 0
        $.env.tune.fadeKeep = 0
        $.env.tune.fadeOut = 0
    }
}

function jumpToMenu() {
    trap.attach(function start() {
        log('hyperjump to the menu')
        trap('menu')
    })
    return true
}

function startNewGame() {
    trap.attach(function start() {
        log('hyperjump to newgame')
        trap('newGame', {
             playerA: {
                 human: true,
                 budget: 1000,
             },
             playerB: {
                 human: false,
                 budget: 1000,
             },
        })
    })
    return true
}

function autostartBattle() {
    const playerA = lab.spawn(dna.Player, {
        name: 'playerA',
        title: 'Player A',
        human: true,
        balance: 1000,
    })
    const playerB = lab.spawn(dna.Player, {
        name: 'playerB',
        title: 'Player B',
        human: false,
        balance: 1000,
    })
    playerB.prev = playerA
    playerA.next = playerB

    const config = $.env.config
    if (config.botA) playerA.human = false
    if (config.botB) playerB.human = false
    if (config.humanA) playerA.human = true
    if (config.humanB) playerB.human = true

    const control = lab.screen.layout.control
    control.autoConstruct(playerA, config.blueprintA)
    control.autoConstruct(playerB, config.blueprintB)

    lab.screen.show()
    trap('battle', playerB)
    return true
}

function hyperjump() {
    const config = $.env.config
    if (config.menu) return jumpToMenu()
    if (config.newgame) return startNewGame()
    if (config.battle) return autostartBattle()
    return false
}
