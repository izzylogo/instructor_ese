import React from 'react'
import './Tab.css'

const Tab = () => {
  return (
    <div className='tab'>
        <div className="tab-contain">
            <p>TOP ARTISTS</p>
            <table>
                <tr>
                    <th>Company</th>
                    <th>Contact</th>
                </tr>
                <tr>
                    <td>Alfreds Futterkiste</td>
                    <td>Maria Anders</td>
                </tr>
                <tr>
                    <td>Centro comercial Moctezuma</td>
                    <td>Francisco Chang</td>
                </tr>
                <tr>
                    <td>Ernst Handel</td>
                    <td>Roland Mendel</td>
                </tr>
                <tr>
                    <td>Island Trading</td>
                    <td>Helen Bennett</td>
                </tr>
                <tr>
                    <td>Laughing Bacchus Winecellars</td>
                    <td>Yoshi Tannamuri</td>
                </tr>
                <tr>
                    <td>Magazzini Alimentari Riuniti</td>
                    <td>Giovanni Rovelli</td>
                </tr>
            </table>
        </div>
    </div>
  )
}

export default Tab