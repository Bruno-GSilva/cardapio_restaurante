const formRegister = document.getElementById("formRegister");
const formLogin = document.getElementById("formLogin");
const telaLogin = document.getElementById("telaLogin");
const btn1 = document.getElementById("btn1");

const login = document.getElementById("login");
const password = document.getElementById("password");


formRegister.setAttribute("content", "Faça seu registro agora!");
btn1.innerHTML = "Registrar";

btn1.addEventListener("click", () => {
  formRegister.classList.toggle("active");
  btn1.classList.toggle("active");
  btn1.classList.contains("active")
    ? ((btn1.innerHTML = "Registrar"),
      formRegister.setAttribute("content", "Faça seu registro agora!"),
      (formRegister.style.color = "#fff"))
    : ((btn1.innerHTML = "Login"),
      formRegister.setAttribute("content", "Já tem conta faça seu login ?"));
});

formLogin.addEventListener('submit', (e) =>{
  e.preventDefault()
  login.value === "adm" && password.value === "adm"? window.location.href = "http://127.0.0.1:5501/pages/informacoes.html":console.log("negado")
})