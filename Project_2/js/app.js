$(function(){
 var main_url = "https://newsapi.org/v1/articles?"
 var api_key = "apiKey=da79a417868543cb9420ab08a9d15428"
 
 var source = "source=CNN&ign&bbc-news&sortBy=random&"; 
    var url = main_url + source + api_key;
    $.ajax({
      type: 'GET',
      url : url,
      contentType : "json",
     success: function(data){
        $(".loader").hide()
        var data1 = data.articles
     
      data1.forEach(function(currentValue,index,array){ 
  
        if (index == 0){
          $("#first").empty()
          $("#first").append("<a href="+currentValue.url+"><h3>"+currentValue.title+"</h3></a>")
          $("#first").append("<p>"+currentValue.description+"</p>")
          $("#first_author").empty()
          $("#first_author").append("<h6>"+currentValue.author+"</h6>")
          $("#first_image").empty()
          $("#first_image").append(`<img src="${currentValue.urlToImage}"/>`)
        }
        if (index == 1){
          $("#second").empty()
          $("#second").append("<a href="+currentValue.url+"><h3>"+currentValue.title+"</h3></a>")
          $("#second").append("<p>"+currentValue.description+"</p>")
          $("#second_author").empty()
          $("#second_author").append("<h6>"+currentValue.author+"</h6>")
          $("#second_image").empty()
          $("#second_image").append(`<img src="${currentValue.urlToImage}"/>`)
        }
        if (index == 2){
          $("#third").empty()
          $("#third").append("<a href="+currentValue.url+"><h3>"+currentValue.title+"</h3></a>")
          $("#third").append("<p>"+currentValue.description+"</p>")
          $("#third_author").empty()
          $("#third_author").append("<h6>"+currentValue.author+"</h6>")
          $("#third_image").empty()
          $("#third_image").append(`<img src="${currentValue.urlToImage}"/>`)
        }
        if (index == 3){
          $("#forth").empty()
          $("#forth").append("<a href="+currentValue.url+"><h3>"+currentValue.title+"</h3></a>")
          $("#forth").append("<p>"+currentValue.description+"</p>")
          $("#forth_author").empty()
          $("#forth_author").append("<h6>"+currentValue.author+"</h6>")
          $("#forth_image").empty()
          $("#forth_image").append(`<img src="${currentValue.urlToImage}"/>`)
        }
        if (index == 4){
          $("#fifth").empty()
          $("#fifth").append("<a href="+currentValue.url+"><h3>"+currentValue.title+"</h3></a>")
          $("#fifth").append("<p>"+currentValue.description+"</p>")
          $("#fifth_author").empty()
          $("#fifth_author").append("<h6>"+currentValue.author+"</h6>")
          $("#fifth_image").empty()
          $("#fifth_image").append(`<img src="${currentValue.urlToImage}"/>`)
        }
        if (index == 5){
          $("#sixth").empty()
          $("#sixth").append("<a href="+currentValue.url+"><h3>"+currentValue.title+"</h3></a>")
          $("#sixth").append("<p>"+currentValue.description+"</p>")
          $("#sixth_author").empty()
          $("#sixth_author").append("<h6>"+currentValue.author+"</h6>")
          $("#sixth_image").empty()
          $("#sixth_image").append(`<img src="${currentValue.urlToImage}"/>`)
        }
       })
      }
    })


  $("#CNN").on("click", function() { 
    var source = "source=CNN&sortBy=top&"; 
    var url = main_url + source + api_key;
    $.ajax({
      type: 'GET',
      url : url,
      contentType : "json",
     success: function(data){
        $(".loader").hide()
        var data1 = data.articles
     
      data1.forEach(function(currentValue,index,array){ 
  
        if (index == 0){
          $("#first").empty()
          $("#first").append("<a href="+currentValue.url+"><h3>"+currentValue.title+"</h3></a>")
          $("#first").append("<p>"+currentValue.description+"</p>")
          $("#first_author").empty()
          $("#first_author").append("<h6>"+currentValue.author+"</h6>")
          $("#first_image").empty()
          $("#first_image").append(`<img src="${currentValue.urlToImage}"/>`)
        }
        if (index == 1){
          $("#second").empty()
          $("#second").append("<a href="+currentValue.url+"><h3>"+currentValue.title+"</h3></a>")
          $("#second").append("<p>"+currentValue.description+"</p>")
          $("#second_author").empty()
          $("#second_author").append("<h6>"+currentValue.author+"</h6>")
          $("#second_image").empty()
          $("#second_image").append(`<img src="${currentValue.urlToImage}"/>`)
        }
        if (index == 2){
          $("#third").empty()
          $("#third").append("<a href="+currentValue.url+"><h3>"+currentValue.title+"</h3></a>")
          $("#third").append("<p>"+currentValue.description+"</p>")
          $("#third_author").empty()
          $("#third_author").append("<h6>"+currentValue.author+"</h6>")
          $("#third_image").empty()
          $("#third_image").append(`<img src="${currentValue.urlToImage}"/>`)
        }
        if (index == 3){
          $("#forth").empty()
          $("#forth").append("<a href="+currentValue.url+"><h3>"+currentValue.title+"</h3></a>")
          $("#forth").append("<p>"+currentValue.description+"</p>")
          $("#forth_author").empty()
          $("#forth_author").append("<h6>"+currentValue.author+"</h6>")
          $("#forth_image").empty()
          $("#forth_image").append(`<img src="${currentValue.urlToImage}"/>`)
        }
        if (index == 4){
          $("#fifth").empty()
          $("#fifth").append("<a href="+currentValue.url+"><h3>"+currentValue.title+"</h3></a>")
          $("#fifth").append("<p>"+currentValue.description+"</p>")
          $("#fifth_author").empty()
          $("#fifth_author").append("<h6>"+currentValue.author+"</h6>")
          $("#fifth_image").empty()
          $("#fifth_image").append(`<img src="${currentValue.urlToImage}"/>`)
        }
        if (index == 5){
          $("#sixth").empty()
          $("#sixth").append("<a href="+currentValue.url+"><h3>"+currentValue.title+"</h3></a>")
          $("#sixth").append("<p>"+currentValue.description+"</p>")
          $("#sixth_author").empty()
          $("#sixth_author").append("<h6>"+currentValue.author+"</h6>")
          $("#sixth_image").empty()
          $("#sixth_image").append(`<img src="${currentValue.urlToImage}"/>`)
        }
       })
      }
    })
  });
    $("#IGN").on("click", function() { 
       var source = "source=ign&sortBy=top&"; 
       var url = main_url + source + api_key;
     $.ajax({
       type: 'GET',
       url : url,
       contentType : "json",
      success: function(data){
      $(".loader").hide()
      var data1 = data.articles
   
      data1.forEach(function(currentValue,index,array){ 

      if (index == 0){
       
        $("#first").empty()
        $("#first").append("<a href="+currentValue.url+"><h3>"+currentValue.title+"</h3></a>")
        $("#first").append("<p>"+currentValue.description+"</p>")
        $("#first_author").empty()
        $("#first_author").append("<h6>"+currentValue.author+"</h6>")
        $("#first_image").empty()
        $("#first_image").append(`<img src="${currentValue.urlToImage}"/>`)
      }
      if (index == 1){
        $("#second").empty()
        $("#second").append("<a href="+currentValue.url+"><h3>"+currentValue.title+"</h3></a>")
        $("#second").append("<p>"+currentValue.description+"</p>")
        $("#second_author").empty()
        $("#second_author").append("<h6>"+currentValue.author+"</h6>")
        $("#second_image").empty()
        $("#second_image").append(`<img src="${currentValue.urlToImage}"/>`)
      }
      if (index == 2){
        $("#third").empty()
        $("#third").append("<a href="+currentValue.url+"><h3>"+currentValue.title+"</h3></a>")
        $("#third").append("<p>"+currentValue.description+"</p>")
        $("#third_author").empty()
        $("#third_author").append("<h6>"+currentValue.author+"</h6>")
        $("#third_image").empty()
        $("#third_image").append(`<img src="${currentValue.urlToImage}"/>`)
      }
      if (index == 3){
        $("#forth").empty()
        $("#forth").append("<a href="+currentValue.url+"><h3>"+currentValue.title+"</h3></a>")
        $("#forth").append("<p>"+currentValue.description+"</p>")
        $("#forth_author").empty()
        $("#forth_author").append("<h6>"+currentValue.author+"</h6>")
        $("#forth_image").empty()
        $("#forth_image").append(`<img src="${currentValue.urlToImage}"/>`)
      }
      if (index == 4){
        $("#fifth").empty()
        $("#fifth").append("<a href="+currentValue.url+"><h3>"+currentValue.title+"</h3></a>")
        $("#fifth").append("<p>"+currentValue.description+"</p>")
        $("#fifth_author").empty()
        $("#fifth_author").append("<h6>"+currentValue.author+"</h6>")
        $("#fifth_image").empty()
        $("#fifth_image").append(`<img src="${currentValue.urlToImage}"/>`)
      }
      if (index == 5){
        $("#sixth").empty()
        $("#sixth").append("<a href="+currentValue.url+"><h3>"+currentValue.title+"</h3></a>")
        $("#sixth").append("<p>"+currentValue.description+"</p>")
        $("#sixth_author").empty()
        $("#sixth_author").append("<h6>"+currentValue.author+"</h6>")
        $("#sixth_image").empty()
        $("#sixth_image").append(`<img src="${currentValue.urlToImage}"/>`)
      }
        })
      }
    })
  });
$("#BBC").on("click", function() { 
  source = "source=bbc-news&sortBy=top&"; 
  var url = main_url + source + api_key;
  $.ajax({
    type: 'GET',
    url : url,
    contentType : "json",
  success: function(data){
      $(".loader").hide()
      var data1 = data.articles
   
    data1.forEach(function(currentValue,index,array){ 

      if (index == 0){
       
        $("#first").empty()
        $("#first").append("<a href="+currentValue.url+"><h3>"+currentValue.title+"</h3></a>")
        $("#first").append("<p>"+currentValue.description+"</p>")
        $("#first_author").empty()
        $("#first_author").append("<h6>"+currentValue.author+"</h6>")
        $("#first_image").empty()
        $("#first_image").append(`<img src="${currentValue.urlToImage}"/>`)
      }
      if (index == 1){
        $("#second").empty()
        $("#second").append("<a href="+currentValue.url+"><h3>"+currentValue.title+"</h3></a>")
        $("#second").append("<p>"+currentValue.description+"</p>")
        $("#second_author").empty()
        $("#second_author").append("<h6>"+currentValue.author+"</h6>")
        $("#second_image").empty()
        $("#second_image").append(`<img src="${currentValue.urlToImage}"/>`)
      }
      if (index == 2){
        $("#third").empty()
        $("#third").append("<a href="+currentValue.url+"><h3>"+currentValue.title+"</h3></a>")
        $("#third").append("<p>"+currentValue.description+"</p>")
        $("#third_author").empty()
        $("#third_author").append("<h6>"+currentValue.author+"</h6>")
        $("#third_image").empty()
        $("#third_image").append(`<img src="${currentValue.urlToImage}"/>`)
      }
      if (index == 3){
        $("#forth").empty()
        $("#forth").append("<a href="+currentValue.url+"><h3>"+currentValue.title+"</h3></a>")
        $("#forth").append("<p>"+currentValue.description+"</p>")
        $("#forth_author").empty()
        $("#forth_author").append("<h6>"+currentValue.author+"</h6>")
        $("#forth_image").empty()
        $("#forth_image").append(`<img src="${currentValue.urlToImage}"/>`)
      }
      if (index == 4){
        $("#fifth").empty()
        $("#fifth").append("<a href="+currentValue.url+"><h3>"+currentValue.title+"</h3></a>")
        $("#fifth").append("<p>"+currentValue.description+"</p>")
        $("#fifth_author").empty()
        $("#fifth_author").append("<h6>"+currentValue.author+"</h6>")
        $("#fifth_image").empty()
        $("#fifth_image").append(`<img src="${currentValue.urlToImage}"/>`)
      }
      if (index == 5){
        $("#sixth").empty()
        $("#sixth").append("<a href="+currentValue.url+"><h3>"+currentValue.title+"</h3></a>")
        $("#sixth").append("<p>"+currentValue.description+"</p>")
        $("#sixth_author").empty()
        $("#sixth_author").append("<h6>"+currentValue.author+"</h6>")
        $("#sixth_image").empty()
        $("#sixth_image").append(`<img src="${currentValue.urlToImage}"/>`)
          }
        })
      }
    })
  });
})

