// Wait for the DOM to be loaded
document.addEventListener("DOMContentLoaded", function () {
    // Get the file input element and image element
    const fileInput = document.getElementById("fileInput");
    const image = document.getElementById("image");
    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d");

    // Add an event listener to the file input to trigger the conversion
    fileInput.addEventListener("change", handleImageConversion);

    // Function to handle the image conversion
    function handleImageConversion(event) {
        const file = event.target.files[0];

        // Check if a file is selected
        if (!file) {
            console.error("No file selected.");
            return;
        }

        // Read the image file as a data URL
        const reader = new FileReader();
        reader.onload = function (event) {
            const dataURL = event.target.result;

            // Create an image element to load the image
            const img = new Image();
            img.onload = function () {
                // Set the canvas dimensions to match the image
                canvas.width = img.width;
                canvas.height = img.height;

                // Draw the image on the canvas
                ctx.drawImage(img, 0, 0);

                // Get the Base64 string representation of the image
                const imageString = canvas.toDataURL();

                // Pass the imageString to a function in app.js (you can define your function in app.js)
                handleImageString(imageString);
            };
            img.src = dataURL;
        };
        reader.readAsDataURL(file);
    }
});

// This function is defined in app.js and can handle the Base64 string
function handleImageString(imageString) {
    console.log("Image as Base64 string:", imageString);
    alert(imageString);
    // Use the imageString as needed
}
