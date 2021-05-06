import {Notify} from 'quasar'

const Notifier=(message, color="primary", position="center", timeout=2500)=>{
    Notify.create({
      message:message,
      color:color,
      position:position,
      timeout:timeout
    })
}

export default  Notifier
