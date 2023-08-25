"use client"
import { Suspense, useEffect } from "react"
import { Canvas } from "@react-three/fiber"
import { Environment, Loader } from "@react-three/drei"
import Model from "@/components/Model"
import Overlay from "@/components/Overlay"

export default function Home() {

    useEffect(() => {
        window.scrollTo(0, 0);
    },[])

    return (
        <>
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
            <Loader />
        </>
    )
}

