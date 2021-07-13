import React, { useRef } from 'react'
import { Center, useGLTF } from '@react-three/drei'
import { PerspectiveCamera } from '@react-three/drei'
import { useFrame } from 'react-three-fiber'

export default function Model(props) {
  const group = useRef()
  const { nodes, materials } = useGLTF('hand_2.glb')
  return (
    <group ref={group} {...props} dispose={null}>
      <group rotation={[0, 0, -0.3]} position = {[0, 0, 0]} >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh_0.geometry}
          material={materials['Scene_-_Root']}
        />
      </group>
    </group>
  )
}

useGLTF.preload('hand_2.glb')

