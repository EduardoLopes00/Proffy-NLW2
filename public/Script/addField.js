/* Procurar o botão(Utiliza-se do ID que foi atribuido para ele) */
document.querySelector("#add-time") /* Necessário colocar o '#' para referenciar o campo, como se fosse no CSS */
/* Quuando clicar no botão */
.addEventListener('click', cloneField) 

//Executar uma ação
function cloneField(){
    //Duplicar os campos. Qual campos(É possível duplicar uma div inteira)?
    const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true) /* Criando uma constante que recebe toda uma linha de código (Vantagem de o JS não ser tipado hehehe*/
    
    // Limpar os campos. Que campos?
    const fields = newFieldContainer.querySelectorAll('input') /* Ele adicionará, dentro da váriavel, uma lista contendo todos os campos input dentro do querySelector atribuido dentro da váriavel newFieldsContainer */
        
    fields.forEach(function(field){
      //Pega o field atualmente selecionado pelo laço de repetição e dou um limpa
      field.value = "";}        
    );
    
    //Agora, escolho qual parte do documento será inserida minha tag duplicada            
    document.querySelector('#schedule-items').appendChild(newFieldContainer)    
}