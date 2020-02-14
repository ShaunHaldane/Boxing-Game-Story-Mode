// Clubber Lang

function ClubberLangFunc() {
  ClubberLangIntro();
  // Intro function for Clubber Lang
  function ClubberLangIntro() {
    // Change screen properties for Clubber Lang
    document.getElementById('Background').style.backgroundColor = 'skyblue';
    document.getElementById('CombinationsText').style.margin = '200px';
    document.getElementById('CombinationsText').style.position = 'absolute';
    document.getElementById('GameImg').style.position = 'absolute';
    document.getElementById('GameImg').style.marginTop = '-100px';
    document.getElementById('GameImg').style.marginLeft = '600px';
    document.getElementById('GameImg').style.height = '900px';
    document.getElementById('StoryModeButtons').style.marginTop = '180px';
    // Change coach image to Clubber Lang image
    var img = document.getElementById("GameImg");
    if (img.src != "ClubberLang.svg") {
      img.src = "ClubberLang.svg";
    } else {
      img.src = "ClubberLang.svg";
    }
    // Play Clubber Lang round audio
    ClubberLang.play();
    EyeOfTheTiger.play();
    // Set properties for combinations text
    document.getElementById("CombinationsText").style.fontSize = "50px";
    document.getElementById("CombinationsText").style.marginLeft = "-10px";
    document.getElementById("CombinationsText").style.textAlign = "center";
    document.getElementById("CombinationsText").innerHTML = "Get Ready to Fight Clubber Lang!!!";
    // Clubber lang intro countdown function
    var tcd = 62;
    ClubberLangCountDown();
    // Start countdown loop
    function ClubberLangCountDown() {
      // set timer to trigger between each loop to be 1 second
      setTimeout(function () {
        // log the countdown time
        console.log("tcd = " + tcd);
        // decrease time
        tcd--;
        // repeat round count down function until tcd = zero
        if (tcd > 0) {
          // keep running countdown function
          ClubberLangCountDown();
        } else {
          // start the boxing game
          ClubberLangCallFunction();
        }
        // 1 second timer trigger
      }, 1000);
    }
  }

  // Function to call the function for the combinations and the function for the round timer together
  function ClubberLangCallFunction() {
    ClubberLangRound();
    combiCallerClubberLang();
  }

  // time variable to count down the round
  var t = 185;
  // function to countdown the timer for the round
  function ClubberLangRound() {
    setTimeout(function () {
      console.log("t =" + t);
      t--;
      if (t > 0) {
        ClubberLangRound();
      } else {
        ClubberLangStop();
      }
    }, 1000);
  }

  // Combination audio files
  LRL = document.getElementById("LRLAudio");
  DJC = document.getElementById("DJCAudio");
  DJ = document.getElementById("DJAudio");
  RLR = document.getElementById("RLRAudio");
  LRLR = document.getElementById("LRLRAudio");
  RLRL = document.getElementById("RLRLAudio");
  LRDLH = document.getElementById("LRDLHAudio");
  RLDRH = document.getElementById("RLDRHAudio");
  LRLH = document.getElementById("LRLHAudio");
  RLRH = document.getElementById("RLRHAudio");
  RLRDRLR = document.getElementById("RLRDRLRAudio");
  LRLDLRL = document.getElementById("LRLDLRLAudio");
  D = document.getElementById("DAudio");
  DC = document.getElementById("DCAudio");
  LIP1 = document.getElementById("ClubberLangSoundA");
  LIP2 = document.getElementById("ClubberLangSoundB");
  LIP3 = document.getElementById("ClubberLangSoundC");

  // variable to display the remaining amount of combinations
  var c = 45;
  // function to call the combinations
  function combiCallerClubberLang() {
    setTimeout(function () {
      //audio array
      var combinationsSound = [D, DJC, LRL, DJ, RLR, LRLR, RLRL, LRDLH, RLDRH, LRLH, RLRH, DC, LIP1, LIP2, LIP3];
      // function to play random audio from combinationSound array
      rand();

      function rand() {
        // variable to select random combination from combinationsSound array
        x = [Math.floor(Math.random() * combinationsSound.length)];
        y = combinationsSound[x].play();
        // Display Combinations
        if (x == 0) {
          document.getElementById("CombinationsText").innerHTML = "Duck!";
          document.getElementById("CombinationsText").style.fontSize = "50px";
          document.getElementById("CombinationsText").style.marginLeft = "100px";
          document.getElementById("CombinationsText").style.textAlign = "center";
        } else if (x == 1) {
          document.getElementById("CombinationsText").innerHTML = "Double Jab Cross!";
          document.getElementById("CombinationsText").style.fontSize = "50px";
          document.getElementById("CombinationsText").style.marginLeft = "100px";
          document.getElementById("CombinationsText").style.textAlign = "center";
        } else if (x == 2) {
          document.getElementById("CombinationsText").innerHTML = "Left Right Left!";
          document.getElementById("CombinationsText").style.fontSize = "50px";
          document.getElementById("CombinationsText").style.marginLeft = "100px";
          document.getElementById("CombinationsText").style.textAlign = "center";
        } else if (x == 3) {
          document.getElementById("CombinationsText").innerHTML = "Double Jab!";
          document.getElementById("CombinationsText").style.fontSize = "50px";
          document.getElementById("CombinationsText").style.marginLeft = "100px";
          document.getElementById("CombinationsText").style.textAlign = "center";
        } else if (x == 4) {
          document.getElementById("CombinationsText").innerHTML = "Right Left Right!";
          document.getElementById("CombinationsText").style.fontSize = "50px";
          document.getElementById("CombinationsText").style.marginLeft = "100px";
          document.getElementById("CombinationsText").style.textAlign = "center";
        } else if (x == 5) {
          document.getElementById("CombinationsText").innerHTML = "Left Right Left Right!";
          document.getElementById("CombinationsText").style.fontSize = "50px";
          document.getElementById("CombinationsText").style.marginLeft = "100px";
          document.getElementById("CombinationsText").style.textAlign = "center";
        } else if (x == 6) {
          document.getElementById("CombinationsText").innerHTML = "Right Left Right Left!";
          document.getElementById("CombinationsText").style.fontSize = "50px";
          document.getElementById("CombinationsText").style.marginLeft = "100px";
          document.getElementById("CombinationsText").style.textAlign = "center";
        } else if (x == 7) {
          document.getElementById("CombinationsText").innerHTML = "Left Right Double Left Hook!";
          document.getElementById("CombinationsText").style.fontSize = "50px";
          document.getElementById("CombinationsText").style.marginLeft = "100px";
          document.getElementById("CombinationsText").style.textAlign = "center";
        } else if (x == 8) {
          document.getElementById("CombinationsText").innerHTML = "Right Left Double Right Hook!";
          document.getElementById("CombinationsText").style.fontSize = "50px";
          document.getElementById("CombinationsText").style.marginLeft = "100px";
          document.getElementById("CombinationsText").style.textAlign = "center";
        } else if (x == 9) {
          document.getElementById("CombinationsText").innerHTML = "Left Right Left Hook!";
          document.getElementById("CombinationsText").style.fontSize = "50px";
          document.getElementById("CombinationsText").style.marginLeft = "100px";
          document.getElementById("CombinationsText").style.textAlign = "center";
        } else if (x == 10) {
          document.getElementById("CombinationsText").innerHTML = "Right Left Right Hook!";
          document.getElementById("CombinationsText").style.fontSize = "50px";
          document.getElementById("CombinationsText").style.marginLeft = "100px";
          document.getElementById("CombinationsText").style.textAlign = "center";
        } else if (x == 11) {
          document.getElementById("CombinationsText").innerHTML = "Double Cross!";
          document.getElementById("CombinationsText").style.fontSize = "50px";
          document.getElementById("CombinationsText").style.marginLeft = "100px";
          document.getElementById("CombinationsText").style.textAlign = "center";
        } else if (x == 12) {
          document.getElementById("CombinationsText").innerHTML = " ";
          document.getElementById("CombinationsText").style.fontSize = "50px";
          document.getElementById("CombinationsText").style.marginLeft = "100px";
          document.getElementById("CombinationsText").style.textAlign = "center";
        } else if (x == 13) {
          document.getElementById("CombinationsText").innerHTML = " ";
          document.getElementById("CombinationsText").style.fontSize = "50px";
          document.getElementById("CombinationsText").style.marginLeft = "100px";
          document.getElementById("CombinationsText").style.textAlign = "center";
        } else if (x == 14) {
          document.getElementById("CombinationsText").innerHTML = " ";
          document.getElementById("CombinationsText").style.fontSize = "50px";
          document.getElementById("CombinationsText").style.marginLeft = "100px";
          document.getElementById("CombinationsText").style.textAlign = "center";
        }
        // log how many combinations left
        console.log(c + " combinations left");
      }
      //Keep calling a randomly selected combination file until c=0
      if (c > 1) {
        c--;
        combiCallerClubberLang();
      } else {
        // Reset the combinations
        c = 0;
      }
      // Call a combination every 4 sec
    }, 4000);
  }

  // Clubber Lang Stop Screen
  function ClubberLangStop() {
    // Change screen properties
    document.getElementById('Background').style.backgroundColor = 'white';
    document.getElementById("CombinationsText").style.fontSize = "50px";
    document.getElementById("CombinationsText").style.marginLeft = "-10px";
    document.getElementById("CombinationsText").style.textAlign = "center";
    document.getElementById('GameImg').style.height = '500px';
    document.getElementById('GameImg').style.position = 'absolute';
    document.getElementById('GameImg').style.marginTop = '50px';
    document.getElementById('GameImg').style.marginLeft = '60%';
    // Change game image
    var img = document.getElementById("GameImg");
    if (img.src != "Coach1.png") {
      img.src = "Coach1.png";
    } else {
      img.src = "Coach1.png";
    }
    // Play audio
    AfterClubberLangAudio.play();
    document.getElementById("CombinationsText").innerHTML = "Well done you have beaten<br>Clubber Lang!!!.<br>Get ready for your next opponent";
    // countdown till next opponent
    var round2Time = 10;
    Round2Delay();
    // Start countdown loop
    function Round2Delay() {
      // set timer to trigger between each loop to be 1 second
      setTimeout(function () {
        // log the time countdown
        console.log("round2Time = " + round2Time);
        round2Time--;
        // repeat round count down function until tcd = zero
        if (round2Time > 0) {
          Round2Delay();
        } else {
          // Trigger function for next opponent
          BruceLeeFunc();
        }
        // 1 second timer trigger
      }, 1000);
    }
  }
}






