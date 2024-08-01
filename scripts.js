const agendaModal = document.getElementById('agenda-modal');
const reservaModal = document.getElementById('reserva-modal');
const abrirAgendaBtn = document.getElementById('abrir-agenda');
const cerrarAgendaBtn = agendaModal.querySelector('.cerrar');
const cerrarReservaBtn = reservaModal.querySelector('.cerrar-reserva');
const reservarBtns = document.querySelectorAll('.reservar-btn');

// Función para abrir un modal
function abrirModal(modal) {
    modal.style.display = 'block';
}

// Función para cerrar un modal
function cerrarModal(modal) {
    modal.style.display = 'none';
}

// Abrir el modal de la agenda
abrirAgendaBtn.onclick = () => abrirModal(agendaModal);

// Cerrar el modal de la agenda
cerrarAgendaBtn.onclick = () => cerrarModal(agendaModal);

// Cerrar el modal de reserva
cerrarReservaBtn.onclick = () => cerrarModal(reservaModal);

// Manejar la reserva de turnos
reservarBtns.forEach(btn => {
    btn.onclick = (event) => {
        const time = event.target.getAttribute('data-time');
        document.getElementById('reserva-time').value = time;
        abrirModal(reservaModal);
    };
});

// Manejar el formulario de reserva
document.getElementById('reserva-form').onsubmit = (event) => {
    event.preventDefault();
    const time = document.getElementById('reserva-time').value;
    const nombre = document.getElementById('nombre').value;
    const telefono = document.getElementById('telefono').value;
    const email = document.getElementById('email').value;
    
    alert(`Reserva confirmada para ${time}\nNombre: ${nombre}\nTeléfono: ${telefono}\nEmail: ${email}`);
    cerrarModal(reservaModal);
};

