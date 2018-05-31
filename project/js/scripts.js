/* it allows you to push the button and directing to the id and .prepedn the message */
$(document).ready(function(){
$("button#hello").click(function(){
$("ul#user").prepend("<li>hello</li>");
$("ul#webpage").prepend("<li>Well hello there</li>");
/* this is so that mutiple alert() only open once */
$("ul#user").children("li").first().click(function() {
  alert('hi');
});
$("ul#webpage").children("li").first().click(function() {
  alert('hi');
});

/* it allows you to push the button and directing to the id and .prepedn the message */
$("button#goodbye").click(function(){
  $("ul#user").prepend("<li>bye</li>");
  $("ul#webpage").prepend("<li>Have a good day</li>");
  /* this is so that mutiple alert() only open once */
  $("ul#user").children("li").first().click(function() {
    alert('hi');
  });
  $("ul#webpage").children("li").first().click(function() {
    alert('hi');
  });

/* it allows you to push the button and directing to the id and .prepedn the message */
$("button#stop").click(function(){
$("ul#user").prepend("<li>sho</li>");
$("ul#webpage").prepend("<li>to you</li>");
/* this is so that mutiple alert() only open once */
$("ul#user").children("li").first().click(function() {
  alert('hi');
});
$("ul#webpage").children("li").first().click(function() {
  alert('hi');
});
