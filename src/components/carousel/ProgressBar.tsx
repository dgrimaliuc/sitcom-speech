export default function ProgressBar() {
  return (
    <div className="relative w-full h-full flex justify-center items-center">
      <div className="flex absolute w-[90%] h-1 before:bg-gray-500 before:opacity-[0.8] before:w-full before:h-1 before:block before:rounded before:content">
        <div className="flex absolute bg-orange-light w-[50%] h-1 rounded"></div>
      </div>
    </div>
  );
}
