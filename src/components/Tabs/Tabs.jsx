import React from 'react'
import Tab from './Tab'
import './Tabs.css'

const Tabs = () => {
  return (
    <div className='tabs'>
        <Tab
            head={"TOP ARTISTS"}
            tit1={"Artists"}
            tit2={"Royalty"}
            name1={"Star Girl"}
            money1={"$17,359.26"}
            name2={"Ije Cave"}
            money2={"$9,368.48"}
            name3={"Tunestar"}
            money3={"$2,193.50"}
            name4={"Steveland"}
            money4={"$701.81"}
            name5={"Ije Cave, Flavour"}
            money5={"$103.71"}
        />
        <Tab
        head={"TOP RELEASES"}
            tit1={"Title"}
            tit2={"Royalty"}
            name1={"This Life"}
            money1={"$12,687.26"}
            name2={"    "}
            money2={"$8,917.48"}
            name3={"N/A"}
            money3={"$2,089.50"}
            name4={"The Singles Collection"}
            money4={"$1,304.45"}
            name5={"My Place"}
            money5={"$941.08"}   
        />
        <Tab
        head={"TOP TRACKS"}
            tit1={"Title"}
            tit2={"Royalty"}
            name1={"Nwa Aba"}
            money1={"$8,359.26"}
            name2={"My Place"}
            money2={"$4,368.48"}
            name3={"One Thousand"}
            money3={"$4,193.50"}
            name4={"Remember"}
            money4={"$4,701.81"}
            name5={"My Place"}
            money5={"$1,115"}
        />
        <Tab
        head={"TOP DSPS"}
            tit1={"DSPS"}
            tit2={"Royalty"}
            name1={"VEVO"}
            money1={"$9,359.26"}
            name2={"Spotify"}
            money2={"$7,400.48"}
            name3={"Apple Music"}
            money3={"$3,916.64"}
            name4={"Steveland"}
            money4={"$701.81"}
            name5={"Ije Cave, Flavour"}
            money5={"$103.71"}
        />
        <Tab
        head={"TOP ARTISTS"}
            tit1={"Artists"}
            tit2={"Royalty"}
            name1={"Star Girl"}
            money1={"$17,359.26"}
            name2={"Ije Cave"}
            money2={"$9,368.48"}
            name3={"Tunestar"}
            money3={"$2,193.50"}
            name4={"Steveland"}
            money4={"$701.81"}
            name5={"Ije Cave, Flavour"}
            money5={"$103.71"}
        />
    </div>
  )
}

export default Tabs