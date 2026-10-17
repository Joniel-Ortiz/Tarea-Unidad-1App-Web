$(document).ready(function() {
    $('#plan-basico').find('#btn-agendar').click(function () {

        $('html, body').animate({
            scrollTop: $('#contacto').offset().top - 50}, 800);

        $('#plan-seleccionado').val('express')
    })

    $('#plan-premium').find('#btn-agendar').click(function () {

        $('html, body').animate({
            scrollTop: $('#contacto').offset().top - 50}, 800);

        $('#plan-seleccionado').val('premium')
    })

    $('#plan-vip').find('#btn-agendar').click(function () {

        $('html, body').animate({
            scrollTop: $('#contacto').offset().top - 50}, 800);

        $('#plan-seleccionado').val('vip')
    })

    $('#btn-enviar-contacto').click(function () {
        if ($('#nombre').val() != '' || $('#telefono').val() != '')
            alert('Gracias por su reserva');
    })
})