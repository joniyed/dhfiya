import React, {useContext} from 'react'
import Navigation from './components/navigation';
import Header from './components/header';
import Features from './components/features';
import About from './components/about';
import Services from './components/services';
import Gallery from './components/gallery';
import Testimonials from './components/testimonials';
import Team from './components/Team';
import Contact from './components/contact';
import Ideals from "./components/Ideals.jsx";
import Motive from "./components/motive";
import {DataContext} from "./contexts/DataContextProvider";

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
