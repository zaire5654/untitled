controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    if (true) {
        game.gameOver(true)
    }
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    mySprite,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f . . . . . . . 
        . . . . . . f f f . . . . . . . 
        . . . . . . f f f . . . . . . . 
        . . . . . . . f . . . . . . . . 
        . . . . . f . f . f . . . . . . 
        . . . . . . f f f . . . . . . . 
        . . . . . . . f . . . . . . . . 
        . . . . . . . f . . . . . . . . 
        . . . . . . . f . . . . . . . . 
        . . . . . . f . f . . . . . . . 
        . . . . . . . f . f . . . . . . 
        . . . . . . . . f . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f . . . . . . . 
        . . . . . . f f f . . . . . . . 
        . . . . . . f f f . . . . . . . 
        . . . . . . . f . . . . . . . . 
        . . . . . . . f . . . . . . . . 
        . . . . . . f f f . . . . . . . 
        . . . . . f . f . f . . . . . . 
        . . . . . . . f . . . . . . . . 
        . . . . . . . f . . . . . . . . 
        . . . . . . f . f . . . . . . . 
        . . . . . f . . . f . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `],
    500,
    false
    )
})
let mySprite: Sprite = null
scene.setBackgroundImage(img`
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999997777799999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999997777799999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999997777799999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999997777797777799999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999777777777797777779999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999977777777777777777777779999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999977777777777777777777779999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999997777777777777777777777779999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999777777777777777777777777777999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999777777777777777777777777777799777777779999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999777777777e77777777777777777777777777779999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999777777777777777777777777777777777777779999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999997777777777777777777777777777777777777779999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999977777777777777777777777777777777777777779999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999977777777777777777777777777777777777777777777779999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999777777777777777777777777777777777777777777777777999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999777777777777777777777777777777777777777777777777999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999997777777777777777777777777777777777777777777777777999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999997777777777777777777777777777777777777777777777777799999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999997777777777777777777777777777777777777777777777777799999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999997777777777777777777777777777777777777777779777777799999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999997777777777777777777777777777777777777777779977777799999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999997777777777777777777777777777777777777777779997777799999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999997777777777777777777777777777777777777777779977777799999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999997777777777777777777777777777777777777777779977777799999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999997777777777777777777777777777777777777777779777777799999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999997777777777777777777777777777777777777777777777777799999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999977777777777777777777777777777777777777777777777777799999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999977777777777777777777777777777777777777777777777777799999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999977777777777777777777777777777777777777777777777777799999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999977777777777777777777777777777777777777777777777777999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999977777777777777777777777777777777777777777777777777999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999997777777777777777777777777777777777777777777777779999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999777777777777777777777777777777777777777777799999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999977777777777777777777777777777777777777779999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999997777777777777777777777777777777777777799999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999777777777777e77777777777777777777777999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999977777777777e77777777777777777777777999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999997777777777777777777777777777777777999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999997777777777777777777777777777777777799999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999977777777777777777777777777777777777799999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999777777777777777777777777777797777777799999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999777777777777777777777777777997777777799999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999777777777777997777777777779997777777799999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999777777777777999999eeeee9999999977777999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999777777777777999999eeeee9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999777777777777999999eeeee9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999777779999999999999eeeee9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999eeeeee999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999eeeeee999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999eeeeee999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999eeeeee999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999eeeee999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999eeeee999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999eeeee999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999eeeee999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999eeeee999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999eeeee999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999eeeee999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999eeeee999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999eeeee999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999eeeee999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999eeeee999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999eeeee999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999eeeee999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999eeeee999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999eeeee999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999eeeee999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999eeeee999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999eeeee999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999eeeee999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999eeeee999999999999999999999999999999999999999999999999997777799999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999eeeee999999999999999999999999999999999999999999999999997777799999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999eeeee999999999999999999999999999999999999999999999999997777779999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999eeeee999999999999999999999999999999999999999999999999997777777999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999eeeee999999999999999999999999999999999999999999977777797777777799999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999eeeee999999999999999999999999999999999999999999777777797777777799999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999eeeee999999999999999999999999999999999999999999777777799777777799999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999eeeee999999999999999999999999999999999999999999777777799977777799999999999999999999999999999999999999999999999999999999999999
    99999999977777799999999999999999999eeeee999999999999999999999999999999999999999999777777799997777799999999999999999999999999999999999999997777777777777777777777
    77777977777777777999999999999999999eeeee999999999999999999999999999999999999999999777779999999999999999999999999999999999997777777777777777777777777777777777777
    77777777777777777999999999999999999eeeee999999999999999977777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777799999999999999999999999999999999777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    `)
mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . f f f . . . . . . . . 
    . . . . . f f f . . . . . . . . 
    . . . . . f f f . . . . . . . . 
    . . . . . . f . . . . . . . . . 
    . . . . . . f . . . . . . . . . 
    . . . . . f f f . . . . . . . . 
    . . . . f . f . f . . . . . . . 
    . . . . . . f . . . . . . . . . 
    . . . . . . f . . . . . . . . . 
    . . . . . f . f . . . . . . . . 
    . . . . f . . . f . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite, 100, 100)
forever(function () {
    music.play(music.createSong(hex`0078000408020500001c00010a006400f401640000040000000000000000000000000005000004280008000c00012a0c00100001221000140002222420002400031e252a2400280002222a28002c00012705001c000f0a006400f4010a0000040000000000000000000000000000000002060024002800012006001c00010a006400f401640000040000000000000000000000000000000002180020002400011924002800011928002c0001192c003000011907001c00020a006400f401640000040000000000000000000000000000000003100028002c00041e24272a2c00300002222709010e02026400000403780000040a000301000000640001c80000040100000000640001640000040100000000fa0004af00000401c80000040a00019600000414000501006400140005010000002c0104dc00000401fa0000040a0001c8000004140005d0076400140005d0070000c800029001f40105c201f4010a0005900114001400039001000005c201f4010500058403050032000584030000fa00049001000005c201f4010500058403c80032000584030500640005840300009001049001000005c201f4010500058403c80064000584030500c8000584030000f40105ac0d000404a00f00000a0004ac0d2003010004a00f0000280004ac0d9001010004a00f0000280002d00700040408070f0064000408070000c80003c800c8000e7d00c80019000e64000f0032000e78000000fa00032c01c8000ee100c80019000ec8000f0032000edc000000fa0003f401c8000ea901c80019000e90010f0032000ea4010000fa0001c8000004014b000000c800012c01000401c8000000c8000190010004012c010000c80002c800000404c8000f0064000496000000c80002c2010004045e010f006400042c010000640002c409000404c4096400960004f6090000f40102b80b000404b80b64002c0104f40b0000f401022003000004200300040a000420030000ea01029001000004900100040a000490010000900102d007000410d0076400960010d0070000c800170018001900070103040607090b1c001d000601030507090b`), music.PlaybackMode.UntilDone)
    info.changeScoreBy(1)
})
