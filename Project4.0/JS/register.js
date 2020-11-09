
$(document).ready(()=>{
    function validation(){
        var fName = $("#firstName").val();
        var lName = $("#lastName").val();
        var uName = $("#userName").val();
        var phoneNo = $("#phoneNo").val();
        var email = $("#email").val();
        var password = $("#password").val();
        var cPassword = $("#cPassword").val();

        if(fName=="" || fName == null)
        {
            document.getElementById('firstName_error').innerHTML = "**Please Enter the First Name";
            return false;
        }
        if((fName.length <=2) || (fName.length>=20))
        {
            document.getElementById('firstName_error').innerHTML = "**Please Enter the First Name between 2 and 20 character";
            return false;
        }
        if(!isNaN(fName))
        {
            document.getElementById('firstName_error').innerHTML = "**Please Do not enter the number ";
            return false;
        }
        if(lName=="" || lName == null)
        {
            document.getElementById('lastName_error').innerHTML = "**Please Enter the Last Name";
            return false;
        }
        if((lName.length <=2) || (lName.length>=20))
        {
            document.getElementById('lastName_error').innerHTML = "**Please Enter the Last Name between 2 and 20 character";
            return false;
        }
        if(!isNaN(lName))
        {
            document.getElementById('lastName_error').innerHTML = "**Please Do not enter the number ";
            return false;
        }
        if(uName=="" || uName == null)
        {
            document.getElementById('userName_error').innerHTML = "**Please Enter the user Name";
            return false;
        }
        if(phoneNo=="")
        {
            document.getElementById('phoneNo_error').innerHTML = "**Please Enter the Mobile No";
            return false;
        }
        if(isNaN(phoneNo))
        {
            document.getElementById('phoneNo_error').innerHTML = "**Please Enter Digits Only";
            return false;
        }
        if((phoneNo.length!=10)){
            document.getElementById('phoneNo_error').innerHTML = "**Please Enter 10 Digit Mobile NO";
            return false;
        }
        if(email=="" || email == null)
        {
            document.getElementById('email_error').innerHTML = "**Please Enter the email";
            return false;
        }
         if(email.indexOf('@')<=0){
            document.getElementById('email_error').innerHTML = "**Please enter valid email";
            return false;
         }
         if((email.charAt(email.length-4)!= '.') && (email.charAt(email.length-3)!= '.'))
         {
            document.getElementById('email_error').innerHTML = "**Please enter valid email";
            return false;
         }
        if(password=="" || password == null)
        {
            document.getElementById('password_error').innerHTML = "**Please Enter the Password";
            return false;
        }
        if((password.length <=8) || (password.length>=20))
        {
            document.getElementById('password_error').innerHTML = "**Please Enter the the password between 8 and 20 character";
            return false;
        }
        if(cPassword=="" || cPassword == null)
        {
            document.getElementById('cPassword_error').innerHTML = "**Re-Enter the password ";
            return false;
        }
        if(password != cPassword){
            document.getElementById('cPassword_error').innerHTML = "**conform password not match ";
            return false;
        }
        else return true;

    }



    $("#btnRegister").click(()=>{

        var firstName = $("#firstName").val();
        var lastName = $("#LastName").val();
        var userName = $("#userName").val();
        var userPhoneNo = $("#phoneNo").val();
        var userEmail = $("#email").val();
        var userPassword=$("#password").val();
        var flag=false;
        var userExists=true;
        userExists=validation();

    if(userExists){
        $.ajax({
            url:"http://localhost:3000/users",
            type:"GET",
            success:function(result){
                jQuery.each(result,function(index,value){

                    var email=result[index].email;
                    var phoneNo=result[index].phoneNumber;
                      if(!flag){

                         if(userEmail===email ||userPhoneNo===phoneNo){
                             alert("User Already Exists. Please Change User Name");
                             $("#email_error").innerHTML ="email is not available change email"
                             flag = true;
                         }
                      }
            });
            if(!flag){
                     alert("Registraing New User...")
                $.ajax({
                    url:"http://localhost:3000/Users",
                    type:"POST",
                    data:{
                       "id":null,
                       "fName":firstName,
                       "lName":lastName,
                       "uName":userName,
                       "phoneNo":userPhoneNo,
                       "email":userEmail,
                       "password":userPassword

                    },
                    success:function(result){
                        alert("Welcome to BlogIt!, Successfully Registered.");
                        $(".mainsection").load("../HTML/modules/login.html");
                    },
                    error:(result)=>{
                        alert("Error_404");
                    }
                });
             }
            },
            error:(result)=>{
                alert("Error_404");
            }
        });
    }
    });

});
