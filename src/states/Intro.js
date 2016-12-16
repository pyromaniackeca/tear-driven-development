import Phaser from "phaser"
import StaticSprite from "../sprites/StaticSprite"
import Button from "../sprites/Button"
import {setResponsiveWidth} from "../utils"
import {addCharByChar} from "../utils"

export default class extends Phaser.State {
  init () {}
  preload () {}

  create () {
    let introString = "Congratulations! You’ve been chosen to lead a team\ncleaning up a project left behind by a developer\nthat’s rumoured to have gone insane. The code is\ncomplex, unreadable and ridden with bugs…\n\nThe deadline is tight, but you hope you can manage\nthe chaos without spilling too many tears. Let’s\nsee how you’ll fare.\n\nKeep both chaos and tears under 100%."

    this.background = new StaticSprite({
      game: this.game,
      x: this.game.world.centerX,
      y: this.game.world.centerY,
      asset: "background1"
    })

    this.dialog = new StaticSprite({
      game: this.game,
      x: this.game.world.centerX,
      y: this.game.world.centerY,
      asset: "dialog1"
    })

    this.button = new Button({
      game: this.game,
      x: this.game.world.centerX,
      y: this.game.height - 200,
      asset: "button"
    })
    this.button.events.onInputDown.add(this.startGame, this.button)

    setResponsiveWidth(this.background, 100, this.game.world)
    this.game.add.existing(this.background)

    setResponsiveWidth(this.dialog, 70, this.game.world)
    this.game.add.existing(this.dialog)

    setResponsiveWidth(this.button, 19, this.game.world)
    this.game.add.existing(this.button)

    let introText = this.add.text(this.game.world.centerX - 230, 400, "")
    introText.font = "PT Mono"
    introText.fontSize = 15
    introText.fill = "#FFFFFF"

    addCharByChar(introText, introString, 0.05)

    let startButtonText = this.add.text(this.game.world.centerX, this.game.height - 200, "Oh well, let's give it a go.")
    startButtonText.font = "PT Mono"
    startButtonText.fontSize = 18
    startButtonText.fill = "#FFFFFF"
    startButtonText.anchor.setTo(0.5)
  }

  //custom

  startGame () {
    this.game.sound.play("click", 0.3)
    this.game.state.start("Game")
  }
}
