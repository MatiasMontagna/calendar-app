# Calendar-app

El stack del proyecto es Expo + React Native + Tailwind, se creó con [Cavendish](https://github.com/platanus/cavendish), un generador open source de proyectos mobile (yo contribuyo a ese proyecto). Para poder correrlo se debe hacer 
```
yarn install
yarn start
```

Luego, una vez aparece la terminal, hay 2 opciones:
- escanear el QR con un teléfono
- Apretar la tecla `a` para abrir un emulador de Android o `i` para iniciar un emulador de iOS (exclusivo para macOS)

  # Consideraciones

- Para poder entrar como profesional (admin), se debe ingresar el valor `admin` (sín mayúsculas). Para entrar como cliente se puede usar cualquier otro valor (o ninguno)
- En el panel de admin del profesional se pueden cambiar varios valores del profesional. Para quitar días habiles, se deben dejar los campos `startsAt` y `endsAt` como vacíos en el día que se pretende no dejar como día hábil
- En el panel de booking del cliente se puede ver cuando duran las sesiones, cuanto cuestan, y seleccionar día y hora para hacer booking (en el dropdown de días no va a aparecer un día si el profesional lo dejó como no habil)
- No se alcanzó a implementar el booking
  
