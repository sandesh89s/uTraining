$('#activityAddBtn').click(function(){
	var h= "<img alt=\"No Image\" src=\"icons/activity.png\" height=\"80\" width=\"80\">";
	$('#activity_holder').append(h);
	$('#myModal').modal('hide');
});

$('select').selectmenu();

$(".dropdown-menu li a").click(function(){
	  $(this).parents(".dropdown").find('.btn').html($(this).text() + ' <span class="caret"></span>');
	  $(this).parents(".dropdown").find('.btn').val($(this).data('value'));
	});

$.widget( "custom.iconselectmenu", $.ui.selectmenu, {
      _renderItem: function( ul, item ) {
        var li = $( "<li>", { text: item.label } );
 
        if ( item.disabled ) {
          li.addClass( "ui-state-disabled" );
        }
 
        $( "<span>", {
          style: item.element.attr( "data-style" ),
          "class": "ui-icon " + item.element.attr( "data-class" )
        })
          .appendTo( li );
 
        return li.appendTo( ul );
      }
    });

$( "#filesB" )
      .iconselectmenu()
      .iconselectmenu( "menuWidget" )
        .addClass( "ui-menu-icons customicons" );



$('.myCustomClass').css('marginLeft','200px');


$('.myCustomClass').css('fontSize','100px');

$('#existing_image').draggable({
	 revert : function(event, ui) {
		 console.log(event);
         $(this).data("uiDraggable").originalPosition = {
             top : 0,
             left : 0
         };
         return !event;
     }
});

$("#uDownLogo").droppable({
    drop: function( event, ui ) {
    	window.location = "http://localhost:8080/TrainingBootstrapHome/uDown.html";
    }
  });