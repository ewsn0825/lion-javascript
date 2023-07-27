import { xhrPromise, tiger } from './lib/index.js';

// const data = await tiger.get('https://jsonplaceholder.typicode.com/users');

const URL = 'https://jsonplaceholder.typicode.com/users';

const pro = fetch(URL);
// console.log(pro);

const response = await fetch(URL);
// const data = await response.json();

// console.log(await response.json());

// fetch(URL).then((result)=>{

//     result // response object
//     return result.json()
// })
// .then((result)=>{
//   console.log( result );
// })
