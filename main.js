$(document).ready(function () {

    $("#getPosts").click(function () { 
        let posts = []
        $.ajax({
            type: "GET",
            url: "https://jsonplaceholder.typicode.com/posts",
            success: function (data) {
                posts = data
            },
            error: function (err) {  
                console.log(err)
            },
            async : false
            
        });

        console.log(posts)
        
        for (let i of posts){    
            let post = "<div class='card my-5'>"+
            "<div class='card-body'>"+
              "<h4 class='card-title'>" + i.title + "</h4>"+
              "<p class='card-text'>" + i.body + "</p>"+
            "</div>"+
          "</div>"
           $("#posts").append(post)
        }
        
    });
})