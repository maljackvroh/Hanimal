function toggleEditPanel(userId) {
    const editPanel = document.getElementById('editPanel_' + userId);
    editPanel.classList.toggle('active');
}

function closeEditPanel(userId) {
    document.getElementById('editPanel_' + userId).classList.remove('active');
}

function updateUser(userId) {
    const formData = new FormData(document.querySelector(`#editPanel_${userId} .editForm`));

    fetch(`/users/${userId}`, {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        console.log(data.message);
        closeEditPanel(userId); // Close edit panel after successful update
        // Optionally, reload the page or update the user list
    })
    .catch(error => console.error('Error updating user:', error));
}