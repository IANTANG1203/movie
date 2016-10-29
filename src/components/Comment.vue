<template lang="jade">
  .c
    .ui.container
      .ui.comments
        h3.ui.dividing.header Comments
        .comment(v-for="a in anArray")
          a.avatar
            img(src='https://pixabay.com/static/uploads/photo/2013/07/13/01/07/polar-bear-155118_960_720.png')
          .content
            a.author {{a.name}}
            .metadata
              span.date {{a.time | timestamp}}
            .text {{a.text}}
            .actions
              a.reply Reply
          .comments(v-if="a.replys")
            .comment(v-for="r in a.replys")
              a.avatar
                img(src='https://pixabay.com/static/uploads/photo/2016/10/18/19/23/hare-1751147_960_720.png')
              .content
                a.author {{r.name}}
                .metadata
                  span.date {{r.time | timestamp}}
                .text {{r.text}}
                .actions
                  a.reply Reply
     
        form.ui.reply.form
          .field
            textarea(v-model="newText")
          .ui.blue.labeled.submit.icon.button(@click="newText = ''; submit(newText)")
            i.icon.edit
            |  Add Reply


</template>

<script>
import firebase from 'firebase'

var config = {
  apiKey: 'AIzaSyBD-vU6kY8qBdae1ANFCt312yiHBzcbCoI',
  authDomain: 'start-vue.firebaseapp.com',
  databaseURL: 'https://start-vue.firebaseio.com',
  storageBucket: '',
  messagingSenderId: '1094423879350'
}

var db = firebase.initializeApp(config).database()

export default {
  name: 'Comment',
  firebase: {
    anArray: db.ref('test-comments').limitToLast(25)
  },
  data () {
    return {
      newText: ''
      // ...
    }
  },
  methods: {
    submit: (txt) => {
      // Firebase...push...txt...
    }
    // ...
  }
}
</script>



<style lang="scss" scoped>
@import 'bourbon';

.c {
  text-align: left;
}

</style>
