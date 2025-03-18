function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
    
    // Toggle navbar and button colors
    const navbar = document.querySelector('.navbar');
    const darkModeButton = document.querySelector('.dark-mode-toggle-button');
    if (document.body.classList.contains("dark-mode")) {
      navbar.style.backgroundColor = "black";
      darkModeButton.style.backgroundColor = "black"; 
      darkModeButton.style.color = "white";
      document.body.style.backgroundColor='black';
    } else {
      navbar.style.backgroundColor = ""; // Reset to default or previous color
      darkModeButton.style.color = "white";
      darkModeButton.style.backgroundColor = "rgb(46, 46, 160)";
      document.body.style.backgroundColor='';    // Reset to default or previous color
    }
  }