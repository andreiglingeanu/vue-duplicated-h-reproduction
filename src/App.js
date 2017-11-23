export default {
  name: 'App',

  render(h) {
    let nestedRenderFunc = this.$scopedSlots.default

    return nestedRenderFunc ? (
      nestedRenderFunc({
        text: 'Hello From Render Function',
      })
    ) : (
      <div>Hello</div>
    )
  },
}
