function copyUsernameToClipboard() {
    const username = document.getElementById("username");
    const copyIconU1 = document.getElementById("copy-icons-u1");
    const copyIconU2 = document.getElementById("copy-icons-u2");
    const copyIconU3 = document.getElementById("copy-icons-u3");
    const copyIconU4 = document.getElementById("copy-icons-u4");
    const copyIconU5 = document.getElementById("copy-icons-u5");
    const copyIconU6 = document.getElementById("copy-icons-u6");
    const copyIconU7 = document.getElementById("copy-icons-u7");
    const copyIconU8 = document.getElementById("copy-icons-u8");
    const copyIconU9 = document.getElementById("copy-icons-u9");
    const copyIconU10 = document.getElementById("copy-icons-u10");

    const usernameRange = document.createRange();
    usernameRange.selectNode(username);
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(usernameRange);
    document.execCommand("copy");
    window.getSelection().removeAllRanges();

    // alert("Username has been copied to the clipboard.");
    
    // Change the icon to a checkmark or something to indicate it's copied
    copyIconU1.className = "fa fa-check";
    copyIconU2.className = "fa fa-check";
    copyIconU3.className = "fa fa-check";
    copyIconU4.className = "fa fa-check";
    copyIconU5.className = "fa fa-check";
    copyIconU6.className = "fa fa-check";
    copyIconU7.className = "fa fa-check";
    copyIconU8.className = "fa fa-check";
    copyIconU9.className = "fa fa-check";
    copyIconU10.className = "fa fa-check";



    // Set a timeout to revert the icon back to the copy icon after a short delay (e.g., 2 seconds)
    setTimeout(() => {
        copyIconU1.className = "fas fa-copy";
        copyIconU2.className = "fas fa-copy";
        copyIconU3.className = "fas fa-copy";
        copyIconU4.className = "fas fa-copy";
        copyIconU5.className = "fas fa-copy";
        copyIconU6.className = "fas fa-copy";
        copyIconU7.className = "fas fa-copy";
        copyIconU8.className = "fas fa-copy";
        copyIconU9.className = "fas fa-copy";
        copyIconU10.className = "fas fa-copy";

    }, 2000); // 2000 milliseconds = 2 seconds

    // Optionally, you can display an alert message
    // alert("Password has been copied to the clipboard.");
}

function copyPasswordToClipboard() {
    const password = document.getElementById("password");
    const copyIcon = document.getElementById("copy-icon");
    const copyIcon1 = document.getElementById("copy-icon1");
    const copyIcon2 = document.getElementById("copy-icon2");
    const copyIcon3 = document.getElementById("copy-icon3");
    const copyIcon4 = document.getElementById("copy-icon4");
    const copyIcon5 = document.getElementById("copy-icon5");
    const copyIcon6 = document.getElementById("copy-icon6");
    const copyIcon7 = document.getElementById("copy-icon7");
    const copyIcon8 = document.getElementById("copy-icon8");
    const copyIcon9 = document.getElementById("copy-icon9");


    const passwordRange = document.createRange();
    passwordRange.selectNode(password);
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(passwordRange);
    document.execCommand("copy");
    window.getSelection().removeAllRanges();

    // Change the icon to a checkmark or something to indicate it's copied
    copyIcon.className = "fa fa-check";
    copyIcon1.className = "fa fa-check";
    copyIcon2.className = "fa fa-check";
    copyIcon3.className = "fa fa-check";
    copyIcon4.className = "fa fa-check";
    copyIcon5.className = "fa fa-check";
    copyIcon6.className = "fa fa-check";
    copyIcon7.className = "fa fa-check";
    copyIcon8.className = "fa fa-check";
    copyIcon9.className = "fa fa-check";



    // Set a timeout to revert the icon back to the copy icon after a short delay (e.g., 2 seconds)
    setTimeout(() => {
        copyIcon.className = "fas fa-copy";
        copyIcon1.className = "fas fa-copy";
        copyIcon3.className = "fas fa-copy";
        copyIcon4.className = "fas fa-copy";
        copyIcon5.className = "fas fa-copy";
        copyIcon6.className = "fas fa-copy";
        copyIcon7.className = "fas fa-copy";
        copyIcon8.className = "fas fa-copy";
        copyIcon9.className = "fas fa-copy";
        copyIcon2.className = "fas fa-copy";


    }, 2000); // 2000 milliseconds = 2 seconds

    // Optionally, you can display an alert message
    // alert("Password has been copied to the clipboard.");
}