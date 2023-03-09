import React, {createContext} from 'react'

export const Container = createContext()

const UseModalContext = ({children}) => {


  return (
    <Container.Provider>
        {children}
    </Container.Provider>
  )
}

export default UseModalContext