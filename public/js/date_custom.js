/**
 * Created by yaseen on 8/22/2017.
 */
$(function () {

    $('#inputdate3, ' +
        '#date_arive1, ' +
        '#date_notif_stack, '+
        '#date_order, '+
          '#date_ordera_receve, '+
        '#date_go1').datetimepicker({
        icons: {
            previous: 'glyphicon glyphicon-chevron-right',
            next: 'glyphicon glyphicon-chevron-left'

        }



    });
    $('#date_no_solution, ' +
        '#date_arive_no_solution, ' +
        '#date_go_no_solution').datetimepicker({
        icons: {
            previous: 'glyphicon glyphicon-chevron-right',
            next: 'glyphicon glyphicon-chevron-left'

        }


    });


});
