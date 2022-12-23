

let userData = personData.map((item, i) => Object.assign({}, item, additionalPersonData[i]));

console.log(userData);

// userData.read = function () {
//     console.log(this);
// };

// let newObj = {
//     uid : 8,
//     firstName: "hassan" , 
//     lastName : "zandi"
// };

// userData.create = function (inputObj) {
//     if (userData.filter(function (el) {
//         return el.uid === inputObj.uid;
//     }).length !== 0
//     ){
//         console.log("duplicate uid !!! enter new object!!");
//         return;
//     }
//     userData.push(inputObj);
// };
// userData.create(newObj);

// let newObj2 = {
//     uid : 7 ,
//     firstName: "ali", 
//     lastName : "javadi"
// };

// userData.update= function(inputObj){
//     userData.filter(function(item){
//         return item.uid === inputObj.uid;
//     })[0] ,firstName = inputObj.firstName;
//     userData.filter(function(item){
//         return item.uid ===inputObj.uid;
//     })[0],lastName = inputObj.lastName;
// };

// userData.update(newObj2);
// userData.read();

// userData.delete=function (inputId){
//     userData.forEach((item , index)=>{
//         if(item.uid===inputId){
//             userData.splice(index ,1);
//             console.log("remove seccess!!!");
//         };
//     });
// };
// userData.delete(newObj2);