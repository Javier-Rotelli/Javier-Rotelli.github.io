import React, { useState } from "react"
import { Button, Popover } from "@blueprintjs/core"

import * as styles from "./styles.module.css"
import useCanvasBackground from "../useCanvasBackground"

const CanvasBackground = () => {
  const [bump, setBump] = useState(Date.now())
  useCanvasBackground(bump)
  return (
    <Button
      icon="heatmap"
      className={styles.info}
      onClick={() => setBump(Date.now())}
    />
  )
}

export default CanvasBackground
