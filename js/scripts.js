/* 
* Skeleton V1.0.2
* Copyright 2011, Dave Gamache
* www.getskeleton.com
* Free to use under the MIT license.
* http://www.opensource.org/licenses/mit-license.php
* 5/20/2011
*/  
  

$(document).ready(function() {
  
  /* Polyfills for CSS type selectors
  ================================================== */
  // $('#sidebar .node:only-child').addClass('onlynode');
  $('#sidebar .node:last-child').not('#sidebar .node:first-child').addClass('lastnode');
  $('#sidebar .ratings-list li:last-child').addClass('last');
  $('#sidebar .badge-list li:nth-child(5n)').addClass('last');
  $('#sidebar .avatar-grid li:nth-child(5n)').addClass('last');
  $('.ratings span:last-child').addClass('last');
  $('#expert-quotes blockquote:last-child').addClass('last');
  
  /* Nav Dropdowns on hover
  ================================================== */
  $('#primary-nav li').hover(
    function() { $(this).addClass('hover').find('ul.dropdown').show(); },
    function() { $(this).removeClass('hover').find('ul.dropdown').hide(); }
  );
  
  /* Self-labeled form fields
  ================================================== */
  $('input[title], textarea[title]').each(function() {
    if($(this).val() === '') {
      $(this).val($(this).attr('title'));  
    }

    $(this).focus(function() {
      if($(this).val() == $(this).attr('title')) {
        $(this).val('').addClass('focused');  
      }
    }).blur(function() {
      if($(this).val() === '') {
        $(this).val($(this).attr('title')).removeClass('focused');  
      }
    });
  });
  
  /* Tipsy Tooltips
  ================================================== */
  $('[rel=tipsy]').tipsy({gravity: 'w', opacity: 1});
  $('[rel=tipsy-top]').tipsy({gravity: 's', opacity: 1});
  $('[rel=tipsy-top-html]').tipsy({gravity: 's', html: 'true', opacity: 1});
  
  /* Tabs Activation
  ================================================== */
  var tabs = $('ul.tabs');

  tabs.each(function(i) {

    //Get all tabs
    var tab = $(this).find('> li > a');
    tab.click(function(e) {

      //Get Location of tab's content
      var contentLocation = $(this).attr('href');

      //Let go if not a hashed one
      if(contentLocation.charAt(0)=="#") {

        e.preventDefault();

        //Make Tab Active
        tab.removeClass('active');
        $(this).addClass('active');

        //Show Tab Content & add active class
        $(contentLocation).show().addClass('active').siblings().hide().removeClass('active');

      }
    });
  });
  
  /* Block Messages - close
  ================================================== */
  $('.block-message .close').click(function() {
    $(this).parent().fadeOut();
    return false;
  });
  
  /* Brand Profile - show/hide categories
  ================================================== */
  $('.group .singles').hide();
  $('.group h3').click(function() {
    // $(this).toggleClass('selected').parent().find('.singles').slideToggle();
    $(this).toggleClass('selected').parent().find('.singles').animate({ 'height': 'toggle', 'opacity': 'toggle' }, 500);
  });
  
  /* Flavor Profile Chart on hover
  ================================================== */
  $('#chart li').hover(
    function() { $(this).addClass('hover') },
    function() { $(this).removeClass('hover') }
  );
  
  /* Flavor Profile Chart animation
  ================================================== */
  $('#chart li').each(function() {
    $(this)
      .data('origHeight', $(this).height())
      .height(0)
      .animate({
        height: $(this).data('origHeight')
      }, 1200);
  });
  
  /* Like Toggle
  ================================================== */
  $('#like-toggle a').toggle(function (){
    $(this).addClass('liked')
    $(this).text('You Like!')
    return false;
  }, function(){
    $(this).removeClass('liked')
    $(this).text('Like?')
    return false;
  });
  
  /* Bar Profile - show/hide fans
  ================================================== */
  $('#likes a').click(function() {
    $('#fans').animate({ 'height': 'toggle', 'opacity': 'toggle' }, 500);
    return false;
  });
  
  $('#hide-fans').click(function() {
    $('#fans').animate({ 'height': 'toggle', 'opacity': 'toggle' }, 500);
    return false;
  });
  
  /* Gallery Video Play on hover
  ================================================== */
  $('#gallery .video-play').hover(
    function() { $(this).addClass('hover') },
    function() { $(this).removeClass('hover') }
  );
  
  /* Rating Form Sliders
  ================================================== */
  var $callout = $('<div class="callout" />').hide();    
  
  $('.slider').each(function() {
    // read initial values from the hidden input field
    var value = parseInt( $(this).closest('.field').find('input:hidden:first').val(), 10 );
    $(this).slider({
      orientation: 'horizontal',
      min: 0,
      max: 100,
      value: value,
      range: "min",
      animate: true,
      slide: function(event, ui){
        $(this).find('.callout').fadeIn();
        $(this).find('.callout').text(ui.value);  
      },
      stop: function(event, ui){
        // $(this).find('.callout').fadeOut();
      },
      change: function(event, ui){
        $(this).closest('.field').find("input:hidden:first").val(ui.value);
      }
    });
  });
  
  $('.ui-slider-handle').append($callout);

  /* Form Checkboxes and Radios
  ================================================== */
  $('.input-wrap :checkbox').click(function() {
    if ($(this).attr('checked')) {
      $(this).parent().parent().addClass('active');
    } else {
      $(this).parent().parent().removeClass('active');
    }
  });
  
  $('.input-wrap :radio').click(function() {
    if ($(this).attr('checked')) {
      $(this).parent().parent().addClass('active');
      $(this).parent().parent().siblings().removeClass('active');
    } else {
      $(this).parent().parent().removeClass('active');
    }
  });
  
  $('.check .input-wrap label').click(function() {
    if ($(this).parent().hasClass('active')) {
      $(this).parent().removeClass('active');
      $(this).parent().find('span input').removeAttr('checked');
    } else {
      $(this).parent().addClass('active');
      $(this).parent().find('span input').attr('checked', true);
    }
  });
  
});
