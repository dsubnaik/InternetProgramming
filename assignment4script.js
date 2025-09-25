//light and dark mode
const toggleSwitch = document.querySelector('.switch input[type="checkbox"]');

function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
}

toggleSwitch.addEventListener('change', toggleDarkMode);

//clock in the footer
function updateClock() {
  const clockElement = document.getElementById("clock");
  const now = new Date();
  const timeString = now.toLocaleTimeString();
  clockElement.textContent =  timeString;
}

setInterval(updateClock, 1000);
updateClock(); 

const backToTopBtn = document.getElementById("backToTop");

//scroll back to top 
// Show button when scrolling down
window.addEventListener("scroll", () => {
  if (window.scrollY > 200) {
    backToTopBtn.style.display = "block";
  } else {
    backToTopBtn.style.display = "none";
  }
});

// Smooth scroll to top
backToTopBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

//hide and show box's and table's
document.querySelectorAll('.toggle-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const container = btn.parentElement;
    const content = container.querySelector('table, ul, ol'); // target table or list
    if(content.style.display === 'none') {
      content.style.display = ''; // show
      btn.textContent = 'Hide ' + (content.tagName === 'TABLE' ? 'Table' : 'List');
    } else {
      content.style.display = 'none'; // hide
      btn.textContent = 'Show ' + (content.tagName === 'TABLE' ? 'Table' : 'List');
    }
  });
});

