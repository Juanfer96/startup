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