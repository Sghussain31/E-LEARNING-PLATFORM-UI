// Dynamically load course content based on URL
const params = new URLSearchParams(window.location.search);
const course = params.get("course");

if (course) {
  const titleMap = {
    html: "Intro to HTML",
    css: "CSS Fundamentals",
    js: "JavaScript Essentials"
  };

  const videoMap = {
    html: "https://www.youtube.com/embed/qz0aGYrrlhU",
    css: "https://www.youtube.com/embed/1PnVor36_40",
    js: "https://www.youtube.com/embed/hdI2bqOjy3c"
  };

  document.getElementById("course-title").textContent = titleMap[course];
  document.getElementById("course-video").src = videoMap[course];
}

// Progress tracking
function updateProgress() {
  const progress = document.getElementById("progress");
  progress.value = 100;
  alert("Course marked as completed!");
}