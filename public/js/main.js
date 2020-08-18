$(document).ready(function(){
    $("#action1").click(function(){
        var xhttp = new XMLHttpRequest();    
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                var valasz = this.responseText;
                alert("Hello " + valasz + "!")
            }   
        };
        xhttp.open("GET", "/hello", true);
        xhttp.send();
    });
});
