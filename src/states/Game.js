import Phaser from "phaser"
import Button from "../sprites/Button"
import StaticSprite from "../sprites/StaticSprite"
import {setResponsiveWidth} from "../utils"
import {addCharByChar} from "../utils"
import {questions} from "../questions"

export default class extends Phaser.State {
  init () {}
  preload () {}

  create () {
    this.questions = questions.slice()

    this.background = new StaticSprite({
      game: this.game,
      x: this.game.world.centerX,
      y: this.game.world.centerY,
      asset: "background1"
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
      asset: "dialog2"
    })

    this.char = new StaticSprite({
      game: this.game,
      x: this.game.world.centerX,
      y: 300,
      asset: "char1"
    })

    this.button2 = new Button({
      game: this.game,
      x: this.game.world.centerX,
      y: this.game.height - 200,
      asset: "button"
    })
    this.button2.events.onInputDown.add(this.answer2, this.button2)

    this.button1 = new Button({
      game: this.game,
      x: this.game.world.centerX,
      y: this.game.height - 285,
      asset: "button"
    })
    this.button1.events.onInputDown.add(this.answer1, this.button1)

    setResponsiveWidth(this.background, 100, this.game.world)
    this.game.add.existing(this.background)

    setResponsiveWidth(this.logo, 10, this.game.world)
    this.game.add.existing(this.logo)

    setResponsiveWidth(this.dialog, 70, this.game.world)
    this.game.add.existing(this.dialog)

    setResponsiveWidth(this.button2, 19, this.game.world)
    this.game.add.existing(this.button2)

    setResponsiveWidth(this.button1, 19, this.game.world)
    this.game.add.existing(this.button1)

    this.chaosGauge = game.add.graphics(this.game.world.centerX - 180, 175)
    this.tearGauge = game.add.graphics(this.game.world.centerX - 180, 205)

    this.frame = game.add.graphics(this.game.world.centerX - 180, 175)
    this.frame.beginFill(0xF2F2B6, 1)
    this.frame.drawRect(0, 0, 100, 16)
    this.frame.drawRect(0, 30, 100, 16)

    this.tearText = this.add.text(this.game.world.centerX - 210, 215, "Tears")
    this.tearText.font = "PT Mono"
    this.tearText.fontSize = 15
    this.tearText.fill = "#FFFFFF"
    this.tearText.anchor.setTo(0.5)

    this.chaosText = this.add.text(this.game.world.centerX - 210, 185, "Chaos")
    this.chaosText.font = "PT Mono"
    this.chaosText.fontSize = 15
    this.chaosText.fill = "#FFFFFF"
    this.chaosText.anchor.setTo(0.5)

    this.questionText = this.add.text(this.game.world.centerX, 525, "")
    this.questionText.font = "PT Mono"
    this.questionText.fontSize = 15
    this.questionText.fill = "#FFFFFF"
    this.questionText.anchor.setTo(0.5)

    this.answer1Text = this.add.text(this.game.world.centerX, this.game.height - 285, "")
    this.answer1Text.font = "PT Mono"
    this.answer1Text.fontSize = 13
    this.answer1Text.fill = "#FFFFFF"
    this.answer1Text.anchor.setTo(0.5)

    this.answer2Text = this.add.text(this.game.world.centerX, this.game.height - 200, "")
    this.answer2Text.font = "PT Mono"
    this.answer2Text.fontSize = 13
    this.answer2Text.fill = "#FFFFFF"
    this.answer2Text.anchor.setTo(0.5)

    this.chooseQuestion()
  }

  //custom

  chooseQuestion () {
    let index = Math.floor(Math.random() * (this.questions.lenght - this.game.questionCounter))
    this.game.question = this.questions.splice(index, 1)[0]

    this.answer1Text.text = this.game.question.answer1.text
    this.answer2Text.text = this.game.question.answer2.text

    this.questionText.text = this.game.question.text //""
    // addCharByChar(this.questionText, this.game.question.text, 0.05)

    this.char.kill()
    this.char = new StaticSprite({
      game: this.game,
      x: this.game.world.centerX,
      y: 300,
      asset: this.game.question.character
    })

    setResponsiveWidth(this.char, 11, this.game.world)
    this.game.add.existing(this.char)

    this.tearGauge.clear()
    this.tearGauge.beginFill(0x69CCBE, 1)
    this.tearGauge.drawRect(0, 0, this.game.tears, 16)
    this.game.world.bringToTop(this.tearGauge)

    this.chaosGauge.clear()
    this.chaosGauge.beginFill(0xCC766A, 1)
    this.chaosGauge.drawRect(0, 0, this.game.chaos, 16)
    this.game.world.bringToTop(this.chaosGauge)
  }

  answer1 () {
    this.game.sound.play("click", 0.3)

    this.game.tears += this.game.question.answer1.tears
    if (this.game.tears < 0) {
      this.game.tears = 0
    }
    if (this.game.tears >= 100) {
      this.game.state.start("Defeat")
    }

    this.game.chaos += this.game.question.answer1.chaos
    if (this.game.chaos < 0) {
      this.game.chaos = 0
    }
    if (this.game.chaos >= 100) {
      this.game.state.start("Defeat")
    }

    if (this.game.questionCounter == 9) {
      this.game.state.start("Victory")
    }

    this.game.questionCounter += 1
    this.game.state.states.Game.chooseQuestion()
  }

  answer2 () {
    this.game.sound.play("click", 0.3)

    this.game.tears += this.game.question.answer2.tears
    if (this.game.tears < 0) {
      this.game.tears = 0
    }
    if (this.game.tears >= 100) {
      this.game.state.start("Defeat")
    }

    this.game.chaos += this.game.question.answer2.chaos
    if (this.game.chaos < 0) {
      this.game.chaos = 0
    }
    if (this.game.chaos >= 100) {
      this.game.state.start("Defeat")
    }

    if (this.game.questionCounter == 9) {
      this.game.state.start("Victory")
    }

    this.game.questionCounter += 1
    this.game.state.states.Game.chooseQuestion()
  }
}
