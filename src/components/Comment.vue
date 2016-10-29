<template lang="jade">
  .c
    .ui.container
      .ui.comments
        h3.ui.dividing.header 留言板
        .comment(v-for="a in anArray")
          a.avatar
            img(src='../../static/bear.png')
          .content
            a.author {{a.name}}
            .metadata
              span.date {{a.time | timestamp}}
            .text {{a.text}}
            .actions
              a.reply Reply
              a.delate Delete
          .comments(v-if="a.replys")
            .comment(v-for="r in a.replys")
              a.avatar
                img(src='../../static/rabbit.png')
              .content
                a.author {{r.name}}
                .metadata
                  span.date {{r.time | timestamp}}
                .text {{r.text}}
                .actions
                  a.reply Reply
                  a.delate Delete
     
        form.ui.reply.form
          .field
            textarea(rs="8", v-model="newText", placeholder="add your comment...", @keyup.enter="submit(newText); newText = ''")
          .ui.blue.labeled.submit.icon.button(@click="submit(newText); newText = ''")
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
    submit (txt, name) {
      this.$firebaseRefs.anArray.push({
        name: name || '匿名人士',
        text: txt,
        time: (new Date()).getMilliseconds() // bug here...
      })
    }
    // ...
  }
}
</script>



<style lang="scss" scoped>
@import 'bourbon';

.c {
  text-align: left;
  font-size: 0.6rem;
}

</style>
