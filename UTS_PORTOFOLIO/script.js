document.getElementById('contactForm').addEventListener('submit', function(event) {
        event.preventDefault(); 
 
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;
        const message = document.getElementById('message').value;
        
        alert(`Nama: ${name}\nEmail: ${email}\nNo Telepon: ${phone}\nPesan: ${message}`);
        
        document.getElementById('contactForm').reset();
    });