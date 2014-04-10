//different texts of the button
var enter = "Enter to Win!";
var notEnough = "Not Enough Points";

//selecting the button
var formElement = document.getElementById('form_enter_giveaway');
var btntext = formElement.textContent;

//enter if you have enough points, alert if you don't
if(btntext.indexOf(enter) >= 0){
    formElement.submit();
}
else if(btntext.indexOf(notEnough) >= 0){
    alert(notEnough);
}