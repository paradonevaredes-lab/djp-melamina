# DJP Melamina

Sitio de una página para DJP Melamina, en Ayacucho. Abre `index.html` con doble clic para verlo en el navegador.

## Cómo publicarlo gratis con GitHub Pages

1. Descomprime `DJP-Melamina-web.zip`.
2. En GitHub, crea un repositorio **público** llamado `djp-melamina`.
3. Usa **Add file → Upload files** y arrastra el contenido de la carpeta descomprimida, incluida la carpeta `assets`. En la primera pantalla del repositorio vacío, GitHub también ofrece **uploading an existing file**.
4. Comprueba que `index.html` esté en la primera pantalla del repositorio, al lado de `assets`. Pulsa **Commit changes**.
5. Abre **Settings → Pages**. Selecciona **Deploy from a branch**, luego **main** y **/(root)**. Pulsa **Save**.
6. Cuando termine la publicación, **Settings → Pages** mostrará el enlace. Con el nombre de ejemplo, será `https://TU-USUARIO.github.io/djp-melamina/`.

[Guía oficial de GitHub Pages](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site)

## Cómo actualizar la web

- **Fotos.** Reemplaza los archivos de `assets` conservando sus nombres, o modifica los atributos `src` en `index.html`. Actualiza `alt` para describir cada foto nueva. Conserva «Imagen de referencia» para las imágenes ilustrativas y retíralo en las fotos de trabajos propios.
- **Servicios.** Edita los títulos y descripciones de la sección `id="servicios"` en `index.html`.
- **WhatsApp.** Reemplaza `51991809888` en los enlaces `wa.me` y actualiza `991 809 888` en el botón de contacto. Usa el código de país seguido del número, sin espacios ni el signo +, dentro de los enlaces.
- **Logo.** Reemplaza `assets/logo.svg` por la versión nueva del logo con el mismo nombre.

Después de editar con GitHub, pulsa **Commit changes**. Pages volverá a publicar la página desde la rama configurada.
