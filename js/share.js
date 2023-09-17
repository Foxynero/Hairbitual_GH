document.getElementById('shareImage').addEventListener('click', function() {
    var message = encodeURIComponent('Check out this awesome image!');
    var url = 'whatsapp://send?text=' + message;
    window.location.href = url;
});
