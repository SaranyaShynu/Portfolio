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
    <div className="fixed top-16 left-1/2 -translate-x-1/2 z-50">
      <div className="
        flex items-center gap-2
        bg-red-600 text-white
        px-5 py-2
        rounded-full
        shadow-lg
        animate-pulse
        text-sm font-medium
      ">
        <span className="text-lg">📡</span>
        <span>You are offline</span>
      </div>
    </div>
  );
};

export default OfflineIndicator;
