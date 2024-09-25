import React, { useEffect, useState } from 'react'
import Navbar from './shared/Navbar'
import { Input } from './ui/input'
import { Button } from './ui/button'
import CompanyTable from './companyTable'
import { useNavigate } from 'react-router-dom'
import useGetAllCompanies from '@/hooks/useGetAllCompanies'
import { useDispatch } from 'react-redux'
import { setSearchCompanyByText } from '@/redux/companySlice'


const Company = () => {


 
    return (
        <div>
            <Navbar />
            <div className='max-w-6xl mx-auto my-10'>
                
                <CompanyTable/>
            </div>
        </div>
    )
}

export default Company