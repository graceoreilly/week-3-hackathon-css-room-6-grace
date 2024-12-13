async function CatGenerator() {
    try { //this is the block of code to be tested for errors while it is being executed
const response = await fetch ("https://cataas.com/cat", {
    headers: {
    Accept: "application/blob"}
});
if (!response.ok) {
            throw new Error(`THERE IS AN ERROR! status: ${response.status}`);
    }
console.log(response);
const blob = await response.blob(); //converts the response to a blob (binary image data), await is used as this is an async operation //converts it to a blob object

const imageURL = URL.createObjectURL(blob); //created a URL which points to the blob object, allowing it to be displayed as an image in the browser

let newImage = document.getElementById("catImage");
if (newImage) {
    newImage.remove(); //deleting the image so that the page is not full of images of cats
 }

const img = document.createElement("img"); //creates a new img element
img.src = imageURL; //sets the image src attribute of img element to the imageURL
img.alt = "Random Cat"; //sets the alt attribute of the image
img.id = "catImage";
document.body.appendChild(img); //appends the image to the body, you have to append an element in order to add the element to the DOM

return blob;
}
catch (error) { //this is the block of code to be executed, if an error occurs in the try block
     console.error('Error fetching data:', error);
    }
}

CatGenerator();

//grab the button from the HTML
const button = document.getElementById("btn");
//running the function when the button is clicked and adding a new image each time
button.addEventListener("click", CatGenerator);
// we need to say if there is already an image there, remove this image



// Remove the existing image before appending a new one: You can check if there's an existing image using getElementById and remove it before appending the new image to the body. This way, only one image will be displayed at a time.

// Order of operations matters: Make sure to remove the old image before you append the new image.

// Unique identifiers help: Since you're assigning an id to the image (catImage), use that same id to target and remove the image consistently.