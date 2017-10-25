/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */




$(function () {

    $.validator.setDefaults({
        errorClass: 'help-block',
        highlight: function (element) {
            $(element)
                    .closest('.form-group')
                    .addClass('has-error');
        },
        unhighlight: function (element) {
            $(element)
                    .closest('.form-group')
                    .removeClass('has-error');
        }
    });
    $.validator.addMethod("passlong", function (value, element) {
        return this.optional(element)
                || value.length > 9
                && /[a-z]/i.test(value)
                && /\d/.test(value);

    }, " phone not valid");

    $.validator.addMethod("nowhitespace", function (value, element) {
        return this.optional(element) || /^\S+$/i.test(value);
    }, "No white space please");

    $.validator.addMethod("lettersonly", function (value, element) {
        return this.optional(element) || /^[a-z]+$/i.test(value);
    }, "Letters only please");
    $.validator.addMethod("integer", function (value, element) {
        return this.optional(element) || /^-?\d+$/.test(value);
    }, "A positive or negative non-decimal number please");
    $.validator.addMethod("dateNL", function (value, element) {
        return this.optional(element) || /^(0?[1-9]|[12]\d|3[01])[\.\/\-](0?[1-9]|1[012])[\.\/\-]([12]\d)?(\d\d)$/.test(value);
    }, $.validator.messages.date);

    $('#lat').validate({
        rules: {
            name: {
                required: true
            },
            phone: {
                required: true,
                integer: true

            },
            colage: {
                required: true
            },
            depart: {
                required: true
            },
            des: {
                required: true
            },
            locate: {
                required: true
            },
            date: {
                required: true
            }

        },
         messages: {
             name: {
                required: 'يجب ملء هذا الحقل'
            },
            phone: {
                required: 'يجب ملء هذا الحقل',
                integer: 'يجب إدخال ارقام فقط'

            },
            colage: {
                required: 'يجب ملء هذا الحقل'
            },
            depart: {
                required: 'يجب ملء هذا الحقل'
            },
            des: {
                required: 'يجب ملء هذا الحقل'
            },
            locate: {
                required: 'يجب ملء هذا الحقل'
            },
            date: {
                required: 'يجب ملء هذا الحقل'
            }
         }

    });

    $('#order_form').validate({
        rules: {
            "type[0]": {
                required: true
            },
            "type[1]": {
                required: true
            },
            "type[2]": {
                required: true
            },
            "type[3]": {
                required: true
            },
            "type[4]": {
                required: true
            },
            "desc[0]": {
                required: true
            },
            "desc[1]": {
                required: true
            },
            "desc[2]": {
                required: true
            },
            "desc[3]": {
                required: true
            },
            "desc[4]": {
                required: true
            },
            "coun[0]": {
                required: true,
                integer: true
            },
            "coun[1]": {
                required: true,
                integer: true
            },
            "coun[2]": {
                required: true,
                integer: true
            },
            "coun[3]": {
                required: true,
                integer: true
            },
            "coun[4]": {
                required: true,
                integer: true
            },
            "note[0]": {
                required: true
            },
            "note[1]": {
                required: true
            },
            "note[2]": {
                required: true
            },
            "note[3]": {
                required: true
            },
            "note[4]": {
                required: true
            },
            phone: {
                required: true,
                integer: true
            },
            name: {
                required: true
            },
            depart: {
                required: true
            },
            colage: {
                required: true
            },
            gool: {
                required: true
            }

        },
        messages: {
            name: {
                required: 'يجب ملء هذا الحقل'
            },
            phone: {
                required: 'يجب ملء هذا الحقل',
                integer: 'يجب إدخال ارقام فقط'
            },
            depart: {
                required: 'يجب ملء هذا الحقل'
            },
            colage: {
                required: 'يجب ملء هذا الحقل'
            },
            gool: {
                required: 'يجب ملء هذا الحقل'
            },
            "type[0]": {
                required: 'يجب ملء هذا الحقل'
            },
            "type[1]": {
                required: 'يجب ملء هذا الحقل'
            },
            "type[2]": {
                required: 'يجب ملء هذا الحقل'
            },
            "type[3]": {
                required: 'يجب ملء هذا الحقل'
            },
            "type[4]": {
                required: 'يجب ملء هذا الحقل'
            },
            "desc[0]": {
                required: 'يجب ملء هذا الحقل'
            },
            "desc[1]": {
                required: 'يجب ملء هذا الحقل'
            },
            "desc[2]": {
                required: 'يجب ملء هذا الحقل'
            },
            "desc[3]": {
                required: 'يجب ملء هذا الحقل'
            },
            "desc[4]": {
                required: 'يجب ملء هذا الحقل',
                integer: 'يجب إدخال ارقام فقط'
            },
            "coun[0]": {
                required: 'يجب ملء هذا الحقل',
                integer: 'يجب إدخال ارقام فقط'
            },
            "coun[1]": {
                required: 'يجب ملء هذا الحقل',
                integer: 'يجب إدخال ارقام فقط'
            },
            "coun[2]": {
                required: 'يجب ملء هذا الحقل',
                integer: 'يجب إدخال ارقام فقط'
            },
            "coun[3]": {
                required: 'يجب ملء هذا الحقل',
                integer: 'يجب إدخال ارقام فقط'
            },
            "coun[4]": {
                required: 'يجب ملء هذا الحقل'
            },
            "note[0]": {
                required: 'يجب ملء هذا الحقل',
                integer: 'يجب إدخال ارقام فقط'
            },
            "note[1]": {
                required: 'يجب ملء هذا الحقل'
            },
            "note[2]": {
                required: 'يجب ملء هذا الحقل'
            },
            "note[3]": {
                required: 'يجب ملء هذا الحقل'
            },
            "note[4]": {
                required: 'يجب ملء هذا الحقل'
            }


        }

    });
    $('#order_form_solution').validate({
        rules: {
            emp_name: {
                required: true
            },
            teqnic: {
                required: true,
            },
            desc: {
                required: true
            },
            note: {
                required: true
            }
        },
        messages: {
            emp_name: {
                required: 'يجب ملء هذا الحقل'
            },
            teqnic : {
                required: 'يجب ملء هذا الحقل',
            },
            desc: {
                required: 'يجب ملء هذا الحقل'
            },
            note: {
                required: 'يجب ملء هذا الحقل'
            }

        }

    });

    $('#order_form_nosolution').validate({
        rules: {
            teqnic: {
                required: true,
            },
            desc: {
                required: true
            },
            proposn: {
                required: true
            }
        },
        messages: {
            teqnic : {
                required: 'يجب ملء هذا الحقل',
            },
            desc: {
                required: 'يجب ملء هذا الحقل'
            },
            proposn: {
                required: 'يجب ملء هذا الحقل'
            }

        }

    });
    $('#ordera_receve').validate({
        rules: {

            p_receve: {
                required: true
            },
            p_send: {
                required: true
            },
            'type[0]': {
                required: true
            },
            'coun[0]': {
                required: true
            },
            'note[0]': {
                required: true
            },
            'type[1]': {
                required: true
            },
            'coun[1]': {
                required: true
            },
            'note[1]': {
                required: true
            },
            'type[2]': {
                required: true
            },
            'coun[2]': {
                required: true
            },
            'note[2]': {
                required: true
            },
            'type[3]': {
                required: true
            },
            'coun[3]': {
                required: true
            },
            'note[3]': {
                required: true
            },
            'type[4]': {
                required: true
            },
            'coun[4]': {
                required: true
            },
            'note[4]': {
                required: true
            }
        },
        messages: {
            p_receve: {
                required: 'يجب ملء هذا الحقل'
            },
            p_send: {
                required: 'يجب ملء هذا الحقل'
            },
            'type[0]': {
                required: 'يجب ملء هذا الحقل'
            },
            'coun[0]': {
                required: 'يجب ملء هذا الحقل'
            },
            'note[0]': {
                required: 'يجب ملء هذا الحقل'
            },
            'type[1]': {
                required: 'يجب ملء هذا الحقل'
            },
            'coun[1]': {
                required: 'يجب ملء هذا الحقل'
            },
            'note[1]': {
                required: 'يجب ملء هذا الحقل'
            },
            'type[2]': {
                required: 'يجب ملء هذا الحقل'
            },
            'coun[2]': {
                required: 'يجب ملء هذا الحقل'
            },
            'note[2]': {
                required: 'يجب ملء هذا الحقل'
            },
            'type[3]': {
                required: 'يجب ملء هذا الحقل'
            },
            'coun[3]': {
                required: 'يجب ملء هذا الحقل'
            },
            'note[3]': {
                required: 'يجب ملء هذا الحقل'
            },
            'type[4]': {
                required: 'يجب ملء هذا الحقل'
            },
            'coun[4]': {
                required: 'يجب ملء هذا الحقل'
            },
            'note[4]': {
                required: 'يجب ملء هذا الحقل'
            }
        }

    });



});