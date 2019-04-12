
$(".phones .wrapper .tab").click(function() {
	$(".phones .wrapper .tab").removeClass("active").eq($(this).index()).addClass("active");
	$(".phones .tab_item").hide().eq($(this).index()).fadeIn()
}).eq(0).addClass("active");

var course = 0;
   $.ajax({
      type: 'get',
      url: 'https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange',
      dataType: 'xml',
      success: function(response) {
           $(response).find("currency").each(function(i,elem) {
              if($(elem).find('r030').text() == '156') { 
                 course = +$(elem).find('rate').text();
             //    alert(course);
              }
        })
     }
});
$('input').on('keyup',function(){
    var value1, value3, value4;
    value1 = parseFloat($('#val1').val()).toFixed(2);;
   // course = 3.8;
    value3 = parseFloat($('#val3').val()).toFixed(2);;
   
    //с гривен в юани
        if(value3 <= 799){
            $('#rezultat2').val((value3 / course).toFixed(2));
        }
        if(value3 >= 800){
            $('#rezultat2').val(((value3 - 124) / course).toFixed(2));
        }
        if(value3 >= 1600){
            $('#rezultat2').val(((value3 - 204) / course).toFixed(2));
        }
        if(value3 >= 4000){
			$('#rezultat2').val(((value3 - 292) / course).toFixed(2));
		 }
		 if(value3 >= 12000){
			$('#rezultat2').val(((value3 - 620) / course).toFixed(2));
		 }
		 if(value3 >= 20000){
			$('#rezultat2').val(((value3 - 828) / course).toFixed(2));
		 }
		 if(value3 >= 28000){
			$('#rezultat2').val(((value3 - 828) / course).toFixed(2));
		 }
		 if(value3 >= 40000){
			$('#rezultat2').val(((value3 - 1848) / course).toFixed(2));
		 }
		 if(value3 >= 48000){
			$('#rezultat2').val(((value3 - 2660) / course).toFixed(2));
		 }
		 if(value3 >= 60000){
			$('#rezultat2').val(((value3 - 3072) / course).toFixed(2));
		 }
		 if(value3 >= 72000){
			$('#rezultat2').val(((value3 - 3480) / course).toFixed(2));
		 }
		 if(value3 >= 80000){
			$('#rezultat2').val(((value3 - 4000) / course).toFixed(2));
		 }
		 if(value3 >= 120000){
		$('#rezultat2').val('обмен до 120000');
		}
          //с юаней в гривны
        if(value1 <= 199){
            $('#rezultat').val((value1 * course).toFixed(2));
        }
        if(value1 >= 200){
            $('#rezultat').val(((value1 - 31) * course).toFixed(2));
        }
        if(value1 >= 500){
            $('#rezultat').val(((value1 - 51) * course).toFixed(2));
        }
        if(value1 >= 1000){
			$('#rezultat').val(((value1 - 73) * course).toFixed(2));
		}
		if(value1 >= 3000){
			$('#rezultat').val(((value1 - 155) * course).toFixed(2));
		}
		if(value1 >= 5000){
			$('#rezultat').val(((value1 - 207) * course).toFixed(2));
		 }
		if(value1 >= 7000){
			$('#rezultat').val(((value1 - 361) * course).toFixed(2));
		}
		if(value1 >= 10000){
			$('#rezultat').val(((value1 - 462) * course).toFixed(2));
		 }
		if(value1 > 12000){
		$('#rezultat').val(((value1 - 665) * course).toFixed(2));
		}
		if(value1 >= 15000){
		$('#rezultat').val(((value1 - 768) * course).toFixed(2));
		}
		if(value1 >= 18000){
		$('#rezultat').val(((value1 - 870) * course).toFixed(2));
		}
		if(value1 > 30000){
		$('#rezultat').val('обмен до 30000');
		}
    });

	
<?php bloginfo("template_directoey"); ?>/




