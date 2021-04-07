
$(document).ready(function () {

  //Validate Form
  $('#regForm').validate({
    ignore: [],
    rules: {
      fname: "required",
      lname: "required",
      contact: {
        required: true,
        minlength: 10,
        maxlength: 11
      },
      password: {
        required: true,
        minlength: 6,
      },
      confirm_password: {
        required: true,
        minlength: 6,
        equalTo: "password"
      },
      email: {
        required: true,
        email: true,
      },

      image: {
        required: true,
        extension: "xls|csv"
      },

      company: "required",
      address: "required",

    },
    messages: {
      fname: "Please enter your first name",
      lname: "Please enter your last name",
      contact: {
        required: "please enter your contact number",
        minlength: "please enter 11 digits of your contact number",
        maxlength: "please enter 11 digits of your contact number",
      },
      password: {
        required: "please provide a password",
        minlength: "Your password must be 6 characters long",
      },
      confirm_password: {
        required: "please provide a password",
        minlength: "Your password must be 6 characters long",
        equalTo: "please enter the same password as above",
      },
      image: {
        required: "please upload an image",
        extension: "please upload png or jpg formet image"
      },
      company: "Please enter your company name",
      email: "Please Enter a valid email address"
    },
    errorPlacement: function (error, element) {
      if (element.is('select:hidden')) {
        error.insertAfter(element.next('.nice-select'));
      } else {
        error.insertAfter(element);
      }
    },
  });

});