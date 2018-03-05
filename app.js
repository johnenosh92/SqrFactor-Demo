 $( document ).ready(function() {//CHECKS AND EXECUTES THE BELOW WHEN DOM IS READY
 		$("#searchPage,#ans1,.FAQinside2,#ans2,.FAQinside22").hide();//	TO HIDE SEARCH BAR IN TOP MENU AND 2 ARTICLE ANSWERS
 		//CLICK FUNCTION TO TOGGLE SEARCH WHEN SEARCH ICON IS CLICKED IN TOP MENU
 		$("#searchIcon").click(function(){
 				$("#searchPage").toggle("slow");
 		});
 		//CLICK FUNCTION TO SLIDE ARTICLE2 CONTENT
 		$("#ques1").click(function(){
 				$("#ans1,.FAQinside2").slideToggle("slow");
 		});
 		//CLICK FUNCTION TO SLIDE ARTICLE3 CONTENT
 		$("#ques2").click(function(){
 				$("#ans2,.FAQinside22").slideToggle("slow");
 		});

 });//END OF DOCUMENT READY