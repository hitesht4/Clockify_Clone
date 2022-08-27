import { Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react';
import React, { useState } from 'react'
import styles from "../../FeaturesStyle/Pages.module.css"
const Reports = () => {
  const [summary,setsummary]=useState(true);
  const [detailed,setdetailed]=useState(false);
  const [weekly,setweekly]=useState(false)
  const handlesummary=()=>{
    
     setdetailed(false);
     setweekly(false)
     setsummary(true);
  }
  const handledetailed=()=>{
      
      setsummary(false);
      setweekly(false);
      setdetailed(true);
  }
  const handleweekly=()=>{
     
      setdetailed(false);
      setsummary(false)
      setweekly(true);
  }
  return (
    <div className={styles.div}>
      <h2>Reports</h2>
      <p>See who worked on what, how much money you earn, review your team's time, and export the data.</p>
      <Tabs>
        <TabList>
          <Tab>
               SUMMARY
          </Tab>
          <Tab>
            DETAILED
          </Tab>
          <Tab>
             WEEKLY
          </Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
          <div> <img src="https://clockify.me/assets/images/features/features-reports-screenshot.svg" alt="" /></div>
          </TabPanel>
          <TabPanel>
          <div> <img src="https://clockify.me/assets/images/features/features-detailed-screenshot.svg" alt="" /></div>
          </TabPanel>
          <TabPanel>
          <div><img src="https://clockify.me/assets/images/features/features-weekly-screenshot.svg" alt="" /></div>
          </TabPanel>
        </TabPanels>
      </Tabs>
      {/* <div>
        <div onClick={handlesummary}>summary</div>
        <div onClick={handledetailed}>DETAILED</div>
        <div onClick={handleweekly}>WEEKLY</div>
      </div> */}
{/*       
        <div>
        
        {
          detailed ?
                   ( <div>detailed <img src="https://clockify.me/assets/images/features/features-detailed-screenshot.svg" alt="" /></div>):(<div></div>)
          
        }
        
       {
            summary ? (<div>summary <img src="https://clockify.me/assets/images/features/features-reports-screenshot.svg" alt="" /></div>):(<div></div>)
       }
         
      {
            weekly ?(<div>weekly <img src="https://clockify.me/assets/images/features/features-weekly-screenshot.svg" alt="" /></div>):(<div></div>)
      }
     
          </div> */}
        
      
       <div>
        {/* footer */}
       </div>
       
      



    </div>
  )
}

export default Reports