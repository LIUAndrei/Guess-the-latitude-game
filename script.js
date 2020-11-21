/*

1. Build a function constructor called Object to describe question. It should include 
    -   question
    -   list of answers
    -   the correct answer


2. Create questions using the constructor

3. Store them inside an array

4. Select a random question and log them toghether with awailable answers, (write a method for the Question
     objects for this)

5. Use prompt to ask for correct answer

6. Check if the answer is correct or not and log the answer. Use method

7. Hide the code from other programmers ///

8. After the result is displayed - call the next question

9. Include 'exit' stop word.

10. Add 1 point for a correct answer (possibly use closures), and display point tally after the question.

*/

// Constructor for all questions

var QuestionSetup = function(cityObjt) {
    this.question = 'What is the latitude of ' + cityObjt.city + '?';
    this.answer = cityObjt.latitude;
    this.listOfAnswers = latitudeArryGen(cityObjt.latitude);
    
}


// Cities with latitudes 

var citiesList = [
    {
    city: 'Austin, TX',
    latitude: 30.3
    },
    {
    city: 'Dallas, TX',
    latitude: 32.8
    },
    {
    city: 'Chisinau, Moldova',
    latitude: 47
    },
    {
    city: 'Minsk, Belarus',
    latitude: 53.9
    },
        {
    city: 'Moscow, Russia',
    latitude: 55.8
    },
        {
    city: 'Kyiv, Ukraine',
    latitude: 50.5
    },
        {
    city: 'NYC, NY',
    latitude: 40.7
    },
        {
    city: 'Tokyo, Japan',
    latitude: 35.6
    },
    {
    city: 'Berlin, Germany',
    latitude: 52.5
    },
        {
    city: 'Rome, Italy',
    latitude: 41.9
    }

];

// false answer constructor


function latitudeArryGen(lttd) {
    var latitudeArry = [];
    while (latitudeArry.length < 5) {
        var newLatitude = (Math.floor(Math.random() * 900)) / 10;
        if (newLatitude !== lttd) {
            latitudeArry.push(newLatitude);
        }
    }
    latitudeArry[Math.floor(Math.random()*5)] = lttd;
    return latitudeArry;
}


// creating a list of questions

function answerizer(lst) {
    var questionaire = [];
    for (var i = 0; i < lst.length; i++) {
        var currentQuestion = new QuestionSetup(lst[i]);
        questionaire[i] = currentQuestion;
    }
    return questionaire;
}

var listOfQuestions = answerizer(citiesList);


// Score and score increase

var score = 0;

function scoreIncrease() {
    score ++;
}

// Show the question & answers

function showTheQuestion() {
    var num = Math.floor(Math.random() * citiesList.length);
    console.log(listOfQuestions[num].question);
    for (var i = 0; i < 5; i++) {
        console.log(i + '. ' + listOfQuestions[num].listOfAnswers[i]);
    }
    console.log('Your score is ' + score)
    var givenAnswer = prompt('Type the answer number or \'exit\' to quit the game.');
    if (givenAnswer === 'exit') {
        return;
    } else if (listOfQuestions[num].listOfAnswers[givenAnswer] == listOfQuestions[num].answer ) {
        console.log('Correct!');
        scoreIncrease();
        showTheQuestion();
    } else {
        console.log('Wrong. Try harder next time!');
        showTheQuestion();
    }
}

// game start

showTheQuestion();


