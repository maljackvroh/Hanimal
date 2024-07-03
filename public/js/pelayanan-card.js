async function fetchDoctors() {
    try {
        const response = await fetch('http://localhost:3000/doctor');
        const doctors = await response.json();
        const container = document.getElementById('doctor-container');
        doctors.forEach(doctor => {
            const card = document.createElement('div');
            card.className = 'card';
            card.innerHTML = `
                <div class="doctor-image">
                    <img src="${doctor.image}" alt="Doctor Image">
                </div>
                <h2>${doctor.username}</h2>
                <p>${doctor.spesialis}</p>
                <div class="buttons">
                    <button class="profile-btn" href="">Profile</button>
                    <button class="order-btn" href="https://wa.me/<%= doctor.no_hp %>">Pesan</button>
                </div>
            `;
            container.appendChild(card);
        });
    } catch (error) {
        console.error('Error fetching doctors:', error);
    }
}

document.addEventListener('DOMContentLoaded', fetchDoctors);