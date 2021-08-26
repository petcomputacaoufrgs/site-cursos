# Site de projetos e cursos do PET
### Criado por: Graciela
### Manutenção: Victória, Jordi e Bernardo

> ## MANUTENÇÃO DO SITE: 
> Esse site não precisa de muita manutenção, o botão de `home` vai para o site WordPress do PET.
> ### Adicionar um novo curso
> * É só copiar esse trecho de html e colocar ao como último `<li></li>` do `<ul></ul>` referente aos cursos no arquivo `projetos/index.html`.
```html
<ul>
    <!-- Outros cursos estarão em outros li's-->
    <li class="hex">
        <div class="hexIn">
            <a class="hexLink" href="[LINK DA PAGINA DO CURSO]" target="_blank">
              <img src="[LINK PARA A IMAGEM]" alt="" />
              <h3>[TÍTULO DO CURSO]</h3>
              <p>[BREVE DESCRIÇÃO DO CURSO]</p>
            </a>
          </div>
    </li>
</ul>
```
> * Pode ser necessário adicionar um padding específico para que a imagem não fique clipada, ver os itens relativos a Latex e Arduíno para exemplos.


> ### Adicionar um novo projeto com o css default do site:
> * É só copiar o html oferecido aqui e adicionar um arquivo `.html` na pasta *projetos* com o nome `[nome do projeto].html`.
```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <script src="https://kit.fontawesome.com/c0563bc619.js" crossorigin="anonymous"></script>
        <link rel="stylesheet" href="../styles.css">
        <title>Projetos - [NOME DO PROJETO]</title>
    </head>
    <body>
        <header id="header">
            <div class="container">
                <img src="../images/LogoPET_oficial.png" alt="Logo PET">
            </div>
        </header>
        <nav id="navbar">
            <div class="container flex" id="navbar-links">
                <a href="https://inf.ufrgs.br/pet">Home</a>
                <a href="./index.html#projects">Todos os Projetos</a>
                <a href="./index.html#courses">Cursos</a>
                <a href="#footer">Nossas Redes</a>
            </div>
        </nav>
        <div class="content-bg project-page">
            <div class="container">
                <div class="project-header flex">
                    <div class="project-logo">
                        <img class="hexagon-img" src="../images/hexagon.png" alt="hexagono azul">
                        <img class="project-img" src="[LINK PARA A IMAGEM DO PROJETO]" alt="">
                    </div>
                    <div class="project-header-text">
                        <h2>[NOME DO PROJETO]</h2>
                        <h3>Status: [STATUS DO PROJETO]</h3>
                    </div>
                </div>
                <div class="project-content">
                    <h4>Participantes: [PARTICIPANTES DO PROJETO]</h4>
                    <h4>Ferramentas: [FERRAMENTAS/LINGUAGENS USADAS NO PROJETO]</h4>
                    <div class="project-description">
                        <p>[DESCRIÇÃO DO PROJETO]</p>
                    </div>
                </div>
            </div>
        </div>
        <footer id="footer">
            <div class="container flex">
                <div class="item">
                    <h3>PET Computação</h3>
                    <p>pet@inf.ufrgs.br</p>
                    <p>petcompufrgs@gmail.com</p>
                </div>
                <div class="item">
                    <h4>Nos acompanhe em nossas redes sociais!</h4>
                    <div class="container flex" id="social-media">
                        <a href="https://github.com/petcomputacaoufrgs" target="_blank">
                            <i class="fab fa-github"></i>
                        </a>
                        <a href="https://www.facebook.com/PETCompUFRGS" target="_blank">
                            <i class="fab fa-facebook"></i>
                        </a>
                        <a href="https://www.youtube.com/channel/UCtAtfIs2EnANkerAjMas_8A" target="_blank">
                            <i class="fab fa-youtube"></i>
                        </a>
                        <a href="https://www.linkedin.com/company/petcompufrgs" target="_blank">
                            <i class="fab fa-linkedin"></i>
                        </a>
                        <a href="https://www.instagram.com/petcompufrgs/" target="_blank">
                            <i class="fab fa-instagram"></i>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    </body>
</html>
```
> Além disso, no arquivo `index.html`, é só adicionar esse trecho de html com o caminho para o html recém criado e colocar ao como último `<li></li>` do `<ul></ul>` referente aos projetos
```html
<ul>
    <!-- Outros projetos estarão em outros li's-->
    <li class="hex">
        <div class="hexIn">
            <a class="hexLink" href="[LINK DA PAGINA DO PROJETO]">
                <img src="[LINK DA IMAGEM DO PROJETO]" alt="" />
                <h3>[TÍTULO DO PROJETO]</h3>
                <p>Eixo: [EIXO DO PROJETO]</p>
            </a>
        </div>
    </li>
</ul>
```
> * Pode ser necessário adicionar um padding específico para que a imagem não fique clipada, ver os itens relativos a Latex e Arduíno para exemplos.