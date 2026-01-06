const bonneRep = [
      '1',
      '5',
      '7',
      '11',
      '13',
      '18',
      '20',
      '23',
      '25',
      '28'
     ];

function calculerScore() {
   let score = 0;
    const form = document.forms["qcm"];
    
    
    for (let i = 1; i <= 10; i++) {
        const nomQuestion = `q${i}`;
        const inputs = form.elements[nomQuestion];
        
        let estCorrecte = true;
        let reponsesCochees = [];

        
        for (const input of inputs) {
            if (input.checked) {
                reponsesCochees.push(input.value);
            }
        }

        const bonneRep = reponses_correctes[i - 1]; 

        const estUnSousEnsemble = reponsesCochees.every(val => bonnesReponses.includes(val));
        estCorrecte = estUnSousEnsemble && (reponsesCochees.length === bonnesReponses.length);

        if (estCorrecte) {
            score++; 
        }
        
        const questionDiv = document.getElementById(`q-${i}`); 
        if (questionDiv) {
            questionDiv.style.border = estCorrecte ? '2px solid green' : '2px solid red';
            questionDiv.style.padding = '10px'; 
        }
    }
    document.getElementById('resultat').innerHTML = `Score : ${score} / 10`;
}

function afficherCorrige() {
    window.location.href = "correction.html";
}

function effacerSelections() {
    document.forms["qcm"].reset(); 
    
    document.getElementById("resultat").innerHTML = ""; 
    
    for (let i = 1; i <= 10; i++) {
        const questionDiv = document.getElementById(`q-${i}`);
        if (questionDiv) {
            questionDiv.style.border = 'none'; 
            questionDiv.style.padding = '0';
        }
    }
}