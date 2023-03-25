var Pilotos = document.getElementById("Pilotos")
var ReinosF = document.getElementById("Reinos")
var InimigosF = document.getElementById("Inimigos")
var EquipesF = document.getElementById("Equipes")
var FilmesF = document.getElementById("Filmes")
fetch("db.json").then((response) => {
    response.json().then((dados) => {
        dados.Protagonistas.map((protagonista) => {
            Pilotos.innerHTML += `
            <img src=${protagonista.Foto}>
            <div id="Protagonistas">
            <h1>${protagonista.name}</h1>
            <h2>Equipe: ${protagonista.equipe}</h2>
            <h3>Carros: ${protagonista.carros}</h3>
            <p>Descrição: ${protagonista.description}</p>
            </div>
            `
        }),
        dados.Reinos.map((Reino) => {
            ReinosF.innerHTML += `
            <div id="Reino">
            <h1>${Reino.name}</h1>
            <h2>${Reino.description}</h2>
            <h3>${Reino.Accelechargers}</h3>
            </div>
            `
        }),
        dados.Inimigos.map((Inimigo) => {
            InimigosF.innerHTML += `
            <div id="Inimigo">
            <h1>${Inimigo.name}</h1>
            <h2>${Inimigo.description}</h2>
            <h3>Carro: ${Inimigo.carros}</h3>
            <h4>Equipe: ${Inimigo.equipe}</h4><br>
            </div>
            `
        }),
        dados.Equipes.map((Equipe) => {
            EquipesF.innerHTML += `
            <div id="Equipe">
            <h1>${Equipe.name}</h1>
            <h2>${Equipe.description}</h2>
            </div>
            `
        }),
        dados.Filmes.map((Filme) => {
            FilmesF.innerHTML += `
            <div id="FilmesF">
            <h1>${Filme.name}</h1>
            <h2>${Filme.sinopse}</h2>
            <h3>${Filme.tempoFilme}</h3>
            <h4>${Filme.data}</h4>
            </div>
            `
        })
    })
})
