let input = document.querySelector('input');
input.addEventListener('input', function(evt){
    if(evt.data !== null) {
        console.log(evt.data);
    }

})
