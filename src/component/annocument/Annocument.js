import React from "react"
import lightlamp from '../assets/bannerimage/lightlampbanner.png'
import watchbanner from '../assets/bannerimage/watchbanner.png'

const Annocument = () => {
  const mystyle = {
    width: "30%",
    height: "340px",
  }
  const mystyle1 = {
    width: "68%",
    height: "340px",
  }
  return (
    <>
      <section className='annocument background'>
        <div className='container d_flex'>
          <div className='img' style={mystyle}>
            <img src={watchbanner} width='100%' height='100%' />
          </div>
          <div className='img' style={mystyle1}>
            <img src={lightlamp}  width='100%' height='100%' />
          </div>
        </div>
      </section>
    </>
  )
}

export default Annocument