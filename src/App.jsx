import React, {Component} from 'react'
import Navigation from './components/navigation';
import Header from './components/header';
import Features from './components/features';
import About from './components/about';
import Services from './components/services';
import Gallery from './components/gallery';
import Testimonials from './components/testimonials';
import Team from './components/Team';
import Contact from './components/contact';
import JsonData from './data/data.json';
import Ideals from "./components/Ideals.jsx";
import Motive from "./components/motive";

export class App extends Component {
    state = {
        landingPageData: {},
    }

    getlandingPageData() {
        this.setState({landingPageData: JsonData})
    }

    componentDidMount() {
        this.getlandingPageData();
    }

    render() {
        return (
            <div>
                <Navigation />
                <Header data={this.state.landingPageData.Header}/>
                <Ideals data={this.state.landingPageData.Ideals} title={"আদর্শ"}/>
                <Features data={this.state.landingPageData.Features} title={"লক্ষ্য"}/>
                <Motive data={this.state.landingPageData.Motives} title={"উদ্দেশ্য"}/>
                <About data={this.state.landingPageData.About}/>
                <Services data={this.state.landingPageData.Services}/>
                <Gallery data={this.state.landingPageData.Gallery}/>
                <Testimonials data={this.state.landingPageData.Testimonials}/>
                <Team data={this.state.landingPageData.Team}/>
                <Contact data={this.state.landingPageData.Contact}/>
            </div>
        )
    }
}

export default App;
