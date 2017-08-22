$( document ).ready(function() {

    // SUBMIT FORM
    $("#messageForm").submit(function(event) {
        event.preventDefault();
        ajaxPost();
    });

    

    function ajaxPost(){
        // PREPARE FORM DATA
        var formData = {
            author : $("#author").val(),
            email :  $("#email").val(),
            content : $("#content").val()
        }
        // $.ajax({ url: "//formspree.io/you@email.com", method: "POST", data: {message: "hello!"}, dataType: "json" });
        // DO POST
        $.ajax({
            type : "POST",
            contentType : "application/json",
            url : "//formspree.io/zhiyanglin2@outlook.com",
            data : JSON.stringify(formData),
            dataType : 'json',
            success : function(result){
                alert("Message Sent!");
            },
            error : function(e) {
                alert("Error!");
                console.log("ERROR: ", e);
            }
        });

        // Reset FormData after Posting
        resetData();
    }
    
    function resetData(){
        $("#author").val("");
        $("#email").val("");
        $("#content").val("");
    }
})