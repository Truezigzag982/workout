input.onButtonPressed(Button.A, function () {
    basic.showString("Statring in....")
    basic.showNumber(3)
    basic.showNumber(2)
    basic.showNumber(1)
    basic.showLeds(`
        . . . . .
        . # # # #
        . # # # #
        . # . . .
        . # . . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        # # # # .
        . . # # .
        . . # # .
        `)
    basic.showString("High kick")
    for (let index = 0; index < 60; index++) {
        music.playMelody("C5 B A G A B C5 - ", 120)
    }
    basic.showString("Resting....")
    basic.showString("...")
    basic.showString("...")
    basic.showString("...")
    for (let index = 0; index < 8; index++) {
        music.playTone(262, music.beat(BeatFraction.Double))
        music.playTone(196, music.beat(BeatFraction.Double))
        music.playTone(220, music.beat(BeatFraction.Double))
        music.playTone(165, music.beat(BeatFraction.Double))
        music.playTone(175, music.beat(BeatFraction.Double))
        music.playTone(131, music.beat(BeatFraction.Double))
        music.playTone(175, music.beat(BeatFraction.Double))
        music.playTone(196, music.beat(BeatFraction.Double))
    }
    basic.showString("JUMPING JACKS")
    basic.showNumber(3)
    basic.showNumber(2)
    basic.showNumber(1)
    for (let index = 0; index < 8; index++) {
        music.playTone(262, music.beat(BeatFraction.Double))
        music.playTone(196, music.beat(BeatFraction.Double))
        music.playTone(220, music.beat(BeatFraction.Double))
        music.playTone(165, music.beat(BeatFraction.Double))
        music.playTone(175, music.beat(BeatFraction.Double))
        music.playTone(131, music.beat(BeatFraction.Double))
        music.playTone(175, music.beat(BeatFraction.Double))
        music.playTone(196, music.beat(BeatFraction.Double))
    }
    basic.showString("SQUADS")
    basic.showNumber(3)
    basic.showNumber(2)
    basic.showNumber(1)
})
input.onButtonPressed(Button.B, function () {
    for (let index = 0; index < 8; index++) {
        music.playTone(330, music.beat(BeatFraction.Breve))
        music.playTone(311, music.beat(BeatFraction.Breve))
        music.playTone(330, music.beat(BeatFraction.Breve))
        music.playTone(392, music.beat(BeatFraction.Breve))
        music.playTone(440, music.beat(BeatFraction.Breve))
        music.playTone(370, music.beat(BeatFraction.Breve))
        music.playTone(349, music.beat(BeatFraction.Breve))
        music.playTone(262, music.beat(BeatFraction.Breve))
    }
})
basic.forever(function () {
	
})
