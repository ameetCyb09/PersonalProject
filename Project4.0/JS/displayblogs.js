

$("document").ready(() => {
    $.ajax({
        //ajax called here to get the blogs
        url: "http://localhost:3000/blogs",
        method: "GET",
        success: (x) => {
            x.forEach(e => {
                let content1 = e.content;
                let halfcontent = content1.substr(0, 100);
                //div element is created here
                let z = '<div class="block1 jumbotron"><h2>"' + e.title
                    + '"</h2><b>-"' + e.author + '"</b><i>-"' + e.Date
                    + '"</i><img src="' + e.Image
                    + '" width="250px" height="250px"/><br><p>' + halfcontent
                    + '</p><button onclick=" return validateUser(' + e.id + ')"><a>-Read More</a></button></div>';
                //appending element in div
                $("#sp1").append(z);
            });
            //applying style to div
            $(".block1").addClass("gridbox")
        },
        error: (e) => {
        }
    })
})

function validateUser(id) {
    if (sessionStorage.getItem("flag-login")) {
        // alert("please Login");
        document.getElementById("sp1").innerHTML = " ";
        $.ajax({
            //ajax called here to display the particular blog
            //passing id for that blog here
            url: "http://localhost:3000/blogs/" + id,
            method: "GET",
            success: (x) => {
                //div element is created here
                let z = '<div class="block1 container"><h2>"' + x.title
                    + '"</h2><b>-"' + x.author + '"</b><i>-"'
                    + x.Date + '"</i><img src="' + x.Image
                    + '" width="500px" height="500px"/><br><p>' + x.content
                    + '</div>';
                //appending element in div
                $("#sp1").append(z);
                //applying style to div
                $(".block1").addClass("gridboxfullview");
            },
            error: (e) => {
            }
        })
        return true;
    }
    else {


        $(".mainsection").load("./modules/login.html");
        return false;
    }
}
