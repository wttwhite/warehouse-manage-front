const vueComps = import.meta.glob('./**/index.vue', { eager: true, import: 'default' })

export default app => {
  for (const path in vueComps) {
    const parts = path.split('/')
    const componentName = parts[parts.indexOf('index.vue') - 1]
    app.component(componentName, vueComps[path])
  }
}
