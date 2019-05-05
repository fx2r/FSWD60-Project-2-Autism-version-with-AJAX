////////////////////////////////////////////////////////
////////////////////// home /////////////////////////////
////////////////////////////////////////////////////////
$(document).ready(function(){
	var request;
	$("#home").on("click",function(event){
		event.preventDefault();

   // Abort any pending request
   if (request) {
       request.abort();
   }

 
   // Fire off the request to /form.php
   request = $.ajax({
       url: "content/home.php",
       type: "post"
   });

   // Callback handler that will be called on success
   request.done(function (response, textStatus, jqXHR){
       // Log a message to the console
       console.log("Hooray, it worked!");
       document.getElementById("content").innerHTML=response;
   });

   // Callback handler that will be called on failure
   request.fail(function (jqXHR, textStatus, errorThrown){
       // Log the error to the console
       console.error(
           "The following error occurred: "+
           textStatus, errorThrown
       );
	})
})
})

////////////////////////////////////////////////////////
////////////////////// uns /////////////////////////////
////////////////////////////////////////////////////////
$(document).ready(function(){
  var request;
  $("#uns").on("click",function(event){
    event.preventDefault();

   // Abort any pending request
   if (request) {
       request.abort();
   }

 
   // Fire off the request to /form.php
   request = $.ajax({
       url: "content/uns.php",
       type: "post"
   });

   // Callback handler that will be called on success
   request.done(function (response, textStatus, jqXHR){
       // Log a message to the console
       console.log("Hooray, it worked!");
       document.getElementById("content").innerHTML=response;
   });

   // Callback handler that will be called on failure
   request.fail(function (jqXHR, textStatus, errorThrown){
       // Log the error to the console
       console.error(
           "The following error occurred: "+
           textStatus, errorThrown
       );
  })
})
})

////////////////////////////////////////////////////////
////////////////////// ass /////////////////////////////
////////////////////////////////////////////////////////
$(document).ready(function(){
  var request;
  $("#ass").on("click",function(event){
    event.preventDefault();

   // Abort any pending request
   if (request) {
       request.abort();
   }

 
   // Fire off the request to /form.php
   request = $.ajax({
       url: "content/ass.php",
       type: "post"
   });

   // Callback handler that will be called on success
   request.done(function (response, textStatus, jqXHR){
       // Log a message to the console
       console.log("Hooray, it worked!");
       document.getElementById("content").innerHTML=response;
   });

   // Callback handler that will be called on failure
   request.fail(function (jqXHR, textStatus, errorThrown){
       // Log the error to the console
       console.error(
           "The following error occurred: "+
           textStatus, errorThrown
       );
  })
})
})

////////////////////////////////////////////////////////
////////////////////// aut /////////////////////////////
////////////////////////////////////////////////////////
$(document).ready(function(){
  var request;
  $("#aut").on("click",function(event){
    event.preventDefault();

   // Abort any pending request
   if (request) {
       request.abort();
   }

 
   // Fire off the request to /form.php
   request = $.ajax({
       url: "content/aut.php",
       type: "post"
   });

   // Callback handler that will be called on success
   request.done(function (response, textStatus, jqXHR){
       // Log a message to the console
       console.log("Hooray, it worked!");
       document.getElementById("content").innerHTML=response;
   });

   // Callback handler that will be called on failure
   request.fail(function (jqXHR, textStatus, errorThrown){
       // Log the error to the console
       console.error(
           "The following error occurred: "+
           textStatus, errorThrown
       );
  })
})
})

////////////////////////////////////////////////////////
////////////////////// behindertenausweis /////////////////////////////
////////////////////////////////////////////////////////
$(document).ready(function(){
  var request;
  $("#behindertenausweis").on("click",function(event){
    event.preventDefault();

   // Abort any pending request
   if (request) {
       request.abort();
   }

 
   // Fire off the request to /form.php
   request = $.ajax({
       url: "content/behindertenausweis.php",
       type: "post"
   });

   // Callback handler that will be called on success
   request.done(function (response, textStatus, jqXHR){
       // Log a message to the console
       console.log("Hooray, it worked!");
       document.getElementById("content").innerHTML=response;
   });

   // Callback handler that will be called on failure
   request.fail(function (jqXHR, textStatus, errorThrown){
       // Log the error to the console
       console.error(
           "The following error occurred: "+
           textStatus, errorThrown
       );
  })
})
})

