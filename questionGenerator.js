//DISABLE THE PLACEHOLDER TEXT IN THE INPUT AFTER FIRST USE
function disablePlaceholder() {
    document.getElementById("answer").placeholder = "";
}

var keywordBankQuestions = [
    'Test1',
    'Test2',
    'Test3'
]

var keywordBankAnswers = [
    'abc',
    'def',
    'ghi'
]

//OBJECT TO STORE DATA FOR VUE
var obj = {
    //BINARY CONVERSION VARIABLES
    questionValue: 'N/A',
    answerValue: 'N/A',
    inputActive: true,
    attempt: '',
    questionNumber: '1',
    streak: 0,
    show: 1,
    selectQuestions: {
            numberBases : true,
            bitmap : true,
            sound : true,
            keyword : true,
            logic : true
        },
    activeQuestions: [
        "numberBases",
        "bitmap",
        "sound",
        "keyword",
        "logic"
    ]
}

//INIT VUE MODULES
var app = new Vue({
    el: '#content',
    data: obj,
    methods: {
        generatePseudocodeOutputsQuestion: function() {
            //TODO - PSEUDOCODE IS SHOWN, TRACE THE ALGORITHM TO DETERMINE THE OUTPUT ONCE RUN
        },

        generatePseudocodeComprehensionQuestion: function() {
            //TODO - PSEUDOCODE IS SHOWN, IDENTIFY LINE NUMBERS/DETERMINE PRESENCE/DATA TYPE FOR GIVEN INFORMATION
            //LINE NUMBERS - SELECTION, ITERATION
            //PRESENCE - NESTED SELECTION, NESTED ITERATION, CONSTANTS
            //DATA TYPES - INT, FLOAT, CHAR, STRING, BOOL
        },

        generateUnitsQuestion: function() {
            //TODO - VALUE OF BYTES WITH PREFIX IS SHOWN, COVERT TO ANOTHER PREFIX
        },

        generateAsciiComprehensionQuestion: function() {
            //TODO - A STRING IS SHOWN, HOW MANY CHARACTERS IS IT
        },

        generateAsciiValuesQuestion: function() {
            //TODO - AN ASCII VALUE IS GIVEN WITH ITS INDEX, WHAT IS X VALUE?
        },
        
        generateRleQuestion: function() {
            //TODO - TEXT IS SHOWN, COMPRESS IT USING RLE
            //     - RLE IS SHOWN, DECOMPRESS IT
            //     - BOTH ARE SHOWN, HOW MUCH STORAGE HAS BEEN SAVED?
        },

        generateClockCycleQuestion: function() {
            //TODO - CLOCK SPEED AND CORES ARE SHOWN, WHAT IS THE THEORETICAL MAX CLOCK CYCLES?
        },

        generateLogicQuestion: function() {
            //CREATE TWO RANDOM BOOLEAN VALUES
            var a = Math.random() >= 0.5;
            var b = Math.random() >= 0.5;
            //USE RANDOM NUMBER TO DETERMINE QUESTION TYPE
            x = Math.floor(Math.random() * 4);
            switch(x) {
                case 0:
                    //AND
                    app.questionValue = "The values " + (a ? 1 : 0) + ' and ' + (b ? 1 : 0) +' are to be input into an AND logic gate. What will be outputted?';
                    app.answerValue = (a & b).toString();
                    break;
                case 1:
                    //OR
                    app.questionValue = "The values " + (a ? 1 : 0) + ' and ' + (b ? 1 : 0) +' are to be input into an OR logic gate. What will be outputted?';
                    app.answerValue = (a | b).toString();
                    break;
                case 2:
                    //XOR
                    app.questionValue = "The values " + (a ? 1 : 0) + ' and ' + (b ? 1 : 0) +' are to be input into an XOR logic gate. What will be outputted?';
                    app.answerValue = (a ^ b).toString();
                    break;
                case 3:
                    //NOT
                    app.questionValue = "The value " + (a ? 1 : 0) + ' is to be input into a NOT logic gate. What will be outputted?';
                    app.answerValue = (!a ? 1 : 0).toString();
                    break;
            }
        },

        generateKeywordQuestion: function () {
            //CHOOSE A RANDOM VALUE FROM 0 TO THE LENGTH OF THE ARRAY
            y = Math.floor(Math.random() * keywordBankQuestions.length);
            //LOAD THE CORRESPONDING QUESTION AND ANSWER
            app.questionValue = keywordBankQuestions[y];
            app.answerValue = keywordBankAnswers[y];
        },

        generateSoundQuestion: function () {
            //GENERATE VALUES FOR IMAGE
            var sampleResolution = (Math.floor(Math.random() * 16)+1);
            var sampleRate = (Math.floor(Math.random() * 800)+1);
            var duration = (Math.floor(Math.random() * 120)+1);
            var filesize = sampleResolution * sampleRate * duration;
            if(filesize % 8 == 0) {
                var filesizeUnit = filesize / 8;
                //ADD UNIT TO FILESIZE AFTER CALCULATIONS
                filesizeUnit = filesizeUnit + ' bytes'
            }
            else {
                var filesizeUnit = filesize + ' bits'
            }
            //CONVERT VALUES TO STRINGS
            sampleResolution = sampleResolution.toString();
            sampleRate = sampleRate.toString();
            duration = duration.toString();
            filesize = filesize.toString();
            //USE RANDOM NUMBER TO DETERMINE QUESTION TYPE
            x = Math.floor(Math.random() * 4);
            switch(x) {
                case 0:
                    //ANSWER == SAMPLE RESOLUTION
                    app.questionValue = 'Using the following details, calculate the sample resolution of this sound recording. Filesize: ' + filesizeUnit + '. Sample rate: ' + sampleRate + 'Hz. Duration: ' + duration + ' seconds.';
                    app.answerValue = sampleResolution;
                    break;
                case 1:
                    //ANSWER == SAMPLE RATE
                    app.questionValue = 'Using the following details, calculate the sample rate of this sound recording. Filesize: ' + filesizeUnit + '. Sample resolution: ' + sampleResolution + ' bits. Duration: ' + duration + ' seconds.';
                    app.answerValue = sampleRate;
                    break;
                case 2:
                    //ANSWER == DURATION
                    app.questionValue = 'Using the following details, calculate the duration of this sound recording. Filesize: ' + filesizeUnit + '. Sample rate: ' + sampleRate + 'Hz. Sample resolution: ' + sampleResolution + ' bits.';
                    app.answerValue = duration;
                    break;
                case 3:
                    //ANSWER == FILESIZE
                    app.questionValue = 'Using the following details, calculate the filesize in bits of this sound recording. Sample resolution: ' + sampleResolution + ' bits. Sample rate: ' + sampleRate + 'Hz. Duration: ' + duration + ' seconds.';
                    app.answerValue = filesize;
                    break;
            }
        },

        generateBitmapQuestion: function () {
            //GENERATE VALUES FOR IMAGE
            var colourDepth = (Math.floor(Math.random() * 8)+1);
            var numberOfColours = Math.pow(2, colourDepth);
            var width = (Math.floor(Math.random() * 800)+1);
            var height = (Math.floor(Math.random() * 800)+1);
            var resolution = width * height;
            var filesize = resolution * colourDepth;
            if(filesize % 8 == 0) {
                var filesizeUnit = filesize / 8;
                //ADD UNIT TO FILESIZE AFTER CALCULATIONS
                filesizeUnit = filesize + ' bytes'
            }
            else {
                var filesizeUnit = filesize + ' bits'
            }
            //CONVERT VALUES TO STRINGS
            colourDepth = colourDepth.toString();
            numberOfColours = numberOfColours.toString();
            width = width.toString();
            height = height.toString();
            resolution = resolution.toString();
            filesize = filesize.toString();
            //USE RANDOM NUMBER TO DETERMINE QUESTION TYPE
            x = Math.floor(Math.random() * 6);
            switch(x) {
                case 0:
                    //ANSWER == WIDTH
                    //USE RANDOM NUMBER TO DETERMINE EQUATION PERMUTATION
                    y = Math.floor(Math.random() * 3);
                    switch(y) {
                        case 0:
                            app.questionValue = 'Using the following details, calculate the width of this bitmap image. Filesize: ' + filesizeUnit + '. Height: ' + height + '. Colour Depth: ' + colourDepth + '.';
                            app.answerValue = width;
                            break;
                        case 1:
                            app.questionValue = 'Using the following details, calculate the width of this bitmap image. Filesize: ' + filesizeUnit + '. Height: ' + height + '. Number of colours: ' + numberOfColours + '.';
                            app.answerValue = width;
                            break;
                        case 2:
                            app.questionValue = 'Using the following details, calculate the width of this bitmap image. Resolution: ' + resolution + '. Height: ' + height + '.';
                            app.answerValue = width;
                            break;
                    }
                    break;
                case 1:
                    //ANSWER == HEIGHT
                    //USE RANDOM NUMBER TO DETERMINE EQUATION PERMUTATION
                    y = Math.floor(Math.random() * 3);
                    switch(y) {
                        case 0:
                            app.questionValue = 'Using the following details, calculate the height of this bitmap image.. Filesize: ' + filesizeUnit + '. Width: ' + width + '\nColour depth: ' + colourDepth + '.';
                            app.answerValue = height;
                            break;
                        case 1:
                            app.questionValue = 'Using the following details, calculate the height of this bitmap image.. Filesize: ' + filesizeUnit + '. Width: ' + width + '\nNumber of colours: ' + numberOfColours + '.';
                            app.answerValue = height;
                            break;
                        case 2:
                            app.questionValue = 'Using the following details, calculate the height of this bitmap image. Resolution: ' + resolution + '. Width: ' + width + '.';
                            app.answerValue = height;
                            break;
                    }
                    break;
                case 2:
                    //ANSWER == RESOLUTION
                    //USE RANDOM NUMBER TO DETERMINE EQUATION PERMUTATION
                    y = Math.floor(Math.random() * 3);
                    switch(y) {
                        case 0:
                            app.questionValue = 'Using the following details, calculate the resolution of this bitmap image. Filesize: ' + filesizeUnit + '. Colour depth: ' + colourDepth + '.';
                            app.answerValue = resolution;
                            break;
                        case 1:
                            app.questionValue = 'Using the following details, calculate the resolution of this bitmap image. Width: ' + width + '. Height: ' + height + '.';
                            app.answerValue = resolution;
                            break;
                        case 2:
                            app.questionValue = 'Using the following details, calculate the resolution of this bitmap image. Filesize: ' + filesizeUnit + '. Number of colours: ' + numberOfColours + '.';
                            app.answerValue = resolution;
                            break;
                    }
                    break;
                case 3:
                    //ANSWER == COLOUR DEPTH
                    //USE RANDOM NUMBER TO DETERMINE EQUATION PERMUTATION
                    y = Math.floor(Math.random() * 3);
                    switch(y) {
                        case 0:
                            app.questionValue = 'Using the following details, calculate the colour depth of this bitmap image. Filesize: ' + filesizeUnit + '. Resolution: ' + resolution + '.';
                            app.answerValue = colourDepth;
                            break;
                        case 1:
                            app.questionValue = 'Using the following details, calculate the colour depth of this bitmap image. Filesize: ' + filesizeUnit + '. Width: ' + width + '. Height: ' + height + '.';
                            app.answerValue = colourDepth;
                            break;
                        case 2:
                            app.questionValue = 'Using the following details, calculate the colour depth of this bitmap image. Number of colours: ' + numberOfColours + '.';
                            app.answerValue = colourDepth;
                            break;
                    }
                    break;
                case 4:
                    //ANSWER == NUMBER OF COLOURS
                    //USE RANDOM NUMBER TO DETERMINE EQUATION PERMUTATION
                    y = Math.floor(Math.random() * 3);
                    switch(y) {
                        case 0:
                            app.questionValue = 'Using the following details, calculate the number of colours that this bitmap image can display. Filesize: ' + filesizeUnit + '. Resolution: ' + resolution + '.';
                            app.answerValue = numberOfColours;
                            break;
                        case 1:
                            app.questionValue = 'Using the following details, calculate the number of colours that this bitmap image can display. Filesize: ' + filesizeUnit + '. Width: ' + width + '. Height: ' + height + '.';
                            app.answerValue = numberOfColours;
                            break;
                        case 2:
                            app.questionValue = 'Using the following details, calculate the number of colours that this bitmap image can display. Colour depth: ' + colourDepth + '.';
                            app.answerValue = numberOfColours;
                            break;
                    }
                    break;
                case 5:
                    //ANSWER == FILESIZE
                    //USE RANDOM NUMBER TO DETERMINE EQUATION PERMUTATION
                    y = Math.floor(Math.random() * 4);
                    switch(y) {
                        case 0:
                            app.questionValue = 'Using the following details, calculate the filesize in bits of this bitmap image. Resolution: ' + resolution + '. Colour depth: ' + colourDepth + '.';
                            app.answerValue = filesize;
                            break;
                        case 1:
                            app.questionValue = 'Using the following details, calculate the filesize in bits of this bitmap image. Resolution: ' + resolution + '. Number of colours: ' + numberOfColours + '.';
                            app.answerValue = filesize;
                            break;
                        case 2:
                            app.questionValue = 'Using the following details, calculate the filesize in bits of this bitmap image. Width: ' + width + '. Height: ' + height + '. Colour depth: ' + colourDepth + '.';                            
                            app.answerValue = filesize;
                            break;
                        case 3:
                            app.questionValue = 'Using the following details, calculate the filesize in bits of this bitmap image. Width: ' + width + '. Height: ' + height + '. Number of colours: ' + numberOfColours + '.'; 
                            app.answerValue = filesize;
                            break;
                    }
                    break;
                }
           
        },

        generateConversionQuestion: function () {
            //GENERATE NUMBER FROM 0 TO MAXIMUM BASED ON BITS
            var decimal = Math.floor(Math.random() * (Math.pow(2, 8))+1);
            //CONVERT TO BINARY AND HEX
            var binary = decimal.toString(2);
            var hexadecimal = decimal.toString(16).toUpperCase();
            //CONVERT DECIMAL TO STRING
            decimal = decimal.toString();
            //USE RANDOM NUMBER TO DETERMINE QUESTION TYPE
            x = Math.floor(Math.random() * 6);
            switch(x) {
                case 0:
                    //BINARY TO DECIMAL
                    app.questionValue = 'Convert the binary value ' + binary + ' to decimal.';
                    app.answerValue = decimal;
                    break;
                case 1:
                    //BINARY TO HEXADECIMAL
                    app.questionValue = 'Convert the binary value ' + binary + ' to hexadecimal.';
                    app.answerValue = hexadecimal;
                    break;
                case 2:
                    //DECIMAL TO BINARY
                    app.questionValue = 'Convert the decimal value ' + decimal + ' to binary.';
                    app.answerValue = binary;
                    break;
                case 3:
                    //DECIMAL TO HEXADECIMAL
                    app.questionValue = 'Convert the decimal value ' + decimal + ' to hexadecimal.';
                    app.answerValue = hexadecimal;
                    break;
                case 4:
                    //HEXADECIMAL TO DECIMAL
                    app.questionValue = 'Convert the hexadecimal value ' + hexadecimal + ' to decimal.';
                    app.answerValue = decimal;
                    break;
                case 5:
                    //HEXADECIMAL TO BINARY
                    app.questionValue = 'Convert the hexadecimal value ' + hexadecimal + ' to binary.';
                    app.answerValue = binary;
                    break;
            }
        },

        repopulateActiveQuestions: function () {
            //SET THE INPUT BACK TO ACTIVE
            app.inputActive = true;
            //RESET THE ACTIVE QUESTIONS LIST
            app.activeQuestions = [];
            //USE CONDITIONS TO REPOPULATE ACTIVE QUESTIONS LIST BASED ON THE CHECKBOXES
            if(app.selectQuestions.numberBases) {
                app.activeQuestions.push("numberBases");
            }
            if(app.selectQuestions.bitmap) {
                app.activeQuestions.push("bitmap");
            }
            if(app.selectQuestions.sound) {
                app.activeQuestions.push("sound");
            }
            if(app.selectQuestions.keyword) {
                app.activeQuestions.push("keyword");
            }
            if(app.selectQuestions.logic) {
                app.activeQuestions.push("logic");
            }
            //CHECK IF NO CHECKBOXES ARE CHECKED
            if(app.activeQuestions.length == 0) {
                //APPEND PLACEHOLDER THAT WILL BE USED TO DISPLAY INSTRUCTION LATER
                app.activeQuestions.push("placeholder");
                //SET THE INPUT TO DISABLED SO USER CAN'T PROGRESS THROUGH NON-EXISTENT QUESTIONS
                app.inputActive = false;
            }
        },

        generateQuestion: function () {
            //REPOPULATE THE AVAILABLE QUESTION TYPES FROM THE QUESTION TYPES THAT ARE CURRENTLY SELECTED
            app.repopulateActiveQuestions();
            //CHOOSE RANDOMLY FROM ARRAY CONTAINING ACTIVE QUESTION TYPES
            x = app.activeQuestions[Math.floor(Math.random() * app.activeQuestions.length)];
            //SWITCH CASE WILL CHOOSE A RANDOM QUESTION TYPE
            switch(x) {
                //IF NO QUESTION IS CHECKED SHOW INSTRUCTIONS TO GET BACK
                case "placeholder":
                    app.questionValue = "You haven't selected any questions! Access the settings using the link at the top right of the window.";
                    app.answerValue = "..."
                    break;
                case "numberBases":
                    //CONVERSION QUESTION
                    app.generateConversionQuestion();
                    break;
                case "bitmap":
                    //BITMAP QUESTION
                    app.generateBitmapQuestion();
                    break;
                case "sound":
                    //SOUND QUESTION
                    app.generateSoundQuestion();
                    break;
                case "keyword":
                    //KEYWORD QUESTION
                    app.generateKeywordQuestion();
                    break;
                case "logic":
                    //LOGIC GATE QUESTION
                    app.generateLogicQuestion();
                    break;
            }
        },

        checkAnswer: function () {
            //COMPARE THE ANSWER WITH THE USER ATTEMPT
            if(app.answerValue.toUpperCase() == app.attempt.toUpperCase()) {
                //ADD ONE TO STREAK COUNTER
                app.questionNumber++;
                //RESET THE CURRENT INPUT BACK TO BLANK
                app.attempt = "";
                //START ANIMATION
                document.getElementById("question").style.animation = "pulse 1s 1";
                //WAIT UNTIL ANIMATION IS DONE, THEN RESET CSS READY FOR NEXT ANIMATION
                setTimeout(function() {
                    document.getElementById("question").style.animation = "";
                }, 1001);
                //REGENERATE QUESTION
                app.generateQuestion();
            }
            //RUN CHECKANSWER AGAIN, THIS MEANS THE USER WONT HAVE TO SUBMIT AN ANSWER
            requestAnimationFrame(app.checkAnswer);
        }
    }
})

//START THE PROGRAM
app.generateQuestion();
app.checkAnswer();