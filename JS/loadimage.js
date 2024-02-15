function buscarPersonaje() {
  var characterId = document.getElementById("characterId").value;
  var url = `https://swapi.dev/api/people/${characterId}/`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      document.getElementById("resultado").innerHTML = `
    <h1>Información del Personaje</h1>
    <h2><strong>Nombre:</strong> ${data.name}</h2>
    <h2><strong>Altura:</strong> ${data.height}</h2>
    <h2><strong>Peso:</strong> ${data.mass}</h2>
    <h2><strong>Color de Pelo:</strong> ${data.hair_color}</h2>
    <h2><strong>Color de Ojos:</strong> ${data.eye_color}</h2>
    <h2><strong>Año de Nacimiento:</strong> ${data.birth_year}</h2>
  `;
    })
    .catch((error) => {
      // Manejar errores
      console.error("Error al buscar el personaje:", error);
      document.getElementById("resultado").innerHTML =
        "<p>Error al buscar el personaje. Por favor, inténtelo de nuevo.</p>";
    });
}
