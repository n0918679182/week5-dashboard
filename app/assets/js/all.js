$(document).ready(function () {
  $('#reply').click(function (e) { 
    e.preventDefault();
    $('#all-response').addClass('d-none');
    $('#response-content').removeClass('d-none');
    $('#response-ctrl').addClass('d-none');
  });
  $('#reply-send').click(function (e) { 
    e.preventDefault();
    $('#all-response').removeClass('d-none');
    $('#response-content').addClass('d-none');
    $('#response-ctrl').removeClass('d-none');
  });
});