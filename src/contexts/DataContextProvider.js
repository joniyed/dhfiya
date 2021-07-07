import React, {createContext} from "react";
import JsonData from '../data/data.json'

export const DataContext = createContext();

const DataContextProvider = ({children}) => {

    const Headers = JsonData.Header;
    const Ideals = JsonData.Ideals;
    const Features = JsonData.Features;
    const Motives = JsonData.Motives;
    const About = JsonData.About;
    const Services = JsonData.Services;
    const Team = JsonData.Team;
    const Gallery = JsonData.Gallery;
    const Testimonials = JsonData.Testimonials;
    const Contact = JsonData.Contact;

    return (
        <DataContext.Provider
            value={{
                Headers,
                Ideals,
                Features,
                Motives,
                About,
                Services,
                Team,
                Gallery,
                Testimonials,
                Contact
            }}
        >
            {children}
        </DataContext.Provider>
    );
};

export default DataContextProvider;