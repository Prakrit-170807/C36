class user_interfase{
    constructor(){

    }
    display(){
        var title=createElement("H7")
        title.html('The Car Racing Game')
        title.position(130,10)

        var input = createInput("name")
        input.position(130,160)
        
        var button = createButtom("GO")
        button.position(250,200)

        button.mousePressed(function(){
            input.hide()
            button.hide()
            var name = input.value()
            Players++
            player.update(name)
            player.updateNo_(No_)
            var Welcome_pls = createElement("H3")
            Welcome_pls.htlm("HI,"+name)
            Welcome_pls.position(200,160)
        })
    }
}