let mainMusic;
let alarmInterval;
let alarmSound;
let dialogueActive = false;
let player;
let playerX= 50;
let playerY = 0;
let chaseActive = false;
let obstacleInterval;
let chaseMusic;

//Cursor
document.addEventListener('mousemove', (e) => {
  const cursor = document.getElementById('cursor');
  console.log(cursor);

  const offsetX = 25;
  const offsetY = 0;

  cursor.style.left = (e.clientX + offsetX) + 'px';
  cursor.style.top = (e.clientY + offsetY) + 'px';
});
//Menu Music
document.addEventListener("DOMContentLoaded", () => {
  mainMusic = document.getElementById("mainMusic");
    console.log("Music loaded");

      mainMusic.loop = true;
      mainMusic.volume = 0.5;
      mainMusic.muted = true;

    document.addEventListener("mousedown", startMusicOnce, {once: true});
});

  function startMusicOnce() {
    mainMusic.play()
      .then(() => {
        mainMusic.muted = false;
        console.log("Music Started");
      })
      .catch(err => console.error("Music failed:", err));
  }
const newGameOverlay = document.getElementById("newGameOverlay");
const guideOverlay = document.getElementById("guideOverlay");
const loadGameOverlay = document.getElementById("loadGameOverlay");
const settingsOverlay = document.getElementById("settingsOverlay");
const quitGameOverlay = document.getElementById("quitGameOverlay");

      const scrollText = document.querySelector(".scrollText"); 
      const cutsceneProceed = document.getElementById("cutsceneProceed");
      const cutsceneOverlay = document.getElementById("cutsceneOverlay");
      const chaseProceed = document.getElementById("chaseProceed");

// Starts Cutscene After User Clicks "New Game"
      document.getElementById("newGame").addEventListener("click", () => {
        newGameOverlay.classList.remove("hidden");

      document.getElementById("newGameReturn").addEventListener("click", () => {
        newGameOverlay.classList.add("hidden");
    });
        scrollText.style.transition = "none";
        scrollText.style.bottom = "-20%";
        scrollText.offsetHeight;
        scrollText.style.transition = "bottom 25s ease-out";
        scrollText.classList.remove("hidden");
        scrollText.addEventListener("transitionend", () => {
          cutsceneProceed.style.display = "block";
          enableProceedListener();
        }, {once: true});

        requestAnimationFrame(() => {
        scrollText.style.bottom ="120%";
        });
      });
// ScrollText Scene That Leads into Dialogue Scene
function enableProceedListener() {
  document.addEventListener("keydown", proceedHandler, {once: true});
}
      function proceedHandler() {
        newGameOverlay.classList.add("hidden");
        cutsceneOverlay.classList.remove("hidden");

          mainMusic.pause();
          mainMusic.currentTime= 0;
          alarmSound = document.getElementById("alarmSound");
          alarmSound.loop = true;
          alarmSound.volume = 0.4;
          alarmSound.play();

        cutsceneOverlay.classList.add("alarmActive");
          let flash = true;
          alarmInterval = setInterval(() => {
            cutsceneOverlay.style.backgroundColor = flash ? "red" : "black";
            flash = !flash;
          }, 500);

//Flow: Scroll Finishes => Text Appears => User Presses Key => Intro Overlay Hides => First Dialogue Line Appears
        
        setTimeout(() => {
          dialogueActive = true;
          document.addEventListener("keydown", finalDialogueLine);
          document.getElementById("dialogueBox").style.display ="block";
          startTyping(dialogue[line]);
        }, 4000);
      }
//**** */
      function enableProceedListener() {
        document.addEventListener("keydown", proceedHandler, {once: true});
      }

      function startScene(cutsceneOverlay) {
        document.getElementById(cutsceneOverlay).style.display ="block";
      }
      const dialogueBox = document.getElementById("dialogueBox");
      
      let line = 0;
      let typingFinished = false;
      let typingInterval = null;

        function startTyping(dialogueLine) {
          const dialogueText = document.getElementById("dialogueText");
          const portrait = document.getElementById("portrait");
          const namePlate = document.getElementById("namePlate");

          dialogueText.textContent = "";
          portrait.src = dialogueLine.portrait;
          namePlate.textContent = dialogueLine.speaker;

          let index = 0;
          const speed = 40;

          typingInterval = setInterval(() => {
            dialogueText.textContent += dialogueLine.text[index];
            index++;

            if(index === dialogueLine.text.length) {
              clearInterval(typingInterval);
              typingFinished = true;
            }
          }, speed);
        }

      const dialogue = [
        {
          speaker: "Astria",
          portrait: "Assets/Astria-Talking-250x250.png",
          text: "Crap, the alarm wasn't supposed to go off yet!"
        },
        {
          speaker: "Guard",
          portrait: "Assets/Guard-Still-250x250.png",
          text: "Hey! Stop right there!"
        },
        {
          speaker: "Astria",
          portrait: "Assets/Astria-Silent-250x250.png",
          text: "..."
        }];

      function finalDialogueLine() {
        if(!dialogueActive) return;

        if(!typingFinished){
          clearInterval(typingInterval);
          typingFinished = true;
          document.getElementById("dialogueText").textContent = dialogue[line].text;
          return;
        }
    
      line++;

      if(line < dialogue.length) {
        typingFinished = false;
        startTyping(dialogue[line]);
      } else {
      //Alarm + Flashing Sequence Stops
        clearInterval(alarmInterval);
        cutsceneOverlay.style.backgroundColor = "black";
        alarmSound.pause()
        alarmSound.currentTime = 0;
        cutsceneOverlay.classList.remove("alarmActive");
          
      // Continue to Guide Overlay
        cutsceneOverlay.classList.add("hidden");
        guideOverlay.classList.remove("hidden");
        chaseProceed.classList.remove("hidden");

          mainMusic = document.getElementById("mainMusic");
          mainMusic.loop = false;
          mainMusic.volume = 0.5;
          mainMusic.play();
        
        document.removeEventListener("keydown", finalDialogueLine);
        document.addEventListener("keydown", startChase, {once: true});
      }
    }

