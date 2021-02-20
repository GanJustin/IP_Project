var score = 0

document.getElementById("ans_one").addEventListener("click", function() {
    alert("Hello World!");
    score++
    console.log(document.getElementById("quiz_page_one"))
    $("BODY").html('');
    document.getElementById("quiz_page_one").innerHTML += "<div class='quiz_navagation_bar'></div><div class='setting_gear'><a href='settings.html'><img src='icons/gear_icon.svg' alt='gear icon for settings'></a></div><div id='points_container'><img src='icons/point_box.svg' alt='box for points'><p id='points'>0</p></div><div id='ans_box'><div class='correct_icon_box'><img src='icons/correct.svg' alt='correct icon'></div><div class='ans_row'><div class='ans_number'><p>Correct, Well done</p></div></div><div class='ans'><p>The first does of the Pfizer-BioNTech vaccine is 85 per cent effective against Covid-19 infection between 2 and 4 weeks after inoculation.</p></div><div class='click_anywhere'><p>Click anywhere to continue</p></div></div><script src='https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js'></script><script src='script2.js'></script>"
    console.log(score)
    document.getElementById("ans_box").addEventListener("click", function() {
        $("BODY").html(''); 
        document.getElementById("quiz_page_one").innerHTML += '<div class="quiz_navagation_bar"><div id="question_page"><p>2 / 5</p></div></div><div class="setting_gear"><a href="settings.html"><img src="icons/gear_icon.svg" alt="gear icon for settings"></a></div><div id="points_container"><img src="icons/point_box.svg" alt="box for points"><p id="points">0</p></div><div class="question_box"><div class="question_row"><div class="question_number"><p>Question 2</p></div><div class="quiz_cross"><img src="icons/cross_icon.svg" alt="quit quiz cross"></div></div><div class="question"><p>Reported daily coronavirus infections have been falling accross the world for a month now, True or False?</p></div></div><div class="ans_container"><div id="ans_one"><p>True</p></div><div id="ans_two"><p>False</p></div></div>'
        });
  });