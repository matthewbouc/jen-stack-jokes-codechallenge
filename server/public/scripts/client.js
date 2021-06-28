console.log('client.js sourced');

$( document ).ready( onReady );

function onReady() {
    console.log('DOM ready');
    serverGET();
    $('#addJokeButton').on('click', serverPOST);
}


function displayOnDOM(jokeArray){
    $('#outputDiv').empty();
    for (const joke of jokeArray){
        $('#outputDiv').append(`
                <li>Whose Joke: ${joke.whoseJoke}<br>
                Question: ${joke.jokeQuestion}<br>
                Punchline: ${joke.punchLine}</li>
        `)}
}   


function serverGET(){
    $.ajax({
        method: 'GET',
        url: 'jokeArray'
    })
    .then(function(response){
        console.log('received joke on client', response);
        //PROCESS THE ARRAY HERE - LOG TO DOM
        displayOnDOM(response);
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
            whoseJoke: $('#whoseJokeIn').val(),
            jokeQuestion: $('#questionIn').val(),
            punchLine: $('#punchlineIn').val()
        }
    })
    .then(function(response){
        console.log('joke sent to server', response);
        ///UPDATE WITH GET REQUEST HERE
        serverGET();
    })
    .catch(function(err){
        console.log('err', err);
    })
}