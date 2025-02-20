interface WelcomeMessageProps {
  name?: string;
  message?: string;
}

export const WelcomeMessage: React.FC<WelcomeMessageProps> = ({
  name,
  message = 'How can I help you today?',
}) => {
  return (
    <div className="mt-2 mb-4 text-3xl text-gray-800 dark:text-gray-100 font-medium text-left flex items-center gap-4 font-primary">
      <div>
        <div className="capitalize line-clamp-1">Hello, {name}</div>
        <div>
          <div className="font-medium text-gray-400 dark:text-gray-500 line-clamp-1 font-p">
            {message}
          </div>
        </div>
      </div>
    </div>
  );
};
