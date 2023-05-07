import image1 from "../../assets/images/eventPhoto.png";
import image2 from "../../assets/images/image2.jpg";
import image3 from "../../assets/images/image3.jpg";
import image4 from "../../assets/images/image4.jpg";
import Address from "../../assets/icons/Address.svg";
import Add from "../../assets/icons/addIcon.png";
import Added from "../../assets/icons/added.svg";

const Content = () => {
	const cardArray = [
		{
			title: "BKM Yaz Etkinlikleri: Zengin Mutfağı",
			type: "TİYATRO",
			image: image1,
			color: "#B77CB8",
			isAdded: "false",
			id: 1,
		},
		{
			title: "Yasemin Sakallıoğlu",
			type: "STAND UP",
			image: image3,
			color: "#F07266",
			isAdded: "true",
			id: 2,
		},
		{
			title: "Sinema Keyfi: Rifkin's Festival",
			type: "SİNEMA",
			image: image2,
			color: "#F19653",
			isAdded: "false",
			id: 3,
		},
		{
			title: "BKM Yaz Etkinlikleri: Zengin Mutfağı",
			type: "TİYATRO",
			image: image1,
			color: "#B77CB8",
			isAdded: "false",
			id: 4,
		},
		{
			title: "Yasemin Sakallıoğlu",
			type: "STAND UP",
			image: image3,
			color: "#F07266",
			isAdded: "false",
			id: 5,
		},
		{
			title: "Sinema Keyfi: Rifkin's Festival",
			type: "SİNEMA",
			image: image4,
			color: "#F19653",
			isAdded: "false",
			id: 6,
		},
	];

	const addToCalendar = (id) => {
		const value = cardArray.filter((item) => item.id == id);
		value[0].isAdded = "true";
		console.log(value);
	};

	return (
		<div className="content">
			{cardArray.map((c) => (
				<>
					<div className="card" key={c.id}>
						<div className="date">
							<div className="dateFlex">
								<span>7</span>
								<span>Eylül</span>
								<span>Salı</span>
								<span>21:15</span>
							</div>
							<div></div>
						</div>
						<div className="eventType" style={{ backgroundColor: c.color }}>
							{c.type}
						</div>
						<img src={c.image} className="eventImage" alt="event image" />
						<div className="rightDiv">
							<div className="descDiv">
								<h5 className="descTitle">{c.title}</h5>
								<div className="descLocDiv">
									<img src={Address} />
									<span>Maximum UNIQ Hall</span>
								</div>
								<div className="descText">
									<div className="wideScreenText">
										<span>
											1978 yılında ilk kez İstanbul Şehir Tiyatrolarında bu
											oyunda aşçı Lütfü Usta’yı canlandıran Şener Şen, 40 yıl
											aradan sonra aynı rolde ve genç bir....{" "}
										</span>
										<a className="eventLink" href="#">
											Detaylı Bilgi
										</a>
									</div>
									<div className="smallScreenText">
										<span className="smallScreenText">
											1978 yılında ilk kez....{" "}
										</span>
										<a className="eventLink" href="#">
											Detaylı Bilgi
										</a>
									</div>
								</div>
							</div>
							<div className="ticketDiv">
								<button className="ticketBtn">Bilet Al</button>
								<div className="ticketAdd">
									{c.isAdded == "true" ? (
										<img src={Added} />
									) : (
										<img src={Add} onClick={() => addToCalendar(c.id)} />
									)}
									<span>Takvime Ekle</span>
								</div>
							</div>
						</div>
					</div>
				</>
			))}
		</div>
	);
};

export default Content;
