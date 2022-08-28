function myFunction () {
    var x =Math.floor(Math.random()*256);
    var y =Math.floor(Math.random()*266);
    var Z =Math.floor(Math.random()*256);
    var bgcolor ="rgb("+ x +","+ y +","+ z +")"
    console.log(bgcolor);
    document.body.style.background=bgcolor;
}