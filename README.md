# Basics of Framer Motion in React.js

## 📌 Introduction

Framer Motion is a **production-ready animation library for React** that makes it easy to create smooth, powerful, and interactive animations with minimal code. It is widely used in modern React and Next.js applications to enhance user experience through animations and gestures.

Framer Motion works on top of **React components** and uses a simple, declarative syntax, making animations readable and maintainable.

---

## 🚀 Why Use Framer Motion?

* Simple and declarative API
* Smooth animations with high performance
* Built-in support for gestures (hover, tap, drag)
* Easy page and component transitions
* Works seamlessly with React and Next.js
* No need for complex CSS keyframes

---

## 📦 Installation

Install Framer Motion using npm or yarn:

```bash
npm install framer-motion
```

or

```bash
yarn add framer-motion
```

---

## 🧩 Basic Concept: motion Components

Framer Motion provides special components called **motion components**. These are animated versions of normal HTML and SVG elements.

Example:

```jsx
import { motion } from "framer-motion";

function App() {
  return (
    <motion.div>
      Hello Framer Motion
    </motion.div>
  );
}

export default App;
```

Here, `motion.div` behaves like a normal `<div>` but supports animation props.

---

## 🎬 Basic Animation

Use the `initial`, `animate`, and `transition` props to create animations.

```jsx
<motion.div
  initial={{ opacity: 0, y: -50 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }}
>
  Animated Box
</motion.div>
```

### Explanation:

* **initial**: Starting state of the animation
* **animate**: Final state
* **transition**: Controls speed, delay, and animation type

---

## 🖱️ Gesture Animations

Framer Motion supports gestures like hover and tap.

### Hover Animation

```jsx
<motion.button
  whileHover={{ scale: 1.1 }}
  whileTap={{ scale: 0.9 }}
>
  Click Me
</motion.button>
```

### Common Gesture Props:

* `whileHover`
* `whileTap`
* `whileDrag`

---

## 🧲 Drag Animations

You can make elements draggable easily:

```jsx
<motion.div
  drag
  dragConstraints={{ left: 0, right: 300 }}
>
  Drag Me
</motion.div>
```

---

## 🔁 Variants (Reusable Animations)

Variants allow you to define multiple animation states and reuse them.

```jsx
const boxVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 }
};

<motion.div
  variants={boxVariants}
  initial="hidden"
  animate="visible"
>
  Variant Animation
</motion.div>
```

### Benefits of Variants:

* Cleaner code
* Reusable animations
* Easy coordination between components

---

## ⏳ Transition Types

Framer Motion supports different transition styles:

```jsx
transition={{
  type: "spring",
  stiffness: 100,
  damping: 10
}}
```

### Common Types:

* `tween`
* `spring`
* `inertia`

---

## 📄 Page Transitions (AnimatePresence)

`AnimatePresence` enables animations when components mount and unmount.

```jsx
import { AnimatePresence, motion } from "framer-motion";

<AnimatePresence>
  {isVisible && (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    />
  )}
</AnimatePresence>
```

---

## ⚡ Performance Benefits

* Uses `requestAnimationFrame`
* Optimized for React rendering
* Hardware-accelerated animations

---

## 🧠 Best Practices

* Use `variants` for complex animations
* Keep animations subtle and meaningful
* Avoid overusing motion on every element
* Prefer Framer Motion over CSS for interactive UI

---

## 📚 When to Use Framer Motion

* Interactive dashboards
* Modern landing pages
* Page transitions in SPAs
* Micro-interactions (buttons, cards, modals)

---

## 🔗 Resources

* Official Documentation: [https://www.framer.com/motion/](https://www.framer.com/motion/)
* GitHub Repository: [https://github.com/framer/motion](https://github.com/framer/motion)

---

## ✅ Conclusion

Framer Motion simplifies animation in React by providing a powerful yet easy-to-use API. With minimal code, you can create professional-grade animations that improve user experience and visual appeal.

Mastering the basics of Framer Motion is a valuable skill for modern frontend and full-stack developers.

---

✨ Happy Animating with Framer Motion!