////////////////////////////////////////////////////////
////////////////////// bekannte_autisten /////////////////////////////
////////////////////////////////////////////////////////
$(document).ready(function(){
  var request;
  $("#bekannte_autisten").on("click",function(event){
    event.preventDefault();

   // Abort any pending request
   if (request) {
       request.abort();
   }

 
   // Fire off the request to /form.php
   request = $.ajax({
       url: "content/bekannte_autisten.php",
       type: "post"
   });

   // Callback handler that will be called on success
   request.done(function (response, textStatus, jqXHR){
       // Log a message to the console
       console.log("Hooray, it worked!");
       document.getElementById("content").innerHTML=response;
   });

   // Callback handler that will be called on failure
   request.fail(function (jqXHR, textStatus, errorThrown){
       // Log the error to the console
       console.error(
           "The following error occurred: "+
           textStatus, errorThrown
       );
  })
})
})

////////////////////////////////////////////////////////
////////////////////// buecher /////////////////////////////
////////////////////////////////////////////////////////
$(document).ready(function(){
  var request;
  $("#buecher").on("click",function(event){
    event.preventDefault();

   // Abort any pending request
   if (request) {
       request.abort();
   }

 
   // Fire off the request to /form.php
   request = $.ajax({
       url: "content/buecher.php",
       type: "post"
   });

   // Callback handler that will be called on success
   request.done(function (response, textStatus, jqXHR){
       // Log a message to the console
       console.log("Hooray, it worked!");
       document.getElementById("content").innerHTML=response;
   });

   // Callback handler that will be called on failure
   request.fail(function (jqXHR, textStatus, errorThrown){
       // Log the error to the console
       console.error(
           "The following error occurred: "+
           textStatus, errorThrown
       );
  })
})
})


////////////////////////////////////////////////////////
////////////////////// che /////////////////////////////
////////////////////////////////////////////////////////
$(document).ready(function(){
  var request;
  $("#che").on("click",function(event){
    event.preventDefault();

   // Abort any pending request
   if (request) {
       request.abort();
   }

 
   // Fire off the request to /form.php
   request = $.ajax({
       url: "content/che.php",
       type: "post"
   });

   // Callback handler that will be called on success
   request.done(function (response, textStatus, jqXHR){
       // Log a message to the console
       console.log("Hooray, it worked!");
       document.getElementById("content").innerHTML=response;
   });

   // Callback handler that will be called on failure
   request.fail(function (jqXHR, textStatus, errorThrown){
       // Log the error to the console
       console.error(
           "The following error occurred: "+
           textStatus, errorThrown
       );
  })
})
})

////////////////////////////////////////////////////////
////////////////////// einkaufen /////////////////////////////
////////////////////////////////////////////////////////
$(document).ready(function(){
  var request;
  $("#einkaufen").on("click",function(event){
    event.preventDefault();

   // Abort any pending request
   if (request) {
       request.abort();
   }

 
   // Fire off the request to /form.php
   request = $.ajax({
       url: "content/einkaufen.php",
       type: "post"
   });

   // Callback handler that will be called on success
   request.done(function (response, textStatus, jqXHR){
       // Log a message to the console
       console.log("Hooray, it worked!");
       document.getElementById("content").innerHTML=response;
   });

   // Callback handler that will be called on failure
   request.fail(function (jqXHR, textStatus, errorThrown){
       // Log the error to the console
       console.error(
           "The following error occurred: "+
           textStatus, errorThrown
       );
  })
})
})

////////////////////////////////////////////////////////
////////////////////// erfahrungen /////////////////////////////
////////////////////////////////////////////////////////
$(document).ready(function(){
  var request;
  $("#erfahrungen").on("click",function(event){
    event.preventDefault();

   // Abort any pending request
   if (request) {
       request.abort();
   }

 
   // Fire off the request to /form.php
   request = $.ajax({
       url: "content/erfahrungen.php",
       type: "post"
   });

   // Callback handler that will be called on success
   request.done(function (response, textStatus, jqXHR){
       // Log a message to the console
       console.log("Hooray, it worked!");
       document.getElementById("content").innerHTML=response;
   });

   // Callback handler that will be called on failure
   request.fail(function (jqXHR, textStatus, errorThrown){
       // Log the error to the console
       console.error(
           "The following error occurred: "+
           textStatus, errorThrown
       );
  })
})
})

