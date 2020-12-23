// Codice viene eseguito solo quando documento e' carico
let app = new Vue({
  el: "#root",
  data: {
    messTime: [],
    findName: [],
    nowTime: "",
    initValue: "",
    searchInitValue: "",
    column: "column",
    mess_sender: "mess_sender",
    mess_receiver: "mess_receiver",
    contacts: [
      {
        name: "Michele",
        avatar: "assets/img/avatar/avatar_1.jpg",
        visible: true,
        g: true,
        messages: [
          {
            date: "10/01/2020 15:30:55",
            text: "Hai portato a spasso il cane?",
            status: "sent",
          },
          {
            date: "10/01/2020 15:50:00",
            text: "Ricordati di dargli da mangiare",
            status: "sent",
          },
          {
            date: "10/01/2020 16:15:22",
            text: "Tutto fatto!",
            status: "received",
          },
        ],
      },
      {
        name: "Fabio",
        avatar: "assets/img/avatar/avatar_2.jpg",
        visible: false,
        g: true,
        messages: [
          {
            date: "20/03/2020 16:30:00",
            text: "Ciao come stai?",
            status: "sent",
          },
          {
            date: "20/03/2020 16:30:55",
            text: "Bene grazie! Stasera ci vediamo?",
            status: "received",
          },
          {
            date: "20/03/2020 16:35:00",
            text: "Mi piacerebbe ma devo andare a fare la spesa.",
            status: "sent",
          },
        ],
      },
      {
        name: "Samuele",
        avatar: "assets/img/avatar/avatar_3.jpg",
        visible: false,
        g: true,
        messages: [
          {
            date: "28/03/2020 10:10:40",
            text: "La Marianna va in campagna",
            status: "received",
          },
          {
            date: "28/03/2020 10:20:10",
            text: "Sicuro di non aver sbagliato chat?",
            status: "sent",
          },
          {
            date: "28/03/2020 16:15:22",
            text: "Ah scusa!",
            status: "received",
          },
        ],
      },
      {
        name: "Luisa",
        avatar: "assets/img/avatar/avatar_4.jpg",
        visible: false,
        g: true,
        messages: [
          {
            date: "10/01/2020 15:30:55",
            text: "Lo sai che ha aperto una nuova pizzeria?",
            status: "sent",
          },
          {
            date: "10/01/2020 15:50:00",
            text: "Si, ma preferirei andare al cinema",
            status: "received",
          },
        ],
      },
    ],
  },
  methods: {
    
      

    time: function () {
      let timeNow = new Date().toLocaleTimeString();
      let dateNow = new Date().toLocaleDateString();
      return `${dateNow}  ${timeNow}`;
    },

    userActive: function (item, index) {
      this.contacts.forEach((element) => {
        // console.log(element);
        element.visible = false;
        // console.log(element.visible);

        if (this.contacts[index].visible == false) {
          this.contacts[index].visible = true;
          // console.log(this.contacts[index].visible);
        }
      });
    },

    addMessage: function (index) {
      // console.log(this.initValue);

      let newMess = {
        date: this.time(),
        text: this.initValue,
        status: "sent",
      };
      if (newMess.text.length > 0) {
        this.contacts[index].messages.push(newMess);
        setTimeout(
          function () {
            let okMess = {
              date: this.time(),
              text: "Ok",
              status: "received",
            };
            this.contacts[index].messages.push(okMess);
          }.bind(this),
          1000
        );
      }

      this.initValue = "";
    },
  },

  beforeUpdate: function () {
    this.contacts.forEach((element) => {
      console.log(element.name);
      let userNames = element.name.toLowerCase();
      if (userNames.search(this.searchInitValue) != -1) {
        console.log(userNames.search(this.searchInitValue));
        element.g = true;
      } else {
        element.g = false;
      }
      
    });
    
  },

  mounted: function () {
        this.contacts.forEach((element) => {
        let messaggiLista = element.messages;
        // console.log(messaggiLista);
        let i = messaggiLista[messaggiLista.length - 1].date;
        // console.log(i);
        this.messTime.push(i);
        console.log(this.messTime);
        
      });
    
  }

  
});