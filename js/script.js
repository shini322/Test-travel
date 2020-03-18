$(".nav-toggle").click(function() {
  $(this).toggleClass("open"); 
  
  $("body").toggleClass("scroll_no");
  if ($('.sub').hasClass('z-index')) {
    $(".sub").css({
      zIndex:'-1',
      filter: 'opacity(0%)',
    });
  } else {
    $(".sub").css({
      zIndex:'3',
      filter: 'opacity(30%)',
    }); 
  }
    $('.sub').toggleClass('z-index');
    
  $(".humbruger_menu").slideToggle();
  
});

$( 'html' ).click(function() {  
  if($('#ui-datepicker-div').css('display') == "none"){
    $('.humbruger_menu #datepicker').css('border-radius','29.5px');
  } else{
    $('.humbruger_menu #datepicker').css('border-radius','29.5px 29.5px 0 0');
    $('.humbruger_menu label::after').css('transform','rotate(180deg)');
    $('.humbruger_menu label').after().css('transform','rotate(180deg)');
  }
});



(function () {
  var toggle = document.querySelector('.nav-toggle');
  
  toggle.addEventListener('click', function(e) {
    this.classList.toggle('opened');
  });
})();

$(document).ready(function() {
  $('#country_s').niceSelect();  
  $('#travel_s').niceSelect();  	
	$(".list").niceScroll();
	$('.xyz').on('click',function(){		
		event();
	});
});



$("#datepicker").datepicker({
  numberOfMonths: 1,
  onSelect: function( selectedDate ) {
      if(!$(this).data().datepicker.first){
          $(this).data().datepicker.inline = true
          $(this).data().datepicker.first = selectedDate;
      }else{
          if(selectedDate > $(this).data().datepicker.first){
              $(this).val($(this).data().datepicker.first+" - "+selectedDate);
          }else{
              $(this).val(selectedDate+" - "+$(this).data().datepicker.first);
          }
          $(this).data().datepicker.inline = false;
      }
  },
  onClose:function(){
      delete $(this).data().datepicker.first;
      $(this).data().datepicker.inline = false;
  }
})
 

var dateToday = new Date(); 
    $.datepicker.regional['ru'] = {
                    closeText: 'Закрыть',
                    prevText: 'Пред',
                    nextText: 'След',
                    currentText: 'Сегодня',
                    monthNames: ['Январь','Февраль','Март','Апрель','Май','Июнь',
                    'Июль','Август','Сентябрь','Октябрь','Ноябрь','Декабрь'],
                    monthNamesShort: ['Янв','Фев','Мар','Апр','Май','Июн',
                    'Июл','Авг','Сен','Окт','Ноя','Дек'],
                    dayNames: ['воскресенье','понедельник','вторник','среда','четверг','пятница','суббота'],
                    dayNamesShort: ['вск','пнд','втр','срд','чтв','птн','сбт'],
                    dayNamesMin: ['Вс','Пн','Вт','Ср','Чт','Пт','Сб'],
                    weekHeader: 'Нед',
                    dateFormat: 'dd.mm.yy',
                    firstDay: 1,
                    isRTL: false,
                    showMonthAfterYear: false,
                    yearSuffix: ''};
            $.datepicker.setDefaults($.datepicker.regional['ru']);  

            $('#ps_second_input_from').datepicker({
                changeMonth: true,
                changeYear: true,
            maxDate: dateToday,
            onSelect: function( selectedDate ) {
                $( "#ps_second_input_to" ).datepicker( "option", "minDate", selectedDate );
            },
                });


$(document).ready(function(){
  $('#request').validate({
    rules:{
       name:{
         required: true,
         minlength: 2,         
       },
       place:{
         required: true,
         minlength: 2,         
       },
       personal:{
        required: true,         
      },
    },
    messages:{
      name:{
        required: "Укажите Имя", 
        minlength: "Введите не менее 2-х символов в поле 'Имя'"       
    },
      place:{
      required: "Укажите континет, страну или город", 
      minlength: "Введите не менее 2-х символов "     
      },
      personal:{
        required: "",            
        },
    },    
 });

});

$('.request .send button').click(function(){

  $('#request').validate({
    rules:{      
       personal:{
        required: true,         
      },
    },
    messages:{      
      personal:{
        required: "123",            
        },
    },    
 });

});
