function applyColor(){
    var wallId = document.getElementById('wall_id').value;
    var wallColor = document.getElementById('wall_color').value;
    var wall = document.getElementById(wallId);
    wall.style['background-color'] = wallColor;
}

function resetColor(){
    for(var i=1;i<=10;i++){
        var wall = document.getElementById(i);
        wall.style['background-color'] = 'transparent';
    }
}