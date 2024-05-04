import './Services.css'
import Services_Data from '../../assets/services_data'
import arrow_icon from '../../assets/arrow_icon.svg'

const Services = () => {
  return (
    <div className="services">
        <div className="services-title">
            <h1>My services</h1>
            <img src="" alt="" />
        </div>
        <div className="services-container">
        {Services_Data.map((service,index) => {
            return <div key={index} className="services-format">
                <h3>{service.s_no}</h3>
                <h2>{service.s_name}</h2>
                <p>{service.s_desc}</p>
                <div className="services-readmore">
                    <p>Read more</p>
                    <img src={arrow_icon} alt="" />
                </div>
            </div>
        })};
        </div>
    </div>
    )
}

export default Services