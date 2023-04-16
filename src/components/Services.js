import { services } from "../data";

const Services = () => {
  return (
    <section className="section services" id="services">
      <div className="section-title">
        <h2>
          our <span>services</span>
        </h2>
      </div>
      <div className="section-center services-center">
        {services.map((value) => {
          return (
            <article className="service" id={value.id}>
              <span className="service-icon">
                <i className={value.icon}></i>
              </span>
              <div className="service-info">
                <h4 className="service-title"> {value.title} </h4>
                <p className="service-text">{value.text}</p>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Services;
