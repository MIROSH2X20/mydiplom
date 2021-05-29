$('.js-tab-trigger').click(function() {
     // клик! 
})
$('.js-tab-trigger').click(function() {
   var id = $(this).attr('data-tab'), // 1
       content = $('.js-tab-content[data-tab="'+ id +'"]'); // 2
});

$('.js-tab-trigger').click(function() {
   var id = $(this).attr('data-tab'),
       content = $('.js-tab-content[data-tab="'+ id +'"]');
   
   $('.js-tab-trigger.active').removeClass('active'); // 1
   $(this).addClass('active'); // 2
   
   $('.js-tab-content.active').removeClass('active'); // 3
   content.addClass('active'); // 4
});



$('.js-tab-trigger1').click(function() {
     // клик! 
})
$('.js-tab-trigger1').click(function() {
   var id = $(this).attr('data-tab'), // 1
       content = $('.js-tab-content1[data-tab="'+ id +'"]'); // 2
});

$('.js-tab-trigger1').click(function() {
   var id = $(this).attr('data-tab'),
       content = $('.js-tab-content1[data-tab="'+ id +'"]');
   
   $('.js-tab-trigger1.active').removeClass('active'); // 1
   $(this).addClass('active'); // 2
   
   $('.js-tab-content1.active').removeClass('active'); // 3
   content.addClass('active'); // 4
});