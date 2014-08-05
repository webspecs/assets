/* global randomColor */

// we have a 500x500 square we'd like to fill in both directions

var skips = {
    "7,4":  true // centre tip of the W
,   "8,4": true // down to bottom left tip
,   "9,4": true
,   "9,3": true
,   "10,4": true
,   "10,3": true
,   "11,3": true
,   "8,5": true // down to bottom right tip
,   "9,5": true
,   "10,5": true
,   "10,6": true
,   "11,5": true
,   "9,2": true // back up to top left tip
,   "8,3": true
,   "8,2": true
,   "7,2": true
,   "7,1": true
,   "6,2": true
,   "6,1": true
,   "5,1": true
,   "9,6": true // back up to the top right tip
,   "8,6": true
,   "8,7": true
,   "7,6": true
,   "7,7": true
,   "6,7": true
,   "6,8": true
,   "5,7": true
};

var colours = randomColor({ luminosity: "light", count: 17 });

function fill (el, i) {
    // for debugging: just alternate colours
    // var colours = ["#f00", "#fc0"];
    // el.setAttribute("fill", colours[(i + j) % 2]);

    // all of them random, in customisable ways
    // el.setAttribute("fill", randomColor({ hue: "green", count: 1 }));

    // lines of random colours (ugly, looks like socks)
    // el.setAttribute("fill", colours[i]);
}

function dot (el, x, y) {
    var poly = document.createElementNS(el.namespaceURI, "polygon");
    poly.setAttribute("points", "5,0, 10,7.5, 5,15, 0,7.5");
    poly.setAttribute("fill", "#666");
    poly.setAttribute("transform", "translate(" + (x - 5) + "," + (y - 5) + ")");
    el.appendChild(poly);
}

function fillWithLosanges (el) {
    var poly = document.createElementNS(el.namespaceURI, "polygon");
    poly.setAttribute("points", "20,0, 40,30, 20,60, 0,30");
    poly.setAttribute("stroke-width", 2);
    poly.setAttribute("stroke", "#fff");
    for (var i = 0, n = 16; i < n; i++) {
        for (var j = 0, m = 10; j < m; j++) {
            if (skips[[i,j].join(",")]) continue;
            var clone = poly.cloneNode(true)
            ,   delta = (i % 2) ? 25 : 0
            ;
            if (j === m -1 && delta) continue;
            clone.setAttribute("transform", "translate(" + (j * 50 + delta) + ", " + (i * 30) + ")");
            fill(clone, i, j);
            el.appendChild(clone);
        }
    }
    dot(el, 95, 175);
    dot(el, 195, 275);
    dot(el, 245, 220);
    dot(el, 295, 275);
    dot(el, 395, 175);
}
fillWithLosanges(document.getElementById("big"));
fillWithLosanges(document.getElementById("med"));
fillWithLosanges(document.getElementById("sml"));
