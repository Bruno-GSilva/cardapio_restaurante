const formRegister = document.getElementById("formRegister");
const formLogin = document.getElementById("formLogin");
const login = document.getElementById("login");
const telaLogin = document.getElementById("telaLogin");
const btn1 = document.getElementById("btn1");

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

formLogin.addEventListener('submit', () =>{
  console.log(login.value)
})