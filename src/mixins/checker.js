export default {
  methods: {
    checkedFirst: function (list) {
      var ft = list.filter((o) => { return o.checked })
      if (!ft[0]) {
        return list
      } else {
        return ft
      }
    }
  }
}
