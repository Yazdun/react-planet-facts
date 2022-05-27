export const framer_menu = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
  },
  exit: {
    opacity: 0,
  },
  transition: { duration: 0.2 },
}

export const framer_circle = delay => {
  return {
    initial: { scale: 0 },
    animate: { scale: 1 },
    transition: {
      type: 'spring',
      stiffness: 260,
      damping: 20,
      delay: 0.2 + delay / 10,
    },
  }
}

export const framer_name = {
  initial: { x: '-80%', opacity: 0 },
  animate: { x: 0, opacity: 1 },
  transition: {
    delay: 0.2,
  },
}
