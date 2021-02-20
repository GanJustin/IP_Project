var score = 0
var question = 1

/*function which_question(){
    if (question == 1){
        document.getElementById("quiz_page_one").innerHTML += '<div class="quiz_navagation_bar"><div id="question_page"><p>2 / 5</p></div></div><div class="setting_gear"><a href="settings.html"><img src="icons/gear_icon.svg" alt="gear icon for settings"></a></div><div id="points_container"><img src="icons/point_box.svg" alt="box for points"><p id="points">0</p></div><div class="question_box"><div class="question_row"><div class="question_number"><p>Question 2</p></div><div id="quiz_cross"><img src="icons/cross_icon.svg" alt="quit quiz cross"></div></div><div class="question"><p>Reported daily coronavirus infections have been falling accross the world for a month now, True or False?</p></div></div><div class="ans_container"><div id="ans_one"><p>True</p></div><div id="ans_two"><p>False</p></div></div>'
    }
}*/
/*function which_question(){
    if (question == 2){
        $("BODY").html(''); 
        document.getElementById("quiz_page_one").innerHTML += '<div class="quiz_navagation_bar"><div id="question_page"><p>2 / 5</p></div></div><div class="setting_gear"><a href="settings.html"><img src="icons/gear_icon.svg" alt="gear icon for settings"></a></div><div id="points_container"><img src="icons/point_box.svg" alt="box for points"><p id="points">0</p></div><div class="question_box"><div class="question_row"><div class="question_number"><p>Question 2</p></div><div id="quiz_cross" onclick="homeFunction()"><img src="icons/cross_icon.svg" alt="quit quiz cross"></div></div><div class="question"><p>Reported daily coronavirus infections have been falling accross the world for a month now, True or False?</p></div></div><div class="ans_container"><div id="ans_one"><p>True</p></div><div id="ans_two"><p>False</p></div></div>'
            document.getElementById("ans_one").addEventListener("click", function() {
                score++
                question++
                $("BODY").html(''); 
                document.getElementById("quiz_page_one").innerHTML += '<div class="quiz_navagation_bar"></div><div class="setting_gear"><a href="settings.html"><img src="icons/gear_icon.svg" alt="gear icon for settings"></a></div><div id="points_container"><img src="icons/point_box.svg" alt="box for points"><p id="points">0</p></div><div id="ans_box"><div class="correct_icon_box"><img src="icons/correct.svg" alt="correct icon"></div><div class="ans_row"><div class="ans_number"><p>Correct, Well done</p></div></div><div class="ans"><p>Reported daily coronavirus infections have been falling accross the world for a month now is True.</p></div><div class="click_anywhere"><p>Click anywhere to continue</p></div></div>'
            
            document.getElementById("ans_two").addEventListener("click", function() {
                question++
                $("BODY").html(''); 
                document.getElementById("quiz_page_one").innerHTML += '<div class="quiz_navagation_bar"></div><div class="setting_gear"><a href="settings.html"><img src="icons/gear_icon.svg" alt="gear icon for settings"></a></div><div id="points_container"><img src="icons/point_box.svg" alt="box for points"><p id="points">0</p></div><div class="wrong_box"><div class="correct_icon_box"><img src="icons/wrong.svg" alt="wrong icon"> </div><div class="ans_row"><div class="wrong_number"><p>Oops, Wrong answer</p></div></div><div class="ans"><p>Reported daily coronavirus infections have been falling accross the world for a month now is True.</p></div><div class="click_anywhere"><p>Click anywhere to continue</p></div></div>'

    }
});*/

function homeFunction() {
    location.replace("Homepage.html")
}

function leaderboardFunction() {
    location.replace("Leaderboard.html")
}

function mapFunction() {
    location.replace("Map.html")
}

function quizFunction() {
    $("BODY").html('');
    document.getElementById("quiz_page_one").innerHTML += '<div class="quiz_navagation_bar"><div id="question_page"><p>1 / 5</p></div></div><div class="setting_gear"><a href="settings.html"><img src="icons/gear_icon.svg" alt="gear icon for settings"></a></div><div id="points_container"><img src="icons/point_box.svg" alt="box for points"><p id="points">0</p></div><div class="question_box"><div class="question_row"><div class="question_number"><p>Question 1</p></div><div id="quiz_cross" onclick="homeFunction()"><img src="icons/cross_icon.svg" alt="quit quiz cross"></div></div><div class="question"><p>The first does of the Pfizer-BioNTech vaccine is 85 per cent effective against Covid-19 infection between ____ and ____ weeks after inoculation.</p></div></div><div class="ans_container"><div id="ans_one"><p>2 and 4</p></div><div id="ans_two"><p>1 and 3</p></div></div><script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script><script src="script3.js"></script>'
}



