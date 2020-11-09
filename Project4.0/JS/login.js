

$(document).ready(function () {
    $("#btn_Login").click(() => {
        var userEmail = $("#email").val();
        var userPassword = $("#password").val();
        var flag = false;
        if (userEmail === '' || userPassword === '') {
            $("#errorPassword").html("<span><h3>User Email/password is Empty!!</h3></span>");
            return false;
        }
        $.ajax({
            url: "http://localhost:3000/users",
            type: "GET",
            success: function (result) {
                jQuery.each(result, function (index, value) {

                    var email = result[index].email;
                    var password = result[index].password;
                    if (!flag) {
                        if (userEmail === email && userPassword === password) {
                            alert("correct username / password");
                            flag = true;
                             sessionStorage.setItem("user",userEmail);
                            // localStorage.setItem("user",userEmail);
                            sessionStorage.setItem("flag-login",true);
                            $("#loginClicked").hide();
                            $("#logoutClicked").show();
                            
                            $(".mainsection").load("../HTML/global.html");
                            // $("#errorPassword").html("<span>User Email/password is correct!!</span>");
                            return true;
                        }
                    }
                });

                if (!flag) {
                    $("#errorPassword").html("<span><h3>User Email/password is Wrong!!</h3></span>");
                }
            },
            error: (result) => {
                alert("Error_404");

            }
        });
    });
    $("#showPassword").click(() => {
        var passwordType = document.getElementById("password");
        if (passwordType.type === "password") {
            passwordType.type = "text";
        }
        else {
            passwordType.type = "password";
        }
    });

    $("#logoutClicked").click(() => {
        sessionStorage.removeItem("flag-login");
        var key = localStorage.getItem("user");
        if (key != '') {
            // localStorage.removeItem("user");
            sessionStorage.removeItem("user");
            alert("Successfully Logout!");
            $("#loginClicked").show();
            $("#logoutClicked").hide();
            $(".mainsection").load("../HTML/global.html");
        }

    });
});
