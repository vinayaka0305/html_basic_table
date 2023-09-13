var inputNodes = document.getElementsByTagName('input');
var labelNodes = document.getElementsByTagName('label');

for (var i = 0; i < inputNodes.length; i++) {
    inputNodes[i].addEventListener('click', onClick);
}

function onClick(event) {
    clearLabel()
    var input = event.target;
    var id = input.getAttribute('id');
    var labelNode = document.querySelector(`[for="${id}"]`);
    labelNode.style['background-color'] = '#ffcc00';
    var color = input.value;
    document.body.style['background-color'] = `#${color}`;
}

function clearLabel() {
    for (var i = 0; i < labelNodes.length; i++) {
        labelNodes[i].style['background-color'] = '#e6e6e6'
    }
}
