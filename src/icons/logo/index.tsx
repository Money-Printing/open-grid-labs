

export default function Logo() {
  return (
    <div className="flex gap-2 items-center">
      <svg width="50" height="50" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Black background squares in 2x2 grid */}
        <rect x="0" y="0" width="48" height="48" fill="currentColor" />
        <rect x="52" y="0" width="48" height="48" fill="currentColor" />
        <rect x="0" y="52" width="48" height="48" fill="currentColor" />
        <rect x="52" y="52" width="48" height="48" fill="currentColor" />
        
        {/* White connection nodes (circles) forming the grid network */}
        {/* Top left corner */}
        <circle cx="24" cy="24" r="8" fill="white" />
        {/* Top right corner */}
        <circle cx="76" cy="24" r="8" fill="white" />
        {/* Center connection */}
        <circle cx="50" cy="50" r="10" fill="white" />
        {/* Bottom left corner */}
        <circle cx="24" cy="76" r="8" fill="white" />
        {/* Bottom right corner */}
        <circle cx="76" cy="76" r="8" fill="white" />
      </svg>
      
      <div className="flex flex-col justify-center items-start">
        <span className="text-xl font-bold leading-none">
          OpenGridLabs
        </span>
      </div>
    </div>
  );
}
