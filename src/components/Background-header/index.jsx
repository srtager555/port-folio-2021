import React from 'react'
import 'css/styles.css'

export default function BackgroundHeader() {
    let backgroundMobil;
    let BD = "https://i.ibb.co/0J2Ntfn/hu-Tao-background-desktop.jpg"
    let BM = "https://i.ibb.co/xSQbqVd/hu-Tao-background-mobil.jpg"

    window.addEventListener('size', () => {
        if(window.innerWidth > 720) {
            backgroundMobil = false;
        } else {
            backgroundMobil = true;
        }
    })
    return (
        <div>
            {
             backgroundMobil ?    
                <video poster={BM}></video> :
                <video poster={BD}></video> 
            }
        </div>
    )
}
