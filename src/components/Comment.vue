<template lang="jade">
  .c
    .ui.container
      form.ui.reply.form(@submit.prevent="submit(newText); newText = ''")
        textarea(rows="3", v-model="newText", placeholder="留下您的想法...", @keyup.enter="submit(newText); newText = ''")
        
        .ui.blue.labeled.submit.icon.button
          i.icon.edit
          |  留言
      .ui.comments
        h3.ui.dividing.header 留言板
        .comment(v-for="a in reverse(anArray)")
          a.avatar
            img(src='../../static/bear.png')
          .content
            a.author {{a.name}}
            .metadata
              span.date {{a.time | timestamp}}
            .text {{a.text}}
            .actions
              a.reply Reply
              a.delete(@click="removeComment(a['.key'])") Delete
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
                  a.delete.disabled(@click="removeReply()") Delete
     



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
    reverse (list) {
      var ans = []
      for (var i = list.length - 1; i >= 0; i--) {
        ans.push(list[i])
      }
      // console.log(ans)
      return ans
    },
    submit (txt, name) {
      this.$firebaseRefs.anArray.push({
        name: name || '匿名人士',
        text: txt,
        time: (new Date()).getTime()
      })
    },
    removeComment (key) {
      if (window.confirm('確定要刪除嗎? 這動作不能回復')) {
        this.$firebaseRefs.anArray.child(key).remove()
      }
    },
    removeReply (keyA, keyR) {
      // ...
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
