import promptSync from 'prompt-sync';
import randomInteger from 'random-int';



let choices=["rock","paper","scissor"];
let outcome="ready to play";


let computerChoice = randomInteger(0,2);
computerChoice=choices[computerChoice];

const prompt=promptSync();
let userInput=prompt("enter 0 for rock, 1 for paper, 2 for scissors:    ");
let userChoice=choices[userInput];




if(computerChoice === userChoice )
{
 outcome="draw";
}
else if(computerChoice === "rock" &&  userChoice === "paper" )
{
 outcome="player wins";
}
else if(computerChoice === "rock" &&  userChoice === "paper" )
{
 outcome="player wins";
}
else if(computerChoice === "rock" &&  userChoice === "scissor" )
{
 outcome="computer wins";
}
else if(computerChoice === "paper" &&  userChoice === "rock" )
{
 outcome="computer wins";
}
else if(computerChoice === "paper" &&  userChoice === "scissor" )
{
 outcome="player wins";
}
else if(computerChoice === "scissor" &&  userChoice === "rock" )
{
 outcome="player wins";
}
else if(computerChoice === "scissorr" &&  userChoice === "paper" )
{
 outcome="computer wins";
}
console.log("computer cooses: " + computerChoice + " and player chooses: " + userChoice );
console.log(outcome);