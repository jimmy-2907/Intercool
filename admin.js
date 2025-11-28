const quill = new Quill("#editor", {
  theme: "snow",
});

const answersBox = document.getElementById("answers");
const addAnswerBtn = document.getElementById("addAnswer");
const saveBtn = document.getElementById("saveBtn");

let answerCount = 0;
addAnswerBtn.onclick = () => {
  answerCount++;
  answersBox.innerHTML += `
<div class="ansItem">
<input class="ansText" placeholder="Đáp án ${answerCount}" />
<input type="checkbox" class="isCorrect" /> Đúng
</div>`;
};

saveBtn.onclick = async () => {
  const title = document.getElementById("questionTitle").value;
  const content = quill.root.innerHTML;

  const answers = [...document.querySelectorAll(".ansItem")].map((a) => ({
    text: a.querySelector(".ansText").value,
    correct: a.querySelector(".isCorrect").checked,
  }));

  await db.collection("quiz").add({
    title,
    content,
    answers,
  });

  alert("Đã lưu!");
};
