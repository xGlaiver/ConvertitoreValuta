class Currency {
    constructor(base) {
        this.base = base;
    }

    fetchData = async () => {
     const response = await fetch(`https://api.exchangeratesapi.io/latest?base=${this.base}`);
     const data = await response.json();
     return data;
    }
}