const inputCheck = document.getElementById("check");
const linkButton = document.getElementById("proceedButton");

const toggleLink = function()
{
    if(inputCheck.checked)
    {
        linkButton.setAttribute("href", "./questions.html");
    }
    else
    {
        linkButton.removeAttribute("href");
    }
}

