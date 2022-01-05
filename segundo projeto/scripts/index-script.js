function randomnames(){
    let items = ["Miguel", "Arthur", "Gael", "Heitor", "Helena", "Alice", "Theo",
        "Laura", "Davi", "Gabriel"]
    let random = items[Math.floor(Math.random()*items.length)]

    document.getElementById('name-chosen').innerHTML = random
}