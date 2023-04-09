<h1 align="center"> Auto Text Effect </h1>
<h6 align="center">Project <a href="https://codepen.io/samuelcolares/pen/XWxJxLK">Link</a></h6>
<div align="center"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Flag_of_Brazil.svg/2560px-Flag_of_Brazil.svg.png" alt="html5" width="60" height="40"/>

<img src="https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/1280px-Flag_of_the_United_States.svg.png" alt="html5" width="60" height="40"/>
</div>

<details>

<summary  align="center" style="background-color: #ffff00; padding: 10px;">English</summary>

<h3>Description</h3>
Cool and simple project where the text displayed on the screen has the same effect as if it was being typed.

<hr>
<h3>Explained Code</h3>
The logic of this application involves taking a text and dividing it with the String and Array method 'slice()'. 

As an example, the text 'Avocado' aims to insert each letter in order into the desired HTML Element.

As we are going to use the 'slice()' method, we also need to define an index, since this method takes two parameters: start and end. In this project, the index will assume the role of the second parameter, and the first parameter will always be 0.

```Javascript
const example1 = 'Home'
example1.slice(0,2) // 0 means that nothing will be cut at the beginning, 2 means that it will select up to the second character; Result: Ho

example1.slice(2,4) // 2 means that it will cut the first two characters at the beginning, 4 means that it will select up to the fourth character; Result: me
```
> If you are curious and want to read a more detailed explanation, check out: <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/slice">Link 1 - String</a> - <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice">Link 2 - Array</a>

So, defining the desired HTML Element, variable texto with the string 'Abacate' and a variable with the index:
```Javascript
const textElement = document.querySelector('#text')
const text = 'Avocado'
let idx = 1 // 'let' because the value will always be updated
```
The next step is to create a function where we assign the HTML Element's text (innerText) to the variable texto with slice(0, index), and this index will be updated.
```Javascript
function autoText(){
    textElement.innerText = text.slice(0, idx)
    idx++

    if(idx > texto.length){
        idx = 0 // This way the text repeats infinitely whenever it reaches the end, but if you want the text to write only once, just change `idx = 0` to `return` and the function is terminated.

    setTimeout(autoText, 300)
}
```
So when the function is called, it will start writing the text on the screen starting from the first character of the text 'Abacate' = 'A' and then the index will be incremented by +1, and the function is called again after 300ms, and the cycle restarts.

The result on the screen will be:

A -> Av -> Avo -> Avoc -> Avoca -> Avocad -> Avocado

<hr>
<h3>License</h3>
This project was inspired by project number 30 of the public repository <a href="https://github.com/bradtraversy/50projects50days">50 projects 50 days</a>.

---
</details>
<br>
<h3>Descrição</h3>

Projeto bacana e simples onde o texto mostrado em tela tem o mesmo efeito com se estivesse sendo digitado

<hr>
<h3>Código Explicado</h3>

A lógica dessa aplicação envolve pegar um texto e dividir ele com o método para Strings e Arrays '***slice()***'
Como exemplo o texto 'Abacate' o objetivo é inserir no Elemento HTML desejado letra por letra, em ordem.

Como vamos usar o método '***slice()***' precisamos também definir um índice, já que esse método recebe dois parâmetros: início e fim. Neste projeto índice vai assumir o papel do segundo parâmetro, e o primeiro parâmetro sempre vai ser 0.

```Javascript
const exemplo1 = 'Casa'
exemplo1.slice(0,2) // 0 significa que vai cortar nenhum elemento de incio, 2 significa que vai selecionar até o segundo caractere; Resposta: Ca

exemplo1.slice(2,4) // 2 significa que vai cortar os dois primeiros caracteres de incio, 4 significa que vai selecionar até o quarto caractere; Resposta: sa
```


> Caso tenha curiosidade em ler uma explicação muito mais detalhada, confira: <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/slice">Link 1 - String</a> - <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice">Link 2 - Array</a>

Entao definindo o Elemento HTML desejado, variavel ***texto*** com a string 'Abacate' e variável com o indice

```Javascript
const textoElement = document.querySelector('#text')
const texto = 'Abacate'
let indice = 1 // let porquê o valor sempre vai ser atualizado
```

O próximo passo é criar uma função aonde atribuimos o texto do Elemento HTML (innerText) à variável ***texto*** com slice(0, indice), e esse indice vai ser atualizado


```Javascript
function autoTexto(){
    textoElement.innerText = texto.slice(0, indice)
    indice++

    if(indice > texto.length){
        indice = 0 // Dessa forma o texto se repete infinitamente sempre que chega ao final, mas caso deseje que o texto se escreva apenas uma vez, basta trocar `indice = 0` por `return` e assima função é encerrada
    }

    setTimeout(autoTexto, 300)
}
```
Assim qnd a funçao for chamada ela vai começar a escrever em tela a partir do primeiro caractere do texto 'Abacate' = 'A' e então o índice vai ser incrementado em +1 e a função após 300ms é chamada novamente e o ciclo se reinicia

O resultado em tela vai ser:

A -> Ab -> Aba -> Abac -> Abaca -> Abacat -> Abacate




<hr>
<h3>Licença</h3>

Este projeto foi inspirado no projeto número 30 do repositório público <a href="https://github.com/bradtraversy/50projects50days">50 projects 50 days</a>


---