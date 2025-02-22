var pokemon = {
    name: "Pikachu",
    type: "Electric",
    moves: ["Extreme Speed", "Surf"],
    speak: function() {
        console.log("Pika pika!");

    }
}

console.log(pokemon.name + " is an " + pokemon.type + " type")
pokemon.speak();