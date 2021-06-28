console.log('client.js sourced');

$( document ).ready( onReady );

function onReady() {
    console.log('DOM ready');
}


function serverPOST(){
    $.ajax({
        method: 'POST',
        url: '/jokeArray',
        data: {
            author: $('#whoseJokeIn').val(),
            question: $('#questionIn').val(),
            punch: $('#punchlineIn').val()
        }
    })
    .then(function(response){
        console.log('joke sent to server', response);
        ///UPDATE WITH GET REQUEST HERE
    })
    .catch(function(err){
        console.log('err', err);
    })
}