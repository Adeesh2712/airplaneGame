class Player {
    constructor(){
        this.index = null;
        this.distance = null;
        this.name = null;
        
    }

    getCount(){
       
        var playerCountRef = database.ref('playerCount');
        playerCountRef.on("value",(data)=>{
            playerCount = data.val();
        })
        console.log(playerCount)
    }

    updateCount(count){
        database.ref('/').update({
            playerCount: count
        });
    }

    update(){
        console.log("here")
        var playerIndex = "players/player" + this.index;
        database.ref(playerIndex).set({
            name:this.name,
            distance:this.distance
        });
    }

    static getPlayerInfo(){
        var playerInfoRef = database.ref('players');
        playerInfoRef.on("value",(date)=>{
            allplayers = data.val();
        })
    }


}