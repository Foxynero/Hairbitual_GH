function sendWhatsAppMessage(phoneNumber, imageName) {
    var imageURL = 'https://github.com/Foxynero/Vincee/blob/main/images/gallery' + imageName; // Replace with the actual URL for the image.
    var message = 'Hello VinCee, I want to order this product: → ' + imageURL;
    var whatsappLink = 'https://api.whatsapp.com/send?phone=' + encodeURIComponent(phoneNumber) + '&text=' + encodeURIComponent(message);

    window.open(whatsappLink, '_blank');
}
