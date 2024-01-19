import * as $ from 'jquery'

function CreateAnalitycs() {
    let counter = 0
    let destroyed = false
    const listener = ()=> counter++

    $(document).on('click', listener) 
        return {
            destroy() {
                $(document).off('click', listener)
                destroyed = true
        },
        getClicks() {
            if (destroyed) {
                return `Analitycs is destroyed. Total clicks = ${counter}`
            }
            return counter
        }
    }
}

window.analytics = CreateAnalitycs()