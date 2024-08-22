//Modifying Atrributes and classes
/**
 * task7:select an html element and change one of its attribute(e.g src of an image tag)
 */
        // Select the image element
        var imageElement = document.getElementById("myImage");
        
        // Change the src attribute of the image element
        imageElement.setAttribute("src", "new-image.jpg");
        
        // Alternatively, you can directly set the src property
        // imageElement.src = "new-image.jpg";
