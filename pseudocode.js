codes = [
    ["Stamp on it", "cat = 'Dont eat'<br>dog = 'Eat it'<br>mouse = 'Stamp on it'<br>OUPUT mouse"],
    ["dessert", "starter = 'Prawns'<br>maincourse = 'Roast beef'<br>dessert = 'Chocolate'<br>OUTPUT 'dessert'"],
    ["30", "a = 10<br>b = 20<br>c = 400<br>d = a + b<br>OUTPUT d"],
    ["14", "weeks = 2<br>days = weeks * 7<br>hours = days * 24<br>OUTPUT days"],
    ["8", "message = 'Bomb'<br>code = length(message)<br>OUTPUT code * 2"],
    ["Eat it", "cat = 'Dont eat'<br>dog = 'Eat it'<br>mouse = 'Stamp on it'<br>OUPUT dog"],
    ["10", "starter = 'Prawns'<br>maincourse = 'Roast beef'<br>dessert = 'Chocolate'<br>OUTPUT maincourse.length()"],
    ["10", "a = 10<br>b = 20<br>c = 400<br>d = a + b<br>OUTPUT (c / b) - a"],
    ["168", "weeks = 2<br>days = weeks * 7<br>hours = days * 24<br>OUTPUT hours / 2"],
    ["5", "codes = [1,2,3,4,5,6,7,8,9,10]<br>secret = 8/2<br>OUTPUT codes[secret]"],
    ["o", "codes = ['h', 'e', 'l', 'l', 'o']<br>secret = 3 + 1<br>OUTPUT codes[secret]"],
    ["u0079", "codes = 'azyu289'<br>james = 3<br>bond = 6<br>OUTPUT codes[james]<br>OUTPUT '007'<br>OUTPUT codes[bond]"],
    ["nuclear", "codes[0] = 'n'<br>codes[3] = 'l'<br>codes[4] = 'e'<br>codes[2] = 'c'<br>codes[6] = 'r'<br>codes[5] = 'a'<br>codes[1] = 'u'<br>OUTPUT codes"],
    ["e", "passwords = ['passwords', 'me', 'secret', '12345', 'god']<br>OUTPUT passwords[2][1]"],
    ["50", "ammo = 50<br>enemy_distance = 100<br>#Shoot if close enough<br>IF enemy_distance < 50 THEN<br>   ammo = ammo - 1<br>ENDIF<br>OUTPUT ammo"],
    ["destroy", "targets = ['building', 'bridge', 'station', 'HQ', 'power plant', 'hospital']<br>target = 3<br>IF targets[target] = 'hospital' THEN<br>    OUTPUT 'protect'<br>ELSE<br>    OUTPUT 'destroy'<br>ENDIF"],
    ["48small", "codes = [48, 72, 72, 51, 69]<br>secret = codes[2] - codes[1]<br>secret = secret + codes[0]<br>OUTPUT secret<br>IF secret > 50 THEN<br>    OUTPUT 'big'<br>ELSE<br>    OUTPUT 'small'<br>ENDIF"],
    ["wrong", "code = 'secretcode'<br>letter = 5<br>password = code[letter]<br>IF password = 's' THEN<br>    OUTPUT 'correct'<br>ELSE<br>    OUTPUT 'wrong'<br>ENDIF"],
    ["wait...", "weather = ['Sunny', 'Cloudy', 'Snowy', 'Hail', 'Misty', 'Foggy']<br>today = weather[1]<br>If today = 'Sunny' THEN<br>    OUTPUT 'attack!'<br>ELSE<br>    OUTPUT 'wait...'<br>ENDIF"],
    ["49", "ammo = 50<br>enemy_distance = 35<br>#Shoot if close enough<br>IF enemy_distance < 50 THEN<br>   ammo = ammo - 1<br>ENDIF<br>OUTPUT ammo"],
    ["protect", "targets = ['building', 'bridge', 'station', 'HQ', 'power plant', 'hospital']<br>target = LEN(targets) - (LEN(targets) / LEN(targets))<br>IF targets[target] = 'hospital' THEN<br>    OUTPUT 'protect'<br>ELSE<br>    OUTPUT 'destroy'<br>ENDIF"],
    ["90big", "codes = [48, 72, 72, 51, 69]<br>secret = codes[4] - codes[3]<br>secret = secret + codes[1]<br>OUTPUT secret<br>IF secret > 50 THEN<br>    OUTPUT 'big'<br>ELSE<br>    OUTPUT 'small'<br>ENDIF"],
    ["OK", "temperatures = [-50, 20, 30, 50, 80, 100]<br>t = temperatures[2]<br>CASE t OF<br>    -50: OUTPUT 'Freeze'<br>    20: OUTPUT 'OK'<br>    30: OUTPUT 'OK'<br>    50: OUTPUT 'Caution'<br>    80: OUTPUT 'Overload'<br>    100: OUTPUT 'Melt'<br>ENDCASE"],
    ["frodo dies", "names = ['bilbo', 'gandalf', 'frodo', 'me']<br>poisoned = names[2]<br>OUTPUT poisoned<br>CASE poisoned OF<br>    'bilbo': OUTPUT 'survives'<br>    'gandalf': OUTPUT 'survives'<br>ELSE<br>    OUTPUT ' dies'<br>ENDCASE"],
    ["113...21", "code = '2239hoa2'<br>FOR i = 0 TO LEN(code)<br>    char = code[i]<br>    CASE char OF<br>        '2': OUTPUT 1<br>        'a': OUTPUT 2<br>        '3': OUTPUT 3<br>    ELSE<br>        OUTPUT '.'<br>    ENDCASE<br>ENDFOR"],
    ["hello you", "words = ['hello', 'goodbye', 'morning', 'afternoon', 'sleep']<br>code = 'htwayizyp'<br>FOR i = 0 TO LEN(code)<br>    char = code[i]<br>    CASE char OF<br>        'h': OUTPUT words[0][0]<br>        't': OUTPUT words[1][6]<br>        'w': OUTPUT words[0][2]<br>        'a': OUTPUT words[4][1]<br>        'y': OUTPUT words[2][1]<br>        'z': OUTPUT words[1][5]<br>        'p': OUTPUT 'u'<br>    ELSE<br>        OUTPUT ' '<br>    ENDCASE<br>ENDFOR"],
    ["Follow 088", "city = ['London', 'Paris', 'York', 'Berlin', 'Washington']<br>codenames = ['007', '016', '088', '312', '853']<br>target = LEN(city[2]) - 2<br>CASE city[target] OF<br>    'London': OUTPUT 'Meet ' + codenames[target]<br>    'York': OUTPUT 'Follow ' + codenames[target]<br>ELSE<br>    OUTPUT 'Attack ' + codenames[target]<br>ENDCASE"],
    ["good_morning", "words = ['hello', 'goodbye', 'morning', 'afternoon', 'sleep']<br>codeOne = 16 / 4<br>codeTwo = LEN(words)<br>OUTPUT words[1][0:codeOne]<br>OUTPUT '_'<br>OUTPUT words[codeTwo - codeOne + 1]<br>"],
    ["You shouldn't know this.", "You have finished the challenge!<br>Congratulations!"],
    ["-1", "How did you know?!"]
]


