import React, { useState, useEffect } from "react";

function useOnline() {
  const [online, setOnline] = useState(navigator.onLine);

  useEffect(() => {
    const handlerOnline = () => setOnline(true);
    const handlerOffline = () => setOnline(false);

    window.addEventListener("online", () => handlerOnline, false);
    window.addEventListener("offline", () => handlerOffline, false);

    return () => {
      window.removeEventListener("online", () => handlerOnline, false);
      window.removeEventListener("offline", () => handlerOffline, false);
    };
  });

  return online;
}

export default function CustomizeHook() {
  const online = useOnline();
  return (
    <>
      {online ? (
        <div style={{ color: "green" }}>online: 已连接</div>
      ) : (
        <div style={{ color: "red" }}>offline: 已断网</div>
      )}
    </>
  );
}
