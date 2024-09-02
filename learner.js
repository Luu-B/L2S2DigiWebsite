const questions = [
  {
      question: "What is the legal blood alcohol limit for drivers under 20 years of age?",
      options: ["0.05%", "0.00%", "0.08%"],
      correct: "0.00%"
  },
  {
      question: "What should you do when approaching a pedestrian crossing?",
      options: ["Speed up", "Stop for any pedestrians on the crossing", "Sound your horn"],
      correct: "Stop for any pedestrians on the crossing"
  },
  {
      question: "When must you turn on your vehicle's headlights?",
      options: ["When visibility is poor", "During the day", "At all times"],
      correct: "When visibility is poor"
  },
  // Add more questions up to 20
  {
      question: "What is the maximum speed limit on New Zealand's open roads?",
      options: ["80 km/h", "90 km/h", "100 km/h"],
      correct: "100 km/h"
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
      question: "What should you do if you miss your exit on a motorway?",
      options: ["Reverse back to the exit", "Do a U-turn", "Take the next exit"],
      correct: "Take the next exit"
  },
  {
      question: "What does a red reflector (cat's eye) on the road mean?",
      options: ["Indicates a no-passing zone", "Indicates the edge of the road", "Indicates a stop sign ahead"],
      correct: "Indicates the edge of the road"
  },
  {
      question: "When should you use your vehicle's horn?",
      options: ["To alert others to your presence", "To express frustration", "To startle animals"],
      correct: "To alert others to your presence"
  },
  {
      question: "What should you do if your vehicle begins to skid?",
      options: ["Brake hard", "Steer into the skid", "Accelerate"],
      correct: "Steer into the skid"
  },
  {
      question: "When parking on a hill, what should you do?",
      options: ["Leave the car in gear and turn the wheels toward the curb", "Leave the car in neutral", "Turn the wheels away from the curb"],
      correct: "Leave the car in gear and turn the wheels toward the curb"
  },
  {
      question: "What does a white diamond painted on the road indicate?",
      options: ["A pedestrian crossing ahead", "A cycle lane", "A no-parking zone"],
      correct: "A pedestrian crossing ahead"
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
      question: "What is the maximum speed limit for a learner driver?",
      options: ["80 km/h", "90 km/h", "100 km/h"],
      correct: "100 km/h"
  },
  {
      question: "What should you do at a stop sign?",
      options: ["Slow down and proceed if clear", "Stop completely and check for traffic", "Speed up"],
      correct: "Stop completely and check for traffic"
  },
  {
      question: "What does a yellow line on the curb mean?",
      options: ["No parking", "Loading zone", "Bus stop"],
      correct: "No parking"
  }
];

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
  }
}

function loadQuiz() {
  const quizContainer = document.getElementById('quizQuestions');
  shuffle(questions);
  quizContainer.innerHTML = questions.map((q, index) => `
      <div class="question">
          <p>${index + 1}. ${q.question}</p>
          ${q.options.map(option => `
              <label><input type="radio" name="q${index}" value="${option}"> ${option}</label><br>
          `).join('')}
      </div>
  `).join('');
}

document.getElementById('quizForm').addEventListener('submit', function(event) {
  event.preventDefault();

  let correctAnswers = 0;
  questions.forEach((q, index) => {
      const selected = document.querySelector(`input[name="q${index}"]:checked`);
      if (selected && selected.value === q.correct) {
          correctAnswers++;
      }
  });

  alert(`You got ${correctAnswers} out of ${questions.length} questions correct!`);
});

window.onload = loadQuiz;
