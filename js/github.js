var apiKey = require('./../.env').apiKey;

exports.getRepos = function(userName){
  $.get('https://api.github.com/users/' + userName + '/repos?access_token=' + apiKey).then(function(response){
    console.log(response);
    for(var i=0; i < response.length; i++){
      $('#repos').append("<li><h4><a href='https://github.com/" + userName + "/" + response[i].name + "'>" + response[i].name + "</a></h4><h5>Description: " + response[i].description + "</h5><h6>Created On " + response[i].created_at + "</h6></li>");
    }
  }).fail(function(error){
    console.log(error.responseJSON.message);
  });
};
