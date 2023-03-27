const Banner = () => (
    <div className="main-banner img-container dark-color">
        <div className="ed-grid lg-grid-6">
            <div className="lg-cols-4 lg-x-2">
                <img
                    class="main-banner__img"
                    src="https://cdn.futbolperuano.com/sdi/2023/03/18/con-ruidiaz-hasta-los-63-seattle-igualo-con-los-angeles-por-la-fecha-4-de-la-mls-1128607-0.jpg"
                    alt="banner"
                />
                <div className="main-banner__data s-center">
                    <p className="s-mb-0 t2">Bienvenido a Cupcakes Home</p>
                    <p>Un sitio lleno de futbol y sabor.</p>
                    <a class="button" href="#">
                        Ver cupcakes
                    </a>
                </div>
            </div>
        </div>
    </div>
)
export default Banner