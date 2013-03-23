// JavaScript Document
function setSizeUp(bUp,bDown,box_n,s1,s2,s3){
     $(box_n).css({height:'400px',width:'800px',});
     //$(s1).css({height:'100px',width:'100px',});
     //$(s2).css({height:'100px',width:'100px',});
     //$(s3).css({height:'100px',width:'100px',});
	 $(bUp).hide(700);
	 $(bDown).show(700);
	 $(s1).hide(600);
	 $(s2).hide(600);
	 $(s3).hide(600);
}
function setSizeDown(bUp,bDown,box_n,s1,s2,s3){
     $(box_n).css({height:'180px',width:'400px'});
	 //$(s1).css({height:'180px',width:'400px',});
     //$(s2).css({height:'180px',width:'400px',});
     //$(s3).css({height:'180px',width:'400px',});
	 $(bDown).hide(700);
	 $(bUp).show(700);
	 $(s1).show(1200);
	 $(s2).show(1200);
	 $(s3).show(1200);
}
 $(document).ready(function() {

      $("#hide").click(function(){
         $("#slidezone").hide( "blind", 
                     {direction: "vertical"}, 1200 );
					 $("#show").show('slow');
					  $("#hide").hide('slow');
      });

      $("#show").click(function(){
         $("#slidezone").show( "blind", 
                      {direction: "vertical"}, 1200 );
					  $("#hide").show('slow');
					  $("#show").hide('slow');
      });

   });