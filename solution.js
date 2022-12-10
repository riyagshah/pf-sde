
const  inputs= require('./1-input.json');


const expenceData  = inputs.expenseData;
const revenueData  = inputs.revenueData;

var arr_date = [];
for(let val in expenceData){
    var startDate = expenceData[val].startDate;
    arr_date.push(startDate.toString());
}

for(let val in revenueData){
    var startDate = revenueData[val].startDate;
    arr_date.push(startDate.toString());
}

arr_date.sort( (a1,a2) =>{
    return new Date(a1).getTime() - new Date(a2).getTime();
} );


const minDate = new Date(arr_date[0]);
const maxDate = new Date(arr_date[arr_date.length-1]);

var bal = {};//obj of balance
var balfinal = [];//final balance array
while(minDate<=maxDate){
    if(minDate===maxDate)
    break;
    bal[minDate.toISOString()]=0;
    minDate.setMonth(minDate.getMonth()+1);
}
// console.log(bal,"lo")
for ( let val in expenceData){

    var amount = expenceData[val].amount;
    var startDate = expenceData[val].startDate;
    
    bal[startDate]=-1*amount;
    
}
// console.log(expenceData[1],"lddd")
// console.log(bal,"lo")
for ( let val in revenueData){

    var amount = revenueData[val].amount;
    var startDate = revenueData[val].startDate;
    
    bal[startDate]=bal[startDate]+amount;
}

for( let val in bal){
    let date = val;
    let amount = bal[date];
    
    let a ={
        "amount" : amount,
        "startDate" : date
    };
    balfinal.push(a);
}
// outut format
var ans = {
    "bal": balfinal
};
// output
console.log(ans);
8