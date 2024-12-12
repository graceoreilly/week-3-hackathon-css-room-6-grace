console.log("hello")

async function CatGenerator() {
const response = await fetch ("https://cataas.com/cat", {
    headers: {
    Accept: "application/blob"}
});
;
console.log(response);
const blob = await response.blob();
console.log();

const imageURL = URL.createObjectURL(blob);

const img = document.createElement("img");
img.src = imageURL;
img.alt = "Random Cat";
document.body.appendChild(img);

return blob;
}
CatGenerator();

// function fetchImage() {
// fetch ("https://cataas.com/cat", {
//       method: 'GET',
//       headers: {
//         Accept: "application/json"
//       }
//     })
//       .then(response => response.blob())
//       .then(data => {
//         // Do something with the image data
//             console.log(data)
//       })
//       .catch(error => console.error(error));
//   }