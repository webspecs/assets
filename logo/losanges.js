/* global randomColor */

// we have a 500x500 square we'd like to fill in both directions

function fill (el) {
    // var colours = ["#f00", "#fc0"];
    // el.setAttribute("fill", colours[(i + j) % 2]);
    el.setAttribute("fill", randomColor({ hue: "green", count: 1 }));
}

function fillWithLosanges (el) {
    var poly = document.createElementNS(el.namespaceURI, "polygon");
    poly.setAttribute("points", "25,0, 50,25, 25,50, 0,25, z");
    for (var i = 0, n = 19; i < n; i++) {
        for (var j = 0, m = 9; j < m; j++) {
            var clone = poly.cloneNode(true)
            ,   delta = (i % 2) ? 25 : 0
            ;
            clone.setAttribute("transform", "translate(" + (j * 50 + delta) + ", " + (i * 25) + ")");
            fill(clone, i, j);
            el.appendChild(clone);
        }
    }
}
fillWithLosanges(document.getElementById("big"));
