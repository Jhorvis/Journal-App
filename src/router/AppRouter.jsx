import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { AuthRoute } from '../auth/routes/AuthRoute'
import { JournalRouter } from '../journal/routes/JournalRouter'

export const AppRouter = () => {
  return (
    <>
        <Routes>
            {/*Login Routes*/}
            <Route path='auth/*' element={<AuthRoute/>} />
            {/*Journal Routes*/}
            <Route path='/*' element={<JournalRouter/>}/>
            
        </Routes>
    </>
  )
}
