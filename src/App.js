import React, {useContext} from 'react'
import Navigation from './components/Navigation';
import Header from './components/Header';
import Features from './components/Features';
import About from './components/About';
import Services from './components/Services';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Ideals from "./components/Ideals.js";
import Motive from "./components/Motive";
import {DataContext} from "./contexts/DataContextProvider";
import Team from "./components/Team";

const App = () => {

    // const [state, setState] = useState({landingPageData: {}})
    //
    // const getLandingPageData = () => {
    //     setState({landingPageData: JsonData})
    // }
    //
    // useEffect(() => {
    //     getLandingPageData()
    // }, [])

    const DataContextProvider = useContext(DataContext);

    return (
        <div>
            <Navigation/>
            <Header data={DataContextProvider.Headers}/>
            <Ideals data={DataContextProvider.Ideals} title={"আদর্শ"}/>
            <Features data={DataContextProvider.Features} title={"লক্ষ্য"}/>
            <Motive data={DataContextProvider.Motives} title={"উদ্দেশ্য"}/>
            <About data={DataContextProvider.About}/>
            <Services data={DataContextProvider.Services}/>
            <Team data={DataContextProvider.Team}/>
            <Gallery data={DataContextProvider.Gallery}/>
            <Testimonials data={DataContextProvider.Testimonials}/>
            <Contact data={DataContextProvider.Contact}/>
        </div>
    )
}

export default App;
