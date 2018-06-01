$(document).ready(function() {
    
    
    var element = document.getElementById('two');
    element.addEventListener('mouseover', function() {
     $('#hr').addClass( "two" );
    });
    element.addEventListener('mouseout', function() {
     $('#hr').removeClass( "two" );
    });
    
    var element = document.getElementById('three');
    element.addEventListener('mouseover', function() {
     $('#hr').addClass( "three" );
    });
    element.addEventListener('mouseout', function() {
     $('#hr').removeClass( "three" );
    });
    
    var element = document.getElementById('four');
    element.addEventListener('mouseover', function() {
     $('#hr').addClass( "four" );
    });
    element.addEventListener('mouseout', function() {
     $('#hr').removeClass( "four" );
    });
    
    var element = document.getElementById('five');
    element.addEventListener('mouseover', function() {
     $('#hr').addClass( "five" );
    });
    element.addEventListener('mouseout', function() {
     $('#hr').removeClass( "five" );
    });
    
    


});
