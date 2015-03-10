var debugData;
$('document').ready( function() {
  $('#spinner').css('left', $('form').css('width') / 2 + 64);
  $('#spinner').css('top', $('form').css('height') / 2 + 39);

  var choices = [];
  
  $('form').submit( function(event) {
    $('#spinner').css('visibility', 'visible');
    event.preventDefault();
    choices = [];

    $('form input').each( function() {      
      if (this.checked) {
        choices.push(this.id);
      }
    }); // each input

    if (choices.length > 1) {
      getRandomName(choices);
    }
  }); // form.submit

  var getRandomName = function(choices) {
    var randomJs = new RandomJs();
    var result = randomJs
      .apikey('4ab06f95-751f-45ef-a136-29d093323fa3')
      .method('generateIntegers')
      .params({n:1,min:1,max:choices.length})
      .post(function(xhr, stream, body) {
        console.log(choices[body.result.random.data[0]-1]);
        alert('And the winner is...\n'+ choices[body.result.random.data[0]-1]);
        $('#spinner').css('visibility', 'hidden')
       $('form input').each( function() {      
         if (this.checked) {
           $(this).click();
          }
        });
      });
  };
    

  $('#willvgarret').click( function() {
    $('#spinner').css('visibility', 'visible')
    choices = ["William", "Garret"];
    getRandomName(choices);
  });

}); // document.ready
//$( elem ).prop( "checked" )
