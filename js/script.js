const swiper = new Swiper(".mySwiper", { 
  spaceBetween: 0,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    575: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    1024: {
      slidesPerView: 4,
    },
  },
});

// Array of images and text
const galleryData = [
  {
    slide1: {
      src: "./assets/E1 Race Bird/E1 1.jpg",
      text: "E1 Seabird",
    },
    slide2: {
      src: "./assets/Saudi 2018 FE/Saudi 2018 FE 1.jpg",
      text: "Extreme E Saudi 2023",
    },
  },
  {
    slide1: {
      src: "./assets/Saudi 2019 FE/Saudi 2019 FE 1.jpg",
      text: "Formula E Saudi 2023",
    },
    slide2: {
      src: "./assets/Saudi 2021 FE/Saudi 2021 FE 1.jpg",
      text: "Extreme E Saudi 2022",
    },
  },
  {
    slide1: {
      src: "./assets/Saudi 2022 FE/Saudi 2022 FE 1.jpg",
      text: "Formula E Saudi 2022",
    },
    slide2: {
      src: "./assets/Saudi 2021 XE/Saudi 2021 XE 1.jpg",
      text: "Extreme E Saudi 2021",
    },
  },
  {
    slide1: {
      src: "./assets/Saudi 2022 XE/Saudi 2022 XE 1.png",
      text: "Formula E Saudi 2021",
    },
    slide2: {
      src: "./assets/Saudi 2023 FE/Saudi 2023 FE 1.jpg",
      text: "Formula E Saudi 2019",
    },
  },
  {
    slide1: {
      src: "./assets/Saudi 2023 XE/Saudi 2023 XE 1.jpg",
      text: "Formula E Saudi 2018",
    },
    slide2: {
      src: "./assets/Vegas 2017 FE eSports/Vegas 2017 FE Esports 1.jpg",
      text: "Formula E eSports Vegas 2017",
    },
  },
  {
    slide1: {
      src: "./assets/E1 Race Bird/E1 2.jpg",
      text: "E1 Seabird",
    },
    slide2: {
      src: "./assets/E1 Race Bird/E1 3.jpg",
      text: "E1 Seabird",
    },
  },
  {
    slide1: {
      src: "./assets/E1 Race Bird/E1 4.jpg",
      text: "E1 Seabird",
    },
    slide2: {
      src: "./assets/Saudi 2022 FE/Saudi 2022 FE 2.jpg",
      text: "Formula E Saudi 2022",  
    },
  },
  {
    slide1: {
      src: "./assets/Saudi 2018 FE/Saudi 2018 FE 2.jpg",
      text: "Formula E Saudi 2018",
    },
    slide2: {
      src: "./assets/Saudi 2018 FE/Saudi 2018 FE 3.jpg",
      text: "Formula E Saudi 2018",
    },
  },
  {
    slide1: {
      src: "./assets/Saudi 2018 FE/Saudi 2018 FE 4.jpg",
      text: "Formula E Saudi 2018",
    },
    slide2: {
      src: "./assets/Saudi 2018 FE/Saudi 2018 FE 5.jpg",
      text: "Formula E Saudi 2018",
    },
  },
  {
    slide1: {
      src: "./assets/Saudi 2018 FE/Saudi 2018 FE 12.jpg",
      text: "Formula E Saudi 2018",
    },
    slide2: {
      src: "./assets/Saudi 2018 FE/Saudi 2018 FE 7.jpg",
      text: "Formula E Saudi 2018",
    },
  },
  {
    slide1: {
      src: "./assets/Saudi 2018 FE/Saudi 2018 FE 8.jpg",
      text: "Formula E Saudi 2018",
    },
    slide2: {
      src: "./assets/Saudi 2018 FE/Saudi 2018 FE 9.jpg",
      text: "Formula E Saudi 2018",
    },
  },
  {
    slide1: {
      src: "./assets/Saudi 2019 FE/Saudi 2019 FE 2.jpg",
      text: "Formula E Saudi 2019",
    },
    slide2: {
      src: "./assets/Saudi 2019 FE/Saudi 2019 FE 3.jpg",
      text: "Formula E Saudi 2019",
    },
  },
  {
    slide1: {
      src: "./assets/Saudi 2021 FE/Saudi 2021 FE 2.jpg",
      text: "Formula E Saudi 2021",
    },
    slide2: {
      src: "./assets/Saudi 2021 FE/Saudi 2021 FE 3.jpg",
      text: "Extreme E Saudi 2021",
    },
  },
  {
    slide1: {
      src: "./assets/Saudi 2021 FE/Saudi 2021 FE 4.jpg",
      text: "Extreme E Saudi 2021",
    },
    slide2: {
      src: "./assets/Saudi 2021 FE/Saudi 2021 FE 5.jpg",
      text: "Extreme E Saudi 2021",
    },
  },
  {
    slide1: {
      src: "./assets/Saudi 2021 XE/Saudi 2021 XE 2.jpg",
      text: "Extreme E Saudi 2021",
    },
    slide2: {
      src: "./assets/Saudi 2021 XE/Saudi 2021 XE 3.jpg",
      text: "Extreme E Saudi 2021",
    },
  },
  {
    slide1: {
      src: "./assets/E1 Race Bird/E1 5.jpg",
      text: "E1 Seabird",
    },
    slide2: {
      src: "./assets/Saudi 2022 FE/Saudi 2022 FE 3.jpg",
      text: "Formula E Saudi 2022",
    },
  },
  {
    slide1: {
      src: "./assets/Saudi 2022 FE/Saudi 2022 FE 4.jpg",
      text: "Formula E Saudi 2022",
    },
    slide2: {
      src: "./assets/Saudi 2022 FE/Saudi 2022 FE 5.jpg",
      text: "Formula E Saudi 2022",
    },
  },
  {
    slide1: {
      src: "./assets/Saudi 2022 XE/Saudi 2022 XE 2.jpg",
      text: "Extreme E Saudi 2022",
    },
    slide2: {
      src: "./assets/Saudi 2022 XE/Saudi 2022 XE 3.jpg",
      text: "Extreme E Saudi 2022",
    },
  },
  {
    slide1: {
      src: "./assets/Vegas 2017 FE eSports/Vegas 2017 FE eSports 4.jpg",
      text: "Vegas 2017 FE eSports",
    },
    slide2: {
      src: "./assets/Saudi 2022 XE/Saudi 2022 XE 5.jpg",
      text: "Extreme E Saudi 2022",
    },
  },
  {
    slide1: {
      src: "./assets/Saudi 2022 XE/Saudi 2022 XE 6.jpg",
      text: "Extreme E Saudi 2022",
    },
    slide2: {
      src: "./assets/Saudi 2023 FE/Saudi 2023 FE 2.jpg",
      text: "Formula E Saudi 2023",
    },
  },
  {
    slide1: {
      src: "./assets/Saudi 2023 FE/Saudi 2023 FE 3.jpg",
      text: "Formula E Saudi 2023",
    },
    slide2: {
      src: "./assets/Saudi 2023 FE/Saudi 2023 FE 4.jpg",
      text: "Formula E Saudi 2023",
    },
  },
  {
    slide1: {
      src: "./assets/Saudi 2023 FE/Saudi 2023 FE 5.jpg",
      text: "Formula E Saudi 2023",
    },
    slide2: {
      src: "./assets/Saudi 2023 XE/Saudi 2023 XE 2.jpg",
      text: "Extreme E Saudi 2023",
    },
  },
  {
    slide1: {
      src: "./assets/Saudi 2023 XE/Saudi 2023 XE 3.jpg",
      text: "Extreme E Saudi 2023",
    },
    slide2: {
      src: "./assets/Saudi 2023 XE/Saudi 2023 XE 4.jpg",
      text: "Extreme E Saudi 2023",
    },
  },
  {
    slide1: {
      src: "./assets/Saudi 2023 XE/Saudi 2023 XE 5.jpg",
      text: "Extreme E Saudi 2023",
    },
    slide2: {
      src: "./assets/Vegas 2017 FE eSports/Vegas 2017 FE eSports 2.jpg",
      text: "Vegas 2017 Formula E 2023",
    },
  }, 
  // Add more items as needed
];

