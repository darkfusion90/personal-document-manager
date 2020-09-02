import React from 'react'
import DocumentGrid from '../components/DocumentGrid'

import './App.css'
import ModalProvider from '../components/modals/ModalProvider'

const App = () => {
    return (
        <>
            <ModalProvider />
            <div className='m-5'>
                <DocumentGrid />
            </div>
        </>
    )
}

export default App