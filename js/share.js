document.getElementById('shareImage').addEventListener('click', function() {
    var message = encodeURIComponent('Check out this awesome image: https://raw.githubusercontent.com/Foxynero/Vincee/main/images/gallery/1.jpeg');
    var url = 'https://wa.me/+233597421076?text=' + message;
    window.location.href = url;
});
