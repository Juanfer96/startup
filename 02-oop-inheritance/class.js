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
    
}
class Actor{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
}


/* SOME  RANDOMS TEST  */

let  ironman  =  new  Movie('Ironman','2015','140');
ironman.on('Play',fn =>  console.log('Playing '+ ironman.title ));
ironman.on('Pause',fn =>  console.log(ironman.title + ' is paused'));
ironman.on('Resume',fn =>  console.log('Resume '+ ironman.title ));

ironman.play();
ironman.pause();
ironman.resume();







