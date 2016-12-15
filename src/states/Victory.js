import Phaser from "phaser"
import StaticSprite from "../sprites/StaticSprite"
import Button from "../sprites/Button"
import {setResponsiveWidth} from "../utils"
import {addCharByChar} from "../utils"

export default class extends Phaser.State {
  init () {}
  preload () {}

  create () {
    let victoryString = "Congratulations, you've made it! You've kept both your\nsanity and application from falling apart. The\njourney has been long and rough, but you've stayed\non the right path. TDD is strong with you."

    this.background = new StaticSprite({
      game: this.game,
      x: this.game.world.centerX,
      y: this.game.world.centerY,
      asset: "background3"
    })

    this.dialog = new StaticSprite({
      game: this.game,
      x: this.game.world.centerX,
      y: this.game.world.centerY,
      asset: "dialog3"
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

    let victoryText = this.add.text(this.game.world.centerX, 550, "")
    victoryText.font = "PT Mono"
    victoryText.fontSize = 15
    victoryText.fill = "#FFFFFF"
    victoryText.anchor.setTo(0.5)

    addCharByChar(victoryText, victoryString, 0.05)

    let tryAgainButtonText = this.add.text(this.game.world.centerX, this.game.height - 200, "Play again")
    tryAgainButtonText.font = "PT Mono"
    tryAgainButtonText.fontSize = 18
    tryAgainButtonText.fill = "#FFFFFF"
    tryAgainButtonText.anchor.setTo(0.5)
  }

  //custom

  tryAgain () {
    this.game.state.start("Intro")
    this.game.question = null
    this.game.tears = 50
    this.game.chaos = 50
    this.game.questionCounter = 0
  }
}
