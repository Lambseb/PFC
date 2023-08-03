// https://www.youtube.com/watch?v=A9G_0YKBY2s
const buttons = document.querySelectorAll('button');
let iaAnswer = docuement.querySelector('.choose_of_ia');


for (let i = 0; i < buttons.length; i++){
    buttons[i].addEventListener('click', () =>{
    const joueur = buttons[i].innerHTML;
    const robot  = buttons[Math.floor(Math.random() * buttons.length)].innerHTML;
    let resultat = document.querySelector('.resultat');
    if (joueur === robot){
        resultat.innerHTML = 'égalité';
    } 
    else if 
        ((joueur === 'pierre' && robot ==='ciseau')
    || (joueur === 'feuille' && robot ==='pierre')
    || (joueur === 'ciseau' && robot ==='feuille')){
        resultat.innerHTML = 'victoire';
    }
    else{
        resultat.innerHTML = 'perdu';
    }
    console.log(i);
    console.log(joueur.length);
    console.log(robot);
    console.log(`joueur: ${joueur} VS IA: ${robot} = ${resultat}`);
    });
}
