import React, { useEffect, useState } from "react"

import Layout from "../components/Layout/layout"
import Canvas from "../Generativo/Canvas"
import generadores from "../Generativo/generadores"
import { Tabs, Tab } from "@blueprintjs/core"

const GenerativoPage = () => {
  const [current, setCurrent] = useState("uno")

  return (
    <Layout>
      <Tabs
        animate={true}
        id="navbar"
        large={true}
        onChange={setCurrent}
        selectedTabId={current}
      >
        {Object.entries(generadores).map(([key, generador], i) => (
          <Tab id={key} key={key} title={`${i + 1} - ${generador.nombre}`} />
        ))}
      </Tabs>
      <Canvas onMount={generadores[current].render} />
    </Layout>
  )
}

export default GenerativoPage
