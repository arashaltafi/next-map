"use client"

import React, { useState } from 'react';
import { Iran } from 'provinces-and-cities';

const IranDataPage = () => {
    const [selectedProvince, setSelectedProvince] = useState('');
    const [selectedCity, setSelectedCity] = useState('');

    const provinces = Iran.main.map((province) => province.name);
    const cities = Iran.main.find((province) => province.name === selectedProvince)?.cities || [];

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        alert(`استان: ${selectedProvince}, شهر: ${selectedCity}`);
    }

    return (
        <form
            onSubmit={handleSubmit}
            dir='rtl'
            className='w-full min-h-screen flex flex-col items-center justify-center gap-8'
        >
            <label>
                استان:
                <select
                    className='bg-gray-200 border rounded-lg p-2 mr-2'
                    value={selectedProvince}
                    onChange={(e) => setSelectedProvince(e.target.value)}
                >
                    <option value="">انتخاب استان</option>
                    {
                        provinces.map((province) => (
                            <option key={province} value={province}>
                                {province}
                            </option>
                        ))
                    }
                </select>
            </label>

            <label>
                شهر:
                <select
                    className='bg-gray-200 border rounded-lg p-2 mr-2'
                    value={selectedCity}
                    onChange={(e) => setSelectedCity(e.target.value)}
                >
                    <option value="">انتخاب شهر</option>
                    {
                        cities.map((city) => (
                            <option key={city} value={city}>
                                {city}
                            </option>
                        ))
                    }
                </select>
            </label>

            <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
            >
                ارسال
            </button>
        </form>
    )
}

export default IranDataPage