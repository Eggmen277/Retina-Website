/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.3 Retina.glb 
*/

import React from 'react'
import { useGLTF } from '@react-three/drei'

export function Retina(props) {
  const { nodes, materials } = useGLTF('/Retina.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Retina_Rev20_v10.geometry} material={materials['Sandblasted copper']} />
    </group>
  )
}

useGLTF.preload('/Retina.glb')
