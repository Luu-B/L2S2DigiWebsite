const questions = [
    {
        question: "What is the maximum speed limit on New Zealand's open roads?",
        options: ["80 km/h", "90 km/h", "100 km/h"],
        correct: "100 km/h"
    },
    {
        question: "What does a red traffic light mean?",
        options: ["Proceed with caution", "Stop", "Yield"],
        correct: "Stop"
    },
    {
        question: "When should you use hazard lights?",
        options: ["When you are parked legally", "When your vehicle is a hazard", "When you are driving under the speed limit"],
        correct: "When your vehicle is a hazard"
    },
    {
        question: "What does a yellow line on the curb indicate?",
        options: ["No parking", "Loading zone", "Bus stop"],
        correct: "No parking"
    },
    {
        question: "What should you do if you miss your exit on a motorway?",
        options: ["Reverse back to the exit", "Take the next exit", "Make a U-turn"],
        correct: "Take the next exit"
    },
    {
        question: "What is the legal blood alcohol limit for drivers under 20 years of age?",
        options: ["0.05%", "0.00%", "0.08%"],
        correct: "0.00%"
    },
    {
        question: "What does a yellow traffic light mean?",
        options: ["Stop if it is safe to do so", "Speed up", "Turn left"],
        correct: "Stop if it is safe to do so"
    },
    {
        question: "When driving at night, when should you dip your headlights?",
        options: ["Never", "When another vehicle is approaching", "Only in urban areas"],
        correct: "When another vehicle is approaching"
    },
    {
        question: "What is the recommended following distance when driving in dry conditions?",
        options: ["1 second", "2 seconds", "3 seconds"],
        correct: "2 seconds"
    },
    {
        question: "What does a red reflector (cat's eye) on the road mean?",
        options: ["Indicates a no-passing zone", "Indicates the edge of the road", "Indicates a stop sign ahead"],
        correct: "Indicates the edge of the road"
    },
    {
        question: "What does a blue reflector (cat's eye) on the road indicate?",
        options: ["Indicates a fire hydrant", "Indicates the centerline", "Indicates a pedestrian crossing"],
        correct: "Indicates a fire hydrant"
    },
    {
        question: "When can you overtake another vehicle on the left?",
        options: ["When the vehicle in front is turning right", "When you are in a rush", "When it is safe to do so"],
        correct: "When the vehicle in front is turning right"
    },
    {
        question: "What should you do at a stop sign?",
        options: ["Slow down and proceed if clear", "Stop completely and check for traffic", "Speed up"],
        correct: "Stop completely and check for traffic"
    },
    {
        question: "When must you turn on your vehicle's headlights?",
        options: ["When visibility is poor", "During the day", "At all times"],
        correct: "When visibility is poor"
    },
    {
        question: "What is the legal minimum tread depth for tires in New Zealand?",
        options: ["1mm", "1.5mm", "2mm"],
        correct: "1.5mm"
    },
    {
        question: "What should you do if you see flashing red lights at a railway crossing?",
        options: ["Proceed with caution", "Stop", "Speed up to cross quickly"],
        correct: "Stop"
    },
    {
        question: "What does a white diamond painted on the road indicate?",
        options: ["A pedestrian crossing ahead", "A cycle lane", "A no-parking zone"],
        correct: "A pedestrian crossing ahead"
    },
    {
        question: "What is the maximum speed limit for a learner driver?",
        options: ["80 km/h", "90 km/h", "100 km/h"],
        correct: "100 km/h"
    },
    {
        question: "When parking on a hill, what should you do?",
        options: ["Leave the car in gear and turn the wheels toward the curb", "Leave the car in neutral", "Turn the wheels away from the curb"],
        correct: "Leave the car in gear and turn the wheels toward the curb"
    },
    {
        question: "What should you do if your vehicle begins to skid?",
        options: ["Brake hard", "Steer into the skid", "Accelerate"],
        correct: "Steer into the skid"
    }
];

// Function to load quiz questions
function loadQuiz() {
    const quizContainer = document.getElementById('quiz');
    quizContainer.innerHTML = questions.map((q, index) => `
        <div class="question">
            <p>${index + 1}. ${q.question}</p>
            ${q.options.map(option => `
                <label>
                    <input type="radio" name="q${index}" value="${option}">
                    ${option}
                </label><br>
            `).join('')}
            <span class="answer hidden" id="answer${index}"></span>
        </div>
    `).join('');
}

