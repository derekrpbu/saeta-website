


//////////////////

function myFunction(id) {
  var checkBox = document.getElementById(id);
  var text = document.getElementsByClassName(id + "_text");
  for (var i = 0; i < text.length; i += 1) {
    if (checkBox.checked == true) {
      text[i].style.display = "block";
    } else {
      text[i].style.display = "none";
      document.body.style.height = "100vh";
    }
  }
}


// Mostrar por ID
// function myFunction(id) {
//   var checkBox = document.getElementById(id);
//   var text = document.getElementsId(id+"_text");
//   if (checkBox.checked == true) {
//     text.style.display = "block";
//   } else {
//     text.style.display = "none";
//   }
// }


// Cambiar display property con loop
// var elems = document.getElementsByClassName('btn-pageMenu');
// for (var i=0;i<elems.length;i+=1){
//   elems[i].style.display = 'block';
// }

// Extra: jQuery
// ​$('.btn-pageMenu').css('display'​​​​​​​​​​​​​​​​​​​​​​​​​​​,'block');​​​​​​



// 0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0


// Contact Us form
//1. Less secure apps

// // Listen for a submit
// document.querySelector(".contact-form").addEventListener("submit", submitForm);

// function submitForm(e) {
//   e.preventDefault();

//   // Get input Values
//   let name = document.querySelector(".firstName").value;
//   let lastName = document.querySelector(".lastName").value;
//   let telephone = document.querySelector(".telephone").value;
//   let email = document.querySelector(".email").value;
//   let message = document.querySelector(".message").value;

//   saveContactInfo(name, lastName, telephone, email, message);

//   document.querySelector(".contact-form").reset();

//   sendEmail(name, lastName, telephone, email, message);
// }

// //send email info
// function sendEmail(name, lastName, telephone, email, message) {
//   Email.send({
//     Host: "smtp.gmail.com",
//     Username: "derope1994@gmail.com",
//     Password: "Derek1994",
//     To: "info@saetacostarica.com",
//     From: "derope1994@gmail.com",
//     Subject: `${name} sent a message to SAETA.`,
//     Body: `Name: ${name} <br/> Last Name: ${lastName} <br/> Telephone: ${telephone} <br/> Email: ${email} <br/> Message: ${message}`,
//   })
//     .then((message) => alert("mail sent successfully"));
// }


// 0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0
// jQuery Lightslider

// $('#lightSlider').lightSlider({
//     gallery: true,
//     item: 1,
//     loop: true,
//     slideMargin: 0,
//     thumbItem: 9
// });


//Mobile Nav
$(document).ready(function () {

  //Mobile Nav
  $('.js--nav-icon').click(function () {
    let nav = $('.js--main-nav');
    var icon = $('.js--nav-icon i');

    nav.slideToggle(200);

    if (icon.hasClass('im im-menu')) {
      icon.removeClass('im im-menu');
      icon.addClass('im im-x-mark');
    } else {
      icon.removeClass('im im-x-mark');
      icon.addClass('im im-menu');
    }
  })

})