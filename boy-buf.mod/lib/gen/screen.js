function screen() {
    // setup gameboy screen resolution
    const tune = $.env.tune
    ctx.width = tune.width
    ctx.height = tune.height
    ctx.canvas.width = tune.width
    ctx.canvas.height = tune.height

    // create sub-screens
    lab.screen.touch('menu')
    augment(lab.screen.menu, dna.trait.hidable)

    lib.gen.layout()
    lib.gen.design()
    lib.gen.battle()

    augment(lab.screen.title, dna.trait.hideAndBind)
}
