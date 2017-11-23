import Vue from 'vue'
import App from './App.js'

new Vue({
  el: '#app',
  render(h) {
    let vm = this

    return (
      <App
        scopedSlots={{
          default({text}) {
            // return vm.$createElement('div', text)
            return <div>{props.text}</div>
          },
        }}
      />
    )
  },
})
