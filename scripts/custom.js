var times = [
    { singular: "year", plural: "years", f: "years" },
    { singular: "month", plural: "months", f: "months" },
    { singular: "day", plural: "days", f: "days" },
    { singular: "hour", plural: "hours", f: "hours" },
    { singular: "minute", plural: "minutes", f: "minutes" },
];

// Gonna do something about those scrapers ya knows?
function loadContactInfo() {
    const base64ContactInfo = "eyJwaG9uZSI6IigyNjJ9IDMyNy0wNjU5IiwiZW1haWwiOiJub3ZhQHdhbHNldGgubWUifQ==";
    const contactInfo = JSON.parse(atob(base64ContactInfo));
    document.getElementById("contact-info").style = "display:none";
    document.getElementById("phone-number").innerHTML = `Phone: ${contactInfo.phone}`;
    document.getElementById(
        "email"
    ).innerHTML = `Email: <a href="mailto:${contactInfo.email}" target="_top">${contactInfo.email}</a>`;
}

let toggled = false;
let draw;
function toggleStarfield() {
    if (toggled) return;
    document.getElementById("toggle-starfield").style = "display:none";
    draw();
}

$(document).ready(function () {
    var age = document.getElementById("age");
    let iWasBorn = moment.tz("1995-06-18 00:38", "America/Chicago");
    let setAge = () => {
        let now = moment();
        let diff = now.diff(iWasBorn);
        var duration = moment.duration(diff);
        age.innerText = times
            .map(x => {
                let count = duration[x.f]();
                if (count === 0) return null;
                if (count === 1) return `${count} ${x.singular}`;
                return `${count} ${x.plural}`;
            })
            .filter(x => x)
            .join(", ");
    };
    setAge();
    setInterval(setAge, 2000);
});

document.addEventListener("DOMContentLoaded", () => {
    const canvas = document.getElementById("starField");
    const c = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    class Star {
        constructor() {
            //initializing
            this.x = Math.random() * canvas.width - canvas.width / 2; //random x
            this.y = Math.random() * canvas.height - canvas.height / 2; //random y
            this.px, this.py;
            this.z = Math.random() * 4; //random z
        }

        update() {
            //stores previous x, y and z and generates new coordinates
            this.px = this.x;
            this.py = this.y;
            this.z += speed;
            this.x += this.x * (speed * 0.2) * this.z;
            this.y += this.y * (speed * 0.2) * this.z;
            if (
                this.x > canvas.width / 2 + 50 ||
                this.x < -canvas.width / 2 - 50 ||
                this.y > canvas.height / 2 + 50 ||
                this.y < -canvas.height / 2 - 50
            ) {
                this.x = Math.random() * canvas.width - canvas.width / 2;
                this.y = Math.random() * canvas.height - canvas.height / 2;
                this.px = this.x;
                this.py = this.y;
                this.z = 0;
            }
        }

        //draws line from x,y to px,py
        show() {
            c.lineWidth = this.z;
            c.beginPath();
            c.moveTo(this.x, this.y);
            c.lineTo(this.px, this.py);
            c.stroke();
        }
    }
    let speed = 0.005;
    let stars = [];
    for (let i = 0; i < 100; i++) stars.push(new Star());
    c.fillStyle = "rgba(0, 0, 0, 0.1)";
    c.strokeStyle = "rgb(" + Math.random() * 255 + ", " + Math.random() * 255 + ", " + Math.random() * 255 + ")";
    c.translate(canvas.width / 2, canvas.height / 2);
    draw = () => {
        //create rectangle
        c.fillRect(-canvas.width / 2, -canvas.height / 2, canvas.width, canvas.height);
        for (let s of stars) {
            s.update();
            s.show();
        }
        document.body.style.background = "url(" + canvas.toDataURL() + ")";
        // document.body.style.backgroundRepeat = "no-repeat";
        document.body.style.backgroundAttachment = "fixed";
        // document.body.style.backgroundSize = "cover";
        requestAnimationFrame(draw);
    };
    draw();
});
