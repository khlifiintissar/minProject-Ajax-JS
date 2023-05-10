const myObj = {firsname:"John", lastname:"Doe"};
console.log(myObj);
  console.log("hell ");
  //l'affichage des tous les messages dans la page d'acceuil

  window.onload=function(){
   getMessage();
  }
  function getMessage(){
    //create a nex xhr object
var xhr = new XMLHttpRequest();
//set the http method and the url for the request
xhr.open("GET", "http://chakerbm.tn/services/messages.php", true);
//send the req 
xhr.send();
//handle the server's response
xhr.onreadystatechange = function () {
if (xhr.readyState == 4 && xhr.status == 200) {
console.log(xhr.responseXML);
res=xhr.responseXML;
afficherMessage(res);
}
};

}

  function afficherMessage(contenu) {
    var msgs = contenu.getElementsByTagName("message");
    var list = document.getElementById("lis");
    for (var i = 0; i < msgs.length; i++) {
        var li = document.createElement("li");
        //var td1 = document.createElement("td");
        var m1 = document.createTextNode(msgs[i].getAttribute("email"));
        var x= document.createTextNode("> ");
        var m2 = document.createTextNode(msgs[i].getAttribute("message"));
      //  td1.appendChild(c1);
      //  tr.appendChild(td1);

       li.appendChild(m1);
       li.appendChild(x);
       li.appendChild(m2);
       list.appendChild(li)
    }

}
  

  function affich(mai){
   var f1=document.getElementById("af1");
   var f2=document.getElementById("af2");
   var f3=document.getElementById("af3");
   var in1=document.getElementById("in1");
   var in2=document.getElementById("in2");
   in1.removeAttribute('disabled');
   in2.removeAttribute('disabled');


   if(getComputedStyle(f1).display!="none"){
         f1.style.display="none"
       };
       if(getComputedStyle(f2).display!="none"){
           f2.style.display="none"
       };
       if(getComputedStyle(f3).display=="none"){
           f3.style.display="block";
          var h=document.createElement("h6");
           var c=document.createTextNode(mai);
           h.appendChild(c);
           f3.appendChild(h);
       };

  };

 function ajouter(){
   var f1=document.getElementById("af1");
   var f2=document.getElementById("af2");
   var f3=document.getElementById("af3");


   var nom =document.getElementById("nom").value;
   var email=document.getElementById("email").value;
   var pass=document.getElementById("pass").value;
  
   // Create a new XHR object
   var xhr = new XMLHttpRequest();
    // Set the HTTP method and URL for the request
  xhr.open("POST", "http://chakerbm.tn/services/adduser.php", true);
  // Set the request header for the form data
  xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded; charset=UTF-8"); 
   // Send the request with the form data
  xhr.send("nom=" + nom + "&email=" + email + "&pass=" + pass + ""); 
  // Handle the server's response
  xhr.onreadystatechange = function() {
   if (xhr.readyState == 4 && xhr.status == 200 ) {
       alert(xhr.response);

    alert("OK"); 
    affich(email);    
     }
    
   };
   affich(email);  
};
function connect(){
  var email=document.getElementById("em").value;
  var password=document.getElementById("pas").value;
  var xhr = new XMLHttpRequest();
xhr.open("GET", "http://chakerbm.tn/services/verif.php?email="+email+"&pass="+password, true);
xhr.send();
xhr.onreadystatechange = function () {
   if (xhr.readyState == 4 && xhr.status == 200) {
       console.log(xhr.responseXML);
       alert(xhr.response);
       affich(email);
   }
}

};
function postMess(){
    var f3=document.getElementsById("af3");
  // var f3=document.getElementsByTagName('h6');
   var xhr=new XMLHttpRequest();
   xhr.open("POST","http://chakerbm.tn/services/addmessage.php",true);
   var message=document.getElementById('in1').value;
   var email=f3.innerHTML;
 //  var email1=email.innerHTML;
   alert(email);
   
  // var 
  xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded; charset=UTF-8"); 
  xhr.send("message=" + message + "&email=" + email + "");
  xhr.onreadystatechange=function(){
   if(xhr.readyState==4 && xhr.status==200){
       alert(xhr.response)
      alert(email1);
       var list = document.getElementById("lis");
       var li = document.createElement("li");
       var m1 = document.createTextNode(email);
       var x= document.createTextNode("> ");
       var m2 = document.createTextNode(message);
       li.appendChild(m1);
       li.appendChild(x);
       li.appendChild(m2);
       list.appendChild(li);
       getMessage();


       
   }
  }
};
