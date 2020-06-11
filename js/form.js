
//var btn = document.createElement('button');
var div2 = document.getElementById('container');
var button = document.getElementById('btn2');
button.addEventListener('click',
function(){

    var xmlhttp = new XMLHttpRequest();
    
    
    var url = 'https://api.tvmaze.com/search/shows?q=girls';
    

   // xhr.setRequestHeader("","");

    xmlhttp.onreadystatechange = function() {
        if(this.readyState == 4 && this.status == 200){
            div2.innerHTML = this.responseText;
        

        }
    };
    xmlhttp.open('GET',url,true);
    xmlhttp.send();
})
