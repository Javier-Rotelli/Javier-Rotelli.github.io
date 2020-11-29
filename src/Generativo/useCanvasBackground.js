import { useEffect } from "react"
import generadores from "./generadores"

const useCanvasBackground = name => {
  useEffect(() => {
    const canvas = document.createElement("canvas")
    canvas.width = window.innerWidth
    canvas.height = window.innerWidth
    const ctx = canvas.getContext("2d")
    const gens = Object.values(generadores)
    const elegido = gens[Math.round(Math.random() * gens.length)]
    elegido.render(ctx, window.innerWidth)
    document.body.style.background = "url(" + canvas.toDataURL() + ")"
  }, [name])
}

export default useCanvasBackground
