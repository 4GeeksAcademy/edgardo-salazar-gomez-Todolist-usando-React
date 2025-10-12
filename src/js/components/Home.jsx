import Navbar from "./Navbar"
import Jumbotron from "./Jumbotron"
import Card from "./Card"
import End from "./End";
let imagen1 = "https://hips.hearstapps.com/hmg-prod/images/pchelenepambrun-resized-1576190436.jpg?crop=1.00xw:0.668xh;0,0&resize=1200:*";
let imagen2 = "https://crazyminds.es/wp-content/uploads/img_1289-1-1068x1068.jpg"
let imagen3 = "https://www.dodmagazine.es/wp-content/uploads/2021/04/lana-del-rey-blue-banisters-2021.jpg"
let imagen4 = "https://herasayssheshouldbethestarnow.wordpress.com/wp-content/uploads/2018/03/fig-4-aurora.jpg?w=1200"
let boton1 = "https://es.wikipedia.org/wiki/Harry_Styles"
let boton2 = "https://es.wikipedia.org/wiki/Bad_Bunny"
let boton3 = "https://es.wikipedia.org/wiki/Lana_Del_Rey"
let boton4 = "https://es.wikipedia.org/wiki/Aurora_Aksnes"

const Home = () => {
	return (
		<div>
			<Navbar />
			<Jumbotron />
			<div className="container">
				<div className="row mt-4">
					<Card imagen={imagen1} boton={boton1} titulo="Harry Styles" texto="Harry Edward Styles (Holmes Chapel, Cheshire; 1 de febrero de 1994) es un cantante, compositor y actor británico. Inició su carrera como cantante en 2010 como integrante de la boy band One Direction, con la que participó en el programa The X." />
					<Card imagen={imagen2} boton={boton2} titulo="Bad Bunny" texto="Benito Antonio Martínez Ocasio (Vega Baja, 10 de marzo de 1994),​ conocido artísticamente como Bad Bunny, es un cantante, compositor, productor discográfico y luchador puertorriqueño." />
					<Card imagen={imagen3} boton={boton3} titulo="Lana de Rey" texto="Elizabeth Woolridge Grant (Nueva York, 21 de junio de 1985), ​conocida artísticamente como Lana Del Rey, es una cantante, compositora, modelo, actriz, escritora, productora y poetisa estadounidense." />
					<Card imagen={imagen4} boton={boton4} titulo="Aurora Aksnes" texto="Aurora Aksnes (Stavanger; 15 de junio de 1996), conocida simplemente como AURORA, es una cantautora noruega. Inició su carrera en 2012 con una serie de sencillos independientes que sirvieron para desarrollar su propuesta artística." />
				</div>
			</div>
			<End />
		</div>

	)
};

export default Home;