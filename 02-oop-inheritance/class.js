class  Movie{
    constructor(name,year,duration){
        this.title= name;
        this.year=year;
        this.duration=duration;
    }
    play(){

    }

    pause(){

    }
    resume(){

    }
}
class Actor{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
}
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
                fn.call();
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

/* SOME  RANDOMS TEST  */
let  ironman  =  new  Movie('Ironman','2015','140');

console.log(ironman.title);
console.log(ironman.year);
console.log(ironman.duration);
console.log(ironman instanceof Movie);

let events  = new EventEmitter() ;
let playIronman = () => console.log('Reproduciendo Ironman ');
let playSpiderman = () =>console.log('Reproduciendo Spiderman ');
events.on('Play', playIronman);
events.on('Play', playSpiderman);
events.off('Play',playSpiderman);
events.emit('Play');


console.log(events.getEvents()['Play']);

