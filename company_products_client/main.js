$(document).ready(function(){

$.ajax({
  url: "http://localhost:3000/companies.json",
  method: "GET",
  dataType: 'json',
  error: function(){
    alert('Please reload.');
  },
  success: function(data) {
    var companies = data.companies
    $("#companies").html("");
    var template = $('#company-listing').html();
    for(var i = 0; i < companies.length; ++i) {
      var renderedHtml = Mustache.render(template, companies[i]);
      $("#companies").append(renderedHtml);
      }
    }
  });
});
