$(document).ready(function(){
  $("#submitter").click(function(){
    var city = $("#yourCity").val();
    if(city!=''){
      $.ajax({
        url:'http://api.openweathermap.org/data/2.5/weather?q='+city+'&appid=98d46ba8691414e03eeb2224dd084c7a&units=metric',
        type:"GET",
        dataType:"jsonp",
        success:function(data){
          var popup=show(data);
          $("#showData").html(popup);
          $("#showData").val('');
        }
      });
    }else{
      $("#error").html('<div class="alert alert-danger alert-dismissable" id="errorcity"><a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a>Empty Field!</div>');
    }
  });
});

function show(data){
  return "<div class='alert alert-success alert-dismissable'><a href='#' class='close' data-dismiss='alert' aria-label='close'>&times;</a>"+
  "<h3 style='font-size:35px;'>Weather for "+data.name+", "+data.sys.country +"</h3>"+
  "<h3><strong>Weather</strong>: <img src='http://openweathermap.org/img/w/"+data.weather[0].icon+".png'> "+data.weather[0].main+"</h3>"+
  "<h3><strong>Description</strong>: "+data.weather[0].description+"</h3>"+
  "<h3><strong>Temperature</strong>: "+data.main.temp+"&deg;C</h3>"
  }
