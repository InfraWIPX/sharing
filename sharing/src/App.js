import React from 'react'

import Carousel from './components/Carousel'
import Menu from './components/Menu'
import EventDetail from './components/EventDetail'
import Contact from './components/Contact'

import imgOne from './statics/images/carousel/1.jpg'
import imgTwo from './statics/images/carousel/2.jpg'
import imgThree from './statics/images/carousel/3.jpg'

const title = {
	One: 'กิจกรรมปลูกป่า',
	Two: 'กิจกรรมบริจาคโลหิต',
	Three: 'กิจกรรมวิ่งมาราธอน',
	Four: 'เกี่ยวกับเรา'
}

const data = {
	detail1:
		'ขอชวนทุกท่านมาร่วมวิ่งและร่วมระดมเงินบริจาคกับกิจกรรม เดิน-วิ่งมินิมาราธอนการกุศลแห่งเดียวที่ครอบคลุม 3 สวนสวยใจกลางกรุงเทพฯ ',
	detail2:
		'ขอเชิญพสกนิกรทุกหมู่เหล่า ร่วมบริจาคโลหิต เพื่อถวายเป็นพระราชกุศล แด่พระบาทสมเด็จพระปรมินทรมหาภูมิพลอดุลยเดช',
	detail3:
		'ขอเชิญทุกท่านเข้าร่วมโครงการ นำร่องการปลูกป่า 1 ทีม 1 ไร่ (กำหนดให้ปลูกต้นไม้ 400 ต้น/ไร่) โดยไม่เสียค่าใช้จ่ายในการเข้าร่วมกิจกรรม ',

	place1: 'ณ สวนสาธารณะจตุจักร, สวนสมเด็จพระนางเจ้าสิริกิติ์และสวนรถไฟ',
	place2: 'ศูนย์บริการโลหิตแห่งชาติ ภาคบริการโลหิตแห่งชาติ',
	place3:
		'สถาบันปลูกป่า ปตท. ตั้งอยู่ใน ตำบลป่ายุบใน อำเภอวังจันทร์ จังหวัดระยอง',

	time1: 'วันอาทิตย์ที่ 24 ธันวาคม 2560 ตั้งแต่ 04.30 น. เป็นต้นไป',
	time2: 'ระหว่างวันที่ 1 มกราคม - 31 ธันวาคม 2560',
	time3: 'ระหว่างวันที่ 1 พฤศจิกายน - 31 ธันวาคม 2560'
}

const App = () => {
	return (
		<div>
			<Menu brand="Sharing is Caring" />

			<Carousel
				id="0"
				imgOne={imgOne}
				imgTwo={imgTwo}
				imgThree={imgThree}
				titleOne={title.One}
				titleTwo={title.Two}
				titleThree={title.Three}
			/>
			<div className="container-fluid  bg-dark">
				<div className="row">
					<EventDetail
						id="1"
						picture={imgOne}
						eventName={title.One}
						eventDetail={data.detail1}
						eventPlace={data.place1}
						eventTime={data.time1}
					/>

					<EventDetail
						id="2"
						picture={imgTwo}
						eventName={title.Two}
						eventDetail={data.detail2}
						eventPlace={data.place2}
						eventTime={data.time2}
					/>

					<EventDetail
						id="3"
						picture={imgThree}
						eventName={title.Three}
						eventDetail={data.detail3}
						eventPlace={data.place3}
						eventTime={data.time3}
					/>

					<Contact id="4" title={title.Four} />
				</div>
			</div>
		</div>
	)
}

export default App
