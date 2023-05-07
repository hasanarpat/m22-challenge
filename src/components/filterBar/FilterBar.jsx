import Calendar from "../../assets/icons/Calendar.svg";
import CheckBoxSelected from '../../assets/icons/checkbox.svg'
import { useState } from "react";
const FilterBar = () => {
	const [filterOpen,setFilterOpen] = useState(false);
	const handleClick = ()=>{
		setFilterOpen(previous=>!previous)
	}
	return (
		<div className="filterBar disable-text-selection">
			<div className="filterDiv" onClick={handleClick} style={{color: filterOpen ? "#ff0d87" : "#000"}}>
				<div className="ellipseDiv">
					<div className="ellipse1" style={{backgroundColor: filterOpen ? "#ff0d87" : "#000"}} ></div> 
					<div className="ellipse2" style={{backgroundColor: filterOpen ? "#ff0d87" : "#000"}}  ></div>
					<div className="ellipse3" style={{backgroundColor: filterOpen ? "#ff0d87" : "#000"}}  ></div>
				</div>
				Filtreler
			</div>
			<div></div>
			<div className="calendar">
				<img className="calendarImg" src={Calendar} />
				Takvimde Gör
			</div>
			{
				filterOpen ? <div className="filterBox">
				<div className="filterLoc">
					<span>Etkinlik Mekanı</span>
					<div className="item">
					<img src={CheckBoxSelected} width={20} height={20}/>
					<label htmlFor="1" className="filterLabel">Maximum Uniq Hall</label>
					</div>
					<hr/>
					<div className="item">
					<input id="2" type="checkbox" className="filterInput"/>
					<label htmlFor="2" className="filterLabel">Maximum Uniq Box</label>
					</div>
					<hr/>
					<div className="item">
					<input id="3" type="checkbox" className="filterInput"/>
					<label htmlFor="3" className="filterLabel">Maximum Uniq Loungge</label>
					</div>
					<hr/>
					<div className="item">
					<input id="4" type="checkbox" className="filterInput"/>
					<label htmlFor="4" className="filterLabel">Maximum Uniq Açıkhava</label>
					</div>
					<hr/>
					<div className="item">
					<input id="5" type="checkbox" className="filterInput"/>
					<label htmlFor="5" className="filterLabel">Bahçe Fuaye</label>
					</div>
				</div>
				<div className="filterDate">
					<span>Etkinlik Tarihi</span>
					<div className="item">
					<input id="6" type="checkbox" className="filterInput"/>
					<label htmlFor="6" className="filterLabel">Güncel Etkinlikler</label>
					</div>
					<hr/>
					<div className="item">
					<input id="7" type="checkbox" className="filterInput"/>
					<label htmlFor="7" className="filterLabel">Geçmiş Etkinlikler</label>
					</div>
				</div>
			</div> : <></>
			}
		</div>
	);
};

export default FilterBar;
