class g_status{
    constructor(){

    }
    getStates(){
        var GameModeref=database.ref("GameMode")
        GameModeref.on("value",function(data){
            GameMode=data.val()
        })
    }
    update(state){
        database.ref("/").update({
            GameMode:state
        })
    }
    START(){
        if(GameMode==0){
            player=new Player()
            player.getNo_()
            form=new user_interfase()
            form.display()
        }
    }
}