////////////////////////////////////////////////////////
////////////////////// fachliteratur /////////////////////////////
////////////////////////////////////////////////////////
$(document).ready(function(){
  var request;
  $("#fachliteratur").on("click",function(event){
    event.preventDefault();

   // Abort any pending request
   if (request) {
       request.abort();
   }

 
   // Fire off the request to /form.php
   request = $.ajax({
       url: "content/fachliteratur.php",
       type: "post"
   });

   // Callback handler that will be called on success
   request.done(function (response, textStatus, jqXHR){
       // Log a message to the console
       console.log("Hooray, it worked!");
       document.getElementById("content").innerHTML=response;
   });

   // Callback handler that will be called on failure
   request.fail(function (jqXHR, textStatus, errorThrown){
       // Log the error to the console
       console.error(
           "The following error occurred: "+
           textStatus, errorThrown
       );
  })
})
})

////////////////////////////////////////////////////////
////////////////////// familienbeihilfe /////////////////////////////
////////////////////////////////////////////////////////
$(document).ready(function(){
  var request;
  $("#familienbeihilfe").on("click",function(event){
    event.preventDefault();

   // Abort any pending request
   if (request) {
       request.abort();
   }

 
   // Fire off the request to /form.php
   request = $.ajax({
       url: "content/familienbeihilfe.php",
       type: "post"
   });

   // Callback handler that will be called on success
   request.done(function (response, textStatus, jqXHR){
       // Log a message to the console
       console.log("Hooray, it worked!");
       document.getElementById("content").innerHTML=response;
   });

   // Callback handler that will be called on failure
   request.fail(function (jqXHR, textStatus, errorThrown){
       // Log the error to the console
       console.error(
           "The following error occurred: "+
           textStatus, errorThrown
       );
  })
})
})

////////////////////////////////////////////////////////
////////////////////// filme /////////////////////////////
////////////////////////////////////////////////////////
$(document).ready(function(){
  var request;
  $("#filme").on("click",function(event){
    event.preventDefault();

   // Abort any pending request
   if (request) {
       request.abort();
   }

 
   // Fire off the request to /form.php
   request = $.ajax({
       url: "content/filme.php",
       type: "post"
   });

   // Callback handler that will be called on success
   request.done(function (response, textStatus, jqXHR){
       // Log a message to the console
       console.log("Hooray, it worked!");
       document.getElementById("content").innerHTML=response;
   });

   // Callback handler that will be called on failure
   request.fail(function (jqXHR, textStatus, errorThrown){
       // Log the error to the console
       console.error(
           "The following error occurred: "+
           textStatus, errorThrown
       );
  })
})
})

////////////////////////////////////////////////////////
////////////////////// finanz_mehr /////////////////////////////
////////////////////////////////////////////////////////
$(document).ready(function(){
  var request;
  $("#finanz_mehr").on("click",function(event){
    event.preventDefault();

   // Abort any pending request
   if (request) {
       request.abort();
   }

 
   // Fire off the request to /form.php
   request = $.ajax({
       url: "content/finanz_mehr.php",
       type: "post"
   });

   // Callback handler that will be called on success
   request.done(function (response, textStatus, jqXHR){
       // Log a message to the console
       console.log("Hooray, it worked!");
       document.getElementById("content").innerHTML=response;
   });

   // Callback handler that will be called on failure
   request.fail(function (jqXHR, textStatus, errorThrown){
       // Log the error to the console
       console.error(
           "The following error occurred: "+
           textStatus, errorThrown
       );
  })
})
})

////////////////////////////////////////////////////////
////////////////////// forum /////////////////////////////
////////////////////////////////////////////////////////
$(document).ready(function(){
  var request;
  $("#forum").on("click",function(event){
    event.preventDefault();

   // Abort any pending request
   if (request) {
       request.abort();
   }

 
   // Fire off the request to /form.php
   request = $.ajax({
       url: "content/forum.php",
       type: "post"
   });

   // Callback handler that will be called on success
   request.done(function (response, textStatus, jqXHR){
       // Log a message to the console
       console.log("Hooray, it worked!");
       document.getElementById("content").innerHTML=response;
   });

   // Callback handler that will be called on failure
   request.fail(function (jqXHR, textStatus, errorThrown){
       // Log the error to the console
       console.error(
           "The following error occurred: "+
           textStatus, errorThrown
       );
  })
})
})

