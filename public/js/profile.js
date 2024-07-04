document.addEventListener("DOMContentLoaded", function() {
    const profileLink = document.querySelector(".profile-link");
    const biodataContent = document.querySelector(".biodata");

    profileLink.addEventListener("click", function() {
        fetchDoctorProfile(); // Memanggil fungsi untuk mengambil dan menampilkan profil dokter
    });

    async function fetchDoctorProfile() {
        try {
            const response = await fetch('/api/doctor/profile'); // Endpoint untuk mengambil profil dokter
            if (!response.ok) {
                throw new Error('Failed to fetch doctor profile');
            }
            const doctorProfile = await response.json();
            displayDoctorProfile(doctorProfile);
        } catch (error) {
            console.error('Error fetching doctor profile:', error);
        }
    }

    function displayDoctorProfile(profile) {
        // Mengisi data profil dokter ke dalam tag <dd> yang sesuai
        biodataContent.innerHTML = `
            <dl>
                <dt>Nama</dt>
                <dd>${profile.nama}</dd>
                <dt>Tanggal Lahir</dt>
                <dd>${profile.tanggal_lahir}</dd>
                <dt>Umur</dt>
                <dd>${profile.umur}</dd>
                <dt>Alamat</dt>
                <dd>${profile.alamat}</dd>
                <dt>Spesialisasi</dt>
                <dd>${profile.spesialisasi}</dd>
                <dt>Pendidikan</dt>
                <dd>${profile.pendidikan}</dd>
                <dt>Keanggotaan Profesional</dt>
                <dd>${profile.keanggotaan}</dd>
                <dt>Afiliasi Rumah Sakit</dt>
                <dd>${profile.afiliasi}</dd>
                <dt>Bahasa Internasional</dt>
                <dd>${profile.bahasa_internasional}</dd>
                <dt>Bahasa Daerah</dt>
                <dd>${profile.bahasa_daerah}</dd>
                <dt>Perkenalan</dt>
                <dd>${profile.perkenalan}</dd>
            </dl>
        `;
    }
});
