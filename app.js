document.getElementById('form-problemas').addEventListener('submit', function(event) {
    event.preventDefault();
    document.getElementById('problemas').style.display = 'none';
    document.getElementById('evaluacion').style.display = 'block';
});

document.getElementById('form-evaluacion').addEventListener('submit', function(event) {
    event.preventDefault();
    document.getElementById('evaluacion').style.display = 'none';
    document.getElementById('cita').style.display = 'block';
});

document.getElementById('form-cita').addEventListener('submit', function(event) {
    event.preventDefault();

    const nombre = document.getElementById('nombre').value;
    const cedula = document.getElementById('cedula').value;
    const fecha = document.getElementById('fecha').value;
    const hora = document.getElementById('hora').value;

    const facturaContent = `
        <p><strong>Factura de Cita:</strong></p>
        <p>Nombre: ${nombre}</p>
        <p>Cédula: ${cedula}</p>
        <p>Fecha: ${fecha}</p>
        <p>Hora: ${hora}</p>
    `;
    document.getElementById('factura-content').innerHTML = facturaContent;
    
    document.getElementById('cita').style.display = 'none';
    document.getElementById('factura').style.display = 'block';
});
