class Form {

    constructor() {
      this.input = createInput("Name");
      this.button = createButton('Play');
      this.greeting = createElement('h2');
      this.greeting2 = createElement('h2');
      this.greeting3 = createElement('h2');
      this.greeting4 = createElement('h2');
      this.greeting5 = createElement('h2');
      this.greeting6 = createElement('h2');
      this.greeting7 = createElement('h2');
      this.title = createElement('h2');
    }
    hide(){
      this.greeting.hide();
      this.greeting2.hide();
      this.greeting3.hide();
      this.greeting4.hide();
      this.greeting5.hide();
      this.greeting6.hide();
      this.greeting7.hide();
      this.button.hide();
      this.input.hide();
      this.title.hide();
    }
  
    display(){
      this.title.html("Guardians of The Galaxy!!");
      this.title.position(width/2 - 150, 0);
  
      this.input.position(width/2 - 85 , height/2 + 30);
      this.button.position(width/2 - 30, height/2 + 65);
      this.greeting4.html("1. Your goal is to save The Earth from Asteroids!");
      this.greeting4.position(width/2-240, height/4+30);
      this.greeting5.html("2. You will get 2 points for each asteroid you hit!");
      this.greeting5.position(width/2-240, height/4+60);
      this.greeting6.html("3. Once an asteroid hits the spaceship,");
      this.greeting6.position(width/2-240, height/4+90);
      this.greeting7.html("1 life is decrease and you only have 3 lives!");
      this.greeting7.position(width/2-215, height/4+120);

        this.button.mousePressed(()=>{
        this.input.hide();
        this.button.hide();
        this.greeting4.hide();
        this.greeting5.hide();
        this.greeting6.hide();
        this.greeting7.hide();
        player.name = this.input.value();
        playerCount+=1;
        player.index = playerCount;
        player.update();
        player.updateCount(playerCount);
        this.greeting.html("Hi " + player.name)
        this.greeting.position(width/2-60, height/4);
        this.greeting2.html("Press up arrow to continue");
        this.greeting2.position(width/2-140, height/4+160);
        this.greeting3.html("Use 'a' and 's' to move and 'space' to shoot");
        this.greeting3.position(width/2-200, height/4+80);
      });
    }
  }