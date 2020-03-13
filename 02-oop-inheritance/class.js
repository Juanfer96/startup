class EventEmitter{
    constructor(){ 
        this.events = {};    
    }
    getEvents(){
        return  this.events;
    }
    on(eventName, callback){
        if( !this.events[eventName] ) {
            this.events[eventName] = [];
         }
         this.events[eventName].push(callback);
    }

    emit(eventName){
        const event = this.events[eventName];
        if( event ) {
            event.forEach(fn => {
                fn();
            });
         }

    }
    off(eventName, callback){
        const event = this.events[eventName];
        if( event ) {
            let i = event.indexOf( callback );
            if ( i !== -1 ) {
                this.events[event] =  event.splice(i,1);
            }
              
        }
    }
}
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
class Actor{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
}
class Logger{
    constructor(){}

    log(info){
        console.log(info);
    }

}


/* SOME  RANDOMS TEST  */

let  ironman  =  new  Movie('Ironman','2015','140');

const arnold = new Actor('Arnold Schwarzenegger', 50);
const actors = [
    new Actor('Paul Winfield', 50),
    new Actor('Michael Biehn', 50),
    new Actor('Linda Hamilton', 50)
];

ironman.addCast(arnold);
console.log(ironman.getActors());
ironman.addCast(actors);
console.log(ironman.getActors());

let logg = new Logger();

ironman.on('Play', () => logg.log('The "play" event has been emitted'))
ironman.play() // output  'The "play" event has been emitted'








