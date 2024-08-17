
async function testApi() {
    let responce = await fetch('https://catfact.ninja/fact');

    const display = await responce.json();

    console.log(display);
}

testApi();
