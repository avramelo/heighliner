import { useCallback, useEffect, useRef } from "react";
import { useNotifications } from "../NotificationProvider";
import { NotificationMessage } from "./NotificationMessage";
import { DEFAULT_DISMISS_DELAY } from "./utils/constants";
import { getSeverityClasses } from "./utils/utils";

export const NotificationComponent = () => {
  const { notifications, removeNotification } = useNotifications();
  const timersRef = useRef<Record<string, NodeJS.Timeout>>({});

  const handleClose = useCallback(
    (text: string) => {
      if (timersRef.current[text]) {
        clearTimeout(timersRef.current[text]);
        delete timersRef.current[text];
      }
      removeNotification(text);
    },
    [removeNotification],
  );

  useEffect(() => {
    notifications.forEach((notification) => {
      if (!timersRef.current[notification.text]) {
        timersRef.current[notification.text] = setTimeout(() => {
          handleClose(notification.text);
        }, notification.duration || DEFAULT_DISMISS_DELAY);
      }
    });

    return () => {
      Object.values(timersRef.current).forEach(clearTimeout);
      timersRef.current = {};
    };
  }, [notifications, handleClose]);

  if (notifications.length === 0) return null;

  return (
    <div className="fixed inset-x-0 top-6 mx-auto z-50 w-full max-w-md space-y-2 px-4">
      {notifications.map((notification) => (
        <div
          key={notification.text}
          className={`relative rounded-lg border p-4 shadow-lg transition-all ${getSeverityClasses(
            notification.severity,
          )}`}
        >
          <button
            onClick={() => handleClose(notification.text)}
            className="absolute right-2 top-2 text-gray-500 hover:text-gray-700"
          >
            ✕
          </button>
          <div className="pr-8 break-words">
            <NotificationMessage message={notification.text} />
            {notification.count > 1 && (
              <span className="absolute right-8 top-2 flex h-5 w-5 items-center justify-center rounded-full bg-gray-500/20 text-xs">
                {notification.count}
              </span>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};
