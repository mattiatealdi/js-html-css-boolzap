

const app = new Vue({
  el:"#app",
  data: {
    
    currentName: 'Michele',
    currentIndex: '0',
    messageIndex: 0,
    now: dayjs().format("D/M/YYYY H:mm:ss"),
    strMsg: '',
    searchContact: '',
    arraySearched: [],

    user: {
      name: 'Nome utente',
      avatar: '_io'
    },

    contacts: [
      {
        name: 'Michele',
        avatar: '_1',
        visible: true,
        messages: [
          {
            date: '10/01/2020 15:30:55',
            text: 'Hai portato a spasso il cane?',
            status: 'sent'
          },
          {
            date: '10/01/2020 15:50:00',
            text: 'Ricordati di dargli da mangiare',
            status: 'sent'
          },
          {
            date: '10/01/2020 16:15:22',
            text: 'Tutto fatto!',
            status: 'received'
          }
        ],
      },
      {
        name: 'Fabio',
        avatar: '_2',
        visible: true,
        messages: [
          {
            date: '20/03/2020 16:30:00',
            text: 'Ciao come stai?',
            status: 'sent'
          },
          {
            date: '20/03/2020 16:30:55',
            text: 'Bene grazie! Stasera ci vediamo?',
            status: 'received'
          },
          {
            date: '20/03/2020 16:35:00',
            text: 'Mi piacerebbe ma devo andare a fare la spesa.',
            status: 'sent'
          }
        ],
      },
      {
        name: 'Samuele',
        avatar: '_3',
        visible: true,
        messages: [
          {
            date: '28/03/2020 10:10:40',
            text: 'La Marianna va in campagna',
            status: 'received'
          },
          {
            date: '28/03/2020 10:20:10',
            text: 'Sicuro di non aver sbagliato chat?',
            status: 'sent'
          },
          {
            date: '28/03/2020 16:15:22',
            text: 'Ah scusa!',
            status: 'received'
          }
        ],
      },
      {
        name: 'Luisa',
        avatar: '_4',
        visible: true,
        messages: [
          {
            date: '10/01/2020 15:30:55',
            text: 'Lo sai che ha aperto una nuova pizzeria?',
            status: 'sent'
          },
          {
            date: '10/01/2020 15:50:00',
            text: 'Si, ma preferirei andare al cinema',
            status: 'received'
          }
        ],
      },
    ],

    backgroundImage: 'img/mine.jpg'
  },

  methods: {

    changeName(index){
      console.log(index);
      this.currentName = this.contacts[index].name;
      this.currentIndex = index;
    },

    addMsg(){
      console.log('here');
/*       this.contacts[this.currentIndex].messages.text = this.strMsg;
      this.contacts[this.currentIndex].messages.status = 'sent'; */
      this.contacts[this.currentIndex].messages.push({
        text: this.strMsg,
        status : 'sent',
        date: this.now
      });
      this.strMsg = ''
/*    console.log(this.contacts[this.currentIndex].messages); */
      setTimeout(()=>{
        this.contacts[this.currentIndex].messages.push({
          text: 'ok',
          status : 'received',
          date: this.now
        });
      }, 1000);
    },

    filteredList(){
      console.log(this.searchContact);
      this.arraySearched = this.contacts.filter((contact)=>{
        if(contact.name.includes(this.searchContact)){
          return true;
        }else{
          return false;
        }
      })
      console.log(this.arraySearched)
    },

    filteredContacts(){
      this.contacts.forEach((contact) => {
        /* console.log(this.searchContact); */
        let contactLower = contact.name.toLowerCase();
        if(contactLower.includes(this.searchContact.toLowerCase())){
          contact.visible = true;
        }else{
          contact.visible = false;
        }
      })
    },

    remove(index) {
      /* console.log('click'); */
      this.messageIndex = index;
      /* console.log(this.messageIndex); */
      this.contacts[this.currentIndex].messages.splice(this.messageIndex, 1);
      }

  },

})