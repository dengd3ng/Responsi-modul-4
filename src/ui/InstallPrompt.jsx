import { useEffect, useState } from 'react'

export default function InstallPrompt(){
  const [deferred, setDeferred] = useState(null)
  const [visible, setVisible] = useState(false)

  useEffect(()=>{
    function handler(e){
      e.preventDefault()
      setDeferred(e)
      setVisible(true)
    }
    window.addEventListener('beforeinstallprompt', handler)
    return ()=>window.removeEventListener('beforeinstallprompt', handler)
  },[])

  async function install(){
    if(!deferred) return
    deferred.prompt()
    const choice = await deferred.userChoice
    console.log('userChoice', choice)
    setVisible(false)
    setDeferred(null)
  }

  if(!visible) return null
  return (
    <div style={{marginLeft:12}}>
      <button onClick={install} className="btn">Install</button>
    </div>
  )
}
