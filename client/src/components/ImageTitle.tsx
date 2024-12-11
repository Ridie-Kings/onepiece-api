export const ImageTitle = ({
  flag,
  crewImage,
  text,
  crewName,
}: {
  flag: string;
  crewImage: string;
  text: string;
  crewName: string;
}) => {
  return (
    <div className="relative flex items-center justify-center w-full h-[300px] bg-[#1f1f1f] overflow-hidden">
      <img
        src={
          crewImage ||
          "https://res.cloudinary.com/dgyqcyqty/image/upload/v1731169277/luffy_g8orja.png"
        }
        alt={crewName}
        className="absolute inset-0 object-fit w-full h-full opacity-60 transition-transform ease-in duration-1000 hover:scale-125 hover:-translate-x-10 hover:translate-y-5 hover:rotate-1"
      />
      <div className="relative flex items-center justify-center w-full h-full text-center gap-8 pointer-events-none">
        <img
          src={
            flag ||
            "https://res.cloudinary.com/dgyqcyqty/image/upload/v1731169277/luffy_g8orja.png"
          }
          alt={crewName}
          className="w-16 h-16 object-contain"
        />
        <h2 className="text-6xl font-bold text-yellow-500 drop-shadow-lg pointer-events-none">
          {text}
        </h2>
        <img
          src={
            flag ||
            "https://res.cloudinary.com/dgyqcyqty/image/upload/v1731169277/luffy_g8orja.png"
          }
          alt={crewName}
          className="w-16 h-16 object-contain"
        />
      </div>
    </div>
  );
};
