

$(document).ready(function(){

    
    $("#cep").mask("99.999-999");
    $("#cpf").mask("999.999.999-99");
    $('#for').validate({
        rules:{

            nome:{
                required: true,
                minlength: 5

            },

            email:{
                required: true,
                email: true

            },

            telefone:{
                required: true

            },

            cpf:{
                required: true

            },

            endereco:{
                required: true

            },

            cep:{
                required: true 

            }

        },

        messages:{
            nome: 'Por favor, informe seu nome completo'
        },
        submitHandler: function(form) {
            console.log(form)
        },
        invalidHandler: function(evento, validador) {
            let campoIncorreto = validador.numberOfInvalids();
            if(campoIncorreto) {
                alert(`Existem ${campoIncorreto} campos incorretos`)
            }
        
        }
    });
})