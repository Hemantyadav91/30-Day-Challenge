// 1 . Array of images with high-quality placehoder URLs and captions

const slides = [
    {
    url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
    caption: "Misty Mountain Lake"
  },
  {
    url: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=800&q=80",
    caption: "Foggy Evergreen Forest"
  },
  {
    url: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=800&q=80",
    caption: "Sunlit Woodland Path"
  },
  {
    url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
    caption: "Tropical Sandy Beach"
  }
];


//  2. Select DOM elements

const sliderImage = document.getElementById("slider-image");
const imageCaption = document.getElementById("image-caption");
const imageCounter = document.getElementById("image-counter");
const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");

// 4. Function to render the current slide

let currentIndex = 0;

function showSlide(index) {
    const currentSlide = slides[index];
    sliderImage.src = currentSlide.url;
    imageCaption.textContent = currentSlide.caption;
    imageCounter.textContent = `${index + 1} / ${slides.length}`;
}

// 5. Next button handler (loops back to 0 at the end);

nextBtn.addEventListener("click", () => {
    currentIndex++;

    if(currentIndex >= slides.length) {
        currentIndex = 0;
    }

    showSlide(currentIndex);
});

// .6 Prev button handler (loops to last item if at 0)

prevBtn.addEventListener("click", () => {
    currentIndex--;

    if(currentIndex < 0) {
        currentIndex = slides.length - 1;
    }

    showSlide(currentIndex);
});

// Initial display setup
showSlide(currentIndex);