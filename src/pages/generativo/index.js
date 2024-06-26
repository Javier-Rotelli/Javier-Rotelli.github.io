import React, { useState } from "react"

import Layout from "../../components/Layout/layout"
import Canvas from "../../Generativo/Canvas"
import generadores from "../../Generativo/generadores"
import { Tabs, Tab, Button } from "@blueprintjs/core"
import { container, canvas } from "./styles.module.css"

const GenerativoPage = () => {
  const [current, setCurrent] = useState("uno")
  const [bump, setBump] = useState(Date.now())

  return (
    <Layout>
      <div className={container}>
        <Tabs
          animate={true}
          id="navbar"
          large={true}
          onChange={setCurrent}
          selectedTabId={current}
          vertical={true}
        >
          {Object.entries(generadores).map(([key, generador], i) => (
            <Tab id={key} key={key} title={`${i + 1} - ${generador.nombre}`} />
          ))}
        </Tabs>
        <div className={canvas}>
          <Canvas onMount={generadores[current].render} bump={bump} />
          <Button icon="refresh" onClick={() => setBump(Date.now)} />
        </div>
      </div>
    </Layout>
  )
}

export default GenerativoPage