//DISABLE THE PLACEHOLDER TEXT IN THE INPUT AFTER FIRST USE
function disablePlaceholder() {
    document.getElementById("answer").placeholder = "";
}

//OBJECT TO STORE DATA FOR VUE
var obj = {
    code: "",
    answer: 0,
    attempt: "",
    streak: 0,
    show: true
}

//INIT VUE MODULES
var app = new Vue({
    el: '#content',
    data: obj,
    methods: {
        loadCode: function (x) {
            if(app.streak >= (codes.length-2)) {
                t2 = new Date();
                timeTaken = Math.floor((t2.getTime() - t1.getTime())/1000);
                app.answer = codes[app.streak][0];
                app.code = codes[app.streak][1] + "<br>It took you " + timeTaken.toString() + " seconds.";
            }
            else {
                app.answer = codes[app.streak][0];
                app.code = codes[app.streak][1];
            }
        },

        checkAnswer: function () {
            //COMPARE THE ANSWER WITH THE USER ATTEMPT
            if(app.answer == app.attempt) {
                document.getElementById("answer").style.backgroundColor = "#EFEFEF";
                app.streak++;
                //RESET THE CURRENT INPUT BACK TO BLANK
                app.attempt = "";
                //REGENERATE QUESTION
                app.loadCode()
            }
            else {
                document.getElementById("answer").style.backgroundColor = "#FFBE85";
            }
            return false;
        }
    }
})

t1 = new Date();
//START THE PROGRAM
app.loadCode();