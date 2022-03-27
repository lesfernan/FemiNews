import React, { useEffect, useState } from "react";
import "../sass/index.scss";
import ApiBase from "../utils/ApiBase";
const Dashboard = () => {
  const [titulo, setTitulo] = useState("");
  const [comentario, setComentario] = useState("");
  const [rango, setRango] = useState();
  const [getcoment, setGetComent] = useState([]);

  const submit = (e) => {
    e.preventDefault();
    const body = {
      titulo: titulo,
      comentario: comentario,
      rating: rango,
    };
    ApiBase.post("comentario", body)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    ApiBase.get("comentario").then((res) => setGetComent(res.data));
  }, [getcoment]);

  return (
    <div>
      {/* section 1 */}
      <section className="container-fluid d-flex align-items-center justify-content-center section-1">
        <div className="container d-flex justify-content-center align-items-center p-2">
          <div className="w-50 mx-2 degrade position-relative">
            <img
              src="/materiales-para-desarrollar/cancilleria-image.jpg"
              width={600}
              alt=""
              className=" w-100"
            />
            <p className="text-light position-absolute bottom-0">
              Defensora de los derechos de la mujer habla hoy en el congreso de
              la republica
            </p>
          </div>
          <div className="w-50 mx-2 degrade position-relative">
            <img
              src="/materiales-para-desarrollar/cantante-image.jpg"
              alt=""
              width={700}
              className="w-100"
            />
            <p className="text-light position-absolute bottom-0">
              Cantante selena fue golpeada por su marido
            </p>
          </div>
        </div>
      </section>
      {/* section 2 */}
      <section className="container-fluid d-flex justify-content-center align-items-center">
        <div className="d-flex container">
          <picture className="Block w-25 ">
            <div className="position-relative">
              <img
                src="/materiales-para-desarrollar/Rectángulo 1.svg"
                alt=""
                className="w-100"
              />
              <img
                src="materiales-para-desarrollar/logoatv-image.png"
                alt=""
                className="canal"
              />
            </div>
          </picture>
          <picture className="Block w-25 position-relative ">
            <div className="position-relative">
              <img
                src="/materiales-para-desarrollar/Rectángulo 2.svg"
                alt=""
                className="w-100"
              />
              <img
                src="materiales-para-desarrollar/americatv-logo-image.png"
                alt=""
                className="canal-2"
              />
            </div>
          </picture>
          <picture className="Block w-25 position-relative">
            <div className="position-relative">
              <img
                src="/materiales-para-desarrollar/Rectángulo 3.svg"
                alt=""
                className="w-100"
              />
              <img
                src="materiales-para-desarrollar/panamericanatv-logo-transparente-image.png"
                alt=""
                className="canal-3"
              />
            </div>
          </picture>
          <picture className="Block w-25 position-relative">
            <div className="position-relative">
              <img
                src="/materiales-para-desarrollar/Rectángulo 4.svg"
                alt=""
                className="w-100"
              />
              <img
                src="materiales-para-desarrollar/Latina_TV_sin fondo-image.png"
                alt=""
                className="canal-4"
              />
            </div>
          </picture>
        </div>
      </section>
      {/* section 3 */}
      <section className="container d-flex justify-content-between align-items-center p-4">
        <aside className="aside p-3">
          <div>
            <header>
              <h3>Eventos</h3>
            </header>
            <picture className="Block position-relative w-100">
              <img
                src="/materiales-para-desarrollar/eventos-1.svg"
                alt=""
                className="w-100 mb-2"
              />
              <p className="text-light position-absolute ">
                Evento para el empoderamiento de la mujer
              </p>
              <span className="text-light position-absolute">
                13 Junio 4:00 PM 2022
              </span>
            </picture>
            <picture className="Block position-relative w-100 mb-5">
              <img
                src="/materiales-para-desarrollar/eventos-1.svg"
                alt=""
                className="w-100 my-2"
              />
              <p className="text-light position-absolute ">
                Conferencia de las naciones unidas para los derechos de la mujer
              </p>
              <span className="text-light position-absolute">
                13 Junio 4:00 PM 2022
              </span>
            </picture>
            <a href="/news" className="more">
              Ver Todo...
            </a>
          </div>
        </aside>
        <section className="section-3 ">
          <section className="video">
            <video
              controls
              autoPlay
              src="/img/🔴 Policía investiga presunto caso de feminicidio en Trujillo.mp4"
            ></video>
          </section>
          <section className="section-3-2 py-3 px-2 d-flex ">
            <header>
              <h5>
                Policía investiga presunto caso de feminicidio en Trujillo
              </h5>
            </header>
            <div className="d-flex align-items-center justify-content-around container-details">
              <aside className="block-text ">
                <img
                  src="/materiales-para-desarrollar/Latina_TV_2019-image.png"
                  alt=""
                  className="logo-description"
                />
              </aside>
              <div className="block-text d-flex ">
                <div className="block description">
                  <h4>
                    {" "}
                    <span>
                      <i className="bi bi-flower1"></i>
                    </span>{" "}
                    91%
                  </h4>
                  <p>information approved for Professional</p>
                </div>
                <div className="block description">
                  <h4>
                    {" "}
                    <span>
                      <i className="bi bi-star-fill"></i>
                    </span>{" "}
                    91%
                  </h4>
                  <p>information approved for Public</p>
                </div>
              </div>
            </div>
          </section>
          <footer>
            <p>MAS SOBRE LA NOTICIA</p>
          </footer>
        </section>
      </section>
      {/* Section 4 */}
      <section className="container d-flex justify-content-between align-items-start px-4 py-2">
        <aside className="publicidad">
          <aside className="container-emergency">
            <div>
              <h4>Numeros de Ayuda</h4>
              <ul>
                <li>
                  <i className="bi bi-megaphone-fill"></i> Centros de Emergencia
                  Mujer (CEM) (431 a nivel nacional)
                </li>
                <li>
                  <i className="bi bi-headset"></i> Línea 100
                </li>
                <li>
                  {" "}
                  <i className="bi bi-telephone-fill"></i> Servicio de Atención
                  Urgente (SAU)
                </li>
                <li>
                  <i className="bi bi-chat-left-dots"></i> Chat 100
                </li>
                <li>
                  {" "}
                  <i className="bi bi-house-heart-fill"></i> Hogar de Refugio
                  Temporal (HRT)
                </li>
                <li>
                  <a href="https://www.gob.pe/479-denunciar-violencia-familiar-y-sexual">
                    Ver mas
                  </a>
                </li>
              </ul>
            </div>
          </aside>
        </aside>
        <section className="section-4 d-flex justify-content-between px-3">
          <section>
            <div className="d-flex ">
              <p className="subrayado "></p>
              <p className=" w-25">MAS SOBRE LA NOTICIA</p>
              <p className="subrayado-2 "></p>
            </div>
            <div className="description p-3">
              <h5 className="mb-2">Description:</h5>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Repellat iure pariatur quasi tempora tempore possimus velit quis
                consequatur? Itaque, voluptas! Repudiandae magni eos possimus
                fugit? In numquam architecto rem. Beatae. Lorem ipsum dolor sit
                amet consectetur adipisicing elit. Debitis adipisci quaerat,
                ratione id dolorem maiores, pariatur cupiditate, explicabo saepe
                accusantium veniam velit. Nihil debitis sapiente id dolores est
                commodi dolore?
              </p>
            </div>
            <div className="d-flex mt-2">
              <p className="subrayado "></p>
              <p className="w-25">OTROS COMENTARIOS</p>
              <p className="subrayado-2 "></p>
            </div>
            <section className="sec-coments">
              <div className="d-flex row-coment">
                <div className="coment">
                  <img src="/img/burbuja.png" alt="" width={300} />
                  <div className="mensaje">
                    <p>Latina no llega a ver bien los casos</p>
                  </div>
                  <div className="details-coment d-flex">
                    <img
                      src="/materiales-para-desarrollar/Latina_TV_2019-image.png"
                      alt=""
                    />
                    <div>
                      <h4>Fernanda Mazzerini</h4>
                      <p>Feminista CEO Group</p>
                    </div>
                  </div>
                </div>
                <div className="coment">
                  <img src="/img/burbuja.png" alt="" width={300} />
                  <div className="mensaje">
                    <p>amarillismo sin mas</p>
                  </div>
                  <div className="details-coment d-flex">
                    <img
                      src="/materiales-para-desarrollar/Latina_TV_2019-image.png"
                      alt=""
                    />
                    <div>
                      <h4>Pedro Manzinni</h4>
                      <p>Director Manager</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="d-flex row-coment">
                <div className="coment">
                  <img src="/img/burbuja.png" alt="" width={300} />
                  <div className="mensaje">
                    <p>Me ha parecido que han tenido una excelente cobertura</p>
                  </div>
                  <div className="details-coment d-flex">
                    <img
                      src="/materiales-para-desarrollar/Latina_TV_2019-image.png"
                      alt=""
                    />
                    <div>
                      <h4>Chavez Torres</h4>
                      <p>Asesor Juridico</p>
                    </div>
                  </div>
                </div>
                <div className="coment ">
                  <img src="/img/burbuja.png" alt="" width={300} />
                  <div className="mensaje">
                    <p>Gracias por apoyar a las mujeres</p>
                  </div>
                  <div className="details-coment d-flex">
                    <img
                      src="/materiales-para-desarrollar/Latina_TV_2019-image.png"
                      alt=""
                    />
                    <div>
                      <h4>Lesfer Garcia</h4>
                      <p>CEO Solidoct</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </section>
        </section>
      </section>

      {/* section 5 */}
      <section className="container d-flex justify-content-between align-items-center mb-4 px-4 py-2">
        <aside className="publicidad ">
          <img
            src="/materiales-para-desarrollar/Captura de pantalla (67).jpg"
            alt=""
            className=""
          />
        </aside>
        <section className="section-4 d-flex flex-column justify-content-evenly px-3">
          <div className="d-flex">
            <p className="subrayado "></p>
            <p className="w-25">AGREGAR COMENTARIO</p>
            <p className="subrayado-2 "></p>
          </div>
          <div className="">
            <div className="d-flex justify-content-evenly align-items-start">
              <form
                action="comentario"
                className="d-flex flex-column align-items-start  formulario p-3"
              >
                <div className="d-flex flex-column py-2 w-100">
                  <label htmlFor="name">Titulo</label>
                  <input
                    type="text"
                    placeholder="Name"
                    name="name"
                    value={titulo}
                    onChange={(e) => setTitulo(e.currentTarget.value)}
                  />
                </div>
                <div className="d-flex flex-column py-2 w-100">
                  <label htmlFor="especiality">
                    Tu Puesto en la Materia (Opcional)
                  </label>
                  <input type="text" placeholder="Puesto" name="especiality" />
                </div>
                <div className="d-flex py-2 calificacion">
                  <i
                    className="bi bi-star-fill"
                    onClick={(e) => setRango(1)}
                  ></i>
                  <i
                    className="bi bi-star-fill"
                    onClick={(e) => setRango(2)}
                  ></i>
                  <i
                    className="bi bi-star-fill"
                    onClick={(e) => setRango(3)}
                  ></i>
                  <i
                    className="bi bi-star-fill"
                    onClick={(e) => setRango(4)}
                  ></i>
                  <i
                    className="bi bi-star-fill"
                    onClick={(e) => setRango(5)}
                  ></i>
                </div>
                <div className="d-flex flex-column py-2">
                  <div className="avatar">
                    <i className="bi bi-person"></i>
                  </div>
                </div>
                <div className="d-flex flex-column py-2">
                  <button
                    onClick={(e) => submit(e)}
                    className="btn btn-outline-primary"
                  >
                    Submit
                  </button>
                </div>
              </form>
              <div className="text-rich p-3">
                <label htmlFor="coment">Comentario </label>
                <textarea
                  name="coment"
                  id=""
                  value={comentario}
                  onChange={(e) => setComentario(e.currentTarget.value)}
                />
              </div>
            </div>
          </div>
        </section>
      </section>
    </div>
  );
};

export default Dashboard;
