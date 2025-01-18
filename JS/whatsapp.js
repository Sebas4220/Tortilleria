function enviarWhatsApp(event) {
    event.preventDefault();
    
    const nombre = document.getElementById('nombre').value;
    const apellido = document.getElementById('apellido').value;
    const correo = document.getElementById('correo').value;
    const telefono = document.getElementById('telefono').value;
    
    const mensaje = `*Nuevo cliente*%0A%0A` +
                   `*Nombre:*%0A${nombre}%0A%0A` +
                   `*Apellido:*%0A${apellido}%0A%0A` +
                   `*Correo:*%0A${correo}%0A%0A` +
                   `*Teléfono de Contacto:*%0A${telefono}`;
    
    const numeroWhatsApp = '584245542026';
    
    const urlWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${mensaje}`;
    const urlWhatsAppBusiness = `https://api.whatsapp.com/send?phone=${numeroWhatsApp}&text=${mensaje}`;
    
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    
    if (isMobile) {
        try {
            window.location.href = urlWhatsApp;
            setTimeout(() => {
                window.location.href = urlWhatsAppBusiness;
            }, 500);
        } catch (e) {
            window.open(urlWhatsAppBusiness, '_blank');
        }
    } else {
        window.open(urlWhatsApp, '_blank');
    }
} 