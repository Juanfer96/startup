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
class  Movie extends  EventEmitter{
    constructor(name,year,duration){
        super();
        this.title= name;
        this.year=year;
        this.duration=duration;
        super.on('Play',fn =>  console.log('You are playing'+ this.title ));
        super.on('Resume',fn => console.log('You resume '+ this.title ));
        super.on('Pause',fn =>  console.log('You pause '+ this.title ));
    }
  
    play(){
        super.emit('Play');
    
    }

    pause(){
    
        super.emit('Resume');

    }
    resume(){
        super.emit('Pause');
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
ironman.play();
ironman.pause();
ironman.resume();







