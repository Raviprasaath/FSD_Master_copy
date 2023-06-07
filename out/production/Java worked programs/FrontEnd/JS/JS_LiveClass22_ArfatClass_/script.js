// Question 1

// function MAIN() {
//     console.log('script start -- ss');
	
//     setTimeout(function() {
//         console.log('setTimeout - st');
// 	}, 0);
    
//     Promise.resolve().then(function() {
//         console.log('promise1 - p1')
// }).then(function() {
//     console.log('promise2 - p2')
// });	
// console.log('script end - se');
// }


// ss
// se
// p1
// p2
// st
// MAIN()


//----------------
// Question 2


function MAIN() {
	console.log('script start -- ss');
	
setTimeout(function() {
	  console.log('setTimeout - st');
	}, 0);

const p = new Promise( function executor(resolve, reject) {
	setTimeout(resolve, 3000);
});
	
p.then(function() {
	  console.log('promise1 - p1');
	}).then(function() {
	  console.log('promise2 - p2');
	});
	
	console.log('script end - se');
}
MAIN()


// ss
// se
// st
// p1
// p2


//--------------------------
// executor function 
let p = new Promise( function ( arg1, arg2 ) {
//                              resolve, reject
    if (Math.random() < 0.2) {
        // arg1();
    } else {
        arg2();
    }
} );


p.then( () => console.log('0.2 or less'))
p.catch( () => console.log('0.2 or more'))
