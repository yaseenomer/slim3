/**
 * Created by yaseen on 8/19/2017.
 */

$(document).ready(function () {

$('#depart').on('change',function () {
    var departID = $(this).val();
    if(departID)
    {
        $.get(
            "ajax.php",
            {depart : departID},
            function (data) {
                $('#class').html(data);

            }

        );
    }else {
        $('#class').html('<option>لا توجد وحدات  </option>');
    }

});
});