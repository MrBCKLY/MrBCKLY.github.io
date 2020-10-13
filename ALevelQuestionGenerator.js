//DISABLE THE PLACEHOLDER TEXT IN THE INPUT AFTER FIRST USE
function disablePlaceholder() {
    document.getElementById("answer").placeholder = "";
}
//COUNT THE DECIMAL PLACES OF A NUMBER
var countDecimals = function (value) {
    if (Math.floor(value) === value) return 0;
    return value.toString().split(".")[1].length || 0;
}

//OBJECT TO STORE DATA FOR VUE
var obj = {
    //BINARY CONVERSION VARIABLES
    questionValue: 'N/A',
    answerValue: 'N/A',
    questionType: '',
    extraHelp: '',
    inputActive: true,
    attempt: '',
    questionNumber: '1',
    streak: 0,
    show: 1,
    binaryValues: [
        128, 64, 32, 16, 8, 4, 2, 1,
        (1 / 2), (1 / 4), (1 / 8), (1 / 16), (1 / 32), (1 / 64), (1 / 128), (1 / 256),
        (1 / 512), (1 / 1024), (1 / 2048), (1 / 4096), (1 / 8192), (1 / 16384), (1 / 32768), (1 / 65536)
    ],
    exponentBinaryStrings: [
        "0000", "0001", "0010", "0011",
        "0100", "0101", "0110", "0111",
        "1000", "1001", "1010", "1011",
        "1100", "1101", "1110", "1111"
    ],    
    exponentDecimalStrings: [
        0, 1, 2, 3,
        4, 5, 6, 7,
        -8, -7, -6, -5,
        -4, -3, -2, -1
    ],    
    selectQuestions: {
            unsigned : true,
            twosComplement: true,
            fixedPoint: true,
            floatingPoint: true
        },
    activeQuestions: [
        
    ]
}

