var debugData;
$('document').ready( function() {
  choices = [];
  
  $('form').submit( function(event) {
    event.preventDefault();
    choices = [];

    $('form input').each( function() {      
      if (this.checked) {
        choices.push(this.id);
      }
    }); // each input
    var randomJs = new RandomJs();
    var result = randomJs
      .apikey('4ab06f95-751f-45ef-a136-29d093323fa3')
      .method('generateIntegers')
      .params({n:1,min:1,max:choices.length})
      .post(function(xhr, stream, body) {
        
        console.log(choices[body.result.random.data[0]-1]);
        $('#result').html('And the winner is...' + choices[body.result.random.data[0]-1]);
      });
    console.log(result);
  }); // form.submit
}); // document.ready
//$( elem ).prop( "checked" )
