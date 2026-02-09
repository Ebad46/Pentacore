'use client'

import { useRef, useEffect } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

interface FloatingShapesProps {
  scrollY: {
    current: number
  }
}

export default function FloatingShapes({ scrollY }: FloatingShapesProps) {
  const group = useRef<THREE.Group>(null)
  const sphereRef = useRef<THREE.Mesh>(null)
  const torusRef = useRef<THREE.Mesh>(null)
  const boxRef = useRef<THREE.Mesh>(null)

  useFrame(() => {
    if (!group.current) return

    // Apply scroll rotation
    const scrollOffset = scrollY.current * 0.001
    group.current.rotation.y += 0.002

    if (sphereRef.current) {
      sphereRef.current.position.y = Math.sin(Date.now() * 0.001) * 3
      sphereRef.current.rotation.x += 0.001
    }

    if (torusRef.current) {
      torusRef.current.rotation.z += 0.002
      torusRef.current.position.x = Math.cos(Date.now() * 0.0005) * 5
    }

    if (boxRef.current) {
      boxRef.current.rotation.y += 0.001
      boxRef.current.position.z = Math.sin(Date.now() * 0.0008) * 4
    }
  })

  return (
    <>
      {/* Lighting */}
      <ambientLight intensity={0.6} />
      <pointLight position={[10, 10, 10]} intensity={0.8} color="#22c3ff" />
      <pointLight position={[-10, -10, 10]} intensity={0.5} color="#3b82f6" />

      {/* Background gradient */}
      <group ref={group}>
        {/* Floating Sphere */}
        <mesh ref={sphereRef} position={[-5, 0, 0]}>
          <sphereGeometry args={[2, 32, 32]} />
          <meshStandardMaterial
            color="#22c3ff"
            emissive="#22c3ff"
            emissiveIntensity={0.5}
            metalness={0.8}
            roughness={0.2}
          />
        </mesh>

        {/* Floating Torus */}
        <mesh ref={torusRef} position={[5, 0, -5]}>
          <torusGeometry args={[2.5, 0.8, 16, 32]} />
          <meshStandardMaterial
            color="#3b82f6"
            emissive="#3b82f6"
            emissiveIntensity={0.4}
            metalness={0.7}
            roughness={0.3}
          />
        </mesh>

        {/* Floating Box */}
        <mesh ref={boxRef} position={[0, 3, -8]}>
          <boxGeometry args={[2, 2, 2]} />
          <meshStandardMaterial
            color="#0ea5e9"
            emissive="#0ea5e9"
            emissiveIntensity={0.3}
            metalness={0.9}
            roughness={0.1}
          />
        </mesh>

        {/* Decorative Floating Particles */}
        {Array.from({ length: 15 }).map((_, i) => {
          const x = (Math.random() - 0.5) * 20
          const y = (Math.random() - 0.5) * 20
          const z = (Math.random() - 0.5) * 20
          const size = Math.random() * 0.3 + 0.1

          return (
            <mesh key={i} position={[x, y, z]}>
              <sphereGeometry args={[size, 8, 8]} />
              <meshStandardMaterial
                color={i % 2 === 0 ? '#22c3ff' : '#3b82f6'}
                emissive={i % 2 === 0 ? '#22c3ff' : '#3b82f6'}
                emissiveIntensity={0.6}
              />
            </mesh>
          )
        })}
      </group>
    </>
  )
}