////////////////////////////////////////////////////////
////////////////////// freizeit /////////////////////////////
////////////////////////////////////////////////////////
$(document).ready(function(){
  var request;
  $("#freizeit").on("click",function(event){
    event.preventDefault();

   // Abort any pending request
   if (request) {
       request.abort();
   }

 
   // Fire off the request to /form.php
   request = $.ajax({
       url: "content/freizeit.php",
       type: "post"
   });

   // Callback handler that will be called on success
   request.done(function (response, textStatus, jqXHR){
       // Log a message to the console
       console.log("Hooray, it worked!");
       document.getElementById("content").innerHTML=response;
   });

   // Callback handler that will be called on failure
   request.fail(function (jqXHR, textStatus, errorThrown){
       // Log the error to the console
       console.error(
           "The following error occurred: "+
           textStatus, errorThrown
       );
  })
})
})

////////////////////////////////////////////////////////
////////////////////// ger /////////////////////////////
////////////////////////////////////////////////////////
$(document).ready(function(){
  var request;
  $("#ger").on("click",function(event){
    event.preventDefault();

   // Abort any pending request
   if (request) {
       request.abort();
   }

 
   // Fire off the request to /form.php
   request = $.ajax({
       url: "content/ger.php",
       type: "post"
   });

   // Callback handler that will be called on success
   request.done(function (response, textStatus, jqXHR){
       // Log a message to the console
       console.log("Hooray, it worked!");
       document.getElementById("content").innerHTML=response;
   });

   // Callback handler that will be called on failure
   request.fail(function (jqXHR, textStatus, errorThrown){
       // Log the error to the console
       console.error(
           "The following error occurred: "+
           textStatus, errorThrown
       );
  })
})
})

////////////////////////////////////////////////////////
////////////////////// ita /////////////////////////////
////////////////////////////////////////////////////////
$(document).ready(function(){
  var request;
  $("#ita").on("click",function(event){
    event.preventDefault();

   // Abort any pending request
   if (request) {
       request.abort();
   }

 
   // Fire off the request to /form.php
   request = $.ajax({
       url: "content/ita.php",
       type: "post"
   });

   // Callback handler that will be called on success
   request.done(function (response, textStatus, jqXHR){
       // Log a message to the console
       console.log("Hooray, it worked!");
       document.getElementById("content").innerHTML=response;
   });

   // Callback handler that will be called on failure
   request.fail(function (jqXHR, textStatus, errorThrown){
       // Log the error to the console
       console.error(
           "The following error occurred: "+
           textStatus, errorThrown
       );
  })
})
})

////////////////////////////////////////////////////////
////////////////////// news /////////////////////////////
////////////////////////////////////////////////////////
$(document).ready(function(){
  var request;
  $("#news").on("click",function(event){
    event.preventDefault();

   // Abort any pending request
   if (request) {
       request.abort();
   }

 
   // Fire off the request to /form.php
   request = $.ajax({
       url: "content/news.php",
       type: "post"
   });

   // Callback handler that will be called on success
   request.done(function (response, textStatus, jqXHR){
       // Log a message to the console
       console.log("Hooray, it worked!");
       document.getElementById("content").innerHTML=response;
   });

   // Callback handler that will be called on failure
   request.fail(function (jqXHR, textStatus, errorThrown){
       // Log the error to the console
       console.error(
           "The following error occurred: "+
           textStatus, errorThrown
       );
  })
})
})

////////////////////////////////////////////////////////
////////////////////// nuetzlich /////////////////////////////
////////////////////////////////////////////////////////
$(document).ready(function(){
  var request;
  $("#nuetzlich").on("click",function(event){
    event.preventDefault();

   // Abort any pending request
   if (request) {
       request.abort();
   }

 
   // Fire off the request to /form.php
   request = $.ajax({
       url: "content/nuetzlich.php",
       type: "post"
   });

   // Callback handler that will be called on success
   request.done(function (response, textStatus, jqXHR){
       // Log a message to the console
       console.log("Hooray, it worked!");
       document.getElementById("content").innerHTML=response;
   });

   // Callback handler that will be called on failure
   request.fail(function (jqXHR, textStatus, errorThrown){
       // Log the error to the console
       console.error(
           "The following error occurred: "+
           textStatus, errorThrown
       );
  })
})
})

