function init(){
  //add your javascrip between these two lines of code
  
  var button = document.getElementById('entrybutton');
  var input = document.getElementById('entryinput');
  var output = document.getElementById('textoutput');

  button.addEventListener('click', function() {
    alert("Jesus Garcia: " + input.value);
    output.textContent = input.value;
  });
  
}
window.addEventListener('load', init);