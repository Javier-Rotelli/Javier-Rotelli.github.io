import { useEffect } from "react"
import generadores from "./generadores"

const useCanvasBackground = (bump = "") => {
  useEffect(() => {
    const canvas = document.createElement("canvas")
    canvas.width = window.innerWidth
    canvas.height = window.innerWidth
    const ctx = canvas.getContext("2d")
    const gens = Object.values(generadores)
    const elegido = gens[Math.floor(Math.random() * gens.length)]
    elegido.render(ctx, window.innerWidth)

    document.body.style.backgroundImage = "url(" + canvas.toDataURL() + ")"
  }, [bump])
}

export default useCanvasBackground
