import React from 'react'
import {ComponentPreview, Previews} from '@react-buddy/ide-toolbox'
import {PaletteTree} from './palette'
import LoginPage from "../pages/LoginPage";
import MainPage from "../pages/MainPage";
import VueloDetailPage from "../pages/VueloDetailPage";

const ComponentPreviews = () => {
  return (
    <Previews palette={<PaletteTree/>}>
      <ComponentPreview path="/LoginPage">
        <LoginPage/>
      </ComponentPreview>
      <ComponentPreview path="/MainPage">
        <MainPage/>
      </ComponentPreview>
      <ComponentPreview path="/VueloDetailPage">
        <VueloDetailPage/>
      </ComponentPreview>
    </Previews>
  )
}

export default ComponentPreviews