document.getElementById("ans_one").addEventListener("click", function() {
    score++
    question++
    $("BODY").html('');
    document.getElementById("quiz_page_one").innerHTML += "<div class='quiz_navagation_bar'></div><div class='setting_gear'><a href='settings.html'><img src='icons/gear_icon.svg' alt='gear icon for settings'></a></div><div id='points_container'><img src='icons/point_box.svg' alt='box for points'><p id='points'>0</p></div><div id='ans_box'><div class='correct_icon_box'><img src='icons/correct.svg' alt='correct icon'></div><div class='ans_row'><div class='ans_number'><p>Correct, Well done</p></div></div><div class='ans'><p>The first does of the Pfizer-BioNTech vaccine is 85 per cent effective against Covid-19 infection between 2 and 4 weeks after inoculation.</p></div><div class='click_anywhere'><p>Click anywhere to continue</p></div></div><script src='https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js'></script><script src='script2.js'></script>"
    

    document.getElementById("ans_box").addEventListener("click", function() {
        $("BODY").html(''); 
        document.getElementById("quiz_page_one").innerHTML += '<div class="quiz_navagation_bar"><div id="question_page"><p>2 / 5</p></div></div><div class="setting_gear"><a href="settings.html"><img src="icons/gear_icon.svg" alt="gear icon for settings"></a></div><div id="points_container"><img src="icons/point_box.svg" alt="box for points"><p id="points">0</p></div><div class="question_box"><div class="question_row"><div class="question_number"><p>Question 2</p></div><div id="quiz_cross" onclick="homeFunction()"><img src="icons/cross_icon.svg" alt="quit quiz cross"></div></div><div class="question"><p>Reported daily coronavirus infections have been falling accross the world for a month now, True or False?</p></div></div><div class="ans_container"><div id="ans_one"><p>True</p></div><div id="ans_two"><p>False</p></div></div>'
            document.getElementById("ans_one").addEventListener("click", function() {
            score++
            $("BODY").html('');
            document.getElementById("quiz_page_one").innerHTML += '<div class="quiz_navagation_bar"></div><div class="setting_gear"><a href="settings.html"><img src="icons/gear_icon.svg" alt="gear icon for settings"></a></div><div id="points_container"><img src="icons/point_box.svg" alt="box for points"><p id="points">0</p></div><div id="ans_box"><div class="correct_icon_box"><img src="icons/correct.svg" alt="correct icon"></div><div class="ans_row"><div class="ans_number"><p>Correct, Well done</p></div></div><div class="ans"><p>Reported daily coronavirus infections have been falling accross the world for a month now is True.</p></div><div class="click_anywhere"><p>Click anywhere to continue</p></div></div>'
                document.getElementById("ans_box").addEventListener("click", function() {
                $("BODY").html(''); 
                document.getElementById("quiz_page_one").innerHTML += '<div class="quiz_navagation_bar"><div id="question_page"><p>3 / 5</p></div></div><div class="setting_gear"><a href="settings.html"><img src="icons/gear_icon.svg" alt="gear icon for settings"></a></div><div id="points_container"><img src="icons/point_box.svg" alt="box for points"><p id="points">0</p></div><div class="question_box"><div class="question_row"><div class="question_number"><p>Question 3</p></div><div id="quiz_cross" onclick="homeFunction()"><img src="icons/cross_icon.svg" alt="quit quiz cross"></div></div><div class="question"><p>One of the side-effects of the Covid-19 vaccination is cardiac arrest, True or False?</p></div></div><div class="ans_container"><div id="ans_one"><p>True</p></div><div id="ans_two"><p>False</p></div></div>'
                    document.getElementById("ans_one").addEventListener("click", function() {
                    score++
                    $("BODY").html('');
                    document.getElementById("quiz_page_one").innerHTML += '<div class="quiz_navagation_bar"></div><div class="setting_gear"><a href="settings.html"><img src="icons/gear_icon.svg" alt="gear icon for settings"></a></div><div id="points_container"><img src="icons/point_box.svg" alt="box for points"><p id="points">0</p></div><div id="ans_box"><div class="correct_icon_box"><img src="icons/correct.svg" alt="correct icon"></div><div class="ans_row"><div class="ans_number"><p>Correct, Well done</p></div></div><div class="ans"><p>One of the side-effects of the Covid-19 vaccination is cardiac arrest is False</p></div><div class="click_anywhere"><p>Click anywhere to continue</p></div></div>'
                    document.getElementById("ans_box").addEventListener("click", function() {
                        $("BODY").html(''); 
                        document.getElementById("quiz_page_one").innerHTML += '<div class="quiz_navagation_bar"><div id="question_page"><p>4 / 5</p></div></div><div class="setting_gear"><a href="settings.html"><img src="icons/gear_icon.svg" alt="gear icon for settings"></a></div><div id="points_container"><img src="icons/point_box.svg" alt="box for points"><p id="points">0</p></div><div class="question_box"><div class="question_row"><div class="question_number"><p>Question 4</p></div><div id="quiz_cross" onclick="homeFunction()"><img src="icons/cross_icon.svg" alt="quit quiz cross"></div></div><div class="question"><p>Over the next few weeks which age group will be getting Covid-19 vaccination letters?</p></div></div><div class="ans_container"><div id="ans_one"><p>aged 50 - 60</p></div><div id="ans_two"><p>aged over 70</p></div></div>'
                        document.getElementById("ans_two").addEventListener("click", function() {
                            score++
                            $("BODY").html('');
                            document.getElementById("quiz_page_one").innerHTML += '<div class="quiz_navagation_bar"></div><div class="setting_gear"><a href="settings.html"><img src="icons/gear_icon.svg" alt="gear icon for settings"></a></div><div id="points_container"><img src="icons/point_box.svg" alt="box for points"><p id="points">0</p></div><div id="ans_box"><div class="correct_icon_box"><img src="icons/correct.svg" alt="correct icon"></div><div class="ans_row"><div class="ans_number"><p>Correct, Well done</p></div></div><div class="ans"><p>Over the next few weeks aged 70 and above will be getting Covid-19 vaccination letters</p></div><div class="click_anywhere"><p>Click anywhere to continue</p></div></div>'
                            document.getElementById("ans_box").addEventListener("click", function() {
                                $("BODY").html('');
                                document.getElementById("quiz_page_one").innerHTML += '<div class="quiz_navagation_bar"><div id="question_page"><p>5 / 5</p></div></div><div class="setting_gear"><a href="settings.html"><img src="icons/gear_icon.svg" alt="gear icon for settings"></a></div><div id="points_container"><img src="icons/point_box.svg" alt="box for points"><p id="points">0</p></div><div class="question_box"><div class="question_row"><div class="question_number"><p>Question 5</p></div><div class="quiz_cross" onclick="homeFunction()"><img src="icons/cross_icon.svg" alt="quit quiz cross"></div></div><div class="question"><p>What is the most recent daily number of cases?</p></div></div><div class="ans_container"><div id="ans_one"><p>1</p></div><div id="ans_two"><p>2</p></div></div>'
                                document.getElementById("ans_one").addEventListener("click", function() {
                                    score++
                                    $("BODY").html('');
                                    document.getElementById("quiz_page_one").innerHTML += ' <div class="quiz_navagation_bar"></div><div class="setting_gear"><a href="settings.html"><img src="icons/gear_icon.svg" alt="gear icon for settings"></a></div><div id="points_container"><img src="icons/point_box.svg" alt="box for points"><p id="points">0</p></div><div id="ans_box"><div class="correct_icon_box"><img src="icons/correct.svg" alt="correct icon"></div><div class="ans_row"><div class="ans_number"><p>Correct, Well done</p></div></div><div class="ans"><p>The correct answer is that there has been only 1 new covid case recently</p></div><div class="click_anywhere"><p>Click anywhere to continue</p></div></div>'
                                    document.getElementById("ans_box").addEventListener("click", function() {
                                        $("BODY").html('');
                                        document.getElementById("quiz_page_one").innerHTML += '<div class="navagation_bar"><div id="home" onclick="homeFunction()"><img src="icons/home_icon.svg" alt="home icon"><p>Home</p></div><div class="leaderboard" onclick="leaderboardFunction()"><img src="icons/trophy_icon.svg" alt="trophy icon"><p>Leaderboard</p></div><div class="map" onclick="mapFunction()"><img src="icons/map_icon.svg" alt="map icon"><p>Map</p></div><div class="quiz" onclick"quizFunction()"><img src="icons/quiz_icon.svg" alt="quiz icon"><p>Quiz</p></div></div><div class="setting_gear"><a href="settings.html"><img src="icons/gear_icon.svg" alt="gear icon for settings"></a></div><div id="points_container"><img src="icons/point_box.svg" alt="box for points"><p id="points">0</p></div><div class="score_box"><div class="ans_row"><div class="congrat_message"><p>Thank you for taking the quiz!</p></div></div><div class="score"><p>score '+score+'/5</p></div><div class="goto_leaderboard" onclick="leaderboardFunction()"><p>to leaderboard</p></div></div><script>script3.js</script>'
                                
                                    });
                                });
                            }); 
                        });   
                    });
                });
            }); 
        });
    });
});
document.getElementById("ans_two").addEventListener("click", function() {
    $("BODY").html('');
    document.getElementById("quiz_page_one").innerHTML += "<div class='quiz_navagation_bar'></div><div class='setting_gear'><a href='settings.html'><img src='icons/gear_icon.svg' alt='gear icon for settings'></a></div><div id='points_container'><img src='icons/point_box.svg' alt='box for points'><p id='points'>0</p></div><div id='ans_box'><div class='correct_icon_box'><img src='icons/correct.svg' alt='correct icon'></div><div class='ans_row'><div class='ans_number'><p>Correct, Well done</p></div></div><div class='ans'><p>The first does of the Pfizer-BioNTech vaccine is 85 per cent effective against Covid-19 infection between 2 and 4 weeks after inoculation.</p></div><div class='click_anywhere'><p>Click anywhere to continue</p></div></div><script src='https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js'></script><script src='script2.js'></script>"
});
