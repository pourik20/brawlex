import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const BrawlerList = () => {
  const [selectedId, setSelectedId] = useState(null)
  const items = [
    { id: 'firstId', title: 'First item', subtitle: 'First item subtitle' },
    { id: 'secondId', title: 'Second item', subtitle: 'Secondt item subtitle' },
    { id: 'thirdId', title: 'Third item', subtitle: 'Third item subtitle' },
  ]
  return (
    <>
      {items.map((item) => (
        <motion.div
          key={item.id}
          layoutId={item.id}
          onClick={() => setSelectedId(item.id)}
        >
          <motion.h5>{item.subtitle}</motion.h5>
          <motion.h2>{item.title}</motion.h2>
        </motion.div>
      ))}

      <AnimatePresence>
        {selectedId && (
          <motion.div layoutId={selectedId}>
            <motion.h5>subtitle</motion.h5>
            <motion.h2>title</motion.h2>
            <motion.button onClick={() => setSelectedId(null)} />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default BrawlerList
