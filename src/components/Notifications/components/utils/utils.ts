import { NotificationSeverity } from "../../../../utils/types/notifications";

export const getSeverityClasses = (severity: NotificationSeverity) => {
  switch (severity) {
    case NotificationSeverity.SUCCESS:
      return "bg-green-100 border-green-500 text-green-700";
    case NotificationSeverity.ERROR:
      return "bg-red-100 border-red-500 text-red-700";
    case NotificationSeverity.WARNING:
      return "bg-yellow-100 border-yellow-500 text-yellow-700";
    case NotificationSeverity.INFO:
      return "bg-blue-100 border-blue-500 text-blue-700";
  }
};
