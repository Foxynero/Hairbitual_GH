function sendWhatsAppMessage(phoneNumber, imageName) {
    var imageURL = 'URL_TO_' + imageName; // Replace with the actual URL for the image.
    var message = 'Check out this image: ' + imageURL;
    var whatsappLink = 'https://api.whatsapp.com/send?phone=' + encodeURIComponent(phoneNumber) + '&text=' + encodeURIComponent(message);

    window.open(whatsappLink, '_blank');
}
