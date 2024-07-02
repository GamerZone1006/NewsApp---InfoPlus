import React, { useEffect } from 'react'
import MatchDetailCard from '../components/MatchDetailCard'
import MatchSmallCard from '../components/MatchSmallCard'

export default function Teampage() {
    useEffect(()=>{
        const fetchMatches = async()=>{
            const response = await fetch('http://localhost:3000/team/Delhi%20Capitals');      ///
            const data = await response.json();
            console.log(data);
        }
        fetchMatches();
    },[]);
  return (
    <div className='teampg'>
      <h1>Chennai Super Kings</h1>
      <MatchDetailCard/>
      <MatchSmallCard/>
      <MatchSmallCard/>
      <MatchSmallCard/>
    </div>
  )
}
