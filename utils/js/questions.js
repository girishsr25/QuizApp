// Quiz Creator;
function CQuiz(que, o1, o2, o3, o4, ans, d) {
	this.question = que;
	this.opt1 = o1;
	this.opt2 = o2;
	this.opt3 = o3;
	this.opt4 = o4;
	this.answer = ans;
	this.asked = d;
}

// Question 1
var q1 = new CQuiz(
	'The Curies’ _________ collaboration helped to unlock the secrets of the atom.',
	'friendly',
	'competitive',
	'courteous',
	'industrious',
	1,
	0
);

// Question 2
var q2 = new CQuiz(
	'Marie had a bright mind and a ______ personality.',
	'strong',
	'lighthearted',
	'humorous',
	'strange',
	2,
	0
);

// Question 3
var q3 = new CQuiz(
	'When she learned that she could not attend the university in Warsaw, she felt _________.',
	'hopeless',
	'annoyed',
	'depressed',
	'worried',
	2,
	0
);

// Question 4
var q4 = new CQuiz(
	'Marie _________ by leaving Poland and traveling to France to enter the Sorbonne.',
	'challenged authority',
	'showed intelligence',
	'behaved',
	'was distressed',
	1,
	0
);

// Question 5
var q5 = new CQuiz(
	' _________ she remembered their joy together.',
	'Dejectedly',
	'Worried',
	'Tearfully',
	'Happily',
	1,
	0
);

// Question 6
var q6 = new CQuiz(
	'Her _________ began to fade when she returned to the Sorbonne to succeed her husband.',
	'misfortune',
	'anger',
	'wretchedness',
	'disappointment',
	3,
	0
);

// Question 7
var q7 = new CQuiz(
	'Even though she became fatally ill from working with radium, Marie Curie was never _________.',
	'troubled',
	'worried',
	'disappointed',
	'sorrowful',
	3,
	0
);

// // Question 8
// var q8 = new CQuiz(
// 	'How do you write "Hello World" in an alert box?',
// 	'alert("Hello World");',
// 	'msgBox("Hello World");',
// 	'prompt("Hello World");',
// 	'alertBox("Hello World");',
// 	1,
// 	0
// );

// // Question 9
// var q9 = new CQuiz(
// 	'How do you create a function in JavaScript?',
// 	'function = myFunction()',
// 	'function:myFunction()',
// 	'function myFunction()',
// 	'None of the mentioned',
// 	3,
// 	0
// );

// // Question 10
// var q10 = new CQuiz(
// 	'How do you call a function named "myFunction"?',
// 	'myFunction()',
// 	'call function myFunction()',
// 	'call myFunction()',
// 	'None of the mentioned',
// 	1,
// 	0
// );

// total question...
var totQ = [q1, q2, q3, q4, q5, q6, q7];
