'use client'
import React, { useEffect } from 'react'

const Home = () => {
  useEffect(() => {
    const getData = async () => {
      const token =
        'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6Ijc2MzVjMTlhLWJmNjItNGJhZC1hZDAxLWNiMTY0ZDJjNjU5YyIsImlhdCI6MTY3MzcwMzU5Nywic3ViIjoiZGV2ZWxvcGVyLzgyMzBiMGZjLWE4MTUtNTA1Ni1mODhjLTAzZjBlMWY3Njg1ZCIsInNjb3BlcyI6WyJicmF3bHN0YXJzIl0sImxpbWl0cyI6W3sidGllciI6ImRldmVsb3Blci9zaWx2ZXIiLCJ0eXBlIjoidGhyb3R0bGluZyJ9LHsiY2lkcnMiOlsiMjEyLjc5LjExMC4xMTQiXSwidHlwZSI6ImNsaWVudCJ9XX0.n52jxuR_J1O_Qe9y4yG3na5os0fg8Nrv4gI30PVgupr-KMNKY7F7urQePyEmXyPCxxbpD4PC_rL3yw8lP-dWOQ'
      const id = '#LLUVCYPLR'
      const url = `https://api.brawlstars.com/v1/players/${id}`
      const res = await fetch(url, {
        headers: { Authentication: 'Bearer Token' },
      })
      const json = await res.json()
      console.log(json)
    }
    getData()
  }, [])
  return <div>Home</div>
}

export default Home
