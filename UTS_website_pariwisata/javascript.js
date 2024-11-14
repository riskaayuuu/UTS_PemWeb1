
document.getElementById('ticketOrderForm').addEventListener('submit', function(event) {
    event.preventDefault(); 
   
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const ticketQuantity = document.getElementById('ticketQuantity').value;
    const message = document.getElementById('message').value;
    
    const ticketPrice = (ticketQuantity <= 20) ? 20000 : 25000; 
    const totalPrice = ticketQuantity * ticketPrice;
    
    alert(`Nama: ${name}\nEmail: ${email}\nNo Telepon: ${phone}\nJumlah Tiket: ${ticketQuantity}\nTotal Harga: Rp. ${totalPrice}\nPesan: ${message}`);
  
    document.getElementById('ticketOrderForm').reset();
});