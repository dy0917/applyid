import Vue from 'vue'

export default ()=> {
    const requireComponent = require.context("../components", true, /\.(vue|js)$/);
    requireComponent.keys().forEach(filename => {
      const component = requireComponent(filename)
      /* Get componenent name from filename IE. "/components/component-name.vue" to "ComponentName" */
      const componentName = 
          // Gets the file name regardless of folder depth
          filename
            .split('/')
            .pop()
            .replace(/\.\w+$/, '').replace(/(^[A-Z])/, ([first]) => first.toLowerCase())
            .replace(/([A-Z])/g, ([letter]) => `-${letter.toLowerCase()}`)
      
      Vue.component(componentName, component.default || component); /* Global component registration */
    });
}