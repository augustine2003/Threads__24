import html2canvas from 'html2canvas';
import React, { useState, useEffect } from "react";
import { QRCodeSVG } from 'qrcode.react';

function Download({ user }) {
  const [qr, setQr] = useState(null);
  const [initialRender, setInitialRender] = useState(true);

  useEffect(() => {
    if (!initialRender) {
        const generateQRCode = async () => {
          console.log(user._id);
          let q=await setQr(
            <div className="setup">
              <QRCodeSVG value={user._id} style={{ width: '200px', height: '200px' }} />
              <br></br>{user.name}
            </div>
          );
          await convertToImageAndDownload(q);
          
        };
    
        generateQRCode();
      }else{
        setInitialRender(false);
      }
      }, [user,initialRender]);

  const convertToImageAndDownload = async(q) => {
    const divToConvert = await document.getElementsByClassName('setup')[0];
    console.log("hello");
    console.log(divToConvert);

    await html2canvas(divToConvert)
      .then((canvas) => {
        console.log("kkk");
        const dataUrl = canvas.toDataURL('image/png');
        console.log(dataUrl);
        const a = document.createElement('a');
        console.log(a);
        a.href = dataUrl;
        a.download = 'converted-image.png';
        a.click();
        setQr(null);
      })
      .catch((error) => {
        console.error('Error converting div to image:', error);
      });
  };

  return (
    <div>
      {qr}
    </div>
  );
}

export default Download;