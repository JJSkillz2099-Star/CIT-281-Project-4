const {data} = require("./p4-data.js");

// Returns an array of strings where each array element is a question.
function getQuestions() {
  return data.map(q => q.question);
}
console.log(getQuestions());

// Returns an array of strings where each array element is an answer.
function getAnswers() {
  return data.map(a => a.answer);
}
console.log(getAnswers());

// Returns a copy of the original data array of objects.
// Extra credit: see Cloning an Array of Objects in JavaScript to avoid simply making a mutable copy.
function getQuestionsAnswers() {
  const clonedArr = [...data];
  return clonedArr;
}
console.log(getQuestionsAnswers());

/*Returns an object with the following properties:
question property (string): The question from the data.
number property (integer): The question number,  not array index value.
error message property (string): Any error that occurred while getting the question.*/
function getQuestion(number = "") {
  let questionObj = {
    question:"",
    number:"",
    error:"",
  };

  if (!Number.isInteger(number)) {
    questionObj.error = "The question number must be an integer!";
    console.log("The question number must be an integer!");
  } else if (number > 3) {
      questionObj.error = "The question number must be less than 3!";
      console.log("The question number must be less than 3!");
  } else if (number <=0) {
      questionObj.error = "The question number must be greater than 0!";
      console.log("The question number must be greater than 0!");
  } else {
      index = number - 1;
      questionObj.number = number;
      questionObj.question = data[index].question;
  }
  return questionObj;
}
// This shows at the top of the terminal and is an informal way to test each outcome.
console.log(getQuestion(2));

/*Returns an object with the following properties:
answer property (string): The answer from the data.
number property (integer): The question number,  not array index value.
error message property (string): Any error that occurred while getting the question.*/
function getAnswer(number = "") {
  let answerObj = {
    answer:"",
    number:"",
    error:"",
  };

  if (!Number.isInteger(number)) {
    answerObj.error = "The number must be an integer!";
    console.log("The number must be an integer!");
  } else if (number > 3) {
      answerObj.error = "The number must be less than 3!";
      console.log("The number must be less than 3!");
  } else if (number <=0) {
      answerObj.error = "The number must be greater than 0!";
      console.log("The number must be greater than 0!");
  } else {
      index = number - 1;
      answerObj.number = number;
      answerObj.answer = data[index].answer;
  }
  return answerObj;
}
// This shows at the top of the terminal and is an informal way to test each outcome.
console.log(getAnswer(2));

/*Returns an object with the following properties:
question property (string): The question from the data.
answer property (string): The answer from the data.
number property (integer): The question number,  not array index value.
error message property (string): Any error that occurred while getting the question.*/
function getQuestionAnswer(number = "") {
  let getAnswerObj = {
    question:"",
    answer:"",
    number:"",
    error:"",
  };

  if (!Number.isInteger(number)) {
    getAnswerObj.error = "The number must be an integer!";
    console.log("The number must be an integer!");
  } else if (number > 3) {
      getAnswerObj.error = "The number must be less than 3!";
      console.log("The number must be less than 3!");
  } else if (number <=0) {
      getAnswerObj.error = "The number must be greater than 0!";
      console.log("The number must be greater than 0!");
  } else {
    index = number - 1;
    getAnswerObj.number = number;
    getAnswerObj.question = data[index].question;
    getAnswerObj.answer = data[index].answer;
  }
  return getAnswerObj;
}
// This shows at the top of the terminal and is an informal way to test each outcome. 
console.log(getQuestionAnswer(2));

module.exports = {
  getQuestions,
  getAnswers,
  getQuestionsAnswers,
  getQuestion,
  getAnswer,
  getQuestionAnswer,
}

/*****************************
  Module function testing
******************************/
function testing(category, ...args) {
    console.log(`\n** Testing ${category} **`);
    console.log("-------------------------------");
    for (const o of args) {
      console.log(`-> ${category}${o.d}:`);
      console.log(o.f);
    }
}
  
  // Set a constant to true to test the appropriate function
const testGetQs =true;
const testGetAs = true;
const testGetQsAs = true;
const testGetQ = true;
const testGetA = true;
const testGetQA = true;
const testAdd = false;      // Extra credit
const testUpdate = false;   // Extra credit
const testDelete = false;   // Extra credit

// getQuestions()
if (testGetQs) {
    testing("getQuestions", { d: "()", f: getQuestions() });
  }
  
  // getAnswers()
  if (testGetAs) {
    testing("getAnswers", { d: "()", f: getAnswers() });
  }
  
  // getQuestionsAnswers()
  if (testGetQsAs) {
    testing("getQuestionsAnswers", { d: "()", f: getQuestionsAnswers() });
  }
  
  // getQuestion()
  if (testGetQ) {
    testing(
      "getQuestion",
      { d: "()", f: getQuestion() },      // Extra credit: +1
      { d: "(0)", f: getQuestion(0) },    // Extra credit: +1
      { d: "(1)", f: getQuestion(1) },
      { d: "(4)", f: getQuestion(4) }     // Extra credit: +1
    );
  }
  
  // getAnswer()
  if (testGetA) {
    testing(
      "getAnswer",
      { d: "()", f: getAnswer() },        // Extra credit: +1
      { d: "(0)", f: getAnswer(0) },      // Extra credit: +1
      { d: "(1)", f: getAnswer(1) },
      { d: "(4)", f: getAnswer(4) }       // Extra credit: +1
    );
  }
  
  // getQuestionAnswer()
  if (testGetQA) {
    testing(
      "getQuestionAnswer",
      { d: "()", f: getQuestionAnswer() },    // Extra credit: +1
      { d: "(0)", f: getQuestionAnswer(0) },  // Extra credit: +1
      { d: "(1)", f: getQuestionAnswer(1) },
      { d: "(4)", f: getQuestionAnswer(4) }   // Extra credit: +1
    );
}
