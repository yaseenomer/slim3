/**
 * Created by yaseen  on 31/03/17.
 *
 */


$(document).ready(function () {













    /*********************طلب معينات**************************/
    /*
     $("a").click(function () {
     $(this).fadeOut();
     $("#lll").removeClass("ss");
     $("#lll").each(function () {
     if ($(this).hasClass("ss")) {
     $("#a .col-lg-12 input").val("");
     }else {
     $("#a .col-lg-12 input, textArea").val("on");
     }
     
     });
     
     }); */

    /*
     $("a").click(function () {
     $(this).fadeOut();
     });
     
     /*
     $("#a_2").click(function () {
     $(this).fadeOut();
     });
     $("#a_3").click(function () {
     $(this).fadeOut();
     });
     
     $("#a_4").click(function () {
     $(this).fadeOut();
     });
     
     /*********************select2 ************************************/
    $("select").select2();







    /*$(".ono").each(function() {
     if($(this).hasClass("o"))
     {
     $("h1").css("color","#080"); 
     }else{
     $("h1").css("color","#008"); 
     }
     
     });
     //console.log(ss);
     /*
     if(ss)
     {
     $("h1").css("color","#080");
     }else{
     $("h1").css("color","#008");
     }
     */


    $('#example1').DataTable({
        "paging": true,
        "lengthChange": true,
        "searching": true,
        "ordering": true,
        "info": true,
        "autoWidth": true
    });




});


/******************************* vue.js ************************************/



new Vue({
    el: '#order_form, #ordera_receve',
    data: {
        ord_1: false,
        ord_2: false,
        ord_3: false,
        ord_4: false,
        ss_01: false,
        ss_02: false,
        ss_03: false,
        ss_04: false,
        ss_1: true,
        ss_2: true,
        ss_3: true,
        ss_4: true
    }
});

