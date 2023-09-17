document.getElementById('shareImage').addEventListener('click', function() {
    var message = encodeURIComponent('Check out this awesome image!');
    var url = 'https://wa.me/+233597421076' + message;
    window.location.href = url;
});
