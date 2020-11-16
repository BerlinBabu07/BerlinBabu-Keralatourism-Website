let email= document.getElementById("email");
let pwd = document.getElementById("pwd");
let firstname = document.getElementById("first-name");
let lastname = document.getElementById("last-name");
let phno = document.getElementById("phonenumber");
// let pwd = document.getElementById("pwd");

function validate(){
  var phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
         if(firstname.value && lastname.value ==""){
            alert("First and Last Name cannot be empty");
            return false;
        }
        else if(email.value && pwd==""){
            alert("Email cannot be empty");
            return false;
        }

        else if(pwd.value.length<=7){
            alert("Password is too short");
            pwd.style.border="3px solid red";
            return false;
        }
        else{
            return true;
        }



function phonenumber(phno)
{
  var phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
  if(phno.value.match(phonenumber))
        {
          return true;
        }
      else
        {
        alert("message");
        return false;
        }
}
}




$(document).ready(function () {

  $('#pwd').on('keyup', function () {

      let textElement = $(this).val()
      let strength = 0

      $('#typepass').find('h4').html(`Your Password: ${textElement}`)

      if (textElement.length > 0) {
          let sizeElements = textElement.length

          if (sizeElements > 10) {

              strength += 30

          } else {
              let calcMath = (sizeElements * 2)

              strength += calcMath

          }

      }

      let lowerCase = new RegExp(/[a-z]/)
      if (lowerCase.test(textElement)) {
          strength += 16
      }

      let upperCase = new RegExp(/[A-Z]/)
      if (upperCase.test(textElement)) {
          strength += 18
      }

      let regularNumber = new RegExp(/[0-9]/i)
      if (regularNumber.test(textElement)) {
          strength += 16
      }

      let specialChars = new RegExp(/[^a-z0-9]/i)
      if (specialChars.test(textElement)) {
          strength += 20
      }
      
      //Function to produce result
      let renderResult = (strengthData, color) => {
          return $('#strengthResult').html(
              `
                        
          <div class="progress" style="height: 40px;">
              <div class="progress-bar bg-${color}" role="progressbar" style="width: ${strengthData}%" aria-valuenow="${strengthData}" aria-valuemin="0" aria-valuemax="100"><strong style="font-size: 15px">${strength}%</strong></div>
          </div>`
          )
      }

      if (strength < 21) {
          renderResult(strength, 'danger')//red very weak password
      } else
          if (strength > 20 && strength < 41) {
              renderResult(strength, 'warning')//orange weak password
          } else
              if (strength > 40 && strength < 61) {
                  renderResult(strength, 'secondary')//medium password
              } else
                  if (strength > 60 && strength < 81) {
                      renderResult(strength, 'info')// strong password
                  } else {
                      renderResult(strength, 'success')//very strong password
                  }

      

  });

});