
var div1 = document.getElementById('container');
var button = document.getElementById('btn1');
button.addEventListener('click',
function(){

    var xmlhttp = new XMLHttpRequest();
    
    
    var url = 'https://api.tvmaze.com/shows/1?embed=cast';
    

   // xhr.setRequestHeader("","");

    xmlhttp.onreadystatechange = function() {
        if(this.readyState == 4 && this.status == 200){
             var users = JSON.parse(this.responseText);

            var output ='';
            for(var i in users){

            output  += '<ul>'+
            '<li>ID: '+users.id+'</li>'+
            '<li>url:'+url+'</li>'+
            '<li>name:'+users.name[i]+'</li>'+
            '<li>type:'+users.type+'</li>'+
            '<li>language:'+users.language+'</li>'+
            '<li>genres: '+users.genres[i]+'</li>'+
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
