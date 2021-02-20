var score = 0

document.getElementById("ans_one").addEventListener("click", function() {
    alert("Hello World!");
  });

document.getElementsById("ans_one").addEventListener("click", function() {
        alert("Hello World!");
        score++
        document.getElementsByTagName("body").innerhtml(
        "<div class='quiz_navagation_bar'></div><div class='setting_gear'><a href='settings.html'><img src='icons/gear_icon.svg' alt='gear icon for settings'></a></div><div id='points_container'><img src='icons/point_box.svg' alt='box for points'><p id='points'>0</p></div>")
    });
        /*<div id="ans_box" onclick="location.href='quiz_q2.html';">
            <div class="correct_icon_box">
                <img src="icons/correct.svg" alt="correct icon">
            </div>
            <div class="ans_row">
                <div class="ans_number">
                    <p>Correct, Well done</p>
                </div>
    
            </div>
            <div class="ans">
                <p>The first does of the Pfizer-BioNTech vaccine is 85 per cent effective against Covid-19 infection between 2 and 4 weeks after inoculation.</p>
            </div>
            <div class="click_anywhere" >
                <p>Click anywhere to continue</p>
            </div>
        </div>
        
        <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
        <script src="script2.js"></script>')
  

document.getElementById("ans_box").addEventListener("click", function() {
    alert("Hello World!");
    x=x+1
  });


document.getElementById("ans_box").addEventListener("click", function() {
    alert("Hello World!");
    x=x+1
  });*/



