function setup() {
    lab.background = mod['boy-buf'].env.style.border

    lab.spawn($.dna.hud.Transition, {
        fadein: 0,
        keep: env.tune.fadeKeep,
        fadeout: env.tune.fadeOut,
    })
}
