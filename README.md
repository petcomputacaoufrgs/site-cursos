# Site de projetos e cursos do PET
### Criado por: Graciela
### Manutenção: Victória, Jordi e Bernardo

> ## MANUTENÇÃO DO SITE: 
> Esse site não precisa de muita manutenção, o botão de informações vai para o site WordPress do PET e o botão de redes sociais vai para o site de links do PET.
> ### Adicionar um novo curso
> * É só copiar esse trecho de html e colocar ao como último `<li></li>` do `<ul></ul>`no arquivo `cursos/index.html`.
```html
<ul>
    <!-- Outros cursos estarão em outros li's-->
    <li class="elemento-curso flex-box">
        <div class="box-texto-curso flex-box">
            <h1 class="titulo-curso">#### DIGITE AQUI: O QUE É TEMA X ####</h1>
            <p class="texto-curso"> 
                #### DIGITE AQUI: INTRODUCAO AO TEMA X DE ####
            </p>
        </div>
        <a href="#### DIGITE AQUI: LINK DO CURSO X ####" class="botao-curso">
            #### DIGITE AQUI: CURSO: NOME DO CURSO ####
        </a>
    </li>
</ul>
```


> ### Adicionar um novo projeto com o css default do site:
> * É só copiar o html oferecido aqui e adicionar um arquivo `.html` na pasta *projects* com o nome `[nome do projeto].html`. A classe que faz a magia é a classe *default-settings*
```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="../styles.css">
        <title>Projetos - [NOME DO PROJETO]</title>
    </head>
    <body class="default-settings flex-box">
        <!-- Menu na lateral -->
        <div class="lateral-information flex-box">
            <div class="dentro-informacoes flex-box">
                <img src="../images/LogoPET_oficial.png" alt="logo PET Computacao" class="logo-pet">
                <div class="informacoes-baixo flex-box">
                    <a target="_blank" href="https://www.inf.ufrgs.br/site/pet/" class="botao-info flex-box">
                        <p>Conheça o pet</p>
                    </a>
                    <a href="../index.html" class="botao-info flex-box">
                        <p>Todos os projetos</p>
                    </a>
                    <a href="../cursos/index.html" class="botao-info flex-box">
                        <p>Nossos Cursos</p>
                    </a>
                    <a target="_blank" href="https://lnk.bio/lEJP" class="botao-info flex-box">
                        <p>Redes Sociais</p>
                    </a>
                </div>
            </div>
        </div>
        <!-- Trecho com as informações do projeto -->
        <div class="project">
            <div class="project-info">
                <h1>Projeto [NOME DO PROJETO]</h1>
                <!-- Texto explicando um pouco sobre o projeto -->
                <p></p>
            </div>
            <div class="project-status">
                <p><span class="bold-font">Eixo:</span> [EIXO DO PROJETO] </p>
                <p><span class="bold-font">Responsáveis:</span> [RESPONSÁVEIS PELO PROJETO]</p>
                <p><span class="bold-font">Status:</span> [STATUS DO PROJETO]</p>
            </div>
            <p><span class="bold-font">Linguagens / Ferramentas usadas:</span> [FERRAMENTAS DO PROJETO]</p>
        </div>
    </body>
</html>
```
> Além disso, no arquivo `index.html`, é só adicionar esse trecho de html com o caminho para o html recém criado e colocar ao como último `<li></li>` do `<ul></ul>`
```html
<ul>
    <!-- Outros projetos estarão em outros li's-->
    <li class="elemento-curso flex-box">
        <div class="box-texto-curso">
            <h1 class="titulo-curso">[NOME DO PROJETO]</h1>
            <p class="texto-curso"> 
                Projeto do eixo de [EIXO DO PROJETO], focado no [TECNOLOGIAS OU OBJETIVOS PRINCIPAIS DO PROJETO]
            </p>
        </div>
        <a href="./projects/[NOME DO SEU PROJETO].html" class="botao-curso">
            Saiba mais
        </a>
    </li>
</ul>
```