// Flatten the gallery data for easy navigation
const flatGalleryData = galleryData.flatMap((item) => [
  item.slide1,
  item.slide2,
]);

let currentIndex = 0; // Global variable to track the current index

// Dynamically populate Swiper section
galleryData.forEach((item, index) => {
  const slide1Index = index * 2;
  const slide2Index = index * 2 + 1;

  swiper.appendSlide(`
    <div class="swiper-slide">
      <div class="slide1" data-bs-toggle="modal" data-bs-target="#exampleModal" onclick="openModal(${slide1Index})">
        <img src="${item.slide1.src}" alt="" width="100%">
        <div class="overlay">
          <h4>${item.slide1.text}</h4>
        </div>
      </div>
      <div class="slide2" data-bs-toggle="modal" data-bs-target="#exampleModal" onclick="openModal(${slide2Index})">
        <img src="${item.slide2.src}" alt="" width="100%">
        <div class="overlay">
          <h4>${item.slide2.text}</h4>
        </div>
      </div>
    </div>`);
});

// Function to open modal with dynamic content
const modalContent = document.getElementById("modal-content");
function openModal(index) {
  currentIndex = index; // Update the current index

  const currentItem = flatGalleryData[currentIndex];

  modalContent.innerHTML = `
    <div class="col-lg-8 col-md-12 px-0 d-flex align-items-center">
      <i class="bi bi-chevron-left me-5" id="swiperBtnPrev" onclick="navigateModal(-1)"></i>
      <div class="img-cont">
        <img src="${currentItem.src}" alt="" width="100%">
      </div>
      <i class="bi bi-chevron-right ms-5" id="swiperBtnNext" onclick="navigateModal(1)"></i>
    </div>
    <div class="col-lg-4 col-md-12 px-0">
      <h1>${currentItem.text}</h1>
      <a href="#">images of the ${currentItem.text}</a>
    </div>`;
}

