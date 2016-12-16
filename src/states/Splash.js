import Phaser from "phaser"
import {centerGameObjects} from "../utils"

export default class extends Phaser.State {
  init () {}

  preload () {
    this.loaderBg = this.add.sprite(this.game.world.centerX, this.game.world.centerY, "loaderBg")
    this.loaderBar = this.add.sprite(this.game.world.centerX, this.game.world.centerY, "loaderBar")
    centerGameObjects([this.loaderBg, this.loaderBar])

    this.load.setPreloadSprite(this.loaderBar)
    //
    // load your assets
    //
    this.load.image("logo", "assets/images/semaph.png")
    this.load.image("background1", "assets/images/ekran1.png")
    this.load.image("background2", "assets/images/chaos.png")
    this.load.image("background3", "assets/images/success-screen.png")
    this.load.image("dialog1", "assets/images/frishko.png")
    this.load.image("dialog2", "assets/images/dialog.png")
    this.load.image("dialog3", "assets/images/success.png")
    this.load.image("dialog4", "assets/images/darn.png")
    this.load.image("button", "assets/images/dukme1.png")
    this.load.image("char1", "assets/images/sisoje.png")
    this.load.image("char2", "assets/images/senior.png")
    this.load.image("char3", "assets/images/sad.png")
    this.load.image("char4", "assets/images/blob.png")

    this.load.audio("type", "assets/sounds/eklee-KeyPressOld03.wav")
    this.load.audio("click", "assets/sounds/button2.wav")
  }

  create () {
    this.state.start("Intro")
  }
}
