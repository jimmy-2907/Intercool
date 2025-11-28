let questions = [];
let index = 0;

async function loadQuestions() {
  const snap = await db.collection("quiz").get();
  questions = snap.docs.map((d) => ({ id: d.id, ...d.data() }));
  showQuestion();
}

function showQuestion() {
  const q = questions[index];
  const box = document.getElementById("questionBox");

  box.innerHTML = `
<h2>${q.title}</h2>
<div>${q.content}</div>
<div>
${q.answers
  .map((a, i) => `<div class='answer' onclick='choose(${i})'>${a.text}</div>`)
  .join("")}
</div>
`;
}

function choose(i) {
  const q = questions[index];
  const answersDOM = document.querySelectorAll(".answer");

  answersDOM.forEach((el, idx) => {
    if (q.answers[idx].correct) el.classList.add("correct");
    else el.classList.add("wrong");
  });

  document.getElementById("result").innerHTML = q.answers[i].correct
    ? "✔ Chính xác!"
    : "❌ Sai rồi!";
}

document.getElementById("nextBtn").onclick = () => {
  if (index < questions.length - 1) {
    index++;
    showQuestion();
    document.getElementById("result").innerHTML = "";
  }
};

loadQuestions();
