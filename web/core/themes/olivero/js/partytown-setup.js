// partytown-setup.js
document.addEventListener('DOMContentLoaded', function() {
  // Ensure Partytown is loaded before initializing
  if (typeof Partytown === 'undefined') {
    console.error('Partytown is not defined');
    return;
  }

  // Initialize Partytown
  Partytown.init({
    lib: '../~partytown/', // Ensure this path points to where Partytown is located in your theme
    // Additional configuration options
  });
});
