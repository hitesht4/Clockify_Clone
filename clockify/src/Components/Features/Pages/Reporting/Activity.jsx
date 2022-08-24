import { Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react';
import React, { useState } from 'react'
import styles from "../../FeaturesStyle/Pages.module.css"
const Activity = () => {
  const [location,setlocation]=useState(true);
  const [screenshots,setscreenshots]=useState(false)
  const handlelocation=()=>{
     setlocation(true);
     setscreenshots(false)
  }
  const handlescreenshots=()=>{
    setlocation(false);
    setscreenshots(true);
  }
  return (
    <div className={styles.div}>
      <h2>Activity</h2>
      <p>See visited sites and what you've worked on.</p>
      {/* <div> */}
        <Tabs>
          <TabList>
            <Tab>LOCATION</Tab>
            <Tab>SCREENSHOT</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
            <div>location <img src="https://clockify.me/assets/images/features/features-locations-screenshot.png" alt="" /></div>
            </TabPanel>
            <TabPanel>
            <div>screenshot <img src="https://clockify.me/assets/images/features/features-screenshots-screenshot.png" alt="" /></div>
            </TabPanel>
          </TabPanels>
        </Tabs>
        {/* <div onClick={handlelocation}>LOCATIONS</div>
        <div onClick={handlescreenshots}>SCREENSHOTS</div>
      </div> */}

     {/* <div>
      {
        location ?(<div>location <img src="https://clockify.me/assets/images/features/features-locations-screenshot.png" alt="" /></div>):(<div>screenshot <img src="https://clockify.me/assets/images/features/features-screenshots-screenshot.png" alt="" /></div>)
      }
      
     </div> */}

     <div>
      footer
     </div>


    </div>
  )
}

export default Activity