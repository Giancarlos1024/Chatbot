var chatBody = document.getElementById('chatBody');

function sendMessage() {
    var userInput = document.getElementById('userInput');

    if (userInput.value.trim() !== '') {
        // Agregar mensaje del usuario al chat
        addMessage('user', userInput.value);

        // Obtener respuesta del chatbot
        var botResponse = getBotResponse(userInput.value);

        // Agregar respuesta del chatbot al chat
        addMessage('bot', botResponse);

        // Limpiar el cuadro de entrada
        userInput.value = '';

        // Desplazar hacia abajo para mostrar el último mensaje
        chatBody.scrollTop = chatBody.scrollHeight;
    }
}

function addMessage(sender, message) {
    var messageDiv = document.createElement('div');
    messageDiv.classList.add('message', sender);

    var imageElement = document.createElement('img');
    //Aqui pueden cambiar las imagenes que gusten utilizar → por ejemplo: 'img/otra_imagen.jpg'
    imageElement.src = sender === 'user' ? 'img/perfil.jpeg' : 'img/Imagen1.png';
    imageElement.alt = sender + ' Image';
    imageElement.classList.add('avatar');

    messageDiv.appendChild(imageElement);

    var textElement = document.createElement('div');
    textElement.textContent = message;
    messageDiv.appendChild(textElement);

    chatBody.appendChild(messageDiv);
}

function getBotResponse(userMessage) {
    // Saludo y respuesta inicial
    if (userMessage.toLowerCase().includes('hola') || userMessage.toLowerCase().includes('hola chatbot')) {
        return '¡Hola!. ¿En qué puedo ayudarte hoy?';
    }
    if (userMessage.toLowerCase().includes('¿como te llamas?') || userMessage.toLowerCase().includes('como te llamas')) {
        return '¡Asimo!. ¿En qué puedo ayudarte hoy?';
    }

    // Implementa la lógica del chatbot para responder preguntas sobre tecnología
    // En este ejemplo, las respuestas están en arrays separados
    var userQuestions = [
        "¿Que es JavaScript?",
        "¿Como se declara una variable en JavaScript?",
        "¿Que hace una funcion en JavaScript?",
        "¿Como se selecciona un elemento HTML con JavaScript?",
        "¿Diferencia entre == y ===?",
        "¿Que es el DOM?",
        "¿Como manejas la asincronia en JavaScript?",
        "¿Como se manejan errores en JavaScript?",
        "¿Que es JSON?",
        "¿Como se selecciona un elemento en un array?",
        "¿Que es un closure?",
        "¿Como se define un objeto en JavaScript?",
        "¿Como se realiza una iteracion en un array?",
        "¿Cual es la funcion de this en JavaScript?",
        "¿Como se manejan las fechas en JavaScript?",
    ];
    var botResponses = [
       "Un lenguaje de programación para desarrollo web.",
        "Con var, let, o const.",
        "Realiza una tarea específica.",
        "Con document.querySelector() o document.getElementById().",
        "== compara valores, === compara valores y tipos.",
        "Document Object Model, representa la estructura de una página web.",
        "Con callbacks, Promesas o async/await.",
        "Con bloques try...catch.",
        "Formato de intercambio de datos, derivado de JavaScript.",
        "Con índices, ej.: miArray[0].",
        "Una función con acceso a variables externas.",
        "{ propiedad: valor }",
        "Con bucles for o métodos como forEach().",
        "Hace referencia al objeto actual.",
        "Con el objeto Date().",

    ];

    // convertimos la entrada de usuario a minusculas

    userMessage = userMessage.toLowerCase();

    // Aqui convertimos las preguntas almacenadas en el array de preguntas, que se conviertan en minusculas
    
    var index = userQuestions.findIndex(question => userMessage.includes(question.toLowerCase()));
    if (index !== -1) {
        return botResponses[index];
    } else {
        return 'Lo siento, no entendí la pregunta. ¿Puedes preguntar algo sobre tecnología?';
    }
}



