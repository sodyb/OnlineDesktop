    var sq5 = Math.sqrt(5) + 1;
    var phi = sq5 / 2;



    //        function loading() {
    //        }
    // Variables for current position
    console.log("[" + "loading" + "]");
    var x;
    var y;
    var move = true;


    function handleMouse(e) {


        // Verify that x and y already have some value
        //        if (x && y && move === true {
        if (move === true) {

            var ymove = (e.clientY - y) + e.movementY;

            var xmove = (e.clientX - x) + e.movementX;

            // Scroll window by difference between current and previous positions
            window.scrollBy((xmove / phi), (ymove / phi)
                //        window.scrollBy(xmove, ymove

            )
        }
        // Store current position

//        console.log((window.innerWidth / 2) - e.clientX);

//        console.log(e.clientX - window.innerWidth);



        x = e.clientX;
        y = e.clientY;
        //        var cx = 0;
        //        var cy = 0;
        //
        //        var pi5 = Math.PI * 5;
        //        var phi2 = Math.sqrt(pi5 / 6);
        //        //        var fhi = ((1 + sqrt(5)) / 2));
        //        //        5Pi = 6phi^2
    }
    document.onmousemove = handleMouse;

//click disables scrolling

    document.onclick = function () {
        move = !move;
        console.log(move);
    }


    //--------- sidebar scroll

//var goLeft = false;
//var goRight = false;
//var left10 = function () {
//    window.scrollBy(-100, 0);
//    console.log("working");
//}
//
//    function leftScroll() {
//        goLeft = true;
//        console.log(goLeft);
//
//    };
//
//    function leftScrollStop() {
//        goLeft = false;
//        console.log(goLeft);
//    };
//
//    function rightScroll() {
//        console.log("right");
//    };
//
//    function rightScrollStop() {
//        console.log("right stop");
//    };
//
//
//
//var right10 = setTimeout ( function () {
//    window.scrollBy(2, 0);
//    console.log("working right");
//}, phi;





    //left.addEventListener("") = leftScroll;
    console.log("no prob! Good job! done!");



