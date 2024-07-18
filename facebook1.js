$(document).ready(function() {
    $("#signupForm").validate({
        rules: {
            fname: {
                required: true,
                minlength: 2
            },
            lname: {
                required: true,
                minlength: 2
            },
            email: {
                required: true,
                email: true
            },
            password: {
                required: true,
                minlength: 4
            },
            month:{
                required:true
            },
            day:{
                required:true
            },
            year:{
                required:true
            }
        },
        messages: {
            fname: {
                required: "Please enter your first name",
                minlength: "Your first name consist of at least 2 characters"
            },
            lname: {
                required: "Please enter your last name",
                minlength: "Your last name consist of at least 2 characters"
            },
            email: {
                required: "Please enter a valid email address",
                email: "Please enter a valid email address"
            },
            password: {
                required: "Please provide a password",
                minlength: "Your password contains at least 4 characters",
                maxlength:"Your password contains atmost 8 characters"
            },
            month:{
                required:"Select Month"
            },
            day:{
                required:"Select Day"
            },
            year:{
                required:"Select Year"
            }
        }
    });
});