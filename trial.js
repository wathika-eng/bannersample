window.onload = function(){
    var label = document.getElementsByClassName('close');
    for (var i = 0; i<label.length; i++) {
      label[i].onclick = function () {
      var el = (this.parentNode);
      el.parentNode.removeChild(el);
      };
    }
    };