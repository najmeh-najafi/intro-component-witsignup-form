const form = document.querySelector("#form");
const button=document.querySelector(".form__submit");
const p2e = s => s.replace(/[۰-۹]/g, d => '۰۱۲۳۴۵۶۷۸۹'.indexOf(d))
const passwordInput = document.querySelector(".form__Password");
form.addEventListener("submit", (e) => {
    e.preventDefault();
})
passwordInput.addEventListener("input",(e)=>{
    alert(e.target.value)
    alert(isNaN(e.target.value))
    alert(p2e(e.target.value))
})
  
