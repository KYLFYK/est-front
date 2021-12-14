import type { NextPage } from 'next'
import React from 'react'
import AboutObjectTab from '../../src/components/processes/create-new-object/components/AboutObjectTab/AboutObject'
import ButtonPanel from '../../src/components/processes/create-new-object/components/ButtonsPanel/ButtonsPanel'
import GeneralInfoPhotosTab from '../../src/components/processes/create-new-object/components/GeneralInfoObjectTab/GeneralInfoPhotosTab'
import GeneralInfoDataTab from '../../src/components/processes/create-new-object/components/GeneralInfoObjectTab/GeneralInfoDataTab'
import GeneralInfoDescriptionTab from '../../src/components/processes/create-new-object/components/GeneralInfoObjectTab/GeneralInfoDescriptionTab'
import HouseInfoDetailsTab from '../../src/components/processes/create-new-object/components/HouseInfoTab/HouseInfoDetailsTab'
import HouseInfoInterierTab from '../../src/components/processes/create-new-object/components/HouseInfoTab/HouseInfoInterierTab'
import InfrastructureTab from '../../src/components/processes/create-new-object/components/InfrastructureTab/InfrastructureTab'
import InputsGroup from '../../src/components/processes/create-new-object/components/InputsGroup/InputsGroup'
import LandInfoTab from '../../src/components/processes/create-new-object/components/LandInfoTab/LandInfoTab'
import LegalPurityDetails from '../../src/components/processes/create-new-object/components/LegalPurityTab/LegalPurityDetails'
import LegalPurityFounders from '../../src/components/processes/create-new-object/components/LegalPurityTab/LegalPurityFounders'
import SuccessPage from '../../src/components/processes/create-new-object/components/SuccessPage/SuccessPage'
import FormScreen from '../../src/components/processes/create-new-object/FormScreen/FormScreen'
import StartScreen from '../../src/components/processes/create-new-object/StartScreen/StartScreen'

const Home: NextPage = () => {

  return (
    <div style={{ display: 'flex', gap: '15px', flexDirection: 'column' }}>

      <div style={{margin: '50px'}}>
        <h1>AboutObjectTab</h1>
        <AboutObjectTab objectType={0} onPrevTab={() => {}}/>
      </div>
      <div style={{margin: '50px'}}>
        <h1>ButtonPanel</h1>
        <ButtonPanel onPrevTab={() => {}}/>
      </div>
      <div style={{margin: '50px'}}>
        <h1>GeneralInfoPhotosTab</h1>
        <GeneralInfoPhotosTab objectType={0} onPrevTab={() => {}}/>
      </div>
      <div style={{margin: '50px'}}>
        <h1>GeneralInfoDataTab</h1>
        <GeneralInfoDataTab objectType={0} onPrevTab={() => {}}/>
      </div>
      <div style={{margin: '50px'}}>
        <h1>GeneralInfoDescriptionTab</h1>
        <GeneralInfoDescriptionTab objectType={0} onPrevTab={() => {}}/>
      </div>
      <div style={{margin: '50px'}}>
        <h1>HouseInfoDetailsTab</h1>
        <HouseInfoDetailsTab objectType={0} onPrevTab={() => {}}/>
      </div>
      <div style={{margin: '50px'}}>
        <h1>HouseInfoInterierTab</h1>
        <HouseInfoInterierTab objectType={0} onPrevTab={() => {}}/>
      </div>
      <div style={{margin: '50px'}}>
        <h1>InfrastructureTab</h1>
        <InfrastructureTab objectType={0} onPrevTab={() => {}}/>
      </div>
      <div style={{margin: '50px'}}>
        <h1>InputsGroup</h1>
        <InputsGroup title={'титль'}/>
      </div>
      <div style={{margin: '50px'}}>
        <h1>LandInfoTab</h1>
        <LandInfoTab objectType={0} onPrevTab={() => {}}/>
      </div>
      <div style={{margin: '50px'}}>
        <h1>LegalPurityDetails</h1>
        <LegalPurityDetails objectType={0} onPrevTab={() => {}}/>
      </div>
      <div style={{margin: '50px'}}>
        <h1>LegalPurityFounders</h1>
        <LegalPurityFounders objectType={0} onPrevTab={() => {}}/>
      </div>
      <div style={{margin: '50px'}}>
        {/*<MultipleHorizontalTab activeTabIdx={1} activeSubTabIdx={2} tabs={}/>*/}
      </div>
      <div style={{margin: '50px'}}>
        <h1>SuccessPage</h1>
        <SuccessPage advertisementId={'успех'}/>
      </div>
      <div style={{margin: '50px'}}>
        <h1>FormScreen</h1>
        <FormScreen objectType={0} clearObjectType={() => {}}/>
      </div>
      <div style={{margin: '50px'}}>
        <h1>StartScreen</h1>
        <StartScreen onChooseAction={() => {}} onChooseObjectType={() => {}} />
      </div>

      
    </div>
  )
}

export default Home


