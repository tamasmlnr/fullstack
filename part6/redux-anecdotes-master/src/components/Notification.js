import React from 'react'

const Notification = ({ store }) => {
  const notif = store.getState().notification
  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1
  }
  return (
    notif === '' ? <></> :
    <div style={style}>
     {notif}
    </div>
  )
}

export default Notification