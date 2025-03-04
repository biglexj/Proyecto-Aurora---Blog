const { user, error } = await supabase.auth.signUp({
    email: 'correo@ejemplo.com',
    password: 'contraseña_segura',
  })