// Bruce lee (This code is the same as above but changed for a different character. See Clubber Lang section for more details)
function BruceLeeFunc() {
  BruceLeeIntro();

  function BruceLeeIntro() {

    document.getElementById('Background').style.backgroundColor = 'white';
    document.getElementById('CombinationsText').style.margin = '200px';
    document.getElementById('CombinationsText').style.position = 'absolute';
    document.getElementById('GameImg').style.position = 'absolute';
    document.getElementById('GameImg').style.marginTop = '-100px';
    document.getElementById('GameImg').style.marginLeft = '600px';
    document.getElementById('GameImg').style.height = '900px';
    document.getElementById('StoryModeButtons').style.marginTop = '180px';

    var img = document.getElementById("GameImg");
    if (img.src != "BruceLee.svg") {
      img.src = "BruceLee.svg";
    } else {
      img.src = "BruceLee.svg";
    }

    BruceLeeReady.play();
    BruceLeeThemeAudio.play();

    document.getElementById("CombinationsText").style.fontSize = "50px";
    document.getElementById("CombinationsText").style.marginLeft = "40px";
    document.getElementById("CombinationsText").style.textAlign = "center";
    document.getElementById("CombinationsText").innerHTML = "Get Ready to Fight Bruce Lee!!!";

    var tcd = 8;
    BruceLeeCountDown();
    function BruceLeeCountDown() {
      setTimeout(function () {
        console.log("tcd = " + tcd);
        tcd--;
        if (tcd > 0) {
          BruceLeeCountDown();
        } else {
          BruceLeeCallFunction();
        }
      }, 1000);
    }
  }

  function BruceLeeCallFunction() {
    BruceLeeRound();
    combiCallerBruceLee();
  }

  var t = 160;
  function BruceLeeRound() {
    setTimeout(function () {
      console.log("t =" + t);
      t--;
      if (t > 0) {
        BruceLeeRound();
      } else {
        BruceLeeStop();
      }
    }, 1000);
  }

  LRL = document.getElementById("LRLAudio");
  DJC = document.getElementById("DJCAudio");
  DJ = document.getElementById("DJAudio");
  RLR = document.getElementById("RLRAudio");
  LRLR = document.getElementById("LRLRAudio");
  RLRL = document.getElementById("RLRLAudio");
  LRDLH = document.getElementById("LRDLHAudio");
  RLDRH = document.getElementById("RLDRHAudio");
  LRLH = document.getElementById("LRLHAudio");
  RLRH = document.getElementById("RLRHAudio");
  D = document.getElementById("DAudio");
  DC = document.getElementById("DCAudio");
  LK = document.getElementById("LKAudio");
  RK = document.getElementById("RKAudio");
  LRLK = document.getElementById("LRLKAudio");
  RLRK = document.getElementById("RLRKAudio");

  BLSAA = document.getElementById("BruceLeeSoundAudioA");
  BLSAB = document.getElementById("BruceLeeSoundAudioB");
  BLSAC = document.getElementById("BruceLeeSoundAudioC");
  BLSAD = document.getElementById("BruceLeeSoundAudioD");
  BLSAE = document.getElementById("BruceLeeSoundAudioE");

  var c = 50;
  function combiCallerBruceLee() {
    setTimeout(function () {
      var combinationsSound = [D, DJC, LRL, DJ, RLR, LRLR, RLRL, LRDLH, RLDRH, LRLH, RLRH, DC, LK, RK, LRLK, RLRK, BLSAA, BLSAB, BLSAC, BLSAD, BLSAE];
      rand();

      function rand() {
        x = [Math.floor(Math.random() * combinationsSound.length)];
        y = combinationsSound[x].play();

        if (x == 0) {
          document.getElementById("CombinationsText").innerHTML = "Duck!";
          document.getElementById("CombinationsText").style.fontSize = "50px";
          document.getElementById("CombinationsText").style.marginLeft = "100px";
          document.getElementById("CombinationsText").style.textAlign = "center";
        } else if (x == 1) {
          document.getElementById("CombinationsText").innerHTML = "Double Jab Cross!";
          document.getElementById("CombinationsText").style.fontSize = "50px";
          document.getElementById("CombinationsText").style.marginLeft = "100px";
          document.getElementById("CombinationsText").style.textAlign = "center";
        } else if (x == 2) {
          document.getElementById("CombinationsText").innerHTML = "Left Right Left!";
          document.getElementById("CombinationsText").style.fontSize = "50px";
          document.getElementById("CombinationsText").style.marginLeft = "100px";
          document.getElementById("CombinationsText").style.textAlign = "center";
        } else if (x == 3) {
          document.getElementById("CombinationsText").innerHTML = "Double Jab!";
          document.getElementById("CombinationsText").style.fontSize = "50px";
          document.getElementById("CombinationsText").style.marginLeft = "100px";
          document.getElementById("CombinationsText").style.textAlign = "center";
        } else if (x == 4) {
          document.getElementById("CombinationsText").innerHTML = "Right Left Right!";
          document.getElementById("CombinationsText").style.fontSize = "50px";
          document.getElementById("CombinationsText").style.marginLeft = "100px";
          document.getElementById("CombinationsText").style.textAlign = "center";
        } else if (x == 5) {
          document.getElementById("CombinationsText").innerHTML = "Left Right Left Right!";
          document.getElementById("CombinationsText").style.fontSize = "50px";
          document.getElementById("CombinationsText").style.marginLeft = "100px";
          document.getElementById("CombinationsText").style.textAlign = "center";
        } else if (x == 6) {
          document.getElementById("CombinationsText").innerHTML = "Right Left Right Left!";
          document.getElementById("CombinationsText").style.fontSize = "50px";
          document.getElementById("CombinationsText").style.marginLeft = "100px";
          document.getElementById("CombinationsText").style.textAlign = "center";
        } else if (x == 7) {
          document.getElementById("CombinationsText").innerHTML = "Left Right Double Left Hook!";
          document.getElementById("CombinationsText").style.fontSize = "50px";
          document.getElementById("CombinationsText").style.marginLeft = "100px";
          document.getElementById("CombinationsText").style.textAlign = "center";
        } else if (x == 8) {
          document.getElementById("CombinationsText").innerHTML = "Right Left Double Right Hook!";
          document.getElementById("CombinationsText").style.fontSize = "50px";
          document.getElementById("CombinationsText").style.marginLeft = "100px";
          document.getElementById("CombinationsText").style.textAlign = "center";
        } else if (x == 9) {
          document.getElementById("CombinationsText").innerHTML = "Left Right Left Hook!";
          document.getElementById("CombinationsText").style.fontSize = "50px";
          document.getElementById("CombinationsText").style.marginLeft = "100px";
          document.getElementById("CombinationsText").style.textAlign = "center";
        } else if (x == 10) {
          document.getElementById("CombinationsText").innerHTML = "Right Left Right Hook!";
          document.getElementById("CombinationsText").style.fontSize = "50px";
          document.getElementById("CombinationsText").style.marginLeft = "100px";
          document.getElementById("CombinationsText").style.textAlign = "center";
        } else if (x == 11) {
          document.getElementById("CombinationsText").innerHTML = "Double Cross!";
          document.getElementById("CombinationsText").style.fontSize = "50px";
          document.getElementById("CombinationsText").style.marginLeft = "100px";
          document.getElementById("CombinationsText").style.textAlign = "center";
        } else if (x == 12) {
          document.getElementById("CombinationsText").innerHTML = "Left Kick!";
          document.getElementById("CombinationsText").style.fontSize = "50px";
          document.getElementById("CombinationsText").style.marginLeft = "100px";
          document.getElementById("CombinationsText").style.textAlign = "center";
        } else if (x == 13) {
          document.getElementById("CombinationsText").innerHTML = "Right Kick!";
          document.getElementById("CombinationsText").style.fontSize = "50px";
          document.getElementById("CombinationsText").style.marginLeft = "100px";
          document.getElementById("CombinationsText").style.textAlign = "center";
        } else if (x == 14) {
          document.getElementById("CombinationsText").innerHTML = "Left Right Left Kick!";
          document.getElementById("CombinationsText").style.fontSize = "50px";
          document.getElementById("CombinationsText").style.marginLeft = "100px";
          document.getElementById("CombinationsText").style.textAlign = "center";
        } else if (x == 15) {
          document.getElementById("CombinationsText").innerHTML = "Right Left Right Kick!";
          document.getElementById("CombinationsText").style.fontSize = "50px";
          document.getElementById("CombinationsText").style.marginLeft = "100px";
          document.getElementById("CombinationsText").style.textAlign = "center";
        }
        if (x == 16) {
          document.getElementById("CombinationsText").innerHTML = "Duck!";
          document.getElementById("CombinationsText").style.fontSize = "50px";
          document.getElementById("CombinationsText").style.marginLeft = "100px";
          document.getElementById("CombinationsText").style.textAlign = "center";
        }
        if (x == 17) {
          document.getElementById("CombinationsText").innerHTML = "Duck!";
          document.getElementById("CombinationsText").style.fontSize = "50px";
          document.getElementById("CombinationsText").style.marginLeft = "100px";
          document.getElementById("CombinationsText").style.textAlign = "center";
        }
        if (x == 18) {
          document.getElementById("CombinationsText").innerHTML = "Duck!";
          document.getElementById("CombinationsText").style.fontSize = "50px";
          document.getElementById("CombinationsText").style.marginLeft = "100px";
          document.getElementById("CombinationsText").style.textAlign = "center";
        }
        if (x == 19) {
          document.getElementById("CombinationsText").innerHTML = "Duck!";
          document.getElementById("CombinationsText").style.fontSize = "50px";
          document.getElementById("CombinationsText").style.marginLeft = "100px";
          document.getElementById("CombinationsText").style.textAlign = "center";
        }
        if (x == 20) {
          document.getElementById("CombinationsText").innerHTML = "Duck!";
          document.getElementById("CombinationsText").style.fontSize = "50px";
          document.getElementById("CombinationsText").style.marginLeft = "100px";
          document.getElementById("CombinationsText").style.textAlign = "center";
        }
        console.log(c + " combinations left");
      }

      if (c > 1) {
        c--;
        combiCallerBruceLee();
      } else {
        c = 0;
      }
    }, 3000);
  }

  function BruceLeeStop() {
    document.getElementById('Background').style.backgroundColor = 'white';
    document.getElementById("CombinationsText").style.fontSize = "50px";
    document.getElementById("CombinationsText").style.marginLeft = "-10px";
    document.getElementById("CombinationsText").style.textAlign = "center";
    document.getElementById('GameImg').style.position = 'absolute';
    document.getElementById('GameImg').style.marginTop = '-20px';
    document.getElementById('GameImg').style.marginLeft = '60%';
    document.getElementById('GameImg').style.height = '500px';

    var img = document.getElementById("GameImg");
    if (img.src != "Coach1.png") {
      img.src = "Coach1.png";
    } else {
      img.src = "Coach1.png";
    }

    AfterBruceLeeAudio.play();
    document.getElementById("CombinationsText").innerHTML = "Well done you have beaten<br>Bruce Lee!!!. <br> Get ready for your next opponent";

    var round2Time = 10;
    Round2Delay();

    function Round2Delay() {
      setTimeout(function () {
        console.log("round2Time = " + round2Time);
        round2Time--;
        if (round2Time > 0) {
          Round2Delay();
        } else {
          UltimateWarriorFunc();
        }
      }, 1000);
    }
  }
}



