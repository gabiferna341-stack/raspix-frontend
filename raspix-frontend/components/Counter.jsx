// src/components/Counter.jsx
import { useState } from "react"

export default function Counter() {
  const [count, setCount] = useState(0)

  return (
    <div className="card">
      <button onClick={() => setCount((c) => c + 1)}>
        Contador: {count}
      </button>
      <p>
        Edite <code>src/components/Counter.jsx</code> e salve para testar o HMR ⚡
      </p>
    </div>
  )
}
