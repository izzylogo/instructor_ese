import React from 'react'
import './Tab.css'

const Tab = (props) => {
  return (
    <div className='tab'>
        <div className="tab-contain">
            <p>{props.head}</p>
            <table>
                <tr>
                    <th>{props.tit1}</th>
                    <th>{props.tit2}</th>
                </tr>
                <tr>
                    <td>{props.name1}</td>
                    <td>{props.money1}</td>
                </tr>
                <tr>
                    <td>{props.name2}</td>
                    <td>{props.money2}</td>
                </tr>
                <tr>
                    <td>{props.name3}</td>
                    <td>{props.money3}</td>
                </tr>
                <tr>
                    <td>{props.name4}</td>
                    <td>{props.money4}</td>
                </tr>
                <tr>
                    <td>{props.name5}</td>
                    <td>{props.money5}</td>
                </tr>
            </table>
        </div>
    </div>
  )
}

export default Tab