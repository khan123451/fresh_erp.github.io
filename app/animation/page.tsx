"use client"
import { useEffect }  from 'react';
import './AnimationPage.css'; // Don't forget to create this CSS file
import { useRouter } from 'next/navigation';
import FreshImg from './Fresh.png';
import './animation.css'

function AnimationPage() {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
        router.push('/overview');
    }, 3000)
  });

    return (
        <>
        <label className="animation-container" style = {{background: "white"}}>
              <label className="animated-object">
                <div className="anime-img">
                </div>
                <br />
                <h1 className="loading-txt" style={{ textAlign: "center", color:"black" }}> freshing...</h1>
            </label>
        </label>
        </>
    );
}

export default AnimationPage;
