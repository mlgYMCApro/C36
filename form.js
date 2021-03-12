class Form{
    constructor(){
    }

    display(){
        var title = createElement('h2');
        title.html("Car Racing");
        this.position(130, 0);

        var input = createInput("Name");
        var button = createButton('Filler text');
        var greeting = createElement('h3');
        input.position(130, 160);
        button.position(250, 200);


    button.mousePressed(function(){
        input.hide();
        this.button.hide();
        var name = input.value()
        playerCount += 1;
        player.update(name);
        player.updateCount(playerCount);
        greetimg.html("Hello"+ name);
        greeting.position(130, 160)
    })
    }
}