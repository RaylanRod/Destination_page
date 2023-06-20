let destinationObj = {}; // Declared destinationObj outside the function;

document.getElementById("submitList").onclick = function() {
  const fields = ["destination", "location", "destinationPhoto", "description"];

  for (const field of fields) {
    const element = document.getElementById(field);
    if (!element.value) {
      alert(`Form is not valid. Please ${element.getAttribute("placeholder")}.`);
      return;
    }
    destinationObj[field] = element.value;
  }

  const entryDate = new Date();
  const currentDate = new Date();
  const timeDiff = Math.abs(currentDate.getTime() - entryDate.getTime());
  const daysDiff = Math.ceil(timeDiff / (1000 * 3600 * 24));

  // Retrieve the list group container
  const listGroup = document.getElementById("destinationList");

  // Create a new list group item
// ...

// Create a new list group item
const listItem = document.createElement("a");
listItem.classList.add("list-group-item", "list-group-item-action");
listItem.setAttribute("href", "#");
listItem.setAttribute("data-bs-toggle", "popover");
listItem.setAttribute("title", `${destinationObj.destination}`);
listItem.setAttribute(
  "data-bs-content",
  `Location: ${destinationObj.location}<br>Photo: ${destinationObj.destinationPhoto}`
);
listItem.setAttribute("data-bs-html", "true");

// Create the content of the list group item
const headingWrapper = document.createElement("div");
headingWrapper.classList.add(
  "d-flex",
  "justify-content-between",
  "align-items-center"
);

const heading = document.createElement("h5");
heading.classList.add("mb-1");
heading.textContent = destinationObj.destination;

const subHeading = document.createElement("h6");
subHeading.classList.add("mb-1");
subHeading.textContent = destinationObj.location;

const small = document.createElement("small");
small.classList.add("text-muted");
small.textContent = `${daysDiff} days ago`;

const paragraph = document.createElement("p");
paragraph.classList.add("mb-1");
paragraph.textContent = destinationObj.description;

const imageContainer = document.createElement("div");
imageContainer.classList.add("list-group-item-image");

const image = document.createElement("img");
image.src = destinationObj.destinationPhoto;
image.classList.add("img-fluid", "rounded");

// Append the content to the list group item
imageContainer.appendChild(image);
headingWrapper.appendChild(heading);
headingWrapper.appendChild(small);
listItem.appendChild(headingWrapper);
listItem.appendChild(imageContainer);
listItem.appendChild(subHeading);
listItem.appendChild(paragraph);

// ...

// Append the new list group item to the list group container
const listGroupScroll = document.querySelector(".list-group-scroll");
listGroupScroll.appendChild(listItem);

// ...


  // Enable Bootstrap popover
  const popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'));
  popoverTriggerList.map(function (popoverTriggerEl) {
    return new bootstrap.Popover(popoverTriggerEl);
  });

  // Clear the input fields
  const destinationInput = document.getElementById("destination");
  const locationInput = document.getElementById("location");
  const photoInput = document.getElementById("destinationPhoto");
  const descriptionInput = document.getElementById("description");

  destinationInput.value = "";
  locationInput.value = "";
  photoInput.value = "";
  descriptionInput.value = "";
};



//===========OLDER CODE===================//
// let destinationObj;
// document.getElementById("submitList").onclick = function() {
//     let destinationName = document.getElementById("destination");
//     let location = document.getElementById("location");
//     let locationPhoto = document.getElementById("destinationPhoto");
//     let description = document.getElementById("description");

//     if (!destinationName.value) {
//         alert("Form is not valid. Please enter a destination name.");
//         return;
//     }
//     if (!location.value) {
//         alert("Form is not valid. Please enter a location.");
//         return;
//     }
//     if (!locationPhoto.value) {
//         alert("Form is not valid. Please enter a location photo URL.");
//         return;
//     }
//     if (!description.value) {
//         alert("Form is not valid. Please enter a description.");
//         return;
//     }

//     destinationObj = {
//         destination: destinationName.value,
//         location: location.value,
//         photourl: locationPhoto.value,
//         description: description.value
//     };

// };
