import React from "react";

const Landing = () => {
  return (
    <div>
      <header style={{ background: "#6a02f1", borderRadius: "0 0 10% 10%" }}>
        <div className="container" className="d-flex justify-content-evenly align-items-center py-5">
          <div>
            <h3 className="mb-5"><span style={{ color: "#f18ed6" }}>Life is a journey</span><span style={{ color: "#99b4ef" }}>, not a<br></br> destination</span></h3>
            <button style={{ background: "#f18ed6", borderRadius: "20px", border: "none" }} className="text-light py-2 px-5 mt-5">Registro</button>
          </div>
          <img src="./assets/img/imagen-header.png" className="" alt="" style={{ objectFit: "contain", width: "500px" }} />
        </div>
      </header>
      <section className="text-center p-5 container">
        <div className="w-50 m-auto">
          <h4 style={{ color: "#6a02f1" }}><b>Que hace nuestra pagina</b></h4>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis eaque aliquam et fuga tenetur, veniam laudantium non magni cum reprehenderit laborum a labore minus. Quo nobis rem dolore iste, quia soluta, ratione reiciendis vero odit ducimus fuga, esse aspernatur unde.</p>
        </div>
        <div className="d-flex justify-content-between">
          <img className="w-25" src="./assets/img/imagen-header.png" alt="" />
          <img className="w-25" src="./assets/img/imagen-header.png" alt="" />
          <img className="w-25" src="./assets/img/imagen-header.png" alt="" />
        </div>
      </section>

      <section className="text-center container">
        <h4><b><span style={{ color: "#6a02f1" }}>Our</span> <span style={{ color: "black" }}>Team</span> </b></h4>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto vero ex culpa, accusamus voluptate ut?</p>
        <div className="d-flex justify-content-between align-items-center my-5">
          <img src="./assets/img/imagen-header.png" alt="" className="w-50" />
          <div>
            <h4 className="my-4">Our <span style={{ color: "#6a02f1" }}>team is the secret</span> to our success</h4>
            <div className="d-flex justify-content-between">
              <span className="p-3 ms-5 me-4" style={{width: "50px", height: "50px", borderRadius: "50%", lineHeight: "1px"}}><i className="fa-solid fa-folder-minus" style={{color: "#6a02f1", fontSize: "1.2rem"}}></i></span>
              <p className="text-secondary text-start">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur reprehenderit sit saepe cum iure id quae est voluptatum consectetur nihil? Quam delectus reprehenderit dolorem optio quia mollitia quas, aspernatur illum.</p>
            </div>
            <div className="d-flex justify-content-between">
              <span className="p-3 ms-5 me-4" style={{width: "50px", height: "50px", borderRadius: "50%", lineHeight: "1px"}}><i className="fa-solid fa-people-group" style={{color: "#6a02f1", fontSize: "1.2rem"}}></i></span>
              <p className="text-secondary text-start">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur reprehenderit sit saepe cum iure id quae est voluptatum consectetur nihil? Quam delectus reprehenderit dolorem optio quia mollitia quas, aspernatur illum.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Landing;
