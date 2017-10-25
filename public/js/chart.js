/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


var x1 = document.getElementById('nolap').innerHTML;
var x2 = document.getElementById('nosignal').innerHTML;
var x3 = document.getElementById('noscaner').innerHTML;
var x4 = document.getElementById('noscreen').innerHTML;
var x5 = document.getElementById('noprint').innerHTML;


var ctx = document.getElementById("myChart");
var myChart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'line',

    // The data for our dataset
    data: {
        labels: [" الحاسوب", "الشبكة", "ماسح ضوئي", "الشاشات", "الطابعات"],
        datasets: [{
                label: "عدد البلاغات  ",
                fill: true,
                backgroundColor: 'rgba(90, 214, 244, 0.3 )',
                borderColor: '#00a7d0',
                data: [x1, x2, x3, x4, x5]
            }
        ]
    },

    // Configuration options go here
    options: {}


});

var ctxr = document.getElementById("myChart2");
var myChart = new Chart(ctxr, {

    type: 'doughnut',

    // The data for our dataset
    data: {
        labels: [" الحاسوب", "الشبكة", "ماسح ضوئي", "الشاشات", "الطابعات"],
        datasets: [{
                label: "عدد البلاغات  ",

                backgroundColor: ['#605ca8', '#f012be', '#00a65a', '#ff851b', '#00c0ef'],

                data: [x1, x2, x3, x4, x5]
            }

        ]
    },

    // Configuration options go here
    options: {}


});

