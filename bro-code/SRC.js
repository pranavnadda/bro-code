const form = document.getElementById("futureForm");
const message = document.getElementById("message");

form.addEventListener("submit", function(e){

e.preventDefault();

let name = document.getElementById("name").value;
let email = document.getElementById("email").value;
let age = document.getElementById("age").value;
let password = document.getElementById("password").value;

if(age < 18){

message.style.color = "#ff3b3b";
message.innerText = "❌ ACCESS DENIED — AGE RESTRICTION";

return;

}
if(age > 115){

message.style.color = "#ff3b3b";
message.innerText = "❌ ACCESS DENIED — AGE RESTRICTION ARE YOU GOD TO BE THIS OLD";

return;

}

message.style.color = "#00ffcc";
message.innerText = "✅ ACCESS GRANTED — LOADING SYSTEM...";

let url = window.location.origin + window.location.pathname +
`?name=${encodeURIComponent(name)}&email=${encodeURIComponent(email)}&age=${encodeURIComponent(age)}&password=${encodeURIComponent(password)}`;

setTimeout(function(){

window.location.href = url;

},1500);

});

