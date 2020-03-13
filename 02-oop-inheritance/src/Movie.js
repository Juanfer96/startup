class  Movie extends  EventEmitter{
    constructor(name,year,duration){
        super();
        this.title= name;
        this.year=year;
        this.duration=duration;
        this.actors = [];
    }
    getActors(){
        return this.actors;
    }
    play(){
        this.emit('Play');
    }

    pause(){
    
        this.emit('Pause');

    }
    resume(){
        this.emit('Resume');
    }
    addCast(cast){
        if(cast.length !== undefined){
            cast.forEach(element  => this.actors.push(element));//Many Actors
        } 
        else    
            this.actors.push(cast); // One Actor
    }
    
}