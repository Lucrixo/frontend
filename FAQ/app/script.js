
// carrega o addlistener antes de tudo para sempre estar disponivel. evita erros aparentemente 
document.addEventListener("DOMContentLoaded", function() {
    const faqItems = document.querySelectorAll(".faq__item");

    faqItems.forEach(item => {
        const question = item.querySelector(".faq__question");
        const answer = item.querySelector(".faq__answer");
        const symbol = item.querySelector(".faq__symbol");

        question.addEventListener("click", function() {
        //    abre a pergunta 
            answer.classList.toggle("active");

            // muda o simbolo de + para - 

            symbol.textContent = symbol.textContent === '+' ? '-' : '+';
        });
    });
});
