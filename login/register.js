import { supabase } from './main.js';

// Capturar elementos del formulario
const form = document.querySelector('.form');

form.addEventListener('submit', async (event) => {
  event.preventDefault(); // Evitar que el formulario recargue la página por defecto

  // Capturar valores de los campos
  const name = document.getElementById('name').value;
  const lastName = document.getElementById('last-name').value;
  const username = document.getElementById('username').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  // Validar campos básicos
  if (!email || !password) {
    alert('Por favor, completa todos los campos obligatorios.');
    return;
  }

  // Enviar datos a Supabase
  const { user, error } = await supabase.auth.signUp({
    email: email,
    password: password,
  });

  if (error) {
    document.querySelector('.form').insertAdjacentHTML('beforeend', `<p class="error">${error.message}</p>`);
  } else {
    document.querySelector('.form').insertAdjacentHTML('beforeend', `<p class="success">¡Registro exitoso! Bienvenido, ${name}</p>`);
  }

  if (error) {
    console.error('Error al registrar el usuario:', error.message);
    alert(`Error: ${error.message}`);
  } else {
    console.log('Usuario registrado con éxito:', user);
    alert(`¡Bienvenido, ${name}! Tu cuenta ha sido creada con éxito.`);
  }
});

