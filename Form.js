class Form {
    constructor (){
        this.input = createInput("your name");
        this.button = createButton('start');
        this.title = createElement('h1');
        this.greeting = createElement('h1');
        this.reset = createButton('reset');
    }
    hide(){
        this.input.hide();
        this.button.hide();
        this.title.hide();
        this.greeting.hide();
    }

    display(){
        this.title.html("WELCOME TO AEROPLANE GAME!");
        this.title.position(displayWidth/2,0);

        this.input.position(displayWidth/2-40, displayHeight/2-50);

        this.button.position(displayWidth/2+20,displayHeight/2-10);
        

        this.reset.position(displayWidth-100,20);
        this.button.mousePressed(()=>{
            this.input.hide();
            this.button.hide();
            player.name = this.input.value();
            playerCount+=1;
            player.index = playerCount;
            player.update();
            player.updateCount(playerCount);

            this.greeting.html("Hello " + player.name)
            this.greeting.position(displayWidth/2 - 70, displayHeight/4);
          }
          );

        // this.input.hide();
        // this.button.hide();
            
        
    
   this.reset.mousePressed(()=>{
        player.updateCount(0);
        game.update(0);
    })

    }
}