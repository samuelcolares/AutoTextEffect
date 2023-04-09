
const Main = {
    init: function () {
        this.cacheSelectors();
        this.bindEvents();
    },
    cacheSelectors: function () {
        this.textElement = document.querySelector('#text')
        this.speedInput = document.querySelector('#speed')
        this.textInput = document.querySelector('#textInput')
        this.speed = 300 / this.speedInput.value;
    },
    bindEvents: function () {
        this.Events.writeText.bind(this)();

        this.speedInput.addEventListener(`input`, (e) => this.speed = 300 / e.target.value)
        this.textInput.addEventListener('keypress', (e) => {
            if (e.keyCode === 13) {
                if (e.target.value) {
                    this.text = e.target.value
                    this.idx = 1 // reiniciar o índice para começar a escrever o novo texto desde o início
                    this.isWriting = false
                    this.Events.writeText.bind(this)()
                } else {
                    this.text = `Digite algo no input`
                    this.idx = 1 // reiniciar o índice para começar a escrever o novo texto desde o início
                    this.isWriting = false
                    this.Events.writeText.bind(this)()
                }
            }
        })
    },
    text: `Digite algo no input`,
    idx: 1,
    isWriting: false,

    Events: {
        writeText: function () {
            if (!this.isWriting) { // verificar se a função writeText não está em execução
                this.isWriting = true // definir a variável como true para indicar que a função está em execução
                this.textElement.innerText = this.text.slice(0, this.idx)
                this.idx++

                if (this.idx > this.text.length) {
                    return
                }

                setTimeout(() => {
                    this.isWriting = false // definir a variável como false para indicar que a função terminou de executar
                    this.Events.writeText.bind(this)()
                }, this.speed)
            }
        }
    }
}

Main.init()