// Chase Sequence Starts
      const obstacleContainer = document.getElementById("obstacleContainer");
      const chaseOverlay = document.getElementById("chaseOverlay");
      let countdown = 20;
      let countdownInterval;
      

    function startChase() {
      chaseActive = true;
      guideOverlay.classList.add("hidden");
      chaseOverlay.classList.remove("hidden");
      document.getElementById("cursor").style.display = "none";

          alarmSound = document.getElementById("alarmSound");
            alarmSound.muted = true;
          chaseMusic = document.getElementById("chaseMusic");
          mainMusic.pause()
          chaseMusic.loop = true;
          chaseMusic.volume = 0.5;
          chaseMusic.play();

      player = document.getElementById("player");

      obstacleInterval = setInterval(spawnObstacle, 1200);

      document.addEventListener("keydown", chaseMovement);
      //Unhide Timer
const countdownTimer = document.getElementById("countdownTimer");
      countdownTimer.classList.remove("hidden");
      countdown = 20;
      countdownTimer.textContent = countdown;

      //Start Countdown
      countdownInterval = setInterval(() => {
        countdown--;
        countdownTimer.textContent = countdown;
        if(countdown <= 0) {
          clearInterval(countdownInterval);
          endChase(true); // Player won the chase
        }
      }, 1000);
  }
  // Player Movement
    function chaseMovement(e) {
      if (!chaseActive) return;

      if(e.key === "ArrowLeft") {
        playerX -= 5;
      } else if (e.key === "ArrowRight") {
        playerX += 5;
      } else if (e.key === "ArrowUp") {
        playerY += 5;
      } else if (e.key === "ArrowDown") {
        playerY -= 5;
      }
        playerX = Math.max(5, Math.min(95, playerX));
          player.style.left = playerX + "%";
        playerY = Math.max(5, Math.min(95, playerY));
          player.style.bottom = playerY + "%";
    }

    function spawnObstacle() {
      const obstacle = document.createElement("div");
        obstacle.classList.add("obstacle");
      const randomX = Math.random() * 90 + 5;
        obstacle.style.left = randomX + "%";
        obstacleContainer.appendChild(obstacle);
      let y = -100;
      const fall = setInterval(( )=> {
        y += 5;
        obstacle.style.top = y + "px";
        checkCollision(obstacle);
          if (y > window.innerHeight) {
            clearInterval(fall);
            obstacle.remove();
          }
      }, 50);
    }

  // Detect Collision/Damage
    function checkCollision(obstacle) {
      const playerBox = player.getBoundingClientRect();
      const obstacleBox = obstacle.getBoundingClientRect();
      const overlap = !(
        playerBox.right < obstacleBox.left ||
        playerBox.left > obstacleBox.right ||
        playerBox.bottom < obstacleBox.top ||
        playerBox.top > obstacleBox.bottom
      );
        if(overlap) {
          endChase(false);
        }
    }

const loseOverlay = document.getElementById("loseOverlay");
const winOverlay = document.getElementById("winOverlay");

    document.getElementById("loseReturn").addEventListener("click", () => {
      loseOverlay.classList.add("hidden");
      countdown = 20;
      startChase();
    });
    document.getElementById("winExit").addEventListener("click", () => {
        window.close();
    });

    function endChase(success) {
      chaseActive = false;
      clearInterval(obstacleInterval);
      clearInterval(countdownInterval);
      chaseMusic.pause();
      obstacleContainer.innerHTML = "";
      document.getElementById("cursor").style.display = "block";

      document.removeEventListener("keydown", chaseMovement);
      document.getElementById("countdownTimer").classList.add("hidden");
        if(!success) {
          loseOverlay.classList.remove("hidden");
        } else {
          winOverlay.classList.remove("hidden");
        }
  }

document.getElementById("loadGame").addEventListener("click", () => {
  loadGameOverlay.classList.remove("hidden");
  });
 document.getElementById("loadGameReturn").addEventListener("click", () => {
        loadGameOverlay.classList.add("hidden");
    });
document.getElementById("settings").addEventListener("click", () => {
  settingsOverlay.classList.remove("hidden");
  });
   document.getElementById("settingsReturn").addEventListener("click", () => {
        settingsOverlay.classList.add("hidden");
    });
document.getElementById("quitGame").addEventListener("click", quitGame);
  
  function quitGame() {
    const answer = confirm("Are you sure you want to quit?");
      if (answer) {
        window.close();
      }
  }

  function openSetting(evt, settingName) {
    var i, tabcontent, tablinks;
    tabcontent =
document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks =
document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className =
    tablinks[i].className.replace("active","");
    }
document.getElementById(settingName).style.display = "block";
    evt.currentTarget.className += " active";
  }

document.getElementById("defaultOpen").click();
