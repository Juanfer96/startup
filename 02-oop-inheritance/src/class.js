

function mixin(receiver, supplier) {
    Object.keys(supplier).forEach(function(key) {
        receiver[key] = supplier[key];
    });

    return receiver;
}

/* SOME  RANDOMS TEST  */

let  ironman  =  new  Movie('Ironman','2015','140');

let social = {
    name: 'like/share obj',
    share: function(friendName) {  
        console.log(friendName+' share ');
    },
    like: function(friendName) {  
        console.log(friendName +' like ');
    }
};

mixin(ironman, social);

ironman.share('Nico');

/* CONSULTA ,  como hacer para poder agregar el nombre de la movie  en el metodo share  */










