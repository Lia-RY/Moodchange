let quoteA = document.querySelector("#aquote");
let quoteH = document.querySelector("#hquote");
let quoteS = document.querySelector("#squote");
let result = document.querySelector(".display-6");
let restart = document.querySelector("#restart");

let aquotes= [
' "Your mind is like this water my friend, when it is agitated it becomes difficult to see. But if you allow it to settle, the answer becomes clear."  Bil Keane',
' "Do not hold to anger, hurt or pain. They steal your energy and keep you from love."  Leo Buscaglia',
' "The best fighter is never angry."  Lao Tzu',
' "Calm is the best revenge."  Bangambiki Habyarimana',
' "Patience is the direct antithesis of anger."  Allan Lokos',
' "Patience Is Not the Ability to Wait:Patience is not the ability to wait. Patience is to be calm no matter what happens, constantly take action to turn it to positive growth opportunities, and have faith to believe that it will all work out in the end while you are waiting."  Roy T. Bennett',
' "Gentleness is strength under control. It is the ability to stay calm, no matter what happens."  Elizabeth George',
' "Make your heart like a lake, with a calm, still surface, and great depths of kindness."  Lao Tzu'
];


quoteA.addEventListener("click", function(){
	let randomOfA = aquotes[Math.floor(Math.random()*aquotes.length)]
	result.textContent = randomOfA;
	quoteA.addClass("aquote");

});



let hquotes = [
' "Happiness is not an ideal of reason, but of imagination." Immanuel Kant',
' "Time you enjoy wasting is not wasted time." Marthe Troly-Curtin',
' "Happiness is when what you think, what you say, and what you do are in harmony." Mahatma Gandhi',
' "Happiness is a warm puppy." Charles M. Schulz',
' "Happiness is having a large, loving, caring, close-knit family in another city." George Burns',
' "Let us be grateful to the people who make us happy; they are the charming gardeners who make our souls blossom." Marcel Proust',
' "Happy girls are the prettiest" Audrey Hepburn',
' "Happiness is holding someone in your arms and knowing you hold the whole world." Orhan Pamuk'
]

quoteH.addEventListener("click", function(){
	let randomOfH = hquotes[Math.floor(Math.random()*hquotes.length)]
	result.textContent = randomOfH;
	
});

let squotes = [
' "Cry. Forgive. Learn. Move on. Let your tears water the seeds of your future happiness." Steve Maraboli',
' "Man only likes to count his troubles; he does not calculate his happiness." Fyodor Dostoevsky',
' "You can not be happy unless you are unhappy sometimes." Lauren Oliver', 
' "Count your age by friends, not years. Count your life by smiles, not tears." John Lennon',
' "The more you feed your mind with positive thoughts, the more you can attract great things into your life." Roy T. Bennett',
' "All you need is love. But a little chocolate now and then does not hurt." Charles M. Schulz',
' "Do not be pushed around by the fears in your mind. Be led by the dreams in your heart." Roy T. Bennett',
' "There is great change to be experienced once you learn the power of letting go. Stop allowing anyone or anything to control, limit, repress, or discourage you from being your true self! Today is YOURS to shape - own it - break free from people and things that poison or dilute your spirit." Steve Marabol'
]

quoteS.addEventListener("click", function(){
	let randomOfS = squotes[Math.floor(Math.random()*squotes.length)]
	result.textContent = randomOfS;
})


restart.addEventListener("click", function(){
location.reload();

})