//INIT VUE MODULES
var app = new Vue({
    el: '#content',
    data: obj,
    methods: {

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

        generateFloatingPointQuestion: function () {
            x = Math.floor(Math.random() * 2);
            switch(x) {
                case 0:
                    //NORMALISED 0.1
                    mantissaBinary = "01";
                    for(var i = 0; i < 6; i++) {
                        mantissaBinary = mantissaBinary + (Math.floor(Math.random() * 2)).toString();
                    }
                    var exponentValue = Math.floor(Math.random() * 16);
                    var exponentDecimal = app.exponentDecimalStrings[exponentValue];
                    var exponentBinary = app.exponentBinaryStrings[exponentValue];
                    break;
                case 1:
                    //NORMALISED 1.0
                    mantissaBinary = "10";
                    for(var i = 0; i < 6; i++) {
                        mantissaBinary = mantissaBinary + (Math.floor(Math.random() * 2)).toString();
                    }
                    var exponentValue = Math.floor(Math.random() * 8);
                    var exponentDecimal = app.exponentDecimalStrings[exponentValue];
                    var exponentBinary = app.exponentBinaryStrings[exponentValue];
                    break;
            }  
            mantissaDecimal = 0;
            for (var i = 0; i < 8; i++) {
                if (mantissaBinary.charAt(i) == "1") {
                    if (i == 0) {
                        mantissaDecimal = mantissaDecimal + (app.binaryValues[i + 7 + (exponentDecimal * -1)] * -1);
                    }
                    else {
                        mantissaDecimal = mantissaDecimal + app.binaryValues[i + 7 + (exponentDecimal * -1)];
                    }
                }
            }
            //mantissaBinary = mantissaBinary.slice(0,1) + "." + mantissaBinary.slice(1);
            if (countDecimals(mantissaDecimal) >= 8) {
                mantissaDecimal = mantissaDecimal.toFixed(8);
            }
            mantissaDecimal = mantissaDecimal.toString();
            x = Math.floor(Math.random() * 3);
            switch(x) {
                case 0:
                    //BINARY TO DECIMAL
                    app.questionValue = "Convert " + mantissaBinary + " to decimal. The value is stored using two's complement floating point binary and has an exponent of " + exponentBinary + ".";
                    app.answerValue = mantissaDecimal.toString();
                    app.extraHelp = "If your answer is longer than 8 decimal places, round it to eight."
                    break;
                case 1:
                    //DECIMAL TO BINARY - EXPONENT
                    app.questionValue = "The decimal value " + mantissaDecimal.toString() + " is stored using normalised two's complement floating point binary. If the mantissa is " + mantissaBinary + ", what is the exponent?";
                    app.answerValue = exponentBinary;
                    break;
                case 2:
                    //DECIMAL TO BINARY - MANTISSA
                    app.questionValue = "The decimal value " + mantissaDecimal.toString() + " is stored using normalised two's complement floating point binary. If the exponent is " + exponentBinary + ", what is the mantissa?";
                    app.answerValue = mantissaBinary;
                    app.extraHelp = "Give your answer as a byte and without a binary point."
                    break;
            }  
                      
        },
        
        generateFixedPointQuestion: function () {
            var byteValue = Math.floor(Math.random() * 256);
            var mantissaBinary = "";
            if (byteValue >= 128) {
                mantissaBinary = byteValue.toString(2);
            }
            else if (byteValue >= 64) {
                mantissaBinary = "0" + byteValue.toString(2);
            }
            else if (byteValue >= 32) {
                mantissaBinary = "00" + byteValue.toString(2);
            }
            else if (byteValue >= 16) {
                mantissaBinary = "000" + byteValue.toString(2);
            }
            else if (byteValue >= 8) {
                mantissaBinary = "0000" + byteValue.toString(2);
            }
            else if (byteValue >= 4) {
                mantissaBinary = "00000" + byteValue.toString(2);
            }
            else if (byteValue >= 2) {
                mantissaBinary = "000000" + byteValue.toString(2);
            }
            else {
                mantissaBinary = "0000000" + byteValue.toString(2);
            }
            mantissaDecimal = 0;
            for (var i = 0; i < 8; i++) {
                if (mantissaBinary.charAt(i) == "1") {
                    if (i == 0) {
                        mantissaDecimal = mantissaDecimal + (app.binaryValues[i+4] * -1);
                    }
                    else {
                        mantissaDecimal = mantissaDecimal + app.binaryValues[i+4];
                    }
                }
            }
            mantissaBinary = mantissaBinary.slice(0,4) + "." + mantissaBinary.slice(4);
            if (countDecimals(mantissaDecimal) >= 8) {
                mantissaDecimal = mantissaDecimal.toFixed(8);
            }
            mantissaDecimal = mantissaDecimal.toString();
            x = Math.floor(Math.random() * 2);
            switch(x) {
                case 0:
                    //BINARY TO DECIMAL
                    app.questionValue = "Convert the two's complement fixed point binary number " + mantissaBinary + " to decimal.";
                    app.answerValue = mantissaDecimal.toString();
                    break;
                case 1:
                    //DECIMAL TO BINARY
                    app.questionValue = "Convert the decimal value " + mantissaDecimal + " to a byte of two's complement fixed point binary.";
                    app.answerValue = mantissaBinary;
                    app.extraHelp = "Give your answer as a byte with the binary point included."
                    break;
            }  
        },

        generateTwosComplementQuestion: function () {
            var byteValue = Math.floor(Math.random() * 256);
            var mantissaBinary = "";
            if (byteValue >= 128) {
                mantissaBinary = byteValue.toString(2);
            }
            else if (byteValue >= 64) {
                mantissaBinary = "0" + byteValue.toString(2);
            }
            else if (byteValue >= 32) {
                mantissaBinary = "00" + byteValue.toString(2);
            }
            else if (byteValue >= 16) {
                mantissaBinary = "000" + byteValue.toString(2);
            }
            else if (byteValue >= 8) {
                mantissaBinary = "0000" + byteValue.toString(2);
            }
            else if (byteValue >= 4) {
                mantissaBinary = "00000" + byteValue.toString(2);
            }
            else if (byteValue >= 2) {
                mantissaBinary = "000000" + byteValue.toString(2);
            }
            else {
                mantissaBinary = "0000000" + byteValue.toString(2);
            }
            mantissaDecimal = 0;
            for (var i = 0; i < mantissaBinary.length; i++) {
                if (mantissaBinary.charAt(i) == "1") {
                    if (i == 0) {
                        mantissaDecimal = mantissaDecimal + (app.binaryValues[i] * -1);
                    }
                    else {
                        mantissaDecimal = mantissaDecimal + app.binaryValues[i];
                    }
                }
            }
            mantissaDecimal = mantissaDecimal.toString();
            x = Math.floor(Math.random() * 2);
            switch(x) {
                case 0:
                    //BINARY TO DECIMAL
                    app.questionValue = "Convert the two's complement binary number " + mantissaBinary + " to decimal.";
                    app.answerValue = mantissaDecimal.toString();
                    break;
                case 1:
                    //DECIMAL TO BINARY
                    app.questionValue = "Convert the decimal value " + mantissaDecimal + " to a byte of two's complement binary.";
                    app.answerValue = mantissaBinary;
                    app.extraHelp = "Give your answer as a byte.";
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
                    app.questionValue = 'Convert the unsigned binary value ' + binary + ' to decimal.';
                    app.answerValue = decimal;
                    break;
                case 1:
                    //BINARY TO HEXADECIMAL
                    app.questionValue = 'Convert the unsigned binary value ' + binary + ' to hexadecimal.';
                    app.answerValue = hexadecimal;
                    break;
                case 2:
                    //DECIMAL TO BINARY
                    app.questionValue = 'Convert the decimal value ' + decimal + ' to unsigned binary.';
                    app.answerValue = binary;
                    app.extraHelp = "Give your answer with no leading zeroes.";
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
                    app.questionValue = 'Convert the hexadecimal value ' + hexadecimal + ' to unsigned binary.';
                    app.answerValue = binary;
                    app.extraHelp = "Give your answer with no leading zeroes.";
                    break;
            }
        },

        repopulateActiveQuestions: function () {
            //SET THE INPUT BACK TO ACTIVE
            app.inputActive = true;
            //RESET THE ACTIVE QUESTIONS LIST
            app.activeQuestions = [];
            //USE CONDITIONS TO REPOPULATE ACTIVE QUESTIONS LIST BASED ON THE CHECKBOXES
            if(app.selectQuestions.unsigned) {
                app.activeQuestions.push("unsigned");
            }
            if(app.selectQuestions.twosComplement) {
                app.activeQuestions.push("twosComplement");
            }
            if(app.selectQuestions.fixedPoint) {
                app.activeQuestions.push("fixedPoint");
            }
            if(app.selectQuestions.floatingPoint) {
                app.activeQuestions.push("floatingPoint");
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
            //RESET THE ADDITIONAL HELP TO EMPTY
            app.extraHelp = "";
            //CHOOSE RANDOMLY FROM ARRAY CONTAINING ACTIVE QUESTION TYPES
            x = app.activeQuestions[Math.floor(Math.random() * app.activeQuestions.length)];
            app.questionType = x;
            //SWITCH CASE WILL CHOOSE A RANDOM QUESTION TYPE
            switch(x) {
                case "placeholder":
                    //IF NO QUESTION IS CHECKED SHOW INSTRUCTIONS TO GET BACK
                    app.questionValue = "You haven't selected any questions! Access the settings using the link at the top right of the window.";
                    app.answerValue = "..."
                    break;
                case "unsigned":
                    //UNSIGNED CONVERSION QUESTION
                    app.generateConversionQuestion();
                    break;
                case "twosComplement":
                    //TWOS COMPLEMENT
                    app.generateTwosComplementQuestion();
                    break;
                case "fixedPoint":
                    //FIXED POINT CONVERSION QUESTION
                    app.generateFixedPointQuestion();
                    break;
                case "floatingPoint":
                    //FLOATING POINT CONVERSION QUESTION
                    app.generateFloatingPointQuestion();
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
