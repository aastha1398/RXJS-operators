import { of } from 'rxjs';
import { tap, map } from 'rxjs/operators';
import { interval } from 'rxjs';
import { take, finalize } from 'rxjs/operators';
import { toPromise} from 'rxjs/add/operators'

// const source = of(1, 2, 3, 4, 5);

// // tap also accepts an object map to log next, error, and complete
// //  perform actions or side-effects, such as logging
// const example = source.pipe(
//  map(val => val + 10),
//  tap({
//     next: (val) => {
//       // on next 11, etc.
//       console.log('on next', val);
//     },
//     error: (error) => {
//       console.log('on error', error.message);
//     },
//     complete: () => console.log('on complete')
//   })
// )
// // output: 11, 12, 13, 14, 15
// .subscribe(val => console.log(val));


// //Call a function when observable completes or errors

// //emit value in sequence every 1 second
// const source = interval(1000);
// //output: 0,1,2,3,4,5....
// const example = source.pipe(
//   take(5), //take only the first 5 values
//   finalize(() => console.log('Sequence complete')) // Execute when the observable completes
// )
// const subscribe = example.subscribe(val => console.log(val));





 const examplePromise = of('Pasta','Pizza').toPromise().then(result => { console.log('From Promise:',examplePromise );  });
