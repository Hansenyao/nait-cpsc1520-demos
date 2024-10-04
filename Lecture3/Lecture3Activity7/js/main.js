
// Event listener functions will be passed the
// event object for the event. This object can be
// used to get information about event and to
// call methods/functions on the event as well
// e.g. preventDefault()


document.querySelector('a').addEventListener('click', function (event) {
    if (!confirm('Leaving this page- Click Ok to Leave, Cancel to stay on current page')) {
        event.preventDefault();
    }
});