// Ultimate Warrior (This code is the same as above but changed for a different character. See Clubber Lang section for more details)
function UltimateWarriorFunc() {
  UltimateWarriorIntro();

  function UltimateWarriorIntro() {
    document.getElementById('Background').style.backgroundColor = 'red';
    document.getElementById('CombinationsText').style.margin = '200px';
    document.getElementById('CombinationsText').style.position = 'absolute';
    document.getElementById('GameImg').style.position = 'absolute';
    document.getElementById('GameImg').style.marginTop = '-100px';
    document.getElementById('GameImg').style.marginLeft = '600px';
    document.getElementById('GameImg').style.height = '900px';
    document.getElementById('StoryModeButtons').style.marginTop = '180px';

    var img = document.getElementById("GameImg");
    if (img.src != "TheUltimateWarrior.svg") {
      img.src = "TheUltimateWarrior.svg";
    } else {
      img.src = "TheUltimateWarrior.svg";
    }

    UltimateWarrior.play();
    UltimateWarriorThemeAudio.play();
    UltimateWarriorCrowd.play();

    document.getElementById("CombinationsText").style.fontSize = "50px";
    document.getElementById("CombinationsText").style.marginLeft = "70px";
    document.getElementById("CombinationsText").style.textAlign = "center";
    document.getElementById("CombinationsText").innerHTML = "Get Ready to Fight <br> The Ultimate Warrior!!!";

    var tcd = 19;
    UltimateWarriorCountDown();

    function UltimateWarriorCountDown() {
      setTimeout(function () {
        console.log("tcd = " + tcd);
        tcd--;
        if (tcd > 0) {
          UltimateWarriorCountDown();
        } else {
          UltimateWarriorCallFunction();
        }
      }, 1000);
    }
  }

  function UltimateWarriorCallFunction() {
    UltimateWarriorRound();
    combiCallerUltimateWarrior();
  }

  var t = 142;
  function UltimateWarriorRound() {
    setTimeout(function () {
      console.log("t =" + t);
      t--;
      if (t > 0) {
        UltimateWarriorRound();
      } else {
        UltimateWarriorStop();
      }
    }, 1000);
  }

  LRL = document.getElementById("LRLAudio");
  DJC = document.getElementById("DJCAudio");
  DJ = document.getElementById("DJAudio");
  RLR = document.getElementById("RLRAudio");
  LRLR = document.getElementById("LRLRAudio");
  RLRL = document.getElementById("RLRLAudio");
  LRDLH = document.getElementById("LRDLHAudio");
  RLDRH = document.getElementById("RLDRHAudio");
  LRLH = document.getElementById("LRLHAudio");
  RLRH = document.getElementById("RLRHAudio");
  RLRDRLR = document.getElementById("RLRDRLRAudio");
  LRLDLRL = document.getElementById("LRLDLRLAudio");
  D = document.getElementById("DAudio");
  DC = document.getElementById("DCAudio");
  S = document.getElementById("SprawlAudio");

  UWF = document.getElementById("UltimateWarriorFearAudio");
  UWSAB = document.getElementById("UltimateWarriorSoundAudioB");

  var c = 43;
  function combiCallerUltimateWarrior() {
    setTimeout(function () {
      var combinationsSound = [D, DJC, LRL, DJ, RLR, LRLR, RLRL, LRDLH, RLDRH, LRLH, RLRH, DC, S, UWF, UWSAB];
      rand();

      function rand() {
        x = [Math.floor(Math.random() * combinationsSound.length)];
        y = combinationsSound[x].play();

        if (x == 0) {
          document.getElementById("CombinationsText").innerHTML = "Duck!";
          document.getElementById("CombinationsText").style.fontSize = "50px";
          document.getElementById("CombinationsText").style.marginLeft = "100px";
          document.getElementById("CombinationsText").style.textAlign = "center";
        } else if (x == 1) {
          document.getElementById("CombinationsText").innerHTML = "Double Jab Cross!";
          document.getElementById("CombinationsText").style.fontSize = "50px";
          document.getElementById("CombinationsText").style.marginLeft = "100px";
          document.getElementById("CombinationsText").style.textAlign = "center";
        } else if (x == 2) {
          document.getElementById("CombinationsText").innerHTML = "Left Right Left!";
          document.getElementById("CombinationsText").style.fontSize = "50px";
          document.getElementById("CombinationsText").style.marginLeft = "100px";
          document.getElementById("CombinationsText").style.textAlign = "center";
        } else if (x == 3) {
          document.getElementById("CombinationsText").innerHTML = "Double Jab!";
          document.getElementById("CombinationsText").style.fontSize = "50px";
          document.getElementById("CombinationsText").style.marginLeft = "100px";
          document.getElementById("CombinationsText").style.textAlign = "center";
        } else if (x == 4) {
          document.getElementById("CombinationsText").innerHTML = "Right Left Right!";
          document.getElementById("CombinationsText").style.fontSize = "50px";
          document.getElementById("CombinationsText").style.marginLeft = "100px";
          document.getElementById("CombinationsText").style.textAlign = "center";
        } else if (x == 5) {
          document.getElementById("CombinationsText").innerHTML = "Left Right Left Right!";
          document.getElementById("CombinationsText").style.fontSize = "50px";
          document.getElementById("CombinationsText").style.marginLeft = "100px";
          document.getElementById("CombinationsText").style.textAlign = "center";
        } else if (x == 6) {
          document.getElementById("CombinationsText").innerHTML = "Right Left Right Left!";
          document.getElementById("CombinationsText").style.fontSize = "50px";
          document.getElementById("CombinationsText").style.marginLeft = "100px";
          document.getElementById("CombinationsText").style.textAlign = "center";
        } else if (x == 7) {
          document.getElementById("CombinationsText").innerHTML = "Left Right Double Left Hook!";
          document.getElementById("CombinationsText").style.fontSize = "50px";
          document.getElementById("CombinationsText").style.marginLeft = "100px";
          document.getElementById("CombinationsText").style.textAlign = "center";
        } else if (x == 8) {
          document.getElementById("CombinationsText").innerHTML = "Right Left Double Right Hook!";
          document.getElementById("CombinationsText").style.fontSize = "50px";
          document.getElementById("CombinationsText").style.marginLeft = "100px";
          document.getElementById("CombinationsText").style.textAlign = "center";
        } else if (x == 9) {
          document.getElementById("CombinationsText").innerHTML = "Left Right Left Hook!";
          document.getElementById("CombinationsText").style.fontSize = "50px";
          document.getElementById("CombinationsText").style.marginLeft = "100px";
          document.getElementById("CombinationsText").style.textAlign = "center";
        } else if (x == 10) {
          document.getElementById("CombinationsText").innerHTML = "Right Left Right Hook!";
          document.getElementById("CombinationsText").style.fontSize = "50px";
          document.getElementById("CombinationsText").style.marginLeft = "100px";
          document.getElementById("CombinationsText").style.textAlign = "center";
        } else if (x == 11) {
          document.getElementById("CombinationsText").innerHTML = "Double Cross!";
          document.getElementById("CombinationsText").style.fontSize = "50px";
          document.getElementById("CombinationsText").style.marginLeft = "100px";
          document.getElementById("CombinationsText").style.textAlign = "center";
        } else if (x == 12) {
          document.getElementById("CombinationsText").innerHTML = "Sprawl!";
          document.getElementById("CombinationsText").style.fontSize = "50px";
          document.getElementById("CombinationsText").style.marginLeft = "100px";
          document.getElementById("CombinationsText").style.textAlign = "center";
        } else if (x == 13) {
          document.getElementById("CombinationsText").innerHTML = " ";
          document.getElementById("CombinationsText").style.fontSize = "50px";
          document.getElementById("CombinationsText").style.marginLeft = "100px";
          document.getElementById("CombinationsText").style.textAlign = "center";
        } else if (x == 14) {
          document.getElementById("CombinationsText").innerHTML = "Duck!";
          document.getElementById("CombinationsText").style.fontSize = "50px";
          document.getElementById("CombinationsText").style.marginLeft = "100px";
          document.getElementById("CombinationsText").style.textAlign = "center";
        }
        console.log(c + " combinations left");
      }

      if (c > 1) {
        c--;
        combiCallerUltimateWarrior();
      } else {
        c = 0;
      }
    }, 3000);
  }

  function UltimateWarriorStop() {
    document.getElementById('Background').style.backgroundColor = 'white';
    document.getElementById("CombinationsText").style.fontSize = "50px";
    document.getElementById("CombinationsText").style.marginLeft = "-10px";
    document.getElementById("CombinationsText").style.textAlign = "center";
    document.getElementById('GameImg').style.position = 'absolute';
    document.getElementById('GameImg').style.marginTop = '-20px';
    document.getElementById('GameImg').style.marginLeft = '60%';
    document.getElementById('GameImg').style.height = '500px';

    var img = document.getElementById("GameImg");
    if (img.src != "Coach1.png") {
      img.src = "Coach1.png";
    } else {
      img.src = "Coach1.png";
    }

    AfterUltimateWarriorAudio.play();
    document.getElementById("CombinationsText").innerHTML = "Well done you have beaten<br>The Ultimate Warrior!!!.<br>Get ready for your next opponent";

    var round2Time = 10;
    Round2Delay();

    function Round2Delay() {
      setTimeout(function () {
        console.log("round2Time = " + round2Time);
        round2Time--;
        if (round2Time > 0) {
          Round2Delay();
        } else {
          RyuFunc();
        }
      }, 1000);
    }
  }
}




