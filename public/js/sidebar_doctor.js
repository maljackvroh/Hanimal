document.addEventListener('DOMContentLoaded', function() {
    const sidebarLinks = document.querySelectorAll('.ha-sidebar a');
    const contentSections = {
        biodata: document.getElementById('biodata'),
        penanganan: document.getElementById('penanganan'),
        rekamMedis: document.getElementById('rekam-medis')
    };

    sidebarLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            
            sidebarLinks.forEach(link => link.classList.remove('active'));
            
            for (const key in contentSections) {
                contentSections[key].classList.remove('active');
            }
            
            this.classList.add('active');
            const targetClass = this.classList[0];
            contentSections[targetClass.split('-')[1]].classList.add('active');
        });
    });

    const editButton = document.getElementById('edit-button');
    const editForm = document.getElementById('edit-form');
    const cancelButton = document.getElementById('cancel-button');
    const biodataContent = document.querySelector('.ha-biodata dl');

    editButton.addEventListener('click', function() {
        biodataContent.style.display = 'none';
        editForm.style.display = 'block';
    });

    cancelButton.addEventListener('click', function() {
        biodataContent.style.display = 'block';
        editForm.style.display = 'none';
    });
  });