import React from 'react'
import './Homescreen.css'
import './Nav'
import Nav from './Nav'
import Banner from './Banner'
import requests from './request'
import Row from './Row'

function Homescreen() {
  return (
    <div className='homescreen'>

        <Nav/>
        <Banner/>
  <Row title='NETFLIX ORIGINALS'
       fetchurl = {requests.fetchNetflixOriginals}
       isLargeRow
   ></Row>  
   <Row title='Trending Now'
       fetchurl = {requests.fetchTrending}
   ></Row> 
   <Row title='Top Rated'
       fetchurl = {requests.fetchTopRated}
   ></Row> 
   <Row title='Action Movies'
       fetchurl = {requests.fetchActionMovies}
   ></Row> 
   <Row title='Comedy Movies'
       fetchurl = {requests.fetchComedyMovies}
   ></Row> 
   <Row title='Horror Movies'
       fetchurl = {requests.fetchHorrorMovies}
   ></Row> 
   <Row title='Romance Movies'
       fetchurl = {requests.fetchRomanceMovies}
   ></Row> 
   <Row title='Documentries'
       fetchurl = {requests.fetchDocumentaries}
   ></Row> 
   
   
      
    </div>
  )
}

export default Homescreen