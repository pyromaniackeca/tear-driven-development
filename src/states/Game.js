/* globals __DEV__ */
import Phaser from "phaser"
import Background from "../sprites/Background"
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

    let introText = this.add.text(this.game.world.centerX, this.game.height - 90, "")
    introText.font = "Roboto"
    introText.fontSize = 20
    introText.fill = "#000000"
    introText.anchor.setTo(0.5)

    this.background = new Background({
      game: this.game,
      x: this.game.world.centerX,
      y: this.game.world.centerY,
      asset: "background"
    })

    // set the sprite width to 30% of the game width
    setResponsiveWidth(this.background, 50, this.game.world)
    this.game.add.existing(this.background)

    this.addCharByChar(introText, "The journey begins . . .", 0.1)
  }

  addCharByChar(text, txt, time) {
    var i,
    txtLen = txt.length,
    totalTime = 0;
    for (i = 0; i < txtLen; i++) {  // loop through each character of the custom text
      game.time.events.add(Phaser.Timer.SECOND * totalTime, function() {
          text.text += this.txt[this.i];  // add the next character
      }, { text: text, txt: txt, i: i });  // for scoping purposes
      totalTime += time;  // the next character will appear at this time
    }
  }
}
