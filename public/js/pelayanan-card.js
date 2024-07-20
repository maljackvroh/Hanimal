async function fetchDoctors() {
  try {
    const response = await fetch("http://hanimal.online:3000/doctor");
    const doctors = await response.json();
    const container = document.getElementById("doctor-container");
    doctors.forEach((doctor) => {
      const card = document.createElement("div");
      card.className = "card";
      card.innerHTML = `
                <h2>${doctor.username}</h2>
                ${doctor.spesialis ? `<p>${doctor.spesialis}</p>` : ""}
                <div class="buttons">
                    <button class="profile-btn" onclick="redirectToProfile('${
                      doctor.username
                    }')">Profile</button>
                    <button class="order-btn" onclick="redirectToOrder('${
                      doctor.username
                    }')">Pesan</button>
                    <button class="discuss-btn" onclick="redirectToWhatsApp('${
                      doctor.no_hp
                    }')">Diskusi</button>
                </div>
            `;
      container.appendChild(card);
    });
  } catch (error) {
    console.error("Error fetching doctors:", error);
  }
}

function redirectToProfile(username) {
  window.location.href = `/profile?username=${username}`;
}

function redirectToOrder(username) {
  window.location.href = `/pesan?username=${username}`;
}

function redirectToWhatsApp(phone) {
  window.location.href = `https://wa.me/${phone}`;
}

document.addEventListener("DOMContentLoaded", fetchDoctors);
