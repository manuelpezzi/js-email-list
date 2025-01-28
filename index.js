
const emailList = document.getElementById('emailList');
const fetchEmailsButton = document.getElementById('bottone')
function fetchEmails() {
    emailList.innerHTML = '<li>caricamento in corso...</li>';
    const emails = [];
    let completeRequest = 0;


    for (let i = 0; i < 10; i++) {
        fetch('https://flynn.boolean.careers/exercises/api/random/mail')
            .then(response => response.json())
            .then(data => {

                emails.push(data.response);
                completeRequest++;


                if (completeRequest === 10) {
                    emailList.innerHTML = emails.map(email => `<li class-"list-group" >${email}</li>`).join('');
                }
            })

            .catch(error => {
                console.error('Errore nel fetch:', error);
            });
    }
}


addEventListener('click', fetchEmails)
fetchEmails();
/*Descrizione
Attraverso l'apposita API di Boolean https://flynn.boolean.careers/exercises/api/random/mail generare 10 indirizzi email e stamparli in pagina all'interno di una lista.
Bonus
Abbellire con CSS o Bootstrap
Inserire un bottone che al click faccia il fetch altre 10 mail (sostituendo le altre)*/