// Ryu (This code is the same as above but changed for a different character. See Clubber Lang section for more details)
function RyuFunc() {
  RyuIntro();

  function RyuIntro() {
    document.getElementById('Background').style.backgroundColor = 'peru';
    document.getElementById('CombinationsText').style.margin = '200px';
    document.getElementById('CombinationsText').style.position = 'absolute';
    document.getElementById('GameImg').style.position = 'absolute';
    document.getElementById('GameImg').style.marginTop = '-100px';
    document.getElementById('GameImg').style.marginLeft = '600px';
    document.getElementById('GameImg').style.height = '900px';
    document.getElementById('StoryModeButtons').style.marginTop = '180px';

    var img = document.getElementById("GameImg");
    if (img.src != "Ryu.svg") {
      img.src = "Ryu.svg";
    } else {
      img.src = "Ryu.svg";
    }

    RyuThemeAudio.play();

    document.getElementById("CombinationsText").style.fontSize = "50px";
    document.getElementById("CombinationsText").style.marginLeft = "40px";
    document.getElementById("CombinationsText").style.textAlign = "center";
    document.getElementById("CombinationsText").innerHTML = "Get Ready to Fight Ryu!!!";

    var tcd = 13;
    RyuCountDown();
    function RyuCountDown() {
      setTimeout(function () {
        console.log("tcd = " + tcd);
        tcd--;
        if (tcd > 0) {
          RyuCountDown();
        } else {
          RyuCallFunction();
        }
      }, 1000);
    }
  }

  function RyuCallFunction() {
    RyuRound();
    combiCallerRyu();
  }

  var t = 212;
  function RyuRound() {
    setTimeout(function () {
      console.log("t =" + t);
      t--;
      if (t > 0) {
        RyuRound();
      } else {
        RyuStop();
      }
    }, 1000);
  }

  LRL = document.getElementById("LRLAudio");
  DJC = document.getElementById("DJCAudio");
  DJ = document.getElementById("DJAudio");
  RLR = document.getElementById("RLRAudio");
  LRLR = document.getElementById("LRLRAudio");
  RLRL = document.getElementById("RLRLAudio");
  LRDLH = document.getElementById("LRDLHAudio");
  RLDRH = document.getElementById("RLDRHAudio");
  LRLH = document.getElementById("LRLHAudio");
  RLRH = document.getElementById("RLRHAudio");
  RLRDRLR = document.getElementById("RLRDRLRAudio");
  LRLDLRL = document.getElementById("LRLDLRLAudio");
  D = document.getElementById("DAudio");
  DC = document.getElementById("DCAudio");
  LK = document.getElementById("LKAudio");
  RK = document.getElementById("RKAudio");
  LRLK = document.getElementById("LRLKAudio");
  RLRK = document.getElementById("RLRKAudio");
  S = document.getElementById("SprawlAudio");

  RSA = document.getElementById("RyuSoundAudioA");
  RSB = document.getElementById("RyuSoundAudioB");
  RSC = document.getElementById("RyuSoundAudioC");

  var c = 69;
  function combiCallerRyu() {
    setTimeout(function () {
      var combinationsSound = [D, DJC, LRL, DJ, RLR, LRLR, RLRL, LRDLH, RLDRH, LRLH, RLRH, DC, LRLK, RLRK, S, RSA, RSB, RSC];
      rand();

      function rand() {
        x = [Math.floor(Math.random() * combinationsSound.length)];
        y = combinationsSound[x].play();

        if (x == 0) {
          document.getElementById("CombinationsText").innerHTML = "Duck!";
          document.getElementById("CombinationsText").style.fontSize = "50px";
          document.getElementById("CombinationsText").style.marginLeft = "100px";
          document.getElementById("CombinationsText").style.textAlign = "center";
        } else if (x == 1) {
          document.getElementById("CombinationsText").innerHTML = "Double Jab Cross!";
          document.getElementById("CombinationsText").style.fontSize = "50px";
          document.getElementById("CombinationsText").style.marginLeft = "100px";
          document.getElementById("CombinationsText").style.textAlign = "center";
        } else if (x == 2) {
          document.getElementById("CombinationsText").innerHTML = "Left Right Left!";
          document.getElementById("CombinationsText").style.fontSize = "50px";
          document.getElementById("CombinationsText").style.marginLeft = "100px";
          document.getElementById("CombinationsText").style.textAlign = "center";
        } else if (x == 3) {
          document.getElementById("CombinationsText").innerHTML = "Double Jab!";
          document.getElementById("CombinationsText").style.fontSize = "50px";
          document.getElementById("CombinationsText").style.marginLeft = "100px";
          document.getElementById("CombinationsText").style.textAlign = "center";
        } else if (x == 4) {
          document.getElementById("CombinationsText").innerHTML = "Right Left Right!";
          document.getElementById("CombinationsText").style.fontSize = "50px";
          document.getElementById("CombinationsText").style.marginLeft = "100px";
          document.getElementById("CombinationsText").style.textAlign = "center";
        } else if (x == 5) {
          document.getElementById("CombinationsText").innerHTML = "Left Right Left Right!";
          document.getElementById("CombinationsText").style.fontSize = "50px";
          document.getElementById("CombinationsText").style.marginLeft = "100px";
          document.getElementById("CombinationsText").style.textAlign = "center";
        } else if (x == 6) {
          document.getElementById("CombinationsText").innerHTML = "Right Left Right Left!";
          document.getElementById("CombinationsText").style.fontSize = "50px";
          document.getElementById("CombinationsText").style.marginLeft = "100px";
          document.getElementById("CombinationsText").style.textAlign = "center";
        } else if (x == 7) {
          document.getElementById("CombinationsText").innerHTML = "Left Right Double Left Hook!";
          document.getElementById("CombinationsText").style.fontSize = "50px";
          document.getElementById("CombinationsText").style.marginLeft = "100px";
          document.getElementById("CombinationsText").style.textAlign = "center";
        } else if (x == 8) {
          document.getElementById("CombinationsText").innerHTML = "Right Left Double Right Hook!";
          document.getElementById("CombinationsText").style.fontSize = "50px";
          document.getElementById("CombinationsText").style.marginLeft = "100px";
          document.getElementById("CombinationsText").style.textAlign = "center";
        } else if (x == 9) {
          document.getElementById("CombinationsText").innerHTML = "Left Right Left Hook!";
          document.getElementById("CombinationsText").style.fontSize = "50px";
          document.getElementById("CombinationsText").style.marginLeft = "100px";
          document.getElementById("CombinationsText").style.textAlign = "center";
        } else if (x == 10) {
          document.getElementById("CombinationsText").innerHTML = "Right Left Right Hook!";
          document.getElementById("CombinationsText").style.fontSize = "50px";
          document.getElementById("CombinationsText").style.marginLeft = "100px";
          document.getElementById("CombinationsText").style.textAlign = "center";
        } else if (x == 11) {
          document.getElementById("CombinationsText").innerHTML = "Double Cross!";
          document.getElementById("CombinationsText").style.fontSize = "50px";
          document.getElementById("CombinationsText").style.marginLeft = "100px";
          document.getElementById("CombinationsText").style.textAlign = "center";
        } else if (x == 12) {
          document.getElementById("CombinationsText").innerHTML = "Left Right Left Kick!";
          document.getElementById("CombinationsText").style.fontSize = "50px";
          document.getElementById("CombinationsText").style.marginLeft = "100px";
          document.getElementById("CombinationsText").style.textAlign = "center";
        } else if (x == 13) {
          document.getElementById("CombinationsText").innerHTML = "Right Left Right Kick!";
          document.getElementById("CombinationsText").style.fontSize = "50px";
          document.getElementById("CombinationsText").style.marginLeft = "100px";
          document.getElementById("CombinationsText").style.textAlign = "center";
        } else if (x == 14) {
          document.getElementById("CombinationsText").innerHTML = "Sprawl!";
          document.getElementById("CombinationsText").style.fontSize = "50px";
          document.getElementById("CombinationsText").style.marginLeft = "100px";
          document.getElementById("CombinationsText").style.textAlign = "center";
        } else if (x == 15) {
          document.getElementById("CombinationsText").innerHTML = "Duck!";
          document.getElementById("CombinationsText").style.fontSize = "50px";
          document.getElementById("CombinationsText").style.marginLeft = "100px";
          document.getElementById("CombinationsText").style.textAlign = "center";
        } else if (x == 16) {
          document.getElementById("CombinationsText").innerHTML = "Duck!";
          document.getElementById("CombinationsText").style.fontSize = "50px";
          document.getElementById("CombinationsText").style.marginLeft = "100px";
          document.getElementById("CombinationsText").style.textAlign = "center";
        } else if (x == 17) {
          document.getElementById("CombinationsText").innerHTML = "Duck!";
          document.getElementById("CombinationsText").style.fontSize = "50px";
          document.getElementById("CombinationsText").style.marginLeft = "100px";
          document.getElementById("CombinationsText").style.textAlign = "center";
        }
        console.log(c + " combinations left");
      }

      if (c > 1) {
        c--;
        combiCallerRyu();
      } else {
        c = 0;
      }
    }, 3000);
  }

  function RyuStop() {
    document.getElementById('Background').style.backgroundColor = 'white';
    document.getElementById("CombinationsText").style.fontSize = "50px";
    document.getElementById("CombinationsText").style.marginLeft = "-10px";
    document.getElementById("CombinationsText").style.textAlign = "center";
    document.getElementById('GameImg').style.position = 'absolute';
    document.getElementById('GameImg').style.marginTop = '-20px';
    document.getElementById('GameImg').style.marginLeft = '60%';
    document.getElementById('GameImg').style.height = '500px';

    var img = document.getElementById("GameImg");
    if (img.src != "Coach1.png") {
      img.src = "Coach1.png";
    } else {
      img.src = "Coach1.png";
    }

    AfterRyuAudio.play();
    document.getElementById("CombinationsText").innerHTML = "Well done you have beaten<br>Ryu<br>and won the tournament!!!. ";

    var round2Time = 10;
    Round2Delay();

    function Round2Delay() {
      setTimeout(function () {
        console.log("round2Time = " + round2Time);
        round2Time--;
        if (round2Time > 0) {
          Round2Delay();
        } else {
          document.location.reload(true);
        }
      }, 1000);
    }
  }
}
