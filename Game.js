class Game{

    constructor(){
    }

    getState(){
        var gameStateRef = datebase.ref('gameState');
        gameStateRef.on("value",(data)=>{
         gameState = data.val();
        })
    }

    update(state){
        database.ref('/').update({
            gameState: state
        });
    }

    async start(){
        if(gameState === 0){
           player = new Player();
        var playerCountRef = await database.ref('playerCount').once("value");
        if(playerCountRef.exists()){
            playerCount = playerCountRef.val();
            player.getCount();
        }
            form = new Form()
            form.display();
        }
        
        plane1 = createSprite(200,100);
        plane1.addImage("plane1",plane1Img);

        plane2 = createSprite(100,100);
        plane2.addImage("plane2",plane2Img);


    }

    play(){
        form.hide();

       player.getPlayerInfo();
       
       if(allPlayers !== undefined){
           background(rgb(100,100,100));
           image(skyImg,10,10,100,100);

           var index = 0;

           var x = 100;
           var y;
           for(var plr in allPlayers){
               index = index + 1;
               y = y + 100;
               
           }
       }

    }
}