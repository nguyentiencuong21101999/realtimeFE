const Home = () => {
  return (
    <div className="mt-10 flex flex-col  xl:flex-row  justify-center max-w-screen-2x min-h-screen w-full">
      <div className="pr-2 grid basis-auto  xl:justify-items-end justify-center mb-2 ">
        <video
          className="border-solid border-red-500  border-2 rounded-lg   relative"
          width="360"
          height="648"
          controls
          autoPlay
        >
          <source
            src="https://res.cloudinary.com/cuong/video/upload/v1669707525/image/317685561_9186563411369261_6947683684347151694_n_vjemz0.mp4"
            type="video/mp4"
          ></source>
          <div className="absolute top-20">
            <img
              src="https://img.icons8.com/doodle/48/null/facebook-like.png"
              alt=""
            />
          </div>
        </video>
      </div>
      <div className="pl-2 pr-2 grid xl:basis-2/4 lg:basis-2/3 justify-items-start ">
        <div className="h-[648px] border-solid border-red-500  border-2 w-full rounded-lg relative">
          <div className=" bg-pink-300 h-[580px] overflow-auto">
            <div className="flex flex-row p-2 w-full ">
              <span className="basis-auto">
                {new Date().toISOString()} : abc tien cuong ne atien cuo ng
                cuong
              </span>
            </div>
            <div className="flex flex-row p-2 w-full ">
              <span className="basis-auto">
                {new Date().toISOString()} : abc tien cuong ne atien cuo ng abc
                tien cuong ne atien cuo ng cuong
              </span>
            </div>
            <div className="flex flex-col p-2 w-full absolute bottom-1 ">
              <input
                type="text"
                className="border-solid border-2 rounded-lg h-10 p-2 focus:outline-none focus:border-green-500"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;
