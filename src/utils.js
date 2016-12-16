export const centerGameObjects = (objects) => {
  objects.forEach(function (object) {
    object.anchor.setTo(0.5)
  })
}

export const setResponsiveWidth = (sprite, percent, parent) => {
  let percentWidth = (sprite.texture.width - (parent.width / (100 / percent))) * 100 / sprite.texture.width
  sprite.width = parent.width / (100 / percent)
  sprite.height = sprite.texture.height - (sprite.texture.height * percentWidth / 100)
}

export const addCharByChar = (text, txt, time) => {
  var i,
  txtLen = txt.length,
  totalTime = 0;

  for (i = 0; i < txtLen; i++) {  // loop through each character of the custom text
    game.time.events.add(Phaser.Timer.SECOND * totalTime, function() {
        text.text += this.txt[this.i];  // add the next character
        if (this.txt[this.i] != "\n" || this.txt[this.i] != " ") {
          window.game.sound.play("type", 0.05)
        }
    }, { text: text, txt: txt, i: i });  // for scoping purposes
    totalTime += time;  // the next character will appear at this time
  }
}
