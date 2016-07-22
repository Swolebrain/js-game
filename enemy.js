var enemy = {
  x: 300,
  y: 300,
  sprite: document.getElementById("trump"),
  update: function(){
    var a = (this.x-player.x)*(this.x-player.x);
    var b = (this.y-player.y)*(this.y-player.y);
    var dist = Math.sqrt(a+b);
    if (dist < 10){
      player.dead = true;
    }
    if (this.x < player.x){
      this.x = this.x + 1;
    }
    if (this.x > player.x){
      this.x = this.x -1;
    }
    if (this.y < player.y){
      this.y = this.y + 1;
    }
    if (this.y > player.y){
      this.y = this.y -1;
    }
  },
  render: function(){
    ctx.drawImage(this.sprite, this.x-50, this.y-50, 100, 100);
  }
};
