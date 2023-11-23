    // Get the animation element
    const animationElement = document.querySelector('#animation-element');

    // Add an event listener to the category buttons
    document.querySelectorAll('.main1').forEach(button => {
      button.addEventListener('click', () => {
        // Get the name of the category
        const categoryName = button.getAttribute('data-category');

        // Set the text of the animation element
        animationElement.textContent = categoryName;

        // Show the animation element
        animationElement.classList.add('show');

        // Prevent the page from loading until the animation is finished
        document.body.classList.add('loading');

        // Wait for the animation to finish
        setTimeout(() => {
          // Hide the animation element
          animationElement.classList.remove('show');

          // Remove the loading class from the body
          document.body.classList.remove('loading');
        }, 500);
      });
    });


















    // Add a click event listener to the responsive icon
document.querySelector(".responsive-nav-bar-icon").addEventListener("click", function() {
  // Toggle the open class on the dropdown menu
  this.classList.toggle("open");

  // Toggle the display property on the dropdown menu
  document.querySelector(".dropdown-menu").classList.toggle("display");
});

    