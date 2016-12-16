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

    setResponsiveWidth(this.dialog, 70, this.game.world)
    this.game.add.existing(this.dialog)

    setResponsiveWidth(this.char, 15, this.game.world)
    this.game.add.existing(this.char)

    setResponsiveWidth(this.button2, 19, this.game.world)
    this.game.add.existing(this.button2)

    setResponsiveWidth(this.button1, 19, this.game.world)
    this.game.add.existing(this.button1)

    this.tearText = this.add.text(this.game.world.centerX + 220, 185, "Tears\n" + this.game.tears + "%")
    this.tearText.font = "PT Mono"
    this.tearText.fontSize = 13
    this.tearText.fill = "#FFFFFF"
    this.tearText.anchor.setTo(0.5)

    this.chaosText = this.add.text(this.game.world.centerX - 220, 185, "Chaos\n" + this.game.chaos + "%")
    this.chaosText.font = "PT Mono"
    this.chaosText.fontSize = 13
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

    this.tearText.text = "Tears\n" + this.game.tears + "%"
    this.chaosText.text = "Chaos\n" + this.game.chaos + "%"

    this.answer1Text.text = this.game.question.answer1.text
    this.answer2Text.text = this.game.question.answer2.text

    this.questionText.text = this.game.question.text //""
    // addCharByChar(this.questionText, this.game.question.text, 0.05)
  }

  answer1 () {
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

    if (this.game.questionCounter == 3) {
      this.game.state.start("Victory")
    }

    this.game.questionCounter += 1
    this.game.state.states.Game.chooseQuestion()
  }

  answer2 () {
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

    if (this.game.questionCounter == 4) {
      this.game.state.start("Victory")
    }

    this.game.questionCounter += 1
    this.game.state.states.Game.chooseQuestion()
  }
}