////////////////////////////////////////////////////////
////////////////////// pflegegeld /////////////////////////////
////////////////////////////////////////////////////////
$(document).ready(function(){
  var request;
  $("#pflegegeld").on("click",function(event){
    event.preventDefault();

   // Abort any pending request
   if (request) {
       request.abort();
   }

 
   // Fire off the request to /form.php
   request = $.ajax({
       url: "content/pflegegeld.php",
       type: "post"
   });

   // Callback handler that will be called on success
   request.done(function (response, textStatus, jqXHR){
       // Log a message to the console
       console.log("Hooray, it worked!");
       document.getElementById("content").innerHTML=response;
   });

   // Callback handler that will be called on failure
   request.fail(function (jqXHR, textStatus, errorThrown){
       // Log the error to the console
       console.error(
           "The following error occurred: "+
           textStatus, errorThrown
       );
  })
})
})

////////////////////////////////////////////////////////
////////////////////// restaurants /////////////////////////////
////////////////////////////////////////////////////////
$(document).ready(function(){
  var request;
  $("#restaurants").on("click",function(event){
    event.preventDefault();

   // Abort any pending request
   if (request) {
       request.abort();
   }

 
   // Fire off the request to /form.php
   request = $.ajax({
       url: "content/restaurants.php",
       type: "post"
   });

   // Callback handler that will be called on success
   request.done(function (response, textStatus, jqXHR){
       // Log a message to the console
       console.log("Hooray, it worked!");
       document.getElementById("content").innerHTML=response;
   });

   // Callback handler that will be called on failure
   request.fail(function (jqXHR, textStatus, errorThrown){
       // Log the error to the console
       console.error(
           "The following error occurred: "+
           textStatus, errorThrown
       );
  })
})
})

////////////////////////////////////////////////////////
////////////////////// symptome /////////////////////////////
////////////////////////////////////////////////////////
$(document).ready(function(){
  var request;
  $("#symptome").on("click",function(event){
    event.preventDefault();

   // Abort any pending request
   if (request) {
       request.abort();
   }

 
   // Fire off the request to /form.php
   request = $.ajax({
       url: "content/symptome.php",
       type: "post"
   });

   // Callback handler that will be called on success
   request.done(function (response, textStatus, jqXHR){
       // Log a message to the console
       console.log("Hooray, it worked!");
       document.getElementById("content").innerHTML=response;
   });

   // Callback handler that will be called on failure
   request.fail(function (jqXHR, textStatus, errorThrown){
       // Log the error to the console
       console.error(
           "The following error occurred: "+
           textStatus, errorThrown
       );
  })
})
})

////////////////////////////////////////////////////////
////////////////////// therapie /////////////////////////////
////////////////////////////////////////////////////////
$(document).ready(function(){
  var request;
  $("#therapie").on("click",function(event){
    event.preventDefault();

   // Abort any pending request
   if (request) {
       request.abort();
   }

 
   // Fire off the request to /form.php
   request = $.ajax({
       url: "content/therapie.php",
       type: "post"
   });

   // Callback handler that will be called on success
   request.done(function (response, textStatus, jqXHR){
       // Log a message to the console
       console.log("Hooray, it worked!");
       document.getElementById("content").innerHTML=response;
   });

   // Callback handler that will be called on failure
   request.fail(function (jqXHR, textStatus, errorThrown){
       // Log the error to the console
       console.error(
           "The following error occurred: "+
           textStatus, errorThrown
       );
  })
})
})

////////////////////////////////////////////////////////
////////////////////// veranstaltungen /////////////////////////////
////////////////////////////////////////////////////////
$(document).ready(function(){
  var request;
  $("#veranstaltungen").on("click",function(event){
    event.preventDefault();

   // Abort any pending request
   if (request) {
       request.abort();
   }

 
   // Fire off the request to /form.php
   request = $.ajax({
       url: "content/veranstaltungen.php",
       type: "post"
   });

   // Callback handler that will be called on success
   request.done(function (response, textStatus, jqXHR){
       // Log a message to the console
       console.log("Hooray, it worked!");
       document.getElementById("content").innerHTML=response;
   });

   // Callback handler that will be called on failure
   request.fail(function (jqXHR, textStatus, errorThrown){
       // Log the error to the console
       console.error(
           "The following error occurred: "+
           textStatus, errorThrown
       );
  })
})
})