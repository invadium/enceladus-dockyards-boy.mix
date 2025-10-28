
function handleControl(e) {
    const tune = $.env.tune
    switch(e.code) {
        case 'Minus':
            tune.scale *= (1 - tune.scaleFactor)
            break

        case 'Equal':
            tune.scale *= (1 + tune.scaleFactor)
            break

        case 'Escape':
            // TODO reset the game?
            break
        case 'F8':
            $.lib.img.screenshot('enceladus-dockyards')
            break
    }
}

function keyDown(e) {

    const action = env.bind.keyMap[e.code]

    if (action) {
        lab.control.player.act(action.id, 0)
    } else {
        handleControl(e)
    }
}
