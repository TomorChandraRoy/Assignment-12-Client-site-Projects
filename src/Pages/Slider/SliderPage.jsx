const SliderPage = () => {
  return (
    <div>
      <h4 className="text-slate-100 bg-red-700 px-2 py-1 rounded w-fit mx-auto  text-2xl mt-10 font-bold  ">
      Survey Gallary
      </h4>
      <div className="carousel w-full h-[500px]  rounded mt-8" data-aos="zoom-in-up">
        <div id="slide1" className="carousel-item relative w-full">
          <img src="https://i.ibb.co/rs0xr40/thisisengineering-raeng-rs7-M-r4-Spu-I-unsplash.jpg" className="w-full" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img src="https://i.ibb.co/VLq60pz/survey-3957027-1920.jpg" className="w-full" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img src="https://i.ibb.co/2tF13cj/brooke-cagle-g1-Kr4-Ozfoac-unsplash.jpg" className="w-full" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide4" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
          <img src="https://i.ibb.co/PQNWhdm/robina-weermeijer-3-KGF9-R-0o-Hs-unsplash.jpg" className="w-full" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SliderPage;
