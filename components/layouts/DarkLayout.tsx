import React, { FC, PropsWithChildren } from "react"

interface Props {
    children: React.ReactNode;
}
export default function DarkLayout ({children}:Props) {
  return (
    <div style={{
        backgroundColor:'rgba(0,0,0,0.3)',
        padding:'6px',
        borderRadius:'10px'
    }}>
        <h3>Dark Layout</h3>
        {children}
    </div>
    )   
}
