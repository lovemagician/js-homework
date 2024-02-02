const user = {
  id: "asd@naver.com",
  pw: "spdlqj123!@",
};

const userEmail = document.querySelector("#userEmail");
const userPassword = document.querySelector("#userPassword");
const submit = document.querySelector(".btn-login");
/*

1. email 정규표현식을 사용한 validation
2. pw 정규표현식을 사용한 validation
3. 상태 변수 관리
4. 로그인 버튼을 클릭시 조건처리

*/

let curId = "";
function handleCheckId(text) {
  text = this.value;
  console.log(text + "입력한 아이디");
  const re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const emailReg = re.test(String(text).toLowerCase());
  if (emailReg || text === "") {
    userEmail.classList.remove("is--invalid");
    curId = this.value;
  } else if (!emailReg) {
    userEmail.classList.add("is--invalid");
  }
}

let curPassword = "";
function handleCheckPassword(text) {
  text = this.value;
  console.log(text + "입력한 비밀번호");
  const re = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^*+=-]).{6,16}$/;
  const passwordReg = re.test(String(text).toLowerCase());
  if (passwordReg || text === "") {
    userPassword.classList.remove("is--invalid");
    curPassword = this.value;
  } else if (!passwordReg) {
    userPassword.classList.add("is--invalid");
  }
}

function handleSubmit(e) {
  e.preventDefault();
  console.log(curId + "입력된 아이디");
  console.log(curPassword + "입력된 비밀번호");
  if (user.id === curId && user.pw === curPassword) {
    window.location.href = "welcome.html";
  }
}

userEmail.addEventListener("input", handleCheckId);
userPassword.addEventListener("input", handleCheckPassword);
submit.addEventListener("click", handleSubmit);
