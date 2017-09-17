$(document).ready(function() {
  //search Input;
  $('#searchbtn').click(function(e){
    e.preventDefault();
    var search = $('#searchinput').val();
    if (search !== ''){
      //grab the article's id where the label matches the searchinput
      let artId = $('article label:contains(' + search +')');

      if (artId.length === 0){
        alert ("0 result found.");
      }
      else{
        artId = artId.parent().attr('id');
      }
      //debugger;
      $('article').hide();
      $('article').filter('#' + artId).show();
    };
  });

  //add Inventory;
    $('#add').click(function(){
      //check for checked radio btn
      var model;
      var radioId;
      $('input[type=radio]:checked').each(function(){
        radioId = $(this).attr('id');
        model = $('label[for="'+ radioId +'"]').text();
      });
      var year = $('#year').val();
      var miles = $('#miles').val();
      var price = $('#price').val();
      $('#myModal').modal('hide');

      //dynamically fill the Inventory table
      $('#row2').append('<div class="col-sm-6 col-md-3"><article id="m' + radioId
      + '" class="thumbnail"><a href="#" ><img id="img_mx2"src="images/msred.jpg"></a><label for="img_mx2">'+ model
      + '</label><br/><span>'+ year +'</span><br/><span>'+ miles +' miles</span><br/><span id="price">$'+ price
      + '</span><button type="button" onclick="calcTax()" class="btn btn-link taxbtn">tax</button><span id="tax"></span></article></div>');
    });

   $('.taxbtn').click(function(e){
     e.preventDefault();
     let price = $(e.target).siblings('.price').text();
     price = price.replace(/\,/g,'');
     let tax = parseFloat(price.substring(1)) *.08;
     $(e.target).siblings('.tax').text('$' + tax).css({"color": "green"});
  })
});
//calculate tax for the newly added item
function calcTax(){
   let price = $('#price').text();
   price = price.replace(/\,/g,'');
   let tax = parseFloat(price.substring(1)) *.08;
   $('#tax').text('$' + tax).css({"color": "green"});
}
