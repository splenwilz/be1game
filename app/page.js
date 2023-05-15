"use client";
import Image from 'next/image'

import { Resizable, ResizableBox } from 'react-resizable';
import 'react-resizable/css/styles.css';

const imageSources = [
  '/Be1 Tier1.svg',
  '/Be1 Tier2.svg',
  '/Be1 Tier3.svg',
  '/Be1 Tier4.svg',
  '/Be1 Tier5.svg',
  '/Be1 Tier6.svg',
  '/Be1 Tier7.svg',
  '/Be1 Tier8.svg',
  '/Be1 Tier9.svg',
  '/Be1 Tier10.svg',
  '/Be1 Tier11.svg',
  '/Be1 Tier12.svg',
  '/Be1 Tier13.svg',
  '/Be1 Tier14.svg',
  '/Be1 Tier15.svg',
  '/Be1 Tier16.svg',
  '/Be1 Tier17.svg',
  '/Be1 Tier18.svg',
  '/Be1 Tier19.svg',
  '/Be1 Tier20.svg',
  // Add more image sources as needed
];
function MyComponent() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ display: 'flex',width: '80%', alignItems: 'center' }}>
          
            {imageSources.map((src, index) => (
              <div key={index}>
                <Image
                  src={src}
                  alt={`Be1 Tier Image ${index + 1}`}
                  className="hierachyimages"
                  width={70}
                  height={70}
                  priority
                />
              </div>
            ))}

          
          
        </div>
      </div>
      <div style={{ display: 'flex', height: '100vh' }}>
        <ResizableBox width={200} height={Infinity} resizeHandles={['e']}>
          <div style={{ height: '100%' }}>Left panel
          
          </div>
        </ResizableBox>
        <div style={{ flex: 1, height: '100%' }}>Main panel</div>
        <ResizableBox width={200} height={Infinity} resizeHandles={['w']}>
          <div style={{ height: '100%' }}>Right panel</div>
        </ResizableBox>
      </div>
    </div>
  );
}

export default MyComponent;

