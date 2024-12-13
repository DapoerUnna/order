// Menangani klik pada tombol "Order Sekarang"
const orderNowButtons = document.querySelectorAll('.orderNowBtn'); // Hapus spasi sebelum 'orderNowBtn'
orderNowButtons.forEach(button => {
    button.addEventListener('click', function() {
        // Menampilkan form pemesanan yang sesuai
        const orderForm = this.parentElement.nextElementSibling;
        orderForm.style.display = orderForm.style.display === 'none' ? 'block' : 'none';
    });
});

// Menangani pengiriman form pemesanan
const submitOrderButtons = document.querySelectorAll('.submitOrderBtn');
submitOrderButtons.forEach(button => {
    button.addEventListener('click', function() {
        const orderForm = this.parentElement;
        const product = this.closest('.menu-item').getAttribute('data-product'); // Ambil nama produk dari atribut data
        const name = orderForm.querySelector('input[type="text"][id*="name"]').value;
        const address = orderForm.querySelector('input[type="text"][id*="address"]').value;
        const phone = orderForm.querySelector('input[type="text"][id*="phone"]').value;
        const email = orderForm.querySelector('input[type="email"]').value;

        // Membuat pesan untuk WhatsApp
        const message = `Halo saya ingin memesan ${product} atas nama ${name} ini alamat saya ${address} no hp saya ${phone} dan ini untuk email saya ${email}`;
        
        // Encode pesan untuk URL
        const encodedMessage = encodeURIComponent(message);
        
        // Nomor telepon tujuan (ganti dengan nomor yang sesuai)
        const phoneNumber = '1234567890'; // Ganti dengan nomor telepon yang diinginkan
        
        // Membuat URL WhatsApp
        const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodedMessage}`;
        
        // Mengarahkan pengguna ke WhatsApp
        window.open(whatsappUrl, '_blank');

        // Reset form setelah pengiriman
        orderForm.reset();
        orderForm.style.display = 'none';
    });
});