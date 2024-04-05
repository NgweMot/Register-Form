import React from 'react'

const ContainerComponent = ({children}) => {
  return (
    <div className='max-w-[1500px] mx-auto'>{children}</div>
  )
}

export default ContainerComponent