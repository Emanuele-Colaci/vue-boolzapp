const { createApp } = Vue;

createApp({
    data() {
        return {
            contacts: [
                {
                    name: 'Michele',
                    avatar: './img/avatar_1.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Hai portato a spasso il cane?',
                            status: 'sent',
                            showDropdown: false
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Ricordati di stendere i panni',
                            status: 'sent',
                            showDropdown: false
                        },
                        {
                            date: '10/01/2020 16:15:22',
                            message: 'Tutto fatto!',
                            status: 'received',
                            showDropdown: false
                        }
                    ],
                },
                {
                    name: 'Fabio',
                    avatar: './img/avatar_2.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '20/03/2020 16:30:00',
                            message: 'Ciao come stai?',
                            status: 'sent',
                            showDropdown: false
                        },
                        {
                            date: '20/03/2020 16:30:55',
                            message: 'Bene grazie! Stasera ci vediamo?',
                            status: 'received',
                            showDropdown: false
                        },
                        {
                            date: '20/03/2020 16:35:00',
                            message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                            status: 'sent',
                            showDropdown: false
                        }
                    ],
                },
                {
                    name: 'Samuele',
                    avatar: './img/avatar_3.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '28/03/2020 10:10:40',
                            message: 'La Marianna va in campagna',
                            status: 'received',
                            showDropdown: false
                        },
                        {
                            date: '28/03/2020 10:20:10',
                            message: 'Sicuro di non aver sbagliato chat?',
                            status: 'sent',
                            showDropdown: false
                        },
                        {
                            date: '28/03/2020 16:15:22',
                            message: 'Ah scusa!',
                            status: 'received',
                            showDropdown: false
                        }
                    ],
                },
                {
                    name: 'Alessandro B.',
                    avatar: './img/avatar_4.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Lo sai che ha aperto una nuova pizzeria?',
                            status: 'sent',
                            showDropdown: false
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Si, ma preferirei andare al cinema',
                            status: 'received',
                            showDropdown: false
                        }
                    ],
                },
                {
                    name: 'Alessandro L.',
                    avatar: './img/avatar_5.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ricordati di chiamare la nonna',
                            status: 'sent',
                            showDropdown: false
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Va bene, stasera la sento',
                            status: 'received',
                            showDropdown: false
                        }
                    ],
                },
                {
                    name: 'Claudia',
                    avatar: './img/avatar_6.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ciao Claudia, hai novità?',
                            status: 'sent',
                            showDropdown: false
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Non ancora',
                            status: 'received',
                            showDropdown: false
                        },
                        {
                            date: '10/01/2020 15:51:00',
                            message: 'Nessuna nuova, buona nuova',
                            status: 'sent',
                            showDropdown: false
                        }
                    ],
                },
                {
                    name: 'Federico',
                    avatar: './img/avatar_7.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Fai gli auguri a Martina che è il suo compleanno!',
                            status: 'sent',
                            showDropdown: false
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Grazie per avermelo ricordato, le scrivo subito!',
                            status: 'received',
                            showDropdown: false
                        }
                    ],
                },
                {
                    name: 'Davide',
                    avatar: './img/avatar_8.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ciao, andiamo a mangiare la pizza stasera?',
                            status: 'received',
                            showDropdown: false
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
                            status: 'sent',
                            showDropdown: false
                        },
                        {
                            date: '10/01/2020 15:51:00',
                            message: 'OK!!',
                            status: 'received',
                            showDropdown: false
                        }
                    ],
                }
            ],
            movimento: 0,
            newMessage: '',
            searchQuery: '',
            filteredContacts: [],
            isSunVisible: true
        }
    },
    created() {
        this.filteredContacts = this.contacts;
    },
    //FUNZIONI
    //GESTISCE L'AVATAR SELEZIONATO
    methods:{
        selectSlide(index){
            const contact = this.filteredContacts[index];
            const contactIndex = this.contacts.findIndex(c => c.name === contact.name);
            this.movimento = contactIndex;
        },

        //AGGIUNGE UN NUOVO MESSAGGIO
        addMessage(){
            if(!this.contacts[this.movimento].messages){
                this.contacts[this.movimento].messages = [];
            }
            if(this.newMessage.trim() === ''){
                return;
            }
                
                const message = {
                    date: new Date().toLocaleTimeString([], { day: '2-digit', month: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit' }),
                    message: this.newMessage,
                    status: 'sent',
                };
                
                this.contacts[this.movimento].messages.push(message);
                
                this.newMessage = '';

                //RISPOSTA DOPO UN SECONDO UN MESSAGGIO RANDOM 
            setTimeout(() => {
                const messages = ["Ciao!", "Come stai?", "Che fai di bello?", "Buona giornata!"];
                const randomMessage = messages[Math.floor(Math.random() * messages.length)];

                const response = {
                    date: new Date().toLocaleTimeString([], { day: '2-digit', month: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit' }),
                    message: randomMessage,
                    status: 'received',
                };
            
                this.contacts[this.movimento].messages.push(response);
            }, 1000);
        },

        //FILTRAGGIO PER CERCARE L'AVATAR
        filterContacts(){
                const query = this.searchQuery.toLowerCase();

                this.filteredContacts = this.contacts.filter(contact => {
                return contact.name.toLowerCase().includes(query) || query === '';
            });
        },

        //ELLIMINAZIONE MESSAGGIO
        deleteMessage(message){
            const index = this.contacts[this.movimento].messages.indexOf(message);
            this.contacts[this.movimento].messages.splice(index, 1);
            message.edit_enabled = !message.edit_enabled;
        },

        //ELLIMINAZIONE TUTTI I MESSAGGI
        deleteAllMessage(){
            this.contacts[this.movimento].messages = [];
        },

        //DROPDOWN PWE IL MESSAGGIO DA CANCELLARE
        showDropdown(message){
            this.contacts[this.movimento].messages.forEach(msg => {
                msg.showDropdown = false;
            });
            
            message.showDropdown = !message.showDropdown;
        },

        //GESTISCE IL CAMBIO COLORE DEL BACKGROUND
        changeBackground(){
            document.body.classList.toggle('grey-darker');
            this.isSunVisible = !this.isSunVisible;
        }
    },
}).mount('#app');
