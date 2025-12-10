import allProducts from "../api/productData.json"
import { NavLink, useRouteError } from "react-router-dom";
import Tilt from "react-parallax-tilt";

export const Product = () => {
    return (
        <section className="section-about container">
            <h2 className="container-title">
                Pioneering Excellence:
                <br />
                Our Stellar Creations
            </h2>

            <div className="gradient-cards">
                {allProducts.map((product) => {
                    const { id, productName, ProductFunction, link } = product;
                    return (
                        <Tilt
                        glareEnable={true}
                        glareMaxOpacity={0.3}
                        glareColor="lightblue"
                        tiltMaxAngleX={15}
                        tiltMaxAngleY={15}
                        className="card"
                        key={id}
                        >
                        <div className="container-card bg-blue-box">
                            <p className="card-title">{productName}</p>
                            <p>
                            <span className="card-description">Function </span>
                            {ProductFunction}
                            </p>
                            <NavLink to={link}>
                            <button> Let's Go </button>
                            </NavLink>
                        </div>
                        </Tilt>
                    );
                    })}
                
            </div>
        </section>
    );
    
};


