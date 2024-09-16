import './App.css';
import Preloader from './components/Preloader'
import Page from './components/Page'
import { useEffect, useState } from 'react';
import {AnimatePresence, motion} from 'framer-motion'

function App() {
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 5380)
  }, [])
  return (
    <div>
      {loading? <Preloader/> : <motion.div >
        <AnimatePresence><Page/></AnimatePresence>
      </motion.div>}
    </div>
  )
}

export function page() {
  return (
    <div>
      <h1>hello</h1>
    </div>
  )
}

export default App;
