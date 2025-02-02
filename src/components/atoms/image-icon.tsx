interface ImageIconProps {
  className: string;
}

export const ImageIcon = ({ className }: ImageIconProps) => {
  return (
    // flex-shrink-0 mr-3
    <div className={className}>
      <img
        src="/src/assets/favicon.png"
        className="size-8 object-cover rounded-full -translate-y-[1px]"
        alt="profile"
        draggable="false"
      />
    </div>
  );
};
