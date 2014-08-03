/* global randomColor */

// we have a 500x500 square we'd like to fill in both directions

var skips = {
    "9,4":  true // centre tip of the W
,   "10,4": true // down to bottom left tip
,   "11,4": true
,   "11,3": true
,   "12,4": true
,   "12,3": true
,   "13,3": true
,   "10,5": true // down to bottom right tip
,   "11,5": true
,   "12,5": true
,   "12,6": true
,   "13,5": true
,   "11,2": true // back up to top left tip
,   "10,3": true
,   "10,2": true
,   "9,2": true
,   "9,1": true
,   "8,2": true
,   "8,1": true
,   "7,1": true
,   "11,6": true // back up to the top right tip
,   "10,6": true
,   "10,7": true
,   "9,6": true
,   "9,7": true
,   "8,7": true
,   "8,8": true
,   "7,7": true
};

function fill (el) {
    // var colours = ["#f00", "#fc0"];
    // el.setAttribute("fill", colours[(i + j) % 2]);
    el.setAttribute("fill", randomColor({ hue: "green", count: 1 }));
}

function fillWithLosanges (el) {
    var poly = document.createElementNS(el.namespaceURI, "polygon");
    poly.setAttribute("points", "20,0, 40,30, 20,60, 0,30, z");
    poly.setAttribute("stroke-width", 2);
    poly.setAttribute("stroke", "#fff");
    for (var i = 0, n = 18; i < n; i++) {
        for (var j = 0, m = 9; j < m; j++) {
            if (skips[[i,j].join(",")]) continue;
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
