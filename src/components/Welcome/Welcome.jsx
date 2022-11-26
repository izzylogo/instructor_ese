import React from 'react'
import './Welcome.css'

const Welcome = () => {
  return (
    <div className='welcome'>
        <div className="welcome_contain">
            <div className="header"> 
                <small>welcome </small>
                <span>{"Royal 👋"}</span>
            </div>
            <br />
            <div className="box">
                <div className="box_1">
                    <div className="asset box_content">
                        <p>Artists</p>
                        <h4>{17}</h4>
                    </div>
                    <div className="podcast box_content">
                        <p>Releases</p>
                        <h4>{68}</h4>
                    </div>
                    <div className="podcast-asset box_content">
                        <p>Tracks</p>
                        <h4>{178}</h4>
                    </div>
                </div>
                <div className="box_3">
                    <div className="downlaod box_content">
                        <p>Downloads</p>
                        <h4>{"1.5k"}</h4>
                    </div>
                    <div className="stream box_content">
                        <p>Streams</p>
                        <h4>{"17.5M"}</h4>
                    </div>
                </div>
                <div className="box_2">
                    <div className="net box_content">
                        <p>Total Earned</p>
                        <h4>{"$30K"}</h4>
                    </div>
                    <div className="due box_content">
                        <p>Label Gross</p>
                        <h4>{"$926"}</h4>
                    </div>
                    <div className="paid box_content">
                        <hr />
                        <div className="det">
                            <p>Total Due</p>
                            <h4>{"$926"}</h4>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default Welcome