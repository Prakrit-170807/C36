class Player {
    constructor(){
        
    }
    getNo_(){
        var Playercountref=databse.ref("Players")
        Playercountref.on("value",function(data){
            Players=data.val()
        })
    }
    updateNo_(No_){
        database.ref("/").update({
            Players:No_
        })
    }
    updateName(name){
        var playerIntex="player"+Players
        database.ref(playerIntex).set({
            Name:name
        })
    }
}