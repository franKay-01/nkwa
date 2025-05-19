import Navbar from "../components/navbar";
import Footer from "../components/footer";

export default function HomePage(){
  return(
    <>
      <Navbar/>
      <div class="outer-wrapper">
        <div class="s-wrap s-type-1 h-[65vh] md:h-[100vh]" role="slider">
          <input type="radio" id="s-1" name="slider-control" defaultChecked />
          <input type="radio" id="s-2" name="slider-control"/>
          <input type="radio" id="s-3" name="slider-control"/>
          <input type="radio" id="s-4" name="slider-control"/>
          <input type="radio" id="s-5" name="slider-control"/>
          <ul class="s-content">
            <li class="s-item s-item-1"></li>
            <li class="s-item s-item-2"></li>
            <li class="s-item s-item-3"></li>
            <li class="s-item s-item-4"></li>
            <li class="s-item s-item-5"></li>
          </ul>
          <div className="absolute inset-0 bg-black bg-opacity-30"></div>
          <div className="label-header flex flex-col">
            <h1 className="header">Discover Your Dream Home through NKWA</h1>
            <h1 className="header-sub">Partner with us to bring your real estate ambitions to life through our collection of real estate in prime areas in Ghana.</h1>
          </div>
          
          <div class="s-nav">
            <label class="s-nav-1 right" for="s-2"></label>
            <label class="s-nav-2 left" for="s-1"></label>
            <label class="s-nav-2 right" for="s-3"></label>
            <label class="s-nav-3 left" for="s-2"></label>
            <label class="s-nav-3 right" for="s-4"></label>
            <label class="s-nav-4 left" for="s-3"></label>
            <label class="s-nav-4 right" for="s-5"></label>
            <label class="s-nav-5 left" for="s-4"></label>
          </div>
        </div>
      </div>
      <div className="beige-section flex flex-col justify-center items-center pb-12">
        <div className="flex flex-col gap-4 p-8 items-center">
          <h1 className="beige-section-header">How far we have come</h1>
        </div>
        <div className="flex flex-row gap-1 md:gap-28">
          <div className="flex flex-col items-center">
            <h1 className="beige-section-header-alt">5+</h1>
            <h1 className="beige-section-header-sub capitalize">
              NUMBER OF DEVELOPMENTS
            </h1>
          </div>
          <div className="flex flex-col items-center">
            <h1 className="beige-section-header-alt">2003</h1>
            <h1 className="beige-section-header-sub capitalize">
            ESTABLISHED
            </h1>
          </div>
          <div className="flex flex-col items-center">
            <h1 className="beige-section-header-alt">100+</h1>
            <h1 className="beige-section-header-sub capitalize">
            HOMES DELIVERED
            </h1>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}