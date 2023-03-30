const quotes = [
    {
        "text": "Si l'homme calculait son existence par le bonheur et comptait ses heures de joie pour des années de vie, compterait-il jusqu'à soixante ?",
        "author": "Lord Byron, poète anglais"
    },
    {
        "text": "Il y a si loin de la manière dont on vit de celle dont on devrait vivre, que celui qui tient pour réel et pour vrai ce qui devrait l'être sans doute, mais qui malheureusement ne l'est pas, court à une ruine inévitable",
        "author": "Machiavel, philosophe italien"
    },
    {
        "text": "Chaque pas dans la vie est un pas vers la mort",
        "author": "Delavigne, poète francais"
    },
    {
        "text": "Qu'est-ce que la vie ? Un délire. Qu'est-ce que la vie ? Une ombre, une illusion; et le plus grand des biens ne compte guère. Oui, toute la vie est un songe; et les songes eux-mêmes, que sont-ils ? Songe !",
        "author": "Calderon de la Barca, La vie est un songe"
    },
    {
        "text": "Une vie inutile est une mort anticipée",
        "author": "Goethe, romancier et poète allemand, dans Iphigénie en Tauride"
    },
    {
        "text": "Rien n'est gratuit en ce bas monde. Tout s'expie, le bien comme le mal, se paie tôt ou tard. Le bien c'est beaucoup plus cher forcément",
        "author": "Louis Ferdinand Céline, écrivain français, dans Le voyage au bout de la Nuit"
    },
    {
        "text": "Nous sommes tous résignés à la mort; c'est à la vie que nous n'arrivons pas à nous résigner",
        "author": "Greene, Le fond du problème"
    },
    {
        "text": "C'est perdre la vie que de l'acheter par trop de soucis",
        "author": "Shakespeare, dramaturge anglais, Dans le Marchand de Venise"
    },
    {
        "text": "Mieux vaut mourir incompris que passer sa vie à s'expliquer",
        "author": "Shakespeare, dramaturge anglais"
    },
    {
        "text": "La vie oscille, comme un pendule, de la souffrance à l’ennui",
        "author": "Schopenhauer, philosophe allemand"
    }
]

// Variables

const arrowLeft = document.querySelector(".quote-left-arrow");
const arrowRight = document.querySelector(".quote-right-arrow");
const randomQuote = document.querySelector(".quote-random");
const quoteText = document.querySelector(".quote-text");
const quoteAuthor = document.querySelector(".quote-author");

let quoteIndex = randomNumber(0, quotes.length-1);

// Functions

function randomNumber(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}

function showQuote() {
    quoteText.innerHTML = quotes[quoteIndex]['text'];
    quoteAuthor.innerHTML = quotes[quoteIndex]['author'];
}

// Evenements

arrowLeft.addEventListener('click', () => {
    quoteIndex--;

    if(quoteIndex < 0) {
        quoteIndex = quotes.length-1;
    }

    showQuote();
})

arrowRight.addEventListener('click', () => {
    quoteIndex++;

    if(quoteIndex >= quotes.length) {
        quoteIndex = 0;
    }

    showQuote();
})

randomQuote.addEventListener('click', () => {
    
    let randomIndex = randomNumber(0, quotes.length-1);

    while(quoteIndex == randomIndex) {
        randomIndex = randomNumber(0, quotes.length-1);
    }

    quoteIndex = randomIndex;
    showQuote();
})

showQuote();