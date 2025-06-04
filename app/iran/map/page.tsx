"use client"

import React from 'react'
import { IranMap } from 'react-iran-map'

const IranMapPage = () => {

    const mapData = {
        ardabil: 0,
        isfahan: 20,
        alborz: 11,
        ilam: 18,
        eastAzerbaijan: 10,
        westAzerbaijan: 20,
        bushehr: 15,
        tehran: 3,
        chaharmahalandBakhtiari: 25,
        southKhorasan: 29,
        razaviKhorasan: 11,
        northKhorasan: 19,
        khuzestan: 12,
        zanjan: 18,
        semnan: 9,
        sistanAndBaluchestan: 3,
        fars: 7,
        qazvin: 35,
        qom: 30,
        kurdistan: 24,
        kerman: 23,
        kohgiluyehAndBoyerAhmad: 2,
        kermanshah: 7,
        golestan: 18,
        gilan: 14,
        lorestan: 7,
        mazandaran: 28,
        markazi: 25,
        hormozgan: 14,
        hamadan: 19,
        yazd: 32,
    }

    const selectProvinceHandler = (province: { faName: string, name: string }) => {
        alert(province.faName + " - " + province.name)
    }

    return (
        <div style={{ fontFamily: 'vazir' }}>
            <IranMap
                data={mapData}
                colorRange='30, 70, 181'
                width={600}
                textColor='#000'
                defaultSelectedProvince='tehran'
                deactiveProvinceColor='#eee'
                selectedProvinceColor='#3bcc6d'
                tooltipTitle='تعداد:'
                selectProvinceHandler={selectProvinceHandler}
            />
        </div>
    )
}

export default IranMapPage