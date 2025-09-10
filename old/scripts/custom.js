function loadContactInfo() {
    const base64ContactInfo = "eyJwaG9uZSI6IigyNjJ9IDMyNy0wNjU5IiwiZW1haWwiOiJub3ZhQHdhbHNldGgubWUifQ==";
    const contactInfo = JSON.parse(atob(base64ContactInfo));
    document.getElementById("contact-info").style = "display:none";
    document.getElementById("phone-number").innerHTML = `Phone: ${contactInfo.phone}`;
    document.getElementById(
        "email"
    ).innerHTML = `Email: <a href="mailto:${contactInfo.email}" target="_top">${contactInfo.email}</a>`;
}
