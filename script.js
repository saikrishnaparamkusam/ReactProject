let sentence = "Hey! This is Krishna, What's your name?";
let i = 0;
let speed = 80;
let CorrectAnswersCount = 0;
const marksPerRightAnswer = 2;
const messageforbelow25 = "You should know me better, You're my friend";
const messageforbelow50 = "you can do better, You're my bestie";
const messageforbelow75 = "You know me well, You're my true friend";
const messageforabove75 = "My friend... Living Legend";




function enableInput(){
    document.getElementById("userInput").style.display = "block";
    document.getElementById("submitButtonDiv").classList.remove("d-none");
}

function typing(sentence){
    document.getElementById("startButton").style.display = "none"; 
    if(i < sentence.length){
        document.getElementById("animateText").innerHTML += sentence.charAt(i);
        i++;
        setTimeout(() => {
            typing(sentence);
        }, speed);
    }
    else {
        
        setTimeout(enableInput, 700);
        
    }
}

function start(){
    typing(sentence);
}

(function(window, document, undefined) {

    // code that should be taken care of right away
  
    window.onload = init;
  
    function init(){
      // the code to be called when the dom has loaded
      // #document has its nodes
        AfterLoadingDOM();
        
    }
  
  })(window, document, undefined);

  function AfterLoadingDOM(){
    let startButtonElement = document.getElementById("startButton");
    startButtonElement.addEventListener('click', start);
    let counter = 0;
    let optionIdCounter = 0;
    const questionsArray = [
        {
            question : "What's my favorite color?",
            options : ['Green','Yellow','Orange','Blue'],
            answer : 4
        },
        {
            question : "What's my favorite food?",
            options : ['Idly', 'Butter Naan & Paneer Curry', 'Biryani'],
            answer : 2
        },
        {
            question : "What's my favorite place?",
            options : ['Hyderabad', 'Banglore', 'Ongole'],
            answer : 1
        },
        {
            question : "Which kind of person I am?",
            options : ['Morning', 'Night'],
            answer : 1
        },
        {
            question : "How do I like to spend my free time?",
            options : ['Watching Movie', "Playing Video Game", "Walking & Chitchat with Friends"],
            answer : 3
        },
        {
            question : "Are you more of an extrovert or introvert?",
            options : ['Extrovert', "Introvert", "Ambivert"],
            answer : 1
        },
        {
            question : "When you’re in a bad mood, is there something that makes you feel it better? what?",
            options : ['Listening to Music', "Roaming Outside", "Both"],
            answer : 3
        },
        {
            question : "How do I like to spend my free time?",
            options : ['Watching Movie', "Playing Video Game", "Walking & Chitchat with Friends"],
            answer : 3
        },
        {
            question : "Which one I like?",
            options : ['Sweet', 'Spicy'],
            answer : 1
        },
        {
            question : "What climate I like ?",
            options : ['Summer', 'Winter', 'Rainy'],
            answer : 2
        },
        {
            question : "Which person I admire most?",
            options : ['Virat Kohli', 'M S Dhoni'],
            answer : 1
        },
        {
            question : "Which one do I prefer?",
            options : ['Beard', 'No Beard'],
            answer : 1
        },


    ];
    let no_of_questions = questionsArray.length;
    

    /*creating questions dynamically*/
    
    let questionDivElement = document.getElementById("questionDiv");
    let optionsDivElement = document.getElementById("optionsDiv");
    let submitButtonElement = document.getElementById("submitButton");
    let invalidAnwserDivElement = document.getElementById("InvalidNameMsg");
    let mainDivElement = document.getElementById("mainDiv");
    let subDivElement = document.getElementById("subDiv");
    let scoreDisplayDivElement = document.getElementById("scoreDisplayDiv");
    let nextButtonElement = document.getElementById("nextButton");
    let submitAnswerButtonElement = document.getElementById("submitAnswerButton");
    let questionNumElement = document.getElementById("questionNum");
    let errorMsgElement = document.getElementById("errorMsg");
    let scoreMessageElement = document.getElementById("scoreMessage");
    let userInputElement = document.getElementById("userInput");
    let userName;
    let gradeMessageElement = document.getElementById("gradeMessage");
    let tryAgainBtnElement = document.getElementById("tryAgainBtn");
    let imageDivElement = document.getElementById("imageDiv");

    // stop displaying main_div and displays sub_div
    submitButtonElement.addEventListener('click', () => {
        userName = userInputElement.value;
        if (userName.length >= 3){
            mainDivElement.classList.add("d-none");
            subDivElement.classList.remove("d-none");
            nextButtonElement.disabled = true;
            getQuestionsAndOptions();
        }
        else{
            invalidAnwserDivElement.textContent = "Invalid Name, Please try again";
        }
       
        
    });

    submitAnswerButtonElement.addEventListener('click', () => {
        let getSelectedValue = document.querySelector( 'input[name="options"]:checked');   
        if(getSelectedValue !== null) {   
            errorMsgElement.textContent = "";
            submitAnswerButtonElement.classList.add("disabled");
            nextButtonElement.classList.remove("disabled");
            submitAnswerButtonElement.disabled = true;
            nextButtonElement.disabled = false;
            validateAnswer();

            
        } else {  
            submitAnswerButtonElement.disabled = false;
            nextButtonElement.disabled = true;
            errorMsgElement.textContent = "Please select an option"; 
        }
    });

    nextButtonElement.addEventListener('click', () => {
        if(counter < questionsArray.length){
            getQuestionsAndOptions();
            submitAnswerButtonElement.classList.remove("disabled");
            submitAnswerButtonElement.disabled = false;
            nextButtonElement.disabled = true
            nextButtonElement.classList.add("disabled");
        }
        else{
            displayingScore();
        }
        
        
    });

    tryAgainBtnElement.addEventListener('click', () => {
        location.href = "https://saikrishna-quiz.netlify.app/";
        
    });


    function getQuestionsAndOptions(){
        let eachQuestionObj = questionsArray[counter];
        displayQuesAndAnswer(eachQuestionObj);
        counter++;
    }

    function displayQuesAndAnswer(eachObj){
        questionDivElement.textContent = "";
        let quesElement = document.createElement("p");
        quesElement.classList.add("question","ps-4", "mt-3");
        quesElement.textContent = eachObj.question;
        questionDivElement.appendChild(quesElement);
        questionNumElement.textContent = `${counter + 1 } / ${no_of_questions}`;
        createAndAppendOptions(eachObj.options);
    }

    function createAndAppendOptions(options){
        optionsDivElement.textContent = "";
        options.forEach(eachOption => {
            optionIdCounter++;
            let divElement = document.createElement("div");
            divElement.id = `option${optionIdCounter}Div`;
            divElement.classList.add("w-50","p-1");
            optionsDivElement.appendChild(divElement);
            let radioElement = document.createElement("input");
            radioElement.type = "radio";
            radioElement.classList.add("radio-options");
            radioElement.value = eachOption;
            radioElement.id = `option${optionIdCounter}`;
            radioElement.name = "options";
            divElement.appendChild(radioElement);
            let labelElement = document.createElement("label");
            labelElement.setAttribute("for", `option${optionIdCounter}`);
            labelElement.classList.add("options","ps-2");
            labelElement.textContent = eachOption;
            divElement.appendChild(labelElement);
            let breakElement = document.createElement("br");
            optionsDivElement.appendChild(breakElement);
            
            if(optionIdCounter === options.length){
                optionIdCounter = 0;
            }
        }); 
    }

    //Displaying green and red colored border for right and wrong answers option div respectively
    function validateAnswer(){
        let getSelectedElement = document.querySelector( 'input[name="options"]:checked');  
        let eachOptionDivElement = getSelectedElement.parentElement; 
        if(getSelectedElement.value !== null) {
            let answerIndex = questionsArray[counter - 1].answer;
            let answer = questionsArray[counter - 1].options[answerIndex - 1];
            let answerOptionDiv = document.getElementById(`option${answerIndex}Div`);
            if(getSelectedElement.value === answer){
                CorrectAnswersCount += marksPerRightAnswer;
                eachOptionDivElement.classList.add("correct-answer");
            } else{
                eachOptionDivElement.classList.add("wrong-answer");
                answerOptionDiv.classList.add('correct-answer');
            }
            
        } else {  
            errorMsgElement.textContent = "Please select an option"; 
        }
    }

    function displayingScore(){
        scoreDisplayDivElement.classList.remove("d-none");
        subDivElement.classList.add("d-none");
        let total_marks = questionsArray.length * marksPerRightAnswer;
        let message = `Your score is ${CorrectAnswersCount} out of ${total_marks}`;
        scoreMessageElement.textContent = message;
        let scorePercentage = (CorrectAnswersCount * 100) / total_marks;
        gradeMessage(scorePercentage);
    }
    function messageFormatter(message){
        gradeMessageElement.innerHTML = message;

    }
    function gradeMessage(percentage){
        let spanElement = `<span class="user-name">Hey ${userName}</span>`;
        let message = `${spanElement} ! <br/><br/>`;
        if(percentage <= 25){
            message += `"${messageforbelow25}"`;
            messageFormatter(message);
        }
        else if(percentage <= 50){
            message += `"${messageforbelow25}"`;
            messageFormatter(message);
        }
        else if(percentage <= 75){
            message += `"${messageforbelow75}"`;
            messageFormatter(message);
        }
        else{
            message += `"${messageforabove75}"`;
            messageFormatter(message);
            imageDivElement.classList.remove("d-none");

        }
    }
  }





