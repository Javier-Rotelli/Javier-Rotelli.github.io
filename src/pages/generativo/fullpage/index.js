import React, { useEffect } from "react"
import { ReactP5Wrapper } from "@p5-wrapper/react"

import { sketch, lines } from "../../../Generativo/generadoresAnimados"

const GenerativoPage = () => {
  return <ReactP5Wrapper sketch={lines} />
}

export default GenerativoPage
