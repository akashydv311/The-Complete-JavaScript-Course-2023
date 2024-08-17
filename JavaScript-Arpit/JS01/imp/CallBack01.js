

let order = (production) => {
    console.log("Order is placed! Please start production\n");
    production(serve);
}

let production = (serve) => {
    console.log("Order is recived!.. starting production\n");
    serve();
}

let serve = () => {
    console.log("Productioon done!.. Please server to costumer\n");
}

// driver code

order(production);
