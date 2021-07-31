
var readlineSync = require('readline-sync');
const chalk = require('chalk');
var questionOne = {
  question: "Where do I live? ",
  answer: ['Gurugram', 'Noida', 'Delhi' ],
  correctAnswer: 0
}
var questionTwo = {
  question: "What is my favorite dish? ",
  answer: ['Paav Bhaji','Idli Sambhar','Aloo Sabji'],
  correctAnswer:2
}
var questionThree = {
  question: "Which is my favorite season? ",
  answer: ['Summer','Winter','Monsoon'],
  correctAnswer:1
}
var questionFour = {
  question: "What is my favorite hobby? ",
  answer: ['Reading Novels','Talking to someone','Listening to songs'],
  correctAnswer:0
}

var questionList = [questionOne,questionTwo,questionThree,questionFour];


 var userName = readlineSync.question("Hello friend! What's your name? ");
   console.log (" ");
console.log('Welcome ! ' + userName + ' to the game - DO YOU KNOW Srishti?');
console.log(chalk.yellow("-------------------"));
 console.log(chalk.red("Choose the correct option to play the game, and know your score."));
 console.log(chalk.yellow("-------------------"));
var score=0;
var highScore =[{Name: "Srishti", score: 3}];
function quiz(question, answer, cAns){
 var usersAnswer = readlineSync.keyInSelect(answer, question);
 if(usersAnswer === cAns){
   console.log(chalk.blue("Right!"));
   score= score+1;
 }else{
   console.log(chalk.red("Wrong!"));
 }
  console.log(chalk.cyan("Your current score is "+ score));
  console.log(chalk.yellow("-------------------"));
  console.log (" ");
}
for(var i=0;i<questionList.length;i++){
  quiz(questionList[i].question, questionList[i].answer ,questionList[i].correctAnswer)
}

console.log(chalk.bgMagenta("Your Final Score is "+score));
  console.log (" ");
console.log(chalk.yellow("Want to compete with other friends of Srishti? Match your score with the high scorer if you think you have beaten the high score take a screenshot of your final score and share it! Thank you for playing the game - DO YOU KNOW Srishti"));
  console.log (" ");
function compare(userScore, otherScore){
 if(userScore >= otherScore){
   console.log(chalk.bgBlue("Congratulations! You have reached the high score!"));
     console.log (" ");
console.log("The high score till date is "+otherScore);
 }else{
   console.log(chalk.bgRed("Better Luck next time! You could not reach the high score"));
 }
}
compare(score,highScore[0].score);