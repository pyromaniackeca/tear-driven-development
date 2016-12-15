import Phaser from "phaser"

export default class extends Phaser.Sprite {
  constructor ({ game, x, y, asset }) {
    super(game, x, y, asset)

    this.game = game
    this.anchor.setTo(0.5)

    this.score = 0

    this.inputEnabled = true
    this.input.useHandCursor = true
    this.events.onInputDown.add(this.end, this)

    this.scoreText = this.game.add.text(100, 100, this.score)
    this.scoreText.font = "Roboto"
    this.scoreText.fontSize = 60
    this.scoreText.fill = "#FFFFFF"
    this.scoreText.anchor.setTo(0.5)
  }

  end () {
    this.score += 1
    this.scoreText.text = this.score
  }
}
