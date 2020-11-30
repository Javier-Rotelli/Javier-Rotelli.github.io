import React, { useEffect, useRef, memo } from "react"

const setupCanvas = canvas => {
  if (canvas === null) {
    return
  }
  const context = canvas.getContext("2d")

  const size = canvas.width
  const dpr = window.devicePixelRatio

  context.scale(dpr, dpr)
  return { canvas, context, size }
}

const resetCanvas = ({ canvas }) => {
  const w = canvas.width
  canvas.width = 1
  canvas.width = w
}
const Canvas = memo(({ onMount, bump = "" }) => {
  const ct = useRef(null)

  useEffect(() => {
    if (ct.current !== null && ct.current.context !== undefined) {
      resetCanvas(ct.current)
      onMount(ct.current.context, ct.current.size)
    }
  }, [onMount, ct, bump])

  return (
    <canvas
      ref={canvasEl => {
        if (ct.current === null) ct.current = setupCanvas(canvasEl)
      }}
      width={600}
      height={600}
    />
  )
})

export default Canvas
