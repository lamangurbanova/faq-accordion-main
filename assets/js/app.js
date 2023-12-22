let question = document.querySelectorAll(".faqs-content-item .question");
let answer = document.querySelectorAll(".faqs-content-item .answer");

for (let i = 0; i < question.length; i++) {
  question[i].addEventListener("click", () => {
    for (let j = 0; j < answer.length; j++) {
      if (i == j) {
        answer[j].classList.toggle("active");
        const iconSrc = answer[j].classList.contains("active")
          ? "assets/images/icon-minus.svg"
          : "assets/images/icon-plus.svg";
        answer[j].previousElementSibling.children[1].src = iconSrc;
      } else {
        answer[j].classList.remove("active");
        answer[j].previousElementSibling.children[1].src="assets/images/icon-plus.svg";
      }
    }
  });
}
