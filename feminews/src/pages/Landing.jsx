import React from "react";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <div>
      <header style={{ background: "#6a02f1", borderRadius: "0 0 10% 10%" }}>
        <div className="container d-flex justify-content-evenly align-items-center py-5">
          <div>
            <h3 className="mb-5">
              <span style={{ color: "#f18ed6" }}>Opina y Expone </span>
              <span style={{ color: "#99b4ef" }}>
                de manera segura tus críticas <br></br> hacia los medios de
                comunicación{" "}
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
              <Link to="/login" className="text-decoration-none text-light">
                Ingreso
              </Link>
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
            <b>FemiNews</b>
          </h4>
          <p>
            FemiNews es un espacio creado para la <b>discusión</b> y la
            <b> fiscalizacion</b> ciudadana de medios de comunicación. Nuestro
            objetivo es brindarle a las mujeres una plataforma que les permita
            <b> opinar y exponer de manera segura sus críticas </b> hacia los
            medios de comunicación que incumplan con los estándares de ética y
            calidad informativa
          </p>
        </div>
        <div className="d-flex justify-content-between">
          <img className="w-25" src="./assets/img/imagen1.png" alt="" />
          <img className="w-25" src="./assets/img/imagen2.png" alt="" />
          <img className="w-25" src="./assets/img/imagen3.png" alt="" />
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
            Creemos que este espacio de crítica y opinión supone una oportunidad
            de que las voces del público expongan de manera adecuada a los
            medios y con ello, poder influenciar en el momento de corregir los
            incorrectos abordamientos sobre la violencia de género.
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
              {/* <!-- Button trigger modal --> */}
              <button
                type="button"
                class="btn btn-primary  btn-danger"
                data-bs-toggle="modal"
                data-bs-target="#staticBackdrop"
              >
                Misión
              </button>

              {/* <!-- Modal --> */}
              <div
                class="modal fade"
                id="staticBackdrop"
                data-bs-backdrop="static"
                data-bs-keyboard="false"
                tabindex="-1"
                aria-labelledby="staticBackdropLabel"
                aria-hidden="true"
              >
                <div class="modal-dialog">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h5 class="modal-title" id="staticBackdropLabel">
                        Misión
                      </h5>
                      <button
                        type="button"
                        class="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      ></button>
                    </div>
                    <div class="modal-body">
                      Que muchas mujeres se sientan comodas con las noticias
                    </div>
                  </div>
                </div>
              </div>
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
              {/* <!-- Button trigger modal --> */}
              <button
                type="button"
                class="btn btn-primary btn-danger"
                data-bs-toggle="modal"
                data-bs-target="#staticBackdrop"
              >
                Visión
              </button>

              {/* <!-- Modal --> */}
              <div
                class="modal fade"
                id="staticBackdrop"
                data-bs-backdrop="static"
                data-bs-keyboard="false"
                tabindex="-1"
                aria-labelledby="staticBackdropLabel"
                aria-hidden="true"
              >
                <div class="modal-dialog">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h5 class="modal-title" id="staticBackdropLabel">
                        Visión
                      </h5>
                      <button
                        type="button"
                        class="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      ></button>
                    </div>
                    <div class="modal-body">
                      Muchas mujeres puedan sentirse seguras exponiendo de
                      manera adecuada a los medios y con ello, poder influenciar
                      en el momento de corregir los incorrectos abordamientos
                      sobre la violencia de género.
                    </div>
                  </div>
                </div>
              </div>
            </figure>
          </section>
        </section>
      </section>
      {/* Fin Vision y mision */}

      {/* Nuestro equipo */}
      <section className="text-center container ">
        <h4>
          <b>
            <span style={{ color: "#6a02f1" }}>Nuestro</span>{" "}
            <span style={{ color: "black" }}>Equipo</span>{" "}
          </b>
        </h4>
        <p></p>
        <div className="d-flex justify-content-center align-items-center my-5">
          <img src="./assets/img/lesfer.png" alt="" className="w-50" />
        </div>
      </section>
      {/* Fin nuestro equipo */}
    </div>
  );
};

export default Landing;
