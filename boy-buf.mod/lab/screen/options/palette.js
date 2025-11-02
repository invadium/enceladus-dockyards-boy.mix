
function draw() {
    alignCenter()
    baseMiddle()
    fill(env.style.color.c3)
    font(env.style.titleFont)
    text('options', rx(.5), 40)

    if (this.__.menu.current !== 1) return

    font(env.style.font)
    text(env.msg.themeSampler, rx(.5), 115)

    const color = env.style.color

    const s = 12, S = 2*s + 1
    let x = rx(1) - 2*s
    let y = ry(1) - 2*s

    fill(color.c3)
    rect(x, y, s, s)

    fill(color.c1)
    rect(x+s, y, s, s)

    fill(color.c2)
    rect(x, y+s, s, s)

    fill(color.c0)
    rect(x+s, y+s, s, s)

    const hs = -6
    blocky()
    res.pods.draw(4,  x-1*S+hs, y, 2*s, 2*s)
    res.pods.draw(8,  x-2*S+hs, y, 2*s, 2*s)
    res.pods.draw(24, x-3*S+hs, y, 2*s, 2*s)
    res.pods.draw(10, x-4*S+hs, y, 2*s, 2*s)
    res.pods.draw(4,  x-5*S+hs, y, 2*s, 2*s)
}
