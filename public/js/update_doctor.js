document.getElementById('edit-form').addEventListener('submit', async function (event) {
    event.preventDefault();

    const formData = new FormData(this);
    const data = {};
    formData.forEach((value, key) => {
        data[key] = value;
    });

    try {
        const response = await fetch(`/edit/${data.id}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });

        if (response.ok) {
            const updatedDoctor = await response.json();
            // Update the DOM with the new data
            document.getElementById('username').innerText = updatedDoctor.username;
            document.getElementById('ttl').innerText = updatedDoctor.ttl;
            document.getElementById('alamat').innerText = updatedDoctor.alamat;
            document.getElementById('klinik').innerText = updatedDoctor.klinik;
            document.getElementById('spesialis').innerText = updatedDoctor.spesialis;
            document.getElementById('pendidikan').innerText = updatedDoctor.pendidikan;
            document.getElementById('keanggotaan').innerText = updatedDoctor.keanggotaan;
            document.getElementById('afiliasi').innerText = updatedDoctor.afiliasi;
            document.getElementById('bahasaint').innerText = updatedDoctor.bahasaint;
            document.getElementById('bahasa').innerText = updatedDoctor.bahasa;
            document.getElementById('perkenalan').innerText = updatedDoctor.perkenalan;
            

            // Optionally reload the page
            window.location.reload(); // This will reload the entire page
        } else {
            console.error('Failed to update biodata');
        }
    } catch (error) {
        console.error('Error:', error);
    }
});
