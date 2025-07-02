import React from 'react'
import { FaCompass, FaGlobe } from 'react-icons/fa'
import PageInfo from '../components/PageInfo'
import { FaGauge } from 'react-icons/fa6'
import FooterCard from '../components/FooterCard'
import DiscoverSection from '../components/DiscoverSection'
import Footer from '../components/Footer'

const LandingPage = () => {
    const props = [
		{
			isReversed: false,
			icon: <FaGlobe color='#939185' className='scale-[1.6]' />,
			heading: "About us",
			description: "The JSS STU Library is the academic heart of JSS Science and Technology University, offering a rich collection of resources to support learning, teaching, and research. With a commitment to excellence, the library provides access to a wide array of books, journals, e-resources, and digital tools for students, faculty, and researchers.",
			imgSrc: "https://th.bing.com/th/id/OIP.se46-rgOBMId55rpM_9dBgHaE8?rs=1&pid=ImgDetMain"
		},
		{
			isReversed: true,
			icon: <FaGauge color='#e6b9a6' className='scale-[1.6]' />,
			heading: "🏛️ Key Features ",
			description: "Extensive Collection: 100,000+ volumes including textbooks, reference books, project reports, and previous year question papers.\nDigital Library: Access to e-books, e-journals, online databases like IEEE Xplore, Springer, Elsevier, and NDL. \nReading Halls: Spacious and well-lit reading areas for quiet study and group discussions. \nWi-Fi Enabled: Seamless internet access for digital learning and research. \nOnline Catalog (OPAC): Easily search and locate books and resources.",
			imgSrc: "https://gnlu.ac.in/Content/library/images/library.jpg"
		},
		{
			isReversed: false,
			icon: <FaCompass color='#2f3645' className='scale-[1.6]' />,
			heading: "Our story",
			description: "Campus Connect began with a vision to address the communication challenges faced by educational institutions. Recognizing the need for a streamlined approach, our team set out to create a platform that simplifies information flow and enhances collaboration among administrators, faculty, and students. Through continuous innovation and feedback, Campus Connect has evolved into a comprehensive solution that empowers campuses to operate more efficiently. Today, it stands as a vital tool for fostering engagement and building a dynamic academic community, ensuring every member can connect and contribute effectively.",
			imgSrc: "https://i.pinimg.com/originals/ab/9e/5a/ab9e5ac5627187fa9e9d4606db7dd29c.gif"
		},
	];

    return (
        <>
            <PageInfo pageProps={props[0]} />
			<hr className='border-2 border-gray-200' />
			<PageInfo pageProps={props[1]} />
			<hr className='border-2 border-gray-200' />
			<PageInfo pageProps={props[2]} />
			<hr className='border-2 border-gray-200' />
			<DiscoverSection />
			<hr className='border-2 border-gray-200' />
			{/* <Footer /> */}
        </>
    )
}

export default LandingPage