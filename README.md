# Amigo Secreto

Aplicación web sencilla para gestionar una lista de participantes y realizar un sorteo aleatorio de “amigo secreto”. Funciona 100% en el navegador, sin dependencias ni instalación.

## Características
* **Agregar nombres:** Escribe un nombre y haz clic en “Añadir” para incorporarlo a la lista.
* **Validación básica:** Si el campo está vacío (o solo espacios), se solicita ingresar un nombre válido.
* **Lista visible:** Los nombres agregados se muestran inmediatamente en la sección de lista.
* **Sorteo aleatorio:** Con “Sortear amigo” se elige un nombre al azar y se muestra el resultado.

## Requisitos
* Navegador moderno (Chrome, Edge, Firefox, Safari) con JavaScript habilitado.
* No se requiere servidor ni instalación de paquetes.

## Cómo ejecutar
Tienes varias opciones, elige la que prefieras:
1. **Abrir el archivo directamente:** Doble clic en `index.html` para abrirlo en tu navegador.
2. **Extensión Live Server (VS Code):** Abre la carpeta del proyecto y ejecuta “Open with Live Server”.
3. **Servidor estático opcional (Node):**
```bash
npx http-server . -p 5500 -o
```

## Uso
1. Escribe un nombre en el campo de texto.
2. Haz clic en “Añadir” para incorporarlo a la lista.
3. Repite hasta tener al menos dos nombres.
4. Presiona “Sortear amigo” para ver el resultado.

Nota: El sorteo requiere al menos 2 participantes.

## Estructura del proyecto
```text
Amigo secreto/
├─ index.html        # Estructura de la página
├─ app.js            # Lógica: agregar y sortear
└─ style.css         # Estilos (si aplica)
```

## Detalles técnicos
* La lista de participantes se mantiene en memoria (variable `amigos`).
* Las funciones principales son:
  * `actualizarLista()` – refresca la UI con los nombres actuales.
  * `agregarAmigo()` – valida, agrega el nombre y limpia el campo.
  * `sortearAmigo()` – selecciona un elemento al azar de `amigos`.

## Accesibilidad y UX
* Los resultados del sorteo se anuncian en una región con `aria-live="polite"`.
* La lista utiliza `role="list"` y un `label` asociado para mejor semántica.

## Ideas de mejora (opcional)
* Evitar nombres duplicados.
* Permitir eliminar nombres de la lista.
* Mostrar historial de sorteos o todos los emparejamientos.
* Validaciones adicionales (longitud mínima, caracteres permitidos).
