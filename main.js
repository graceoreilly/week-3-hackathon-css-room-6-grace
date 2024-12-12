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

const img = document.createElement("img"); //creates a new img element
img.src = imageURL; //sets the image src attribute of img element to the imageURL
img.alt = "Random Cat"; //sets the alt attribute of the image
document.body.appendChild(img); //appends the image to the body, you have to append an element in order to add the element to the DOM

return blob;
}
catch (error) { //this is the block of code to be executed, if an error occurs in the try block
     console.error('Error fetching data:', error);
    }
}

CatGenerator();