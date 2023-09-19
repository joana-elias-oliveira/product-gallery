// Array de produtos
const produtos = [
    { imagem: 'foto/pocket.jpg', titulo: 'Celular Xiaomi Redmi Note 12 128GB', valor: 'R$ 1.053,49', descricao: 'O Redmi Note 12 é um smartphone Android avançado e abrangente em todos os pontos de vista com algumas características excelentes. Tem uma grande tela de 6.67 polegadas com uma resolução de 2400x1080 pixels. As funcionalidades oferecidas pelo Redmi Note 12 são muitas e inovadoras. Começando pelo 4G que permite a transferência de dados e excelente navegação na internet. Enfatizamos a excelente memória interna de 128 GB com a possibilidade de expansão. O Redmi Note 12 é um produto com poucos concorrentes em termos de multimídia graças à câmera de 48 megapixels que permite ao Redmi Note 12 tirar fotos fantásticas com uma resolução de 8000x6000 pixels e gravar vídeos em alta definição (Full HD) com uma resolução de 1920x1080 pixels. Muito fino, 8 milímetros, o que torna o Redmi Note 12 realmente interessante..' },
    { imagem: 'foto/mesa.jpg', titulo: 'Wacom One CTL472 - Mesa Digitalizadora', valor: 'R$ 177,00', descricao: 'Criatividade digital facilitada - Nova One by Wacom CTL472 Você e seu computador em harmonia criativa. Esboce, desenhe e edite fotografias com uma experiência de caneta simplesmente ótima. Não poderia ser mais fácil' },
    { imagem: 'foto/tv.jpg', titulo: 'Samsung T350 - Monitor Gamer, 24', valor: 'R$ 858,00', descricao: 'Monitor Gamer Samsung 24" FHD,75Hz, HDMI, VGA,Freesync, Preto, Série T350' },
    { imagem: 'foto/t.jpg', titulo: 'Clamper Energia 5 Tomadas', valor: 'R$ 64,90', descricao: 'Um DPS Classe III, com capacidade de dreno de corrente de 13.500 amperes. Além proteger aparelhos eletroeletrônicos contra Surtos Elétricos, o iCLAMPER Energia 5 é um filtro de linha Bivolt (127 V / 220 V) desenvolvido para garantir uma alta atenuação aos ruídos EMI (sinais eletromagnéticos) e RFI (radiofrequência). Equipado com chave microdisjuntor, que desarma ao detectar sobrecargas, curto-circuitos ou instalação de equipamentos com corrente superior à capacidade do aparelho.' },
    { imagem: 'foto/sup.jpg', titulo: 'ELG F80N - Suporte Ergonômico', valor: 'R$ 11,00', descricao: 'O F80N é um suporte de mesa para 01 (um) monitor, desenvolvido com sistema de braço articulado com amortecedor a gás (pistão), que permite movimentos suaves para um perfeito ajuste de direção e altura' },
    { imagem: 'foto/fone.jpg', titulo: 'Headphone Fone de Ouvido Havit HV-H2232d', valor: 'R$ 120,00', descricao: 'Gaming Headphone Havit HV-H2232d, Design simples e elegante, os 2 fones possuem iluminação RGB, microfone: ?4.0 * 1, 5mm, resposta de frequência: 20 Hz – 20kHz, sensibilidade: 109db 3dB, Impedância: 21 15% ?, conector USB (apenas para iluminação).' },
    { imagem: 'foto/pc.jpg', titulo: 'PC Gamer ITX Arena', valor: 'R$ 2.349,00', descricao: 'Uma plataforma com o que há de mais atual em tecnologia, levando você ao topo. PC Gamer do jeito que você precisa. Os Computadores ITX Gamer são confeccionados com os melhores componentes do mercado de TI mundial, te proporcionando máquinas de altíssimo desempenho, performance e durabilidade. Com o processador de AMD de 5ª geração equipado com um vídeo integrado de dar inveja na concorrência, você terá possibilidade de iniciar no mundo gamer sem gastar muito.' },
    { imagem: 'foto/process.jpg', titulo: 'Processador AMD Ryzen 5 5600G', valor: 'R$ 830,00', descricao: 'Processador AMD Ryzen 5 5600G, 3.9GHz (4.4GHz Max Turbo), AM4, Vídeo Integrado, 6 Núcleos Amd ryzen 5 5600g Descubra produtos úteis para você.Produtos com garantia de qualidade' },
    { imagem: 'foto/pasta.jpg', titulo: 'Pasta Térmica Thermal Silver Seringa 5G Prata Implastec', valor: 'R$ 26,00', descricao: 'Pasta Térmica Thermal Silver é formulada a partir da conveniente aditivação de silicone modificado com materiais especiais, de alta condução térmica, conferindo a este produto um desempenho superior em dissipação de calor. Com alta condução térmica (1,6 W/mK) e sua facilidade de espalhamento, a Pasta Térmica Thermal Silver recobre totalmente as superfícies térmicas, preenche todas as micro lacunas entre as superfícies, eliminando o ar retido e oferecendo resistência térmica muito baixa.' },
    { imagem: 'foto/capa.jpg', titulo: 'Capa de Couro Sintético Dupla Proteção com Teclado Bluetooth e Mouse', valor: 'R$ 138,00', descricao: 'Criatividade digital facilitada - Nova One by Wacom CTL472 Você e seu computador em harmonia criativa. Esboce, desenhe e edite fotografias com uma experiência de caneta simplesmente ótima. Não poderia ser mais fácil' },
    { imagem: 'foto/foninho.jpg', titulo: 'Fone de Ouvido Philips com Microfone - Preto', valor: 'R$ 31,00', descricao: 'Fone de ouvido Philips com microfone e 1,2 metros de comprimento na cor preto TAUE101BK/00' },
    { imagem: 'foto/mouse.jpg', titulo: 'Mouse Classic Box Óptico USB 1200dpi Preto Multilaser', valor: 'R$ 11,00', descricao: 'Mouse Classic Box Óptico Full Black USB - MO300' },
    { imagem: 'foto/vid.jpg', titulo: 'Placa de Video RTX 4060 8GB GDDR6 128BIT ', valor: 'R$ 2.650,00', descricao: 'Placa de Video RTX 4060 8GB GDDR6 128BIT GALAX EX 1-CLICK OC 46NSL8MD8MEX' },
    { imagem: 'foto/moni.jpg', titulo: 'Monitor Philips 27" IPS com HDMI e Bordas Ultrafinas', valor: 'R$ 1.150,00', descricao: 'Monitor Philips 27" IPS com HDMI e Bordas Ultrafinas' },
    { imagem: 'foto/tablet.jpg', titulo: 'Tablet Samsung Galaxy S6 Lite Sm-P619 128gb Cinza', valor: 'R$ 2.399,00', descricao: 'Samsung Galaxy Tab trás mais comodidade, performance , agilidade para seu dia a dia . Com ele você pode jogar , assistir a filmes , trabalhar , estudar . Tudo em um único produto , leve e portátil' },
    { imagem: 'foto/imp.jpg', titulo: 'Impressora Multifuncional HP Ink Tank 416', valor: 'R$ 683,00', descricao: 'Com a Impressora Multifuncional TANQUE DE TINTA CONECTADA PLUS Ink Tank Wireless 416 você imprime grandes volumes com um custo por página baixíssimo. São até 8.000 páginas em cores e 6.000 em preto¹, sempre com alta qualidade das Tintas Originais HP que já vem na caixa. Imprima facilmente em altos volumes, com um custo por página extremamente baixo,1 usando um sistema de tinta confiável, que não respinga.3 Imprima até 8.000 páginas em cores 6.000 páginas em preto,2 e produza qualidade excepcional.' },
];

// Elementos do DOM
const itemCountSelect = document.getElementById("itemCountSelect");
const searchInput = document.getElementById("searchInput");
const container = document.getElementById("container");
const modal = document.getElementById("myModal");

// Event listeners
itemCountSelect.addEventListener("change", criarGaleria);
searchInput.addEventListener("input", filtrarProdutos);

// Função para exibir detalhes do produto
function exibirDetalhes(index) {
  const product = produtos[index];
  document.getElementById("modalTitle").textContent = product.titulo;
  document.getElementById("modalDescription").textContent = product.descricao;
  document.getElementById("modalValue").textContent = product.valor;
  modal.style.display = "block";
}

// Função para criar a galeria de produtos
function criarGaleria() {
  const numeroItens = parseInt(itemCountSelect.value);
  container.innerHTML = "";

  for (let i = 0; i < numeroItens && i < produtos.length; i++) {
    const product = produtos[i];
    const productDiv = criarDivProduto(product);
    container.appendChild(productDiv);
  }
}

// Função para criar um elemento de produto
function criarDivProduto(product) {
  const productDiv = document.createElement("div");
  productDiv.className = "product";

  const img = document.createElement("img");
  img.src = product.imagem;

  const title = document.createElement("h2");
  title.textContent = product.titulo;

  const value = document.createElement("p");
  value.textContent = product.valor;

  productDiv.appendChild(img);
  productDiv.appendChild(title);
  productDiv.appendChild(value);

  productDiv.addEventListener("click", () => exibirDetalhes(produtos.indexOf(product)));

  return productDiv;
}

// Função para filtrar produtos
function filtrarProdutos() {
  const searchTerm = searchInput.value.toLowerCase();
  const visibleProducts = produtos.filter(product => product.titulo.toLowerCase().includes(searchTerm));

  container.innerHTML = "";

  for (const product of visibleProducts) {
    const productDiv = criarDivProduto(product);
    container.appendChild(productDiv);
  }
}

// Event listener para fechar o modal
const closeButton = document.getElementsByClassName("close")[0];
closeButton.addEventListener("click", () => {
  modal.style.display = "none";
});

// Event listener para fechar o modal clicando fora dele
window.addEventListener("click", event => {
  if (event.target === modal) {
    modal.style.display = "none";
  }
});

// Inicialmente, crie a galeria com base na opção padrão
criarGaleria();