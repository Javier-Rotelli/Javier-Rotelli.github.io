import React, { useEffect, useRef, memo } from "react"

const setupCanvas = canvas => {
  if (canvas === null) {
    return
  }
  const context = canvas.getContext("2d")

  const size = canvas.width
  const dpr = window.devicePixelRatio

  canvas.width = size * dpr
  canvas.height = size * dpr
  context.scale(dpr, dpr)
  return { canvas, context, size }
}

const resetCanvas = ({ canvas }) => {
  const w = canvas.width
  canvas.width = 1
  canvas.width = w
}
const Canvas = memo(({ onMount }) => {
  const ct = useRef(null)

  useEffect(() => {
    if (ct.current !== null && ct.current.context !== undefined) {
      resetCanvas(ct.current)
      onMount(ct.current.context, ct.current.size)
    }
  }, [onMount, ct])

  return (
    <canvas
      ref={canvasEl => {
        if (ct.current === null) ct.current = setupCanvas(canvasEl)
      }}
      width={500}
      height={500}
    />
  )
})

export default Canvas
