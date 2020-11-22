class Currency {
    constructor(base) {
        this.base = base;
    }

    fetchData = async () => {
     const response = await fetch(`https://api.exchangeratesapi.io/latest?base=${this.base}`);
     console.log(response);
     const data = await response.json();
     console.log(data);
     return data;
    }
}