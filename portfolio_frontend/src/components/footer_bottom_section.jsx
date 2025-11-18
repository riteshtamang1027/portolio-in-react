import React from 'react'

export default function Footer_bottom_section() {
  return (

       <div className="mt-12 border-t border-[var(--border-radious)] pt-6 text-center text-[var(--text-primary)]/50 text-sm flex flex-col md:flex-row justify-between items-center gap-2">
        <span>
          &copy; {new Date().getFullYear()} Ritesh Tamang. All rights reserved.
        </span>
        <span className="text-[var(--text-primary)]/50 text-xs">
          Made with ❤️ and React + Tailwind
        </span>
      </div>
    
  )
}
