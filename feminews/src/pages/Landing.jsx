import React from "react";

const Landing = () => {
  return (
    <div>
      <header style={{ background: "#6a02f1", borderRadius: "0 0 10% 10%" }}>
        <div className="container d-flex justify-content-evenly align-items-center py-5">
          <div>
            <h3 className="mb-5">
              <span style={{ color: "#f18ed6" }}>Life is a journey</span>
              <span style={{ color: "#99b4ef" }}>
                , not a<br></br> destination
              </span>
            </h3>
            <button
              style={{
                background: "#f18ed6",
                borderRadius: "20px",
                border: "none",
              }}
              className="text-light py-2 px-5 mt-5"
            >
              Registro
            </button>
          </div>
          <img
            src="./assets/img/imagen-header.png"
            className=""
            alt=""
            style={{ objectFit: "contain", width: "500px" }}
          />
        </div>
      </header>
      {/*   Que hace nuestra pagina */}
      <section className="text-center p-5 container">
        <div className="w-50 m-auto">
          <h4 style={{ color: "#6a02f1" }}>
            <b>Que hace nuestra pagina</b>
          </h4>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis
            eaque aliquam et fuga tenetur, veniam laudantium non magni cum
            reprehenderit laborum a labore minus. Quo nobis rem dolore iste,
            quia soluta, ratione reiciendis vero odit ducimus fuga, esse
            aspernatur unde.
          </p>
        </div>
        <div className="d-flex justify-content-between">
          <img className="w-25" src="./assets/img/imagen-header.png" alt="" />
          <img className="w-25" src="./assets/img/imagen-header.png" alt="" />
          <img className="w-25" src="./assets/img/imagen-header.png" alt="" />
        </div>
      </section>
      {/* FIN Que hace nuestra pagina */}

      {/* Nuestra mision y vision */}
      <section
        id="portfolio"
        className="container-fluid text-center bg-grey mt-20 mb-50"
      >
        <h4 style={{ color: "#6a02f1" }}>
          <b>Nuestra mision y vision</b>
        </h4>
        <div className="w-50 m-auto">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
            quo deserunt delectus, excepturi reprehenderit, est dolorem
            explicabo totam sed quaerat tempora molestiae laudantium quibusdam
            omnis nisi magni, eligendi fuga. Fugit.lo Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Consectetur asperiores aut recusandae.
            Libero, impedit nam! Quis, corporis consequuntur sint ab optio rem
            eos nobis temporibus in. Est expedita labore minus.
          </p>
        </div>
        <section className="row text-center d-flex justify-content-center ">
          <section className="col-sm-3">
            <figure className="thumbnail">
              <img
                src="./assets/img/1.jpeg"
                className="rounded float-start"
                alt="Paris"
                width="300"
                height="200"
              />
            </figure>
          </section>
          <section className="col-sm-3">
            <figure className="thumbnail">
              <img
                src="./assets/img/2.jpeg"
                className="rounded float-end"
                alt="New York"
                width="300"
                height="200"
              />
            </figure>
          </section>
        </section>
      </section>
      {/* Fin Vision y mision */}
      {/* Usar nuestra pagina */}
      <section class="p-5 container">
        <div class="d-flex justify-content-between m-auto align-items-center">
          <section class="col-sm-6  text-center">
            <section>
              <h4>
                <b>
                  <span style={{ color: "#6a02f1" }}>Watch</span>{" "}
                  <span style={{ color: "black" }}>or lattest tour</span>{" "}
                </b>
              </h4>
              <p>
                Lorem Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Possimus sed delectus omnis quisquam aliquam impedit consequatur
                architecto dolore odio ipsam eos, officiis nam itaque natus
                cumque voluptatum! Tempore, recusandae magni.
              </p>
            </section>
          </section>
          <section class="col-sm-6 text-center">
            <iframe
              width="420"
              height="240"
              src="https://www.youtube.com/embed/XF7gGbw1ihE"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </section>
        </div>
      </section>
      {/* Fin usar nuestra pagina */}

      {/* Nuestro equipo */}
      <section className="text-center container ">
        <h4>
          <b>
            <span style={{ color: "#6a02f1" }}>Our</span>{" "}
            <span style={{ color: "black" }}>Team</span>{" "}
          </b>
        </h4>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto
          vero ex culpa, accusamus voluptate ut?
        </p>
        <div className="d-flex justify-content-between align-items-center my-5">
          <img src="./assets/img/imagen-header.png" alt="" className="w-50" />
          <div>
            <h4 className="my-4">
              Our <span style={{ color: "#6a02f1" }}>team is the secret</span>{" "}
              to our success
            </h4>
            <div className="d-flex justify-content-between">
              <span
                className="p-3 ms-5 me-4"
                style={{
                  width: "50px",
                  height: "50px",
                  borderRadius: "50%",
                  lineHeight: "1px",
                }}
              >
                <i
                  className="fa-solid fa-folder-minus"
                  style={{ color: "#6a02f1", fontSize: "1.2rem" }}
                ></i>
              </span>
              <p className="text-secondary text-start">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Pariatur reprehenderit sit saepe cum iure id quae est voluptatum
                consectetur nihil? Quam delectus reprehenderit dolorem optio
                quia mollitia quas, aspernatur illum.
              </p>
            </div>
            <div className="d-flex justify-content-between">
              <span
                className="p-3 ms-5 me-4"
                style={{
                  width: "50px",
                  height: "50px",
                  borderRadius: "50%",
                  lineHeight: "1px",
                }}
              >
                <i
                  className="fa-solid fa-people-group"
                  style={{ color: "#6a02f1", fontSize: "1.2rem" }}
                ></i>
              </span>
              <p className="text-secondary text-start">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Pariatur reprehenderit sit saepe cum iure id quae est voluptatum
                consectetur nihil? Quam delectus reprehenderit dolorem optio
                quia mollitia quas, aspernatur illum.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Fin nuestro equipo */}
    </div>
  );
};

export default Landing;
