import React from 'react'
import Icon from "@/components/Icon";

const RightBar = () => {
  return (
    <div className="flex h-full bloque flex-col items-center gap-5 pt-16">
          <span className="font-bold text-lg letra-oscura">Links</span>
          <Icon icon="linkedin"></Icon>
          <Icon icon="instagram"></Icon>
          
        </div>
  )
}

export default RightBar