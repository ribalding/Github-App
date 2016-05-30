var getRepos = require("./../js/github.js").getRepos;

$(document).ready(function(){
  $('#gitForm').submit(function(event){
    event.preventDefault();
    $('#repos').empty();
    var userName = $('#userName').val();
    $("#nameOutput").text(userName);
    getRepos(userName);
    $("#output").show();
  });
});
