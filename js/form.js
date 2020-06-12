
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
            var users = JSON.parse(this.responseText);

            var output ='';
            for(var i in users){

            output  += '<ul>'+
            '<li>ID: '+users.score+'</li>'+
            '<li>url:'+url+'</li>'+
            '<li>name:'+users.show+'</li>'+
            '<li>type:'+users.status+'</li>'+
            '<li>language:'+users.rating+'</li>'+
            '<li>url:'+url+'</li>'+ 
            '<li>genres: '+users.genres+'</li>'+
            '<li>runtime:'+users.runtime+'</li>'+
            '<li>premeried:'+users.premeried+'</li>'+
            '<li>officialsite:'+users.url+'</li>'+
            '<li>schedule:'+users.schedule+'</li>'+
            '<li>network: '+users.network+'</li>'+
            '<li>weight:'+users.weight+'</li>'+
            '<li>id:'+users.id+'</li>'+
            '<li>officialsite:'+users.url+'</li>'+
                
            '</ul>';
            }
            
            document.getElementById('container').
            innerHTML = output;
        
        }
            
           
    };
    xmlhttp.open('GET',url,true);
    xmlhttp.send();
})
