class UI {
    constructor() {
        this.input = document.querySelector("#input-base").value;
        this.symbol = document.querySelector("#symbol").value;
        this.desiderata = document.querySelector(".desiderata");
    }
   
    insertValue(value) {
        this.desiderata.textContent = value.rates[this.symbol] * this.input;
    }

}

