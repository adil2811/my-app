"use client"
import React, { useEffect, useState } from 'react';
import { AppContext } from './index.js'

const AppProvider = ({ children }) => {
    const [userDetail,setUserDetail] =  useState(null)
  
      
    return <>
    <AppContext.Provider value={{setUserDetail,userDetail}}>
        {children}
    </AppContext.Provider>
    </>
};

export default AppProvider