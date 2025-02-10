interface NotificationMessageProps {
  message: string;
}

export const NotificationMessage = ({ message }: NotificationMessageProps) => {
  return (
    <div className="text-sm">
      <span className="break-words">{message}</span>
    </div>
  );
};
