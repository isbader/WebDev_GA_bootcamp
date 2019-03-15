sheep1 = document.getElementById("sheep")
bird1 = document.getElementById("bird")
rooster1 = document.getElementById("rooster")

class Animals{
    constructor(name){
        this.name = name;
        this.image = image;    
    }
}
class Birds extends Animals{
    constructor(sound , action){
        this.sound = sound;
        this.action = action;
    }
}
class Roosters extends Animals{
    constructor(sound , action){
        this.sound = sound; 
        this.action = action;
    }
}
class Sheeps extends Animals{
    constructor(sound , action){
        this.sound = sound;
        this.action = action;
    }
}
   