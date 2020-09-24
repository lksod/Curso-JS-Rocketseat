/* var xhr = new XMLHttpRequest(); 

xhr.open('GET', 'https://api.github.com/users/diego3g');
xhr.send(null);

xhr.onreadystatechange = function() {
    if(xhr.readyState === 4) {
        console.log(JSON.parse(xhr.responseText));
    }
} */ // Chamada assíncrona na página utilizando o AJAX.

//---

/*var minhaPromise = function() {
    return new Promise(function(resolve, reject) {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', 'https://api.github.com/users/diego3g');
        xhr.send(null);

        xhr.onreadystatechange = function() {
            if(xhr.readyState === 4){
                if( xhr.status === 200) {
                    resolve(JSON.parse(xhr.responseText));
                } else {
                    reject('Erro na requisição');
                }
            }
        }
    });
}

minhaPromise()
    .then(function(response) {
        console.log(response);
    })
    .catch(function(error) {
        console.warn(error);
    });
*/
    // Promisse deixa trabalhar com .then e .catch para ajudar a saber se a requisição assíncrona funciona 



/*axios.get('https://api.github.com/users/diego3g')
    .then(function(response) {
        console.log(response);
    })
    .catch(function(error) {
        console.warn(error);
    });
*/ 
    // Utiliza o axios para simplificar o código...



// 1)
/* var  minhaPromise =  function(idade){  //coloca a idade aqui e tudo funciona hehe...
    return new Promise(function(resolve, reject) {
        
        if(idade > 18){
            resolve();
        } else {
            reject();
        } 
    });
}
minhaPromise()
    .then(function() {
        console.log('Maior que 18');
    })
    .catch(function (){
        console.log('Menor que 18');
    })
 */    


//2) 

var inputElement = document.querySelector('#app input');
var buttonElement = document.querySelector('#app button');
var listaElement =  document.querySelector('#app ul');


buttonElement.onclick = function() {
    var url = 'https://api.github.com/users/' + inputElement.value + '/repos';
    var listElement = document.createElement('li'); // criou a li no html
    var todoText = document.createTextNode('Carregando...');
    listElement.appendChild(todoText);
    listaElement.appendChild(listElement);
    
    axios.get(url)
    .then(function(response) {
        console.log(response);
        imprime(response.data);
    })
    .catch(function(error) {
        console.warn(error);
        imprimeErro(error);
    });
}

function imprime(data){
    for(todo of data) {
        var listElement = document.createElement('li'); // criou a li no html
        var todoText = document.createTextNode(todo.name); // colocou o texto do todo na li criada


        listElement.appendChild(todoText);
        listaElement.appendChild(listElement);

    }
}

function imprimeErro(error) {
    alert(error);
} 

