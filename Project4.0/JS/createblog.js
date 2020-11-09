
function onUpload(path,blogdata){
alert("ala");

  //calling function for getting file name
    var imgName=updateFilename(path);
    var imgPath="../image/"+imgName;
   
//geting values from from
    var content=blogdata; //document.getElementById('blogcontent').value;
    var author=document.getElementById('author');
    var title=document.getElementById('Title');
    var Date=document.getElementById('Date');
      date=document.getElementById('Date').value;
    var category=document.getElementById('category');
    var uid=category.options[category.selectedIndex].value;
    // no=document.getElementById('no').value;
     
  //   var formdata={
  //     "category":uid,
  //     "id":null,
  //     "author":author.value,
  //     "title":title.value,
  //     "content":content,
  //     "Date":Date.value.toString(),
  //     "Image":imgPath.toString()
      
  // };
  

    
  if(content !="" &&  uid!="" && author.value !="" && title.value!="" && checkedDate())//validation for input
  {
      
    var formdata={
      "category":uid,
      "id":null,
      "author":author.value,
      "title":title.value,
      "content":content,
      "Date":Date.value.toString(),
      "Image":imgPath.toString()
      
  };
  
      
//ajax call for posting values into json files

        $.ajax({
            url:"http://localhost:3000/blogs",
            method:"POST",
            dataType:"JSON",
            data:formdata,
            success:function(data)
            {
             
            },
            error:function(jqXHR,textStatus,errorThrown)
            {

            }
           





        });
        
        return true;
    }
      else{
      //errors
      
      
        

       if(title.value =="")
        {
          
         document.getElementById('title_msg').style.display="block";
        return false;
     }

       else if(author.value =="")
      {
            
           document.getElementById('author_msg').style.display="block";
           return false;
         }

          else if(content=="")
        {
          
         document.getElementById('blogcontent_msg').style.display="block";
         return false;
      }
       else if(checkedDate()==false)
      {
        document.getElementById('date_msg').style.display="block";
         return false;
    }
       return false;
   }

   }


   
  //function for reseting values    
    function reset_All()
    {
      document.getElementById('blogcontent').value="";
     document.getElementById('author').value="";
     document.getElementById('Title').value="";
     document.getElementById('Date').value="";

    var category=document.getElementById('category');
    var uid=category.options[category.selectedIndex].value="";


    
    }
   
   //returning images name
    function updateFilename(path) {
        var name = extractFilename(path);
         return name;
      }

   
      //extract "C:\\fakepath from file url"
      function extractFilename(path) {
        if (path.substr(0, 12) == "C:\\fakepath\\")
          return path.substr(12); // modern browser
        var x;
        x = path.lastIndexOf('/');
        if (x >= 0) // Unix-based path
          return path.substr(x+1);
        x = path.lastIndexOf('\\');
        if (x >= 0) // Windows-based path
          return path.substr(x+1);
        return path; // just the file name
      }
 
    //date validation
     function checkedDate()
       {
        
       var date=document.getElementById('Date').value;
     var dateregx=/^([0-9]{1,2})+-([0-9]{1,2})+-([0-9]{4})$/
      if(date.match(dateregx))
       {
        return true;
      }  
      else{
       return false;
      }
      
     }
