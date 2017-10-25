/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


var y1 = document.getElementById('or_new').innerHTML;
var y2 = document.getElementById('or_conf').innerHTML;
var y3 = document.getElementById('or_w_rec').innerHTML;
var y4 = document.getElementById('or_rec').innerHTML;
var y5 = document.getElementById('or_cancle').innerHTML;

var ctxt = document.getElementById("myChart3");
var myChart = new Chart(ctxt, {

    type: 'line',

    // The data for our dataset
    data: {
        labels: ["الجديدة", "المصدقة", "قيد التسليم", "مسلمة", "مرفوضة"],
        datasets: [{
                label: "عدد الطلبات  ",
                fill: true,
                backgroundColor: 'rgba(230, 107, 152, 0.46)',
                borderColor: '#5ad6f4',
                data: [y1, y2, y3, y4, y5]
            }
        ]
    },

    // Configuration options go here
    options: {}


});

var ctxr = document.getElementById("myChart4");
var myChart = new Chart(ctxr, {

    type: 'doughnut',

    // The data for our dataset
    data: {
        labels: ["الجديدة", "المصدقة", "قيد التسليم", "مسلمة", "مرفوضة"],
        datasets: [{
                label: "عدد البلاغات  ",

                backgroundColor: ['#ff851b', '#0073b7', '#00c0ef', '#00a65a', '#dd4b39'],

               data: [y1, y2, y3, y4, y5]
            }

        ]
    },

    // Configuration options go here
    options: {}


});