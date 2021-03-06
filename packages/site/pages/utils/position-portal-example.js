import { Above } from '@pluralsight/ps-design-system-position'
import * as core from '@pluralsight/ps-design-system-core'
import Button from '@pluralsight/ps-design-system-button'
import React from 'react'
import Tooltip from '@pluralsight/ps-design-system-tooltip'

import { Head } from '../../src/ui/index.js'

export default function PortalExample() {
  const portal = React.useRef()
  const [node, setNode] = React.useState(portal.current)
  React.useEffect(() => {
    if (portal.current) setNode(portal.current)
  }, [portal])

  return (
    <div>
      <Head />
      <div className="example">
        <div className="relative-area">
          <Above
            show={
              <Tooltip tailPosition={Tooltip.tailPositions.bottomCenter}>
                Custom portal node
              </Tooltip>
            }
            inNode={node}
          >
            <Button
              style={{
                position: 'absolute'
              }}
            >
              Button
            </Button>
          </Above>
          This is an area that needs escaped
        </div>
        <div ref={portal} />
      </div>
      <style jsx>{`
        .example {
          height: 300px;
          width: 100%;
          background: ${core.colorsBackgroundLight[2]};
          border-radius: 8px;
        }
        .relative-area {
          position: relative;
          top: 25px;
          left: 25%;
          height: 200px;
          width: 200px;
          border: 2px dashed ${core.colorsOrange[6]};
          display: flex;
          justify-content: center;
          align-items: center;
          text-align: center;
          padding: 0 ${core.layout.spacingXLarge};
          font-size: ${core.type.fontSizeLarge};
          color: ${core.colorsOrange[6]};
        }
      `}</style>
    </div>
  )
}
