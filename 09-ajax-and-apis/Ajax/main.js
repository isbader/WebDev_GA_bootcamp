$(function(){

    $.ajax({
        url: "https://api.themoviedb.org/3/discover/movie",
        type: "get",
        data: { api_key : "f20f2125a8816d94ad9f389b149cc662"},
        success: function(res){
            document.getElementById("buffer").style.display = "none";
            console.log(res);

             res.results.forEach(element => {
                 $(".movies").append(`<img src="https://image.tmdb.org/t/p/w500/${element.poster_path}" />`)
            
             });
            
            
        },
        error: function(xhr, status, err){
            console.log("not working")
        }
    })
})




// https://api.themoviedb.org/3/discover/movie?api_key=api_key=f2...