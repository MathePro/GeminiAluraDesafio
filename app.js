// Obtendo os elementos do DOM
const quadros = document.querySelectorAll('.info-card');


// Função para buscar as informações no arquivo dados.js
function buscarInformacoes(texto) {
  // Supondo que o arquivo dados.js exporte um objeto com um array de objetos
  const informacoes = info.find(item => item.titulo === texto);

  if (informacoes) {
    // Abre uma nova página com o conteúdo da descrição
    window.open(`OqueEoGemini.html?texto=${informacoes.descricao}`, '_blank');
  } else {
    console.error('Informações não encontradas para:', texto);
  }
}

// Adicionando evento de clique aos quadros
quadros.forEach(quadro => {
  quadro.addEventListener('click', () => {
    const texto = quadro.dataset.text;
    buscarInformacoes(texto);
  });
});
///////////////////////////////////////////////////////////////////
//efeito matrix do fundo
var canvas = document.body.appendChild( document.createElement( 'canvas' ) ),
    context = canvas.getContext( '2d' );
context.globalCompositeOperation = 'lighter';
canvas.width = 1280;
canvas.height = 800;
draw();

var textStrip = ['G', 'E', 'M', 'I', 'N', 'I', 'G', 'O', 'O', 'G', 'L', 'E', '*'];

var stripCount = 40, stripX = new Array(), stripY = new Array(), dY = new Array(), stripFontSize = new Array();

for (var i = 0; i < stripCount; i++) {
    stripX[i] = Math.floor(Math.random()*1265);
    stripY[i] = -100;
    dY[i] = Math.floor(Math.random()*7)+3;
    stripFontSize[i] = Math.floor(Math.random()*16)+8;
}

var theColors = ['#cefbe4', '#81ec72', '#5cd646', '#54d13c', '#4ccc32', '#43c728'];

var elem, context, timer;

function drawStrip(x, y) {
    for (var k = 0; k <= 20; k++) {
        var randChar = textStrip[Math.floor(Math.random()*textStrip.length)];
        if (context.fillText) {
            switch (k) {
            case 0:
                context.fillStyle = theColors[0]; break;
            case 1:
                context.fillStyle = theColors[1]; break;
            case 3:
                context.fillStyle = theColors[2]; break;
            case 7:
                context.fillStyle = theColors[3]; break;
            case 13:
                context.fillStyle = theColors[4]; break;
            case 17:
                context.fillStyle = theColors[5]; break;
            }
            context.fillText(randChar, x, y);
        }
        y -= stripFontSize[k];
    }
}

function draw() {
    // clear the canvas and set the properties
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.shadowOffsetX = context.shadowOffsetY = 0;
    context.shadowBlur = 8;
    context.shadowColor = '#94f475';
    
    for (var j = 0; j < stripCount; j++) {
        context.font = stripFontSize[j]+'px MatrixCode';
        context.textBaseline = 'top';
        context.textAlign = 'center';
        
        if (stripY[j] > 1358) {
            stripX[j] = Math.floor(Math.random()*canvas.width);
            stripY[j] = -100;
            dY[j] = Math.floor(Math.random()*7)+3;
            stripFontSize[j] = Math.floor(Math.random()*16)+8;
            drawStrip(stripX[j], stripY[j]);
        } else drawStrip(stripX[j], stripY[j]);
        
        stripY[j] += dY[j];
    }
  setTimeout(draw, 70);
}
////////////////////////////////////////////////////////////////////
//estilo da fonte
var text = document.getElementById('conteudo');
var newDom = '';
var animationDelay = 1;

for(let i = 0; i < text.innerText.length; i++)
{
    newDom += '<span class="char">' + (text.innerText[i] == ' ' ? '&nbsp;' : text.innerText[i])+ '</span>';
}

text.innerHTML = newDom;
var length = text.children.length;

for(let i = 0; i < length; i++)
{
    text.children[i].style['animation-delay'] = animationDelay * i + 'ms';
}
