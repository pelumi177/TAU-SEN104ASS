document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('#contact form');
  const toast = document.getElementById('successToast');
  const closeToastBtn = document.getElementById('closeToastBtn');
  let toastTimeout;

  form.addEventListener('submit', function(event) {
    event.preventDefault();

    // Clear previous error states
    [...form.elements].forEach(el => el.classList.remove('is-invalid'));

    // Get trimmed input values
    const name = form.contactName.value.trim();
    const email = form.contactEmail.value.trim();
    const message = form.contactMessage.value.trim();

    let valid = true;

    // Name validation: min 2 chars
    if (name.length < 2) {
      valid = false;
      form.contactName.classList.add('is-invalid');
    }

    // Email validation (simple regex)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      valid = false;
      form.contactEmail.classList.add('is-invalid');
    }

    // Message validation: min 10 chars
    if (message.length < 10) {
      valid = false;
      form.contactMessage.classList.add('is-invalid');
    }

    if (!valid) {
      return; // Stop submission if invalid
    }

    // Show toast notification for success
    showToast();

    // Clear form inputs
    form.reset();
  });

  // Close toast button click event
  closeToastBtn.addEventListener('click', hideToast);

  // Show toast function
  function showToast() {
    toast.hidden = false;
    toast.classList.add('show');

    clearTimeout(toastTimeout);
    toastTimeout = setTimeout(() => {
      hideToast();
    }, 5000); // Auto hide after 5 seconds
  }

  // Hide toast function
  function hideToast() {
    toast.classList.remove('show');
    // After fade-out transition ends, hide fully
    toast.addEventListener('transitionend', () => {
      if (!toast.classList.contains('show')) {
        toast.hidden = true;
      }
    }, { once: true });
  }
});

document.addEventListener('DOMContentLoaded', () => {
  // ... your existing code

  // Create an audio element for success sound
  const successSound = new Audio('https://actions.google.com/sounds/v1/cartoon/clang_and_wobble.ogg');

  function showToast() {
    toast.hidden = false;
    toast.classList.add('show');

    // Play success sound
    successSound.currentTime = 0;
    successSound.play();

    clearTimeout(toastTimeout);
    toastTimeout = setTimeout(() => {
      hideToast();
    }, 5000);
  }

  // ... rest of your code
});


document.addEventListener('DOMContentLoaded', () => {
  // Existing code...

  // Sidebar toggle elements
  const sidebar = document.getElementById('sidebar');
  const sidebarOverlay = document.getElementById('sidebarOverlay');
  const sidebarToggleBtn = document.getElementById('sidebarToggleBtn');
  const closeSidebarBtn = document.getElementById('closeSidebarBtn');

  // Open sidebar
  sidebarToggleBtn.addEventListener('click', () => {
    sidebar.classList.add('show');
    sidebarOverlay.classList.add('show');
  });

  // Close sidebar function
  function closeSidebar() {
    sidebar.classList.remove('show');
    sidebarOverlay.classList.remove('show');
  }

  // Close sidebar on close button click
  closeSidebarBtn.addEventListener('click', closeSidebar);

  // Close sidebar if overlay clicked
  sidebarOverlay.addEventListener('click', closeSidebar);

  // Optional: close sidebar when clicking a link inside sidebar
  sidebar.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', closeSidebar);
  });

  // Rest of your existing code...
});

document.getElementById('desktopSidebarToggle').addEventListener('click', () => {
  const sidebar = document.querySelector('.sidebar');
  sidebar.classList.toggle('show');
});
document.addEventListener('click', (e) => {
  const sidebar = document.querySelector('.sidebar');
  const toggleBtn = document.getElementById('desktopSidebarToggle');

  // Only apply on large screens
  if (window.innerWidth >= 992) {
    const clickedInsideSidebar = sidebar.contains(e.target);
    const clickedToggleBtn = toggleBtn.contains(e.target);

    if (!clickedInsideSidebar && !clickedToggleBtn && sidebar.classList.contains('show')) {
      sidebar.classList.remove('show');
    }
  }
});