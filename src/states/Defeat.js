import Phaser from "phaser"
import StaticSprite from "../sprites/StaticSprite"
import Button from "../sprites/Button"
import {setResponsiveWidth} from "../utils"
import {addCharByChar} from "../utils"

export default class extends Phaser.State {
  init () {}
  preload () {}

  create () {
    let defeatString = "Both your sanity and your app have fallen apart.\nSome people will tell you that you need to fail\nand fail again in order to succeed. Suck it up\nbuttercup and try again. Better luck next time."

    this.background = new StaticSprite({
      game: this.game,
      x: this.game.world.centerX,
      y: this.game.world.centerY,
      asset: "background2"
    })

    this.dialog = new StaticSprite({
      game: this.game,
      x: this.game.world.centerX,
      y: this.game.world.centerY,
      asset: "dialog4"
    })

    this.button = new Button({
      game: this.game,
      x: this.game.world.centerX,
      y: this.game.height - 200,
      asset: "button"
    })
    this.button.events.onInputDown.add(this.tryAgain, this.button)

    setResponsiveWidth(this.background, 100, this.game.world)
    this.game.add.existing(this.background)

    setResponsiveWidth(this.dialog, 70, this.game.world)
    this.game.add.existing(this.dialog)

    setResponsiveWidth(this.button, 19, this.game.world)
    this.game.add.existing(this.button)

    let defeatText = this.add.text(this.game.world.centerX - 223, 490, "")
    defeatText.font = "PT Mono"
    defeatText.fontSize = 15
    defeatText.fill = "#FFFFFF"

    addCharByChar(defeatText, defeatString, 0.05)

    let tryAgainButtonText = this.add.text(this.game.world.centerX, this.game.height - 200, "Try again?")
    tryAgainButtonText.font = "PT Mono"
    tryAgainButtonText.fontSize = 18
    tryAgainButtonText.fill = "#FFFFFF"
    tryAgainButtonText.anchor.setTo(0.5)
  }

  //custom

  tryAgain () {
    this.game.sound.play("click", 0.3)
    this.game.state.start("Intro")
    this.game.question = null
    this.game.tears = 50
    this.game.chaos = 50
    this.game.questionCounter = 0
  }
}
