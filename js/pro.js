
var div1 = document.getElementById('container');
var button = document.getElementById('btn1');
button.addEventListener('click',
function(){

    var xmlhttp = new XMLHttpRequest();
    
    
    var url = 'https://api.tvmaze.com/shows/1?embed=cast';
    

   // xhr.setRequestHeader("","");

    xmlhttp.onreadystatechange = function() {
        if(this.readyState == 4 && this.status == 200){
            div1.innerHTML = this.responseText;
        
        }
    };
    xmlhttp.open('GET',url,true);
    xmlhttp.send();
})
