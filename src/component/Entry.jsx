import marker from '../assets/marker.svg';
import viewMountFuji from '../assets/View_of_Mount_Fuji.jpg';

export default function Entry(){
    return (
    <section className="location-card">
      <div className="location-image">
        <img src={viewMountFuji} alt="Location Image" />
      </div>
      <div className="location-details">
         <div className="location-header">
            <div>
                <img src={marker} alt="Location Icon" />
                <span>Japan</span>
            </div>
            <a href="#">View on Google Maps</a>
         </div>
         <div className="location-body">
            <h2>Mount Fuji</h2>
            <span>12 Jan, 2021 - 24 Jan, 2021</span>
            <p>Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet), Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists.    </p>
         </div>
      </div>
    </section>
    )
}