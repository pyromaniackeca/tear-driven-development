/* globals __DEV__ */
import Phaser from "phaser"
import Mushroom from "../sprites/Mushroom"
import {setResponsiveWidth} from "../utils"

export default class extends Phaser.State {
  init () {}
  preload () {}

  create () {
    let banner = this.add.text(this.game.world.centerX, this.game.height - 30, "Follow TDD!")
    banner.font = "Nunito"
    banner.fontSize = 60
    banner.fill = "#77BFA3"
    banner.anchor.setTo(0.5)
    banner.textTimer = 0
    banner.changeCount = 0

    banner.update = function () {
      if (this.textTimer < 30) {
        this.textTimer += 1
      } else {
        this.textTimer = 0

        if ((this.changeCount % 2) == 0) {
          this.fill = "#77BFA3"
        } else {
          this.fill = "#E74C3C"
        }

        this.changeCount += 1
      }
    }

    this.mushroom = new Mushroom({
      game: this.game,
      x: this.game.world.centerX,
      y: this.game.world.centerY,
      asset: 'mushroom'
    })

    // set the sprite width to 30% of the game width
    setResponsiveWidth(this.mushroom, 30, this.game.world)
    this.game.add.existing(this.mushroom)
  }

  render () {
    if (__DEV__) {
      this.game.debug.spriteInfo(this.mushroom, 32, 32)
    }
  }
}