// Function to check quiz answers
function checkAnswers() {
    let correctCount = 0;
    questions.forEach((q, index) => {
        const selectedOption = document.querySelector(`input[name="q${index}"]:checked`);
        const answerSpan = document.getElementById(`answer${index}`);
        if (selectedOption) {
            if (selectedOption.value === q.correct) {
                correctCount++;
                answerSpan.textContent = "Correct!";
                answerSpan.classList.remove('hidden');
                answerSpan.classList.add('correct');
            } else {
                answerSpan.textContent = `Incorrect. The correct answer is: ${q.correct}`;
                answerSpan.classList.remove('hidden');
                answerSpan.classList.add('incorrect');
            }
        } else {
            answerSpan.textContent = "No answer selected.";
            answerSpan.classList.remove('hidden');
            answerSpan.classList.add('incorrect');
        }
    });
    document.getElementById('result').textContent = `You got ${correctCount} out of ${questions.length} correct.`;
}

// Event listeners
document.getElementById('submitBtn').addEventListener('click', checkAnswers);

// Load quiz on page load
window.onload = loadQuiz;


  shuffleArray(questions);

  var skippedQuestions = [];  // To store indices of skipped questions
  var answeredQuestions = new Array(questions.length).fill(false);

  /* Answer Component */
  for (var i = 0; i < questions.length; i++) {
    if (!answeredQuestions[i]) {
      var userAnswer;
      do {
        userAnswer = prompt(questions[i].question + questions[i].answer + "\n(Enter 'skip' to skip this question and return to it later.)");
        if (userAnswer.toLowerCase() === 'skip') {
          skippedQuestions.push(i);
          userAnswer = null;  // Ensure that skipped questions are not considered answered
        }
      } while (userAnswer !== null && !isValidAnswer(userAnswer) && userAnswer.toLowerCase() !== 'skip');

      if (userAnswer && userAnswer.replace(/\s/g, '').toLowerCase() == questions[i].correctAnswer) {
        score++;
        alert("You are correct! Well done. Your score is now " + score + ".");
      } else if (userAnswer && userAnswer.replace(/\s/g, '').toLowerCase() != questions[i].correctAnswer) {
        alert("You are incorrect. The correct answer is " + questions[i].correctAnswer + ". Your score is now " + score + ".");
      }
      answeredQuestions[i] = true;  // Mark question as answered
    }
  }

  /* Revisit skipped questions */
  while (skippedQuestions.length > 0) {
    var revisitIndex = skippedQuestions.shift();  // Get the first skipped question index
    var userAnswer;
    do {
      userAnswer = prompt(questions[revisitIndex].question + questions[revisitIndex].answer + "\n(Enter 'skip' to skip this question and return to it later.)");
      if (userAnswer.toLowerCase() === 'skip') {
        skippedQuestions.push(revisitIndex);
        userAnswer = null;  // Ensure that skipped questions are not considered answered
      }
    } while (userAnswer !== null && !isValidAnswer(userAnswer) && userAnswer.toLowerCase() !== 'skip');

    if (userAnswer && userAnswer.replace(/\s/g, '').toLowerCase() == questions[revisitIndex].correctAnswer) {
      score++;
      alert("You are correct! Well done. Your score is now " + score + ".");
    } else if (userAnswer && userAnswer.replace(/\s/g, '').toLowerCase() != questions[revisitIndex].correctAnswer) {
      alert("You are incorrect. The correct answer is " + questions[revisitIndex].correctAnswer + ". Your score is now " + score + ".");
    }
    answeredQuestions[revisitIndex] = true;  // Mark question as answered
  }

  /* Scores based on percent of correct answers */
  function yourGrade(score) {
    var percent = (score / questions.length) * 100;
    if (percent <= 49) {
      alert("You got " + percent + "%. which is a not-achieved. You need 50% or higher to get achieved. Study more then try again!");
    } else if (percent >= 50 && percent <= 75) {
      alert("You got " + percent + "%. Which means you got achieved. Well done " + userName + "! To achieve a higher grade, study more then try again.");
    } else if (percent >= 76 && percent <= 89) {
      alert("You got " + percent + "%. Which means you got merit. Good job, " + userName + "! To achieve a higher grade, study more then try again.");
    } else if (percent >= 90 && percent <= 100) {
      alert("You got " + percent + "%. Which means you got excellence. Outstanding job, " + userName + "! Well done.");
    }
  }

  yourGrade(score);

  /* Loop Component */
  do {
    resubmit = prompt("Would you like to do the quiz again? Type 'yes' or 'no'.");
    resubmit = resubmit.replace(/\s/g, '').toLowerCase();
  } while (resubmit !== "yes" && resubmit !== "no");

  if (resubmit == 'no') {
    /* Farewell Component */
    var farewellOptions = [
      'Thank you for taking my quiz, ' + userName + '!! I hope to see you again! Goodbye.',
      'You have arrived at the end of my quiz. Thank you for participating! Farewell ' + userName + '. ',
      'You have reached the end of the General Knowledge Quiz for Mentor Time. I hope you come back one day, hopefully you can beat your score!'
    ];
    var farewell = farewellOptions[Math.floor(Math.random() * farewellOptions.length)];
    alert(farewell);
  }
}