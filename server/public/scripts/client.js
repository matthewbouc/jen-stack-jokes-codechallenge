console.log('client.js sourced');

$( document ).ready( onReady );

function onReady() {
    console.log('DOM ready');
    serverGET();
    $('#addJokeButton').on('click', serverPOST);
}



function serverGET(){
    $.ajax({
        method: 'GET',
        url: 'jokeArray'
    })
    .then(function(response){
        console.log('received joke on client', response);
        //PROCESS THE ARRAY HERE - LOG TO DOM
    })
    .catch(function(err){
        console.log('error',err);
    })
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