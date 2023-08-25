"use client"
import { Suspense } from "react"
import { Canvas } from "@react-three/fiber"
import { Environment, OrbitControls } from "@react-three/drei"
import { EffectComposer, Bloom } from '@react-three/postprocessing'
import Model from "@/components/Model"
import Overlay from "@/components/Overlay"

export default function Home() {

    return (
        <>
            <Suspense fallback={<LoadingSpinner />}>
                <Overlay />
                <div className='fixed w-screen h-screen m-0 p-0 bg-transparent'>
                        <Canvas >
                            <ambientLight intensity={0.5} />
                            <Suspense fallback={null}>
                                <Model />
                                <Environment preset="city" />
                            </Suspense>
                        </Canvas>
                </div>
            </Suspense>
        </>
    )
}

const LoadingSpinner = () => (
    <div className="fixed inset-0 flex items-center justify-center">
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40px"
            height="40px"
            viewBox="0 0 100 100"
            preserveAspectRatio="xMidYMid"
            className="animate-spin"
        >
            <circle cx="50" cy="50" fill="none" stroke="#000" opacity={0.2} strokeWidth="10" r="35" strokeDasharray="164.93361431346415 56.97787143782138">
                <animateTransform
                    attributeName="transform"
                    type="rotate"
                    repeatCount="indefinite"
                    dur="1s"
                    values="0 50 50;360 50 50"
                ></animateTransform>
            </circle>
        </svg>
    </div>
)
