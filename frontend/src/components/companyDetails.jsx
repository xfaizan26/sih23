import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'; // To get the company ID from the URL
import axios from 'axios';
import { COMPANY_API_END_POINT } from '@/utils/constant';

const CompanyDetails = () => {
    const { companyId } = useParams(); // Get company ID from URL params
    const [companyDetails, setCompanyDetails] = useState(null); // State to store company details
    const [loading, setLoading] = useState(true); // Set loading to true initially
    const [error, setError] = useState(null); // Error state
        console.log(companyId);
    useEffect(() => {
        const fetchCompanyDetails = async () => {
            try {
                const res = await axios.get(`${COMPANY_API_END_POINT}/get/${companyId}`, { withCredentials: true });

                // Handle success response
                if (res.data.success) {
                    setCompanyDetails(res.data.company); // Set company details in state
                } else {
                    setError('Company not found'); // Set error if not found
                }
            } catch (error) {
                setError('Error fetching company details'); // Handle fetch error
            } finally {
                setLoading(false); // Stop loading once the request completes
            }
        };

        fetchCompanyDetails();
    }, [companyId]);

    // Loading state
    if (loading) return <div>Loading...</div>;

    // Error state
    if (error) return <div>{error}</div>;

    return (
        <div className="container mx-auto p-6">
            <div className="bg-white shadow-md rounded-lg p-8">
                <div className="flex items-center gap-6">
                    {/* Company Logo */}
                    <div className="w-24 h-24">
                        <img
                            className="rounded-full object-cover"
                            src={companyDetails?.logo || 'https://via.placeholder.com/150'} // Placeholder if no logo
                            alt={companyDetails?.name || 'Company Logo'}
                        />
                    </div>
                    <div>
                        {/* Company Name */}
                        <h1 className="text-3xl font-bold">{companyDetails?.name || 'Company Name'}</h1>
                        {/* Display the Company ID */}
                        <p className="text-gray-500">Company ID: {companyDetails?._id}</p>
                        {/* Creation Date */}
                        <p className="text-gray-500">Created on: {companyDetails?.createdAt ? new Date(companyDetails?.createdAt).toLocaleDateString() : 'N/A'}</p>
                    </div>
                </div>
                <div className="mt-8">
                    {/* Company Description */}
                    <h2 className="text-xl font-semibold mb-4">Description</h2>
                    <p className="text-gray-700">{companyDetails?.description || 'No description available'}</p>
                </div>

                <div className="mt-8">
                    {/* Other Details (like email, phone, etc.) */}
                    <h2 className="text-xl font-semibold mb-4">Contact Information</h2>
                    <p className="text-gray-700">Email: {companyDetails?.email || 'N/A'}</p>
                    <p className="text-gray-700">Phone: {companyDetails?.phone || 'N/A'}</p>
                </div>
            </div>
        </div>
    );
};

export default CompanyDetails;
