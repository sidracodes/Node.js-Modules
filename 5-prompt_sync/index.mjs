import promptSync from 'prompt-sync';
const prompt = promptSync();
let x= prompt("enter number: ");
if(x> 8){
    console.log("greater than 8");
}
else if(x< 8){
    console.log("less than 8");
}
else{
    console.log("equal to 8");
}
let y=prompt("enter a name: ");
switch(y){
    case 'sidra':
        console.log("friend");
        break;
    case 'hira':
        console.log("friend");
        break;
    case 'rida':
        console.log("friend");
        break;
    default:
        console.log("unknown");


}



let isgoodstudent= true;
console.log( isgoodstudent ? "you are a good person" : "notgood" );
;

const fav_name = "struffios";
fav_name && console.log("youtube channel name was struffios :(");