function pesquisar() {
    // Seleciona a seção HTML onde os resultados da pesquisa serão exibidos
    let section = document.getElementById("resultados-pesquisa");
      
    let campoPesquisa = document.getElementById("campo-pesquisa").value;

    // se campoPesquisa for uma string sem nada 
if(!campoPesquisa) {
  section.innerHTML = "<p>Busca Vazia. Digite um nome.</p>"
   return
}

campoPesquisa = campoPesquisa.toLowerCase()

    // Inicializa uma string vazia para armazenar os resultados da pesquisa
    let resultados = "";
    let nome = "";
    let periodo = "";
    let livro = "";
    let frase = "";
    let historia = "";
    let papel = "";
    let temas = "";
    let tags = "";
  
    // Itera sobre cada dado na lista de dados (assumindo que 'dados' é um array)
    for (let dado of dados) {
      nome = dado.nome.toLowerCase()
      periodo = dado.periodo.toLowerCase()
      livro = dado.livro.toLowerCase()
      frase = dado.frase.toLowerCase()
      historia = dado.historia.toLowerCase()
      papel = dado.papel.toLowerCase()
      temas = dado.temas.toLowerCase()
      tags = dado.tags.toLowerCase()

      // se nome includes campoPesquisa
      if (nome.includes(campoPesquisa) || periodo.includes(campoPesquisa)|| livro.includes(campoPesquisa)|| frase.includes(campoPesquisa)|| historia.includes(campoPesquisa)|| papel.includes(campoPesquisa)|| temas.includes(campoPesquisa)|| tags.includes(campoPesquisa)) {
         // Cria um novo elemento div (HTML) para cada dado e adiciona as informações
         resultados += `
        <div class="item-resultado">
          <h2> 
            <a href="#" target="_blank">${dado.nome}</a> 
          </h2>
          <p class="descricao-meta">${dado.periodo}</p>
          <p class="descricao-meta">${dado.livro}</p>
          <p class="descricao-meta">${dado.frase}</p>
          <p class="descricao-meta">${dado.historia}</p>
          <p class="descricao-meta">${dado.papel}</p>
          <p class="descricao-meta">${dado.temas}</p>
          <a href=${dado.link} target="_blank">Mais informações</a>
        </div>
      `;
      }    
      
    }
  
    if (!resultados) {
        resultados = "<p>Nada foi encontrado</p>"
}

    // Atribui os resultados gerados ao conteúdo HTML da seção
    section.innerHTML = resultados;
  }