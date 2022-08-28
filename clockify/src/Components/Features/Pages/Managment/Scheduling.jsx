import { Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react';
import React, { useState } from 'react'
import styles from "../../FeaturesStyle/Pages.module.css"
const Scheduling = () => {
  const [projects,setprojects]=useState(true);
  const [team,setteam]=useState(false);
  const handleprojects=()=>{
    setprojects(true);
    
  }
  const handleteam=()=>{
    setprojects(false)
  }
  return (
    <div className={styles.div}>
     
      <h2>Scheduling</h2>
      <p>Plan projects and Visualize team's capacity</p>
      <div>
      <Tabs>
        <TabList>
          <Tab>PROJECTS</Tab>
          <Tab>TEAM</Tab>
        </TabList>
        <TabPanels>
          <TabPanel><div>
              projects <img src="https://clockify.me/assets/images/features/features-scheduling-projects-screenshot.svg" alt="" />
            </div>
            </TabPanel>
          <TabPanel>
          <div>team <img src="https://clockify.me/assets/images/features/features-scheduling-team-screenshot.svg" alt="" /></div>
          </TabPanel>
        </TabPanels>
      </Tabs>
      </div>
      <div>
        footer
      </div>
    </div>
  )
}

export default Scheduling