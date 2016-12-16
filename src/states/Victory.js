import Phaser from "phaser"
import StaticSprite from "../sprites/StaticSprite"
import Button from "../sprites/Button"
import {setResponsiveWidth} from "../utils"
import {addCharByChar} from "../utils"

export default class extends Phaser.State {
  init () {}
  preload () {}

  create () {
    let victoryString = "Congratulations, you've made it!\nYou've kept both your sanity and application from\nfalling apart.\nThe journey has been long and rough, but you've\nstayed on the right path.\n\nThe TDD is strong with you."

    this.background = new StaticSprite({
      game: this.game,
      x: this.game.world.centerX,
      y: this.game.world.centerY,
      asset: "background3"
    })

    this.logo = new StaticSprite({
      game: this.game,
      x: this.game.world.centerX + 840,
      y: this.game.world.centerY + 410,
      asset: "logo"
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

    setResponsiveWidth(this.logo, 10, this.game.world)
    this.game.add.existing(this.logo)

    setResponsiveWidth(this.dialog, 70, this.game.world)
    this.game.add.existing(this.dialog)

    setResponsiveWidth(this.button, 19, this.game.world)
    this.game.add.existing(this.button)

    let victoryText = this.add.text(this.game.world.centerX - 223, 490, "")
    victoryText.font = "PT Mono"
    victoryText.fontSize = 15
    victoryText.fill = "#FFFFFF"

    addCharByChar(victoryText, victoryString, 0.05)

    let tryAgainButtonText = this.add.text(this.game.world.centerX, this.game.height - 200, "Play again")
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
