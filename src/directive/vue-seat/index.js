const defaultImg = require('../../assets/default.png')
let originData = ''
const install = Vue => {
    Vue.directive('seat', {
        bind(el, binding, vnode) {
            if (vnode.tag == 'img') {
                if (!el.src) {
                    el.src = defaultImg
                }
            } else {
                originData = el.innerHTML
                if (!originData && originData !== 0) {
                    const defaultConfig = {
                        height: '100%',
                        background: '#eee',
                    }
                    const config = Object.assign(defaultConfig, binding.value ? binding.value.config : {})
                    let seatHTML = '<div style="'
                    Object.keys(config).forEach(key => {
                        seatHTML += `${key}:${config[key]};`
                    })
                    seatHTML += '"></div>'
                    el.innerHTML = seatHTML
                } else {
                    el.innerHTML = originData
                }
            }
        },
        update(el, binding) {
            if (el.children[0] && binding.value.data !== originData) {
                el.innerHTML = binding.value.data
            }
        }
    })
}

export default {
    install
}