// MILESTONE 1 
// Stampare all'interno di una lista, un item per ogni todo. 
// Se la proprietà done è uguale a true, visualizzare il testo del todo sbarrato.

// MILESTONE 2 
// Visualizzare a fianco ad ogni item ha una "x": cliccando su di essa, il todo viene rimosso dalla lista.

// MILESTONE 3 
// Predisporre un campo di input testuale e un pulsante "aggiungi": cliccando sul pulsante, 
// il testo digitato viene letto e utilizzato per creare un nuovo todo, che quindi viene aggiunto alla lista dei todo esistenti. 

const app = new Vue(
    {
        el: '#app',
        data: {
            newtodo: "",
            todos: [
                {
                    text: "Riprogrammare il mindset",
                    done: true
                },
                {
                    text: "Conoscere le strategie di advertising",
                    done: true
                },
                {
                    text: "Diventare un web developer",
                    done: false
                },
                {
                    text: "Creare la propria presenza online",
                    done: false
                },
                {
                    text: "Scalare il mondo grazie ad un computer",
                    done: false
                },
            ]
        },
        methods: {
            // metodo per aggiungere un todo
            addTodo() {
                
                // controlla che utente abbia inserito un text
                if (this.newtodo != "") {
                    this.todos.push(
                        {
                            text: this.newtodo,
                            done: false
                        }
                    );
                    this.newtodo = "";
                }
            },
            // metodo per rimuovere un todo
            removeTodo(index) {
                this.todos.splice(index, 1);
            }
        }
    }
);