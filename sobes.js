// let phase = 'Hello'
//
// if(true){
//     var user ='John'
//
//
// }
// function sayHi(){
//     console.log(`${phase}, ${user}`)
// }
//
// sayHi()


/////////////////////////////////////
//
// const  foo ={
//     baz:function (){
//         console.log(this)
//     }
// }
//
// foo.baz()
//
// let bar = foo.baz
//
// bar()
//
//
//////////////////////////////////////////////////////

// const  operations=[{ "date":"2017-12-31","amount":"5522"},
//     { "date":"2016-10-31","amount":"5227"},
//     { "date":"2018-02-30","amount":"5647"},
//     { "date":"2017-01-31","amount":"5137"},
//     { "date":"2016-01-31","amount":"5517"},
//     { "date":"2018-12-31","amount":"5327"},
//     { "date":"2018-07-12","amount":"5877"},
//     { "date":"2017-05-13","amount":"5567"},
// ]
//
//
//
// operations.sort((a,b)=>a.date.localeCompare(b.date)) //отсортировал по строчным значениям
//
// const resultObj = operations.reduce((acc,el)=>{
//     acc[el.date.slice(0,4)]=[]
//     // acc[el.date.slice(0,4)].push(el.date.slice(5,))
//     return acc
// },{
//  }) // создал обьект с годами в качестве ключа но без значений
// // resultObj={'2016':[],'2017':[],'2018':[]}
//
//
//  for (const dat of operations){
//      resultObj[dat.date.slice(0,4)].push(dat.date.slice(5,))
//  }  //записал в обьект значения дат
//
// console.log(resultObj)


/////////////////////////////////////////////////////////////////////////////

//
// const userService = {
//     currentFilter: 'active',
//     users: [
//         {name: 'Alex', status: 'active'},
//         {name: 'Nick', status: 'deleted'},
//     ],
//     getFilteredUsers: function () {
//         return this.users.filter( (user)=> {
//             return user.status === this.currentFilter;
//         })
//     }
//     };
//     console.log(userService.getFilteredUsers());


////////////////////////////////////////////////////////////////////////

// console.log(('b' + 'a'++'a' + 'a'))

// let i=9
// if(1<i<9){
//     console.log(1)
// }else{
//     console.log(2)
// }
///////////////////////////////////////////


// const a =[1,2,3,4,5]
// const b = a
// console.log(a)
// // b.length=0
// while (a.length!==0){
//     b.pop()
//     console.log(b)
// }
// console.log(b)