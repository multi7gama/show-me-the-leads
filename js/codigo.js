$('#formulario').submit(function (event) {
    var name = $('#name').val();
    var email = $('#email').val();
    var cidade = $('#cidade').val();
    var motorista = $('#inputState :selected').text();

    event.preventDefault();
    $.ajax({
        url: 'https://gmail.us18.list-manage.com/subscribe/post',
        method: 'POST',
        data: { u: 'df1846948ac60fd01eab1e951', id: '2232c8df59', EMAIL: email, NAME: name, CIDADE: cidade, MOTORISTA: motorista },
        dataType: 'jsonp'
    });
    $.ajax({
        url: 'https://smtl.gama.academy/leads/db22dd70-915e-11ea-9e98-2f3c29e0891c',
        method: 'POST',
        // data: { name: name, email: email, debugMode: 'true' },
        data: { name: name, email: email},
        success: function () {
            window.location = "https://dirijaseguro.com.br/thankyou.html";
        }
    });
});