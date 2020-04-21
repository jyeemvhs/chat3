
function readClicked(){
    $.ajax({
      url: "/read",
      type: "GET",
      success: function(data){
        if (!data)
          alert("bad read");
        else if (data.retVal) {
         alert("good read");
          for (let i = 0;i<data.retVal.length;i++)
            console.log(data.retVal[i].name + ": " + data.retVal[i].comment)         
        } else
          alert("bad read");
      } ,     
      dataType: "json"
    });     
  return false;
}

function createClicked(){
    $.ajax({
      url: "/create",
      type: "POST",
      data: {name:$("#name").val(),comment:$("#comment").val()},
      success: function(data){
        if (!data)
          alert("bad create");
        else if (data.retVal)
          alert("good create");
        else
          alert("bad create");
        } ,     
      dataType: "json"
    });     
  return false;
}

$(document).ready(function(){        
  $("#readButton").click(readClicked);
  $("#createButton").click(createClicked);
}); 
