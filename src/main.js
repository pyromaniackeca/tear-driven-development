import "pixi"
import "p2"
import Phaser from "phaser"

import BootState from "./states/Boot"
import SplashState from "./states/Splash"
import IntroState from "./states/Intro"
import GameState from "./states/Game"
import VictoryState from "./states/Victory"
import DefeatState from "./states/Defeat"

class Game extends Phaser.Game {
  constructor () {
    let width = document.documentElement.clientWidth // > 768 ? 768 : document.documentElement.clientWidth
    let height = document.documentElement.clientHeight // > 1024 ? 1024 : document.documentElement.clientHeight

    super(width, height, Phaser.AUTO, "content", null)

    this.state.add("Boot", BootState, false)
    this.state.add("Splash", SplashState, false)
    this.state.add("Intro", IntroState, false)
    this.state.add("Game", GameState, false)
    this.state.add("Victory", VictoryState, false)
    this.state.add("Defeat", DefeatState, false)

    this.state.start("Boot")
  }
}

window.game = new Game()
window.game.question = null
window.game.tears = 50
window.game.chaos = 50
window.game.questionCounter = 0
