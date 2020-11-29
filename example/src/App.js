import React from 'react'

import { Notification } from 'notification'
import 'notification/dist/index.css'

const App = () => {
  return <Notification text="My Simple Notification lib 😄" type="success" timeStamp="10000" />
}

export default App
