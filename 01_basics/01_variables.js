const accountId = 144553
let accountEmail = "rahesh823@google.com"
var accountPassword = "12345"
accountCity = "Gorakhpur"
let accountState;

//accountId = 2 // not allowed
/*
Prefer not to use var
beacuse of issue in block scope  and functional scope

*/

accountEmail = "jds@gmail.com"
accountPassword = "123"
accountCity = "GKP"
console.log(accountId);

console.table([accountId,accountEmail,accountPassword,accountCity, accountState])