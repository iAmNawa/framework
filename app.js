var g = G$('Paul', 'Borawski')
g.greet().setLang('es').greet(true).log();

$('#login').click(function() {

   var loginGrtr = G$('Paul', 'Borawski');
   $('#logindiv').hide();

   loginGrtr.setLang($('#lang').val()).HTMLGreeting('#greeting', true).log();

});
