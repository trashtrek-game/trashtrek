async function compareImagesJS(uncleanedSrc, cleanedFile) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.onload = function(event) {
      resemble(uncleanedSrc)
        .compareTo(event.target.result)
        .ignoreColors()  // Optional: ignore colors if you want grayscale comparison
        .onComplete(function(data) {
          resolve(data);  // data.misMatchPercentage, data.getImageDataUrl(), etc
        });
    };

    reader.onerror = reject;
    reader.readAsDataURL(cleanedFile);
  });
}
