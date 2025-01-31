import React from "react";
import { useParams } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "./ServiceDetail.css";

const servicesData = [
    { 
        id: 1, 
        name: "Generators and Inverters", 
        images: [
            "/images/gen1.jpg",
            "/images/gen2.jpeg",
            "/images/gen3.jpg",
            "/images/gen4.jpg",
            "/images/inverter1.jpg",
            "/images/inverter2.jpg"
        ],
        details: "We provide expert repairs and maintenance for generators and inverters, ensuring they run efficiently for longer.",
        moreInfo: "Our skilled technicians handle both residential and industrial generators, offering troubleshooting and maintenance services."
    },
    { 
        id: 2, 
        name: "Solar Panels and Consumer units", 
        images: [
            "/images/conunit1.jpg",
            "/images/conunit2.jpg",
            "/images/solar.jpg",
            "/images/solar2.jpg"
        ],
        details: "We provide expert repairs and maintenance for Solar Panels and Consumer Units.",
        moreInfo: "Our skilled technicians handle both residential and industrial Solar panels as well as consumer units, offering troubleshooting and maintenance services."
    },
    { 
        id: 3, 
        name: "Water Pumps", 
        images: [
            "/images/waterpump1.jpg",
            "/images/waterpump2.jpg"
        ],
        details: "We provide expert repairs and maintenance for Water Pumps.",
        moreInfo: "Our skilled technicians handle both residential and industrial Waterpumps, offering troubleshooting and maintenance services."
    },
    { 
        id: 4, 
        name: "CCTV Cameras", 
        images: [
            "/images/cctv1.jpg",
            "/images/cctv2.jpg",
            "/images/cctv3.jpg"
        ],
        details: "We provide expert installations and maintenance for CCTV cameras.",
        moreInfo: "Our skilled technicians handle both complete CCTV Cameras' installations, offering troubleshooting and maintenance services."
    },
    { 
        id: 5, 
        name: "Servers, Computers and Printers", 
        images: [
            "/images/computer1.jpg",
            "/images/computer2.jpg",
            "/images/printer1.jpg",
            "/images/printer2.jpg",
            "/images/printer3.jpg",
            "/images/server1.jpg",
            "/images/server2.jpg",
        ],
        details: "We provide expert repairs for Computers, Servers and Printers.",
        moreInfo: "Our skilled technicians handle both all kinds of computers, servers and printers, offering troubleshooting and maintenance services."
    },
    { 
        id: 6, 
        name: "Projectors and UPSs", 
        images: [
            "/images/projector1.jpg",
            "/images/projector2.jpg",
            "/images/ups1.jpg",
            "/images/ups2.jpg"
        ],
        details: "We provide expert repairs for Projectors and UPS machines.",
        moreInfo: "Our skilled technicians handle both all kinds of UPS machines as well as projectors, offering troubleshooting and maintenance services."
    },
    { 
        id: 7, 
        name: "Networking Services", 
        images: [
            "/images/network1.jpg",
            "/images/network2.jpg",
            "/images/networking.jpg"
        ],
        details: "We provide expert installations and maintenance for network systems",
        moreInfo: "Our skilled technicians handle both all network installations and maintenance in Local Area Networks e.t.c."
    }
];

const ServiceDetail = () => {
    const { id } = useParams();
    const service = servicesData.find(item => item.id === parseInt(id));

    if (!service) {
        return <h2>Service Not Found</h2>;
    }

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000
    };

    return (
        <div>
            <Navbar />
            <div className="service-detail">
                <h1>{service.name}</h1>
                <Slider {...settings}>
                    {service.images.map((img, index) => (
                        <div key={index}>
                            <img src={img} alt={`${service.name} ${index + 1}`} className="service-image" />
                        </div>
                    ))}
                </Slider>
                <p>{service.details}</p>
                <p>{service.moreInfo}</p>
            </div>
            <Footer />
        </div>
    );
}

export default ServiceDetail;
