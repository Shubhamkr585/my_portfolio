// components/ProfileImage.jsx

const ProfileImage = ({ src, alt = "Profile Image", size = 40 }) => {
  return (
    <div className="flex justify-center items-center p-4">
      <img
        src={src}
        alt={alt}
        className={`w-${size} h-${size} rounded-full object-cover shadow-lg border-4 border-grey-400 hover:scale-105 transition-transform duration-300`}
        style={{ width: `${size * 4}px`, height: `${size * 4}px` }} // fallback for Tailwind's dynamic sizing
      />
    </div>
  );
};

export default ProfileImage;
