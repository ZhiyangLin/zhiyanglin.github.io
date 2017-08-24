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
       
        if(!$("#author").val()){
            myFunction();
            return false;
        }
        if(!$("#email").val()){
            myFunction();
            return false;
        }
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
    function myFunction() {
        console.log("what");
        var popup = document.getElementById("myPopup");
        popup.classList.toggle("show");
        setTimeout(function(){ popup.classList.toggle("hidden");}, 2000);
    }
    function resetData(){
        $("#author").val("");
        $("#email").val("");
        $("#content").val("");
    }
})