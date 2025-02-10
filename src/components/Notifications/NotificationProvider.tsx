import React, { createContext, ReactNode, useCallback, useContext, useState } from "react";
import { GroupedNotification, NotificationMessage } from "../../utils/types/notifications";
import { NotificationComponent } from "./components/NotificationComponent";

interface NotificationsContextType {
  addNotification: (notification: NotificationMessage) => void;
  notifications: GroupedNotification[];
  removeNotification: (text: string) => void;
}

const NotificationsContext = createContext<NotificationsContextType | undefined>(undefined);

export const NotificationsProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [notifications, setNotifications] = useState<GroupedNotification[]>([]);

  const addNotification = useCallback((notification: NotificationMessage) => {
    setNotifications((currentNotifications) => {
      const existingNotification = currentNotifications.find((n) => n.text === notification.text);
      if (existingNotification) {
        return currentNotifications.map((n) =>
          n.text === notification.text ? { ...n, count: n.count + 1 } : n,
        );
      }
      return [...currentNotifications, { ...notification, count: 1 }];
    });
  }, []);

  const removeNotification = useCallback((text: string) => {
    setNotifications((prev) => prev.filter((n) => n.text !== text));
  }, []);

  return (
    <NotificationsContext.Provider value={{ addNotification, notifications, removeNotification }}>
      <NotificationComponent />
      {children}
    </NotificationsContext.Provider>
  );
};

export const useNotifications = () => {
  const context = useContext(NotificationsContext);
  if (!context) {
    throw new Error("useNotifications must be used within NotificationsProvider");
  }
  return context;
};
