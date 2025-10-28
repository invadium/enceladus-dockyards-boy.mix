
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
    handleControl(e)
}
