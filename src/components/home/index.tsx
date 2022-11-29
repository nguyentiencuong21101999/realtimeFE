const Home = () => {
  return (
    <div className="home flex justify-center items-center h-[100vh]">
      <div className=" ">
        <video width="360" height="200" controls autoPlay>
          <source
            src="https://res.cloudinary.com/cuong/video/upload/v1669707525/image/317685561_9186563411369261_6947683684347151694_n_vjemz0.mp4"
            type="video/mp4"
          ></source>
        </video>
      </div>
    </div>
  );
};
export default Home;
