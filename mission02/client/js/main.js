/* 

1. 클릭 이벤트 활성화
2. nav 클릭시 배경 색상 변경
3. 이미지 변경
4. 텍스트 변경
5. 함수 분리

*/

const nav = document.querySelector(".nav");
const visual = document.querySelector(".visual");
const visualImage = document.querySelector(".visual div > img ");
const nickName = document.querySelector(".nickName");
const body = document.body;

function changeImage() {
  const target = event.target.closest("li");
  const index = target.dataset.index;
  visualImage.setAttribute(
    "src",
    `./assets/${data[index - 1].name.toLowerCase()}.jpeg`
  );
}

function changeInfo() {
  const target = event.target.closest("li");
  const index = target.dataset.index;
  visualImage.setAttribute("alt", data[index - 1].alt);
  nickName.textContent = data[index - 1].name;
}

function changeBackground() {
  const target = event.target.closest("li");
  const index = target.dataset.index;
  const backgroundColor = data[index - 1].color;
  body.style.background = `linear-gradient(to bottom,${backgroundColor[0]},${backgroundColor[1]})`;
}

function changeTarget() {
  const target = event.target.closest("li");
  const ul = nav.children[0];
  const list = [...ul.children];
  list.forEach((li) => li.classList.remove("is-active"));
  target.classList.add("is-active");
}

function handleChange(event) {
  event.preventDefault();
  const target = event.target.closest("li");

  if (!target) return;
  changeInfo();
  changeImage();
  changeBackground();
  changeTarget();
}

nav.addEventListener("click", handleChange);
