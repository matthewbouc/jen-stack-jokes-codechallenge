console.log('client.js sourced');

$( document ).ready( onReady );


/**
 * on ready - load current joke array.  Listen for button click to post new joke.
 */
function onReady() {
    console.log('DOM ready');
    serverGET();
    $('#addJokeButton').on('click', serverPOST);
}

/**
 * Takes in the joke array from the GET request.  Appends array to DOM.
 * @param {Array} jokeArray 
 */
function displayOnDOM(jokeArray){
    $('#outputDiv').empty();
    for (const joke of jokeArray){
        $('#outputDiv').append(`
                <li>Whose Joke: ${joke.whoseJoke}<br>
                Question: ${joke.jokeQuestion}<br>
                Punchline: ${joke.punchLine}</li>
        `)}
}   

/**
 * GET request to server.  Should receive array - parameter for displayOnDOM()
 */
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


/**
 * POST request to send new joke to server based on DOM inputs.
 */
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
        $('.jokeInput').val('');
    })
    .catch(function(err){
        console.log('err', err);
    })
}