import Phaser from "phaser"

export default class extends Phaser.Sprite {
  constructor ({ game, x, y, asset }) {
    super(game, x, y, asset)

    this.game = game
    this.anchor.setTo(0.5)

    this.inputEnabled = true
    this.events.onInputDown.add(this.end, this)
  }

  end () {
    this.game.state.start("Intro")
  }
}
