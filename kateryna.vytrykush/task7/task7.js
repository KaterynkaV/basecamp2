
document.onmousedown = function(e) {

  var dragElement = e.target;

  if (!dragElement.classList.contains('draggable')) return;

  var coords, shiftX, shiftY;

  startDrag(e.clientX, e.clientY); 

  document.onmousemove = function(e) {
    moveAt(e.clientX, e.clientY);
  };

  dragElement.onmouseup = function(e) {
    document.onmousemove = null;
    dragElement.onmouseup = null;
  };


  function startDrag(clientX, clientY) {

    shiftX = clientX - dragElement.getBoundingClientRect().left;
    shiftY = clientY - dragElement.getBoundingClientRect().top;
    document.body.appendChild(dragElement);
  };

  function moveAt(clientX, clientY) {
  
    var newX = clientX - shiftX;
    var newY = clientY - shiftY;

    if (newY < 0) newY = 0;
    if (newX < 0) newX = 0;
    if (newX > document.documentElement.clientWidth - dragElement.offsetHeight) {
        newX = document.documentElement.clientWidth - dragElement.offsetHeight;
    }

    dragElement.style.left = newX + 'px';
    dragElement.style.top = newY + 'px';
  }
  return false;
}

