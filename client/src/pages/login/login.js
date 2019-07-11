import React, { Component } from 'react'
import logo1 from '../../assets/SSB_logo1.png'
import logo2 from '../../assets/SSB_logo2.png'
import logo3 from '../../assets/SSB_logo3.png'
import logo4 from '../../assets/SSB_logo4.png'
import logo5 from '../../assets/SSB_logo5.png'
import { interpolate, interpolateTransformSvg } from 'd3-interpolate'
import { easeBackOut } from 'd3-ease'
import { NodeGroup } from 'react-move'
import './login.css'

class Login extends Component {
  state = {
    width: null,
    height: null,
    item1: [{value: 7, img: logo1, n: 200}],
    item2: [{value: 0, img: logo2, n: 325}],
    item3: [{value: 0, img: logo3, n: 325}],
    item4: [{value: 10, img: logo4, n: 450}],
    item5: [{value: 13.5, img: logo5, n: 325}]
  }

  componentDidMount() {
    this.updateWidth()
    window.addEventListener('resize', this.updateWidth)
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWidth)
  }

  updateWidth = () => {
    this.setState(() => ({ width: this.container.offsetWidth || 200, height: this.container.offsetHeight || 200 }))
  }

  container = null

  render() {
    const { item1, item2, item3, item4, item5, width, height } = this.state

    return (
      <div className='loginpage'>
      <div style={{ width: '100%' }} ref={(d) => { this.container = d }}>
        {width === null ? null : (
          <NodeGroup
            data={item1}
            keyAccessor={(d) => d.value}

            start={() => ({
              x: -width,
              opacity: 0,
              color: '#ff69b4',
            })}

            enter={() => ([
              {
                x: [width * .2],
                color: ['#00cf77'],
                timing: { delay: 700, duration: 500, ease: easeBackOut },
              },
              {
                opacity: [1],
                timing: { duration: 1000 },
              },
            ])}

            interpolation={(begValue, endValue, attr) => {
              if (attr === 'transform') {
                return interpolateTransformSvg(begValue, endValue)
              }

              return interpolate(begValue, endValue)
            }}
          >
            {(nodes) => (
              <div style={{ margin: 10, position: 'relative' }}>
                {nodes.map(({ key, data, state: { x, opacity, color } }) => (
                  <div
                    key={key}
                    style={{
                      position: 'absolute',
                      transform: `translate(${x}px, ${key * 20}px)`,
                      opacity,
                      color,
                    }}
                  >
                    <img src={data.img} alt="logo" className="logoimg"/>
                  </div>
                ))}
              </div>
            )}
          </NodeGroup>
        )}
      </div>
      <div style={{ width: '100%' }} ref={(d) => { this.container = d }}>
        {width === null ? null : (
          <NodeGroup
            data={item2}
            keyAccessor={(d) => d.value}

            start={() => ({
              x: width * .05,
              y: height * 6,
              opacity: 0,
              color: '#ff69b4',
            })}

            enter={() => ([
              {
                y: [height],
                color: ['#00cf77'],
                timing: { delay: 1400, duration: 500, ease: easeBackOut },
              },
              {
                opacity: [1],
                timing: { duration: 500 },
              },
            ])}

            interpolation={(begValue, endValue, attr) => {
              if (attr === 'transform') {
                return interpolateTransformSvg(begValue, endValue)
              }

              return interpolate(begValue, endValue)
            }}
          >
            {(nodes) => (
              <div style={{ margin: 10, position: 'relative' }}>
                {nodes.map(({ key, data, state: { x, y, opacity, color } }) => (
                  <div
                    key={key}
                    style={{
                      position: 'absolute',
                      transform: `translate(${x}px, ${y * 1.65}px)`,
                      opacity,
                      color,
                    }}
                  >
                    <img src={data.img} alt="logo" className="logoimg2" />
                  </div>
                ))}
              </div>
            )}
          </NodeGroup>
        )}
      </div>
      <div style={{ width: '100%' }} ref={(d) => { this.container = d }}>
        {width === null ? null : (
          <NodeGroup
            data={item3}
            keyAccessor={(d) => d.value}

            start={() => ({
              x: width * 0.2,
              y: -height,
              opacity: 0,
              color: '#ff69b4',
            })}

            enter={() => ([
              {
                y: [height],
                color: ['#00cf77'],
                timing: { delay: 200, duration: 500, ease: easeBackOut },
              },
              {
                opacity: [1],
                timing: { duration: 500 },
              },
            ])}

            interpolation={(begValue, endValue, attr) => {
              if (attr === 'transform') {
                return interpolateTransformSvg(begValue, endValue)
              }

              return interpolate(begValue, endValue)
            }}
          >
            {(nodes) => (
              <div style={{ margin: 10, position: 'relative' }}>
                {nodes.map(({ key, data, state: { x, y, opacity, color } }) => (
                  <div
                    key={key}
                    style={{
                      position: 'absolute',
                      transform: `translate(${x}px, ${y*0.3}px)`,
                      opacity,
                      color,
                    }}
                  >
                    <img src={data.img} alt="logo" className="logoimg" />
                  </div>
                ))}
              </div>
            )}
          </NodeGroup>
        )}
      </div>
      <div style={{ width: '100%' }} ref={(d) => { this.container = d }}>
        {width === null ? null : (
          <NodeGroup
            data={item4}
            keyAccessor={(d) => d.value}

            start={() => ({
              x: width,
              opacity: 0,
              color: '#ff69b4',
            })}

            enter={() => ([
              {
                x: [width * 0.2],
                color: ['#00cf77'],
                timing: { delay: 700, duration: 500, ease: easeBackOut },
              },
              {
                opacity: [1],
                timing: { duration: 1000 },
              },
            ])}

            interpolation={(begValue, endValue, attr) => {
              if (attr === 'transform') {
                return interpolateTransformSvg(begValue, endValue)
              }

              return interpolate(begValue, endValue)
            }}
          >
            {(nodes) => (
              <div style={{ margin: 10, position: 'relative' }}>
                {nodes.map(({ key, data, state: { x, opacity, color } }) => (
                  <div
                    key={key}
                    style={{
                      position: 'absolute',
                      transform: `translate(${x}px, ${key * 20}px)`,
                      opacity,
                      color,
                    }}
                  >
                    <img src={data.img} alt="logo" className="logoimg" />
                  </div>
                ))}
              </div>
            )}
          </NodeGroup>
        )}
      </div>
      <div style={{ width: '100%' }} ref={(d) => { this.container = d }}>
        {width === null ? null : (
          <NodeGroup
            data={item5}
            keyAccessor={(d) => d.value}

            start={() => ({
              x: width,
              opacity: 0,
              color: '#ff69b4',
            })}

            enter={() => ([
              {
                x: [width * 0.3],
                color: ['#00cf77'],
                timing: { delay: 2000, duration: 500, ease: easeBackOut },
              },
              {
                opacity: [1],
                timing: { duration: 500 },
              },
            ])}

            interpolation={(begValue, endValue, attr) => {
              if (attr === 'transform') {
                return interpolateTransformSvg(begValue, endValue)
              }

              return interpolate(begValue, endValue)
            }}
          >
            {(nodes) => (
              <div style={{ margin: 10, position: 'relative' }}>
                {nodes.map(({ key, data, state: { x, opacity, color } }) => (
                  <div
                    key={key}
                    style={{
                      position: 'absolute',
                      transform: `translate(${x}px, ${key * 20}px)`,
                      opacity,
                      color,
                    }}
                  >
                    <img src={data.img} alt="logo" className="logoimg5" />
                  </div>
                ))}
              </div>
            )}
          </NodeGroup>
        )}
      </div>
      </div>
    )
  }
}

export default Login