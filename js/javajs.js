// Código para index.html
document.addEventListener('DOMContentLoaded', function () {
    const btnGuardar = document.getElementById('btnGuardar');
    
    if (btnGuardar) {
        btnGuardar.addEventListener('click', function () {
            const nombreCompleto = document.getElementById('nombreCompleto');
            const alerta = document.getElementById('alerta');

            if (nombreCompleto && alerta) {
                const nombre = nombreCompleto.value.trim();
                const nameRegex = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/;

                alerta.style.display = '';
                nombreCompleto.classList.remove('input-error');

                if (nombre && nameRegex.test(nombre)) {
                    localStorage.setItem('nombreEnLocal', nombre);
                    alerta.textContent = 'Acabo de guardar el nombre de: ' + nombre;
                    alerta.classList.remove('alert-warning');
                    alerta.classList.add('alert', 'alert-success');
                    alerta.style.display = 'block';
                } else {
                    alerta.textContent = 'Escribe tu nombre completo sin números o caracteres raros :c.';
                    alerta.classList.remove('alert-success');
                    alerta.classList.add('alert', 'alert-warning');
                    nombreCompleto.classList.add('input-error');
                    alerta.style.display = 'block';
                }
            }
        });
    }
});

// Código para welcome.html
document.addEventListener('DOMContentLoaded', function () {
    const nombreEnLocal = localStorage.getItem('nombreEnLocal');
    const bienvenida = document.getElementById('welcomeMessage');

    if (bienvenida) {
        if (nombreEnLocal) {
            bienvenida.textContent = '¡Holaaaa, ' + nombreEnLocal + '! Te deseo un gran día si eres un mentor viendo esto :D (psdt: me esforcé para que quedara bonito porque no lo pude terminar en clase)';
            bienvenida.classList.remove('text-info');
            bienvenida.classList.add('text-success');
        } else {
            bienvenida.textContent = 'No se ha guardado ningún nombre.';
            bienvenida.classList.remove('text-info');
            bienvenida.classList.add('text-warning');
        }

        const clearButton = document.getElementById('clearButton');
        if (clearButton) {
            clearButton.addEventListener('click', function () {
                localStorage.removeItem('nombreEnLocal');
                bienvenida.textContent = 'Noooo, lo acabas de borrar :c.';
                bienvenida.classList.remove('text-success');
                bienvenida.classList.add('text-warning');
            });
        }
    }
});
