$(document).ready(function () {
    var clockTime = new Date();
    var hour = clockTime.getHours();
    var min = clockTime.getMinutes();
    var sec = clockTime.getSeconds();

    if (hour >= 13) { hour = hour - 12 }

    var hourdeg;
    var mindeg;
    var secdeg;

    hourdeg = (hour * 3600 + min * 60 + sec) / (12 * 10);
    mindeg = (min * 60 + sec) / 10;
    secdeg =  sec * 6;

    $(".hour").css({ "-webkit - transform": "rotate(" + hourdeg + "deg)", "-moz - transform": "rotate(" + hourdeg + "deg)", "-o - transform": "rotate(" + hourdeg + "deg)", "-ms - transform": "rotate(" + hourdeg + "deg)", "transform": "rotate(" + hourdeg + "deg)" });
    $(".minute").css({ "-webkit - transform": "rotate(" + mindeg + "deg)", "-moz - transform": "rotate(" + mindeg + "deg)", "-o - transform": "rotate(" + mindeg + "deg)", "-ms - transform": "rotate(" + mindeg + "deg)", "transform": "rotate(" + mindeg + "deg)" });
    $(".second").css({ "-webkit - transform": "rotate(" + secdeg + "deg)", "-moz - transform": "rotate(" + secdeg + "deg)", "-o - transform": "rotate(" + secdeg + "deg)", "-ms - transform": "rotate(" + secdeg + "deg)", "transform": "rotate(" + secdeg + "deg)" });

});


