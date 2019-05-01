function validateForm() {
   var myForm = document.querySelector("#myForm");

   var email=document.getElementById("email").value;
   var name= document.getElementById("name").value;
   //var testCheck = new RegExp("/\S+@\S+\.\S+/");
   

   //Function to create the RegEX & check if valid email
   function validateEmail(email) {
    var testCheck = /\S+@\S+\.\S+/;
    return testCheck.test(email);
  }

  //Will check if valid name
   if (name.length > 3 && name.split(" ").length > 1) {
      myForm.name.style.backgroundColor = "LightGreen";
   } else  {
       myForm.name.style.backgroundColor = "IndianRed";
   }

   //Will check if valid email address
   if (validateEmail(email)) {
      myForm.email.style.backgroundColor = "LightGreen";
   } else {
       myForm.email.style.backgroundColor = "IndianRed";
   }
}

var myForm = document.querySelector("#myForm");
myForm.validate.addEventListener("click", validateForm);


/*
Timer that will begin as soon as the form is loaded.
After 30 sec. the timer will alert the user (w/ a message) unless the 
submit button is clicked before the 30 seconds are up.
*/
var countdown;

function timeout_trigger() {
    window.alert('Form Timeout!');   
}

function timeout_init() {
    countdown = setTimeout('timeout_trigger()', 30000);
}

function stopCounter() {
    clearTimeout(countdown);
}

/*
Should only run this if valiadte form is successful.
*/
document.getElementById('myForm').addEventListener('submit', (e) => {
    e.preventDefault();
  
    const formData = new FormData(e.target);
    const data = Array.from(formData.entries()).reduce((desc, ans) => ({
      ...desc,
      [ans[0]]: ans[1],
    }), {});
    document.getElementById('output').innerHTML = JSON.stringify(data);
  });
  