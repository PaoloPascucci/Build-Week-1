    const inputCheck = document.getElementById("check");
    const linkButton = document.getElementById("proceedButton");
    
    function toggleLink() {        
      if (inputCheck.checked) {
        linkButton.setAttribute("href", "./questions.html");
      } else {
        linkButton.removeAttribute("href");
      }
    };
    inputCheck.addEventListener("change", toggleLink);