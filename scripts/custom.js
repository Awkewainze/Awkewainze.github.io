var times = [
    {singular: "year", plural: "years", f: "years"},
    {singular: "month", plural: "months", f: "months"},
    {singular: "day", plural: "days", f: "days"},
    {singular: "hour", plural: "hours", f: "hours"},
    {singular: "minute", plural: "minutes", f: "minutes"}
  ]
  
  // Gonna do something about those scrapers ya knows?
  function loadContactInfo() {
    const base64ContactInfo = "eyJwaG9uZSI6IigyNjJ9IDMyNy0wNjU5IiwiZW1haWwiOiJub3ZhQHdhbHNldGgubWUifQ==";
    const contactInfo = JSON.parse(atob(base64ContactInfo));
    document.getElementById("contact-info").style = "display:none";
    document.getElementById("phone-number").innerHTML = `Phone: ${contactInfo.phone}`;
    document.getElementById("email").innerHTML = `Email: <a href="mailto:${contactInfo.email}" target="_top">${contactInfo.email}</a>`
  }

  $(document).ready(function() {
    var age = document.getElementById("age");
    let iWasBorn = moment.tz("1995-06-18 00:38", "America/Chicago");
    let setAge = () => {
      let now = moment()
      let diff = now.diff(iWasBorn);
      var duration = moment.duration(diff);
      age.innerText = times.map(x => {
        let count = duration[x.f]();
        if(count === 0) return null;
        if(count === 1) return `${count} ${x.singular}`;
        return `${count} ${x.plural}`;
      }).filter(x => x).join(", ");
    }
    setAge();
    setInterval(setAge, 2000);
  });