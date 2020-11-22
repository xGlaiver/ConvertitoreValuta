function calcola(){
    const base = document.querySelector("#base").value;
    const ui = new UI();
    const current = new Currency(base);
    
    current.fetchData()
    .then(data => {
        ui.insertValue(data);
    })
    .catch(error => console.log(error));
 }

 document.querySelector("button").addEventListener("click", calcola);