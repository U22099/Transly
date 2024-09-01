"use client"

import React from 'react'

const Home = () => {
  return (
    <div>
        <div>
            <textarea
            className=""
            id="input"
            />
            <div>
                <select id="selectA">
                    <option value=""></option>
                </select>
            </div>
        </div>
        <div>
            <textarea
            className=""
            id="output"
            />
            <div>
                <select id="selectB">
                    <option value=""></option>
                </select>
            </div>
        </div>
    </div>
  )
}

export default Home