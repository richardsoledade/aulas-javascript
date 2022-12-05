let baseDeAutomoveis = []; //Array geral

function mostrarMenu() {
  //função de menu
  let opcoes = prompt(`
    (1) - Cadastrar automóvel;
    (2) - Pesquisar automóvel;
    (3) - Excluir automóvel;
    (4) - Listar Todos os Veiculos
    (0) - Sair
    `);

  if (opcoes == 1) {
    cadastrarDados();
  } else if (opcoes == 2) {
    pesquisarAutomovel();
  } else if (opcoes == 3) {
    excluirAuto();
  } else if (opcoes == 4) {
    listarTodos();
  } else if (opcoes == 0) {
    sairDoMenu();
  } else {
    alert(`opção invalida`);
  }
}
let carro = {}; //variavel objeto vazio

function cadastrarDados() {
  let marca = prompt(`Marca do veículo`);
  let modelo = prompt(`Modelo do veiculo`);
  let placa = prompt(`Qual a placa do veiculo`);
  let ano = prompt(`qual o ano de fabricação`);

  carro = { marca: marca, modelo: modelo, placa: placa, ano: ano }; //tageamento de objeto

  let condicaoExistente = false; //verificador de placa existente
  baseDeAutomoveis.forEach((item) => {
    if (item.placa == carro.placa) {
      condicaoExistente = true;
    }
  });

  if (condicaoExistente == false) {
    //condição de registro
    baseDeAutomoveis.push(carro);
  } else {
    alert(`PLACA EXISTENTE`);
  }
  mostrarMenu();
}
function pesquisarAutomovel() {
  //pesquisar automovel especifico
  let pesquisa = prompt(`o que procura?`);
  let carroPesquisado = "";
  baseDeAutomoveis.forEach((carro) => {
    if (
      pesquisa == carro.placa ||
      pesquisa == carro.marca ||
      pesquisa == carro.modelo ||
      pesquisa == carro.ano
    ) {
      //retorno de pesquisa do veiculo
      carroPesquisado += `
      marca: ${carro.marca}, 
      modelo: ${carro.modelo}, 
      placa: ${carro.placa},
      ano: ${carro.ano} 

      `;
    }
  });
  if (carroPesquisado != "") {
    // condição de pesquisa
    alert(`${carroPesquisado}`);
  } else {
    alert(`VEICULO NÃO ENCONTRADO`);
  }
  mostrarMenu();
}

function listarTodos() {
  // Listar todos os veiculos cadastrados
  let listarCarros = "";
  baseDeAutomoveis.forEach((carro) => {
    listarCarros += `
      marca: ${carro.marca}, 
      modelo: ${carro.modelo}, 
      placa: ${carro.placa},
      ano: ${carro.ano} 

      `;
  });
  if (baseDeAutomoveis.length == 0) {
    //condição se há ou nao registro
    alert(`nenhum veiculo cadastrado`);
  } else {
    alert(listarCarros);
  }
  mostrarMenu();
}

function excluirAuto() {
  //exclusão de veiculo por placa digitada
  let digitarPlaca = prompt(`Qual a placa do veiculo a ser removido?`);
  let placaEncontrada = false;
  baseDeAutomoveis.forEach(function (item, index) {
    if (item.placa == digitarPlaca) {
      baseDeAutomoveis.splice(index, 1);
      placaEncontrada = true;
      alert(`veiculo de placa: ${digitarPlaca}, foi removido`);
    }
  });
  if (!placaEncontrada) {
    //condição placa invalida
    alert("veiculo nao encontrado");
  }
  mostrarMenu();
}
function sairDoMenu() {
  //finalização de prompt
  alert(`Sessão finalizada`);
}

mostrarMenu();

// Fim do script
