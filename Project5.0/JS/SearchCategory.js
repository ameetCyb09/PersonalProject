
// category wise blog searching
function get_blogs(category) {
    //first clear the span
    document.getElementById("sp1").innerHTML = " ";
    var Category = category;
    // xmlhttpRequest object created here
    $.ajax({
        //ajax called here to get the result categorywise
        url: "http://localhost:3000/blogs",
        method: "GET",
        success: (x) => {
            x.forEach(e => {
                if (Category == e.category) {
                    let content1 = e.content;
                    let halfcontent = content1.substr(0, 100);
                    //div element is created here
                    let z = '<div class="block1"><h2>"' + e.title + '"</h2><b>-"'
                        + e.author + '"</b><img src="' + e.Image
                        + '" width="250px" height="250px"/><br><p>' + halfcontent
                        + '</p><button onclick=" return validateUser(' + e.id + ')"><a>-Read More</a></button></div>';
                    //appending element in div
                    $("#sp1").append(z);
                }
            });
            //applying style to div
            $(".block1").addClass("gridbox")
        },
        error: (e) => {
            alert("error" + e)
        }
    })
}


