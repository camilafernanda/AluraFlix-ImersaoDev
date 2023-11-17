var listaFilmes = [
  "https://arianeribeiro.files.wordpress.com/2010/12/capa.jpg",
  "https://img.elo7.com.br/product/original/265774E/big-poster-harry-potter-e-o-calice-de-fogo-lo02-90x60-cm-geek.jpg",
  "https://m.media-amazon.com/images/I/711hYXa5lGL._AC_UF1000,1000_QL80_.jpg",
  "https://br.web.img3.acsta.net/pictures/14/05/19/22/57/276761.jpg",
  "https://s2.glbimg.com/ABif2Vd6K2Jb7nGBthZVPn9DtX0=/e.glbimg.com/og/ed/f/original/2019/12/10/20171212-star-wars-5-papo-de-cinema-cartaz.jpg"
];


for (var posicao = 0; posicao < listaFilmes.length; posicao++) {
  document.write("<img src=" + listaFilmes[posicao] + ">");
}