modalContent.addEventListener("swiped-right", () => {
  navigateModal(-1);
  console.log("delll");
});
modalContent.addEventListener("swiped-left", () => navigateModal(1));

// Function to navigate within the modal
function navigateModal(direction) {
  currentIndex += direction;

  // Wrap around to the beginning if reaching the end
  if (currentIndex < 0) {
    currentIndex = flatGalleryData.length - 1;
  } else if (currentIndex >= flatGalleryData.length) {
    currentIndex = 0;
  }

  // Update modal content with the new index
  openModal(currentIndex);
}

document.addEventListener("DOMContentLoaded", function () {
  const modalImage = document.getElementById("modalImage");
  const prevImageBtn = document.getElementById("prevImage");
  const nextImageBtn = document.getElementById("nextImage");
  const images = document.querySelectorAll(".seabird-img");

  let currentIndex = 0;

  // Function to update modal content based on the selected image
  function updateModalContent(index) {
    const imageUrl = images[index].dataset.image;
    modalImage.src = imageUrl;
  }

  // Function to handle previous and next image buttons
  function changeImage(direction) {
    currentIndex += direction;
    if (currentIndex < 0) {
      currentIndex = images.length - 1;
    } else if (currentIndex >= images.length) {
      currentIndex = 0;
    }
    updateModalContent(currentIndex);
  }

  // Event listeners for previous and next buttons
  prevImageBtn.addEventListener("click", () => changeImage(-1));
  nextImageBtn.addEventListener("click", () => changeImage(1));

  // Event listener for each image in the seabird section
  images.forEach((image, index) => {
    image.addEventListener("click", () => {
      currentIndex = index;
      updateModalContent(currentIndex);
    });
  });
});
