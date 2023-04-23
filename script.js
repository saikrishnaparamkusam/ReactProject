let sentence = "Hello Reader, What's your name?";
let i = 0;
let speed = 10;



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
    const questionsArray = [
        {
            question : "What's my favorite color?",
            options : ['Red', 'Blue', 'Black', 'White'],
            answer : 2
        },
        {
            question : "What's my favorite food?",
            options : ['Kaju Biryani', 'Butter Naan & Paneer Curry', 'Oat Meal', 'Pizza'],
            answer : 2
        },
        {
            question : "What's my favorite place?",
            options : ['Hyderabad', 'Banglore', 'Ongole', 'Vetlapalem'],
            answer : 2
        }    
    ];
    let no_of_questions = questionsArray.length;
    

    /*creating questions dynamically*/
    
    let questionDivElement = document.getElementById("questionDiv");
    let optionsDivElement = document.getElementById("optionsDiv");
    let submitButtonElement = document.getElementById("submitButton");
    let subDivElement = document.getElementById("subDiv");
    let mainDivElement = document.getElementById("mainDiv");
    let nextButtonElement = document.getElementById("nextButton");
    let questionNumElement = document.getElementById("questionNum");
    let errorMsgElement = document.getElementById("errorMsg");

    // Removes main div and display sub div
    submitButtonElement.addEventListener('click', () => {
        mainDivElement.classList.add("d-none");
        subDivElement.classList.remove("d-none");
        getQuestionsAndOptions();
    });

    nextButtonElement.addEventListener('click', () => {
        var getSelectedValue = document.querySelector( 'input[name="options"]:checked');   
        if(getSelectedValue !== null) {   
            errorMsgElement.textContent = "";
            console.log("Radio button is selected");  
            getQuestionsAndOptions();
        } else {  
            errorMsgElement.textContent = "Please select an option"; 
            
        }
        
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
            let radioElement = document.createElement("input");
            radioElement.type = "radio";
            radioElement.classList.add("radio-options");
            radioElement.value = eachOption;
            radioElement.id = eachOption;
            radioElement.name = "options";
            optionsDivElement.appendChild(radioElement);
            let labelElement = document.createElement("label");
            labelElement.setAttribute("for", eachOption);
            labelElement.classList.add("options","p-2");
            labelElement.textContent = eachOption;
            optionsDivElement.appendChild(labelElement);
            let breakElement = document.createElement("br");
            optionsDivElement.appendChild(breakElement);
        }); 
    }
  }





