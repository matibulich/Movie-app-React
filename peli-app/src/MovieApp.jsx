import {CustomNav} from "./components/CustomNav"
import { ImageSlider } from "./components/ImageSlider"
import { SearchMovie } from "./components/SearchMovie"
import { CardsPopular } from "./components/CardsPopular"
import { Modals } from "./components/Modals"
import { ModalProvider } from "./context/ModalContext"


export const MovieApp = () => {
  return (<>
  <CustomNav></CustomNav>
  <ImageSlider></ImageSlider>
  <SearchMovie></SearchMovie>
  <ModalProvider>
    <Modals/>
    <CardsPopular/>
  </ModalProvider>
  </>
   
  )
}