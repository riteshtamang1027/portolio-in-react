import React from 'react'

export default function Footer_bottom_section() {
  return (

       <div className="mt-12 border-t border-cyan-700 pt-6 text-center text-gray-400 text-sm flex flex-col md:flex-row justify-between items-center gap-2">
        <span>
          &copy; {new Date().getFullYear()} Ritesh Tamang. All rights reserved.
        </span>
        <span className="text-gray-500 text-xs">
          Made with ❤️ and React + Tailwind
        </span>
      </div>
    
  )
}
