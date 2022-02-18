// let title = "Titanic";
//
// let newTitle = "Titanic 2";
//  type User = {
//      id:number,
//      first_name:string,
//      last_name: string,
//      is_active?: boolean
//  }
//  let user: User = {
//      id: 1,
//      first_name: "Radoslav",
//      last_name: "Ivanov",
//      is_active:true,
//  }

// type Movie = {
//     id: number
//     title: string,
//     genre: MOVIE_GENRE,
//     director: string,
//     duration: number
// }
// enum MOVIE_GENRE {
//     ACTION="action",
//     COMEDY="comedy",
//     HORROR = "horror"

//}
// let spidermanFarFromHome:Movie = {
//     id:1,
//     title: "Spiderman Far From Home",
//     director:  "Sergei Alekov",
//     duration: 160,
//     genre: MOVIE_GENRE.ACTION
// }
//
// let spidermanHomeComming:Movie = {
//     id:1,
//     title: "Spiderman Far From Home",
//     director:  "Sergei Alekov",
//     duration: 160,
//     genre: MOVIE_GENRE.ACTION
// }
// console.log(spidermanFarFromHome)
//
// enum CAR_TYPE {
//     COMBI = "combi",
//     CABRIOLET = "cabriolet"
// }
// class car {
//     protected type: CAR_TYPE;
//
//
//     constructor() {
//         this.type = CAR_TYPE.COMBI
//     }
//     static setType(CABRIOLET: CAR_TYPE){
//         this.type  = type
//     }
//     getType(): CAR_TYPE{
//         return this.type
//
//     }
//
//
//
//
// }
// new car();
// car.setType(CAR_TYPE.CABRIOLET)
// console.log(car.getType())
//
// class Audi extends car {
//
// }