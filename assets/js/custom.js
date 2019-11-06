var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
    loop: true
});

typewriter.typeString('Bitcoin Cash')
    .pauseFor(2500)
    .deleteAll()
    .typeString('Cashless')
    .pauseFor(2500)
    .deleteChars(7)
    .typeString('<strong>altered!</strong>')
    .pauseFor(2500)
    .start();