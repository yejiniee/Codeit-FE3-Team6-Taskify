/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
// Todo(조예진) : 완성
export default function Avatar({
  size = 'medium',
  image,
  text,
  onClick,
  backgroundColor,
  textColorRed,
}) {
  const bgColor = backgroundColor || '#A3C4A2';
  const sizes = {
    small: 'w-[22px] md:w-[24px] h-[22px] md:h-[24px] ',
    medium: 'w-[26px] h-[26px]',
    mediumCard: 'w-[26px] md:w-[34px] h-[26px] md:h-[34px]',
    large: 'w-[34px] md:w-[38px] h-[34px] md:h-[38px]',
  };
  const avatarSize = sizes[size] || sizes.medium; // 기본값 'medium'

  const avatarStyle = {
    backgroundColor: bgColor,
    // width: avatarSize,
    // height: avatarSize,
  };

  if (image) {
    avatarStyle.backgroundImage = `url(${image})`;
    avatarStyle.backgroundSize = 'cover';
  }

  return (
    <div
      className={`${avatarSize} flex items-center justify-center rounded-full border-2 border-white_FFFFFF cursor-pointer`}
      style={avatarStyle}
      onClick={onClick}
    >
      {!image && (
        <span
          className={`relative ${textColorRed ? 'text-[#D25B68]' : 'text-white_FFFFFF'} text-base font-semibold`}
        >
          {text}
        </span>
      )}
    </div>
  );
}
