document.getElementById('login-form').addEventListener('submit',function(event){
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    fetch('/login',{
        method: 'POST',
        headers: {
            'Content-Type: ': 'application/json'
        },
        body: JSON.stringify({username,password})
    })

    .then(response => response.json())
    .then(data => {
        if(data.success) {
            alert('login berhasil');
            localStorage.setItem('loginSession',JSON.stringify(data.session));
        } else{
            alert('login gagal');
        }
    })
    .catch(error => console.error('Error: ',error));
});