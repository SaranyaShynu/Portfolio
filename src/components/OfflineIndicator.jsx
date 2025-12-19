import { useEffect, useState } from "react";

const OfflineIndicator = () => {
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  useEffect(() => {
    const goOnline = () => setIsOnline(true);
    const goOffline = () => setIsOnline(false);

    window.addEventListener("online", goOnline);
    window.addEventListener("offline", goOffline);

    return () => {
      window.removeEventListener("online", goOnline);
      window.removeEventListener("offline", goOffline);
    };
  }, []);

  if (isOnline) return null;

  return (
    <div className="fixed top-16 left-1/2 -translate-x-1/2 z-50 animate-slideDown">
      <div className="flex items-center gap-2 bg-red-600 text-white px-4 py-2 rounded-full shadow-lg text-sm font-medium">
        
        {/* Wi-Fi icon */}
        <span className="relative w-4 h-4">
          <span className="absolute inset-0 border-2 border-white rounded-full opacity-20 animate-ping"></span>
          <span className="absolute inset-1 border-2 border-white rounded-full"></span>
        </span>

        <span>You are offline</span>
      </div>
    </div>
  );
};

export default OfflineIndicator;
