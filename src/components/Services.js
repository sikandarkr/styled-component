import React ,{Component} from 'react';
import Title from './Title'
import {FaCocktail, FaHiking, FaShuttleVan, FaBeer} from 'react-icons/fa';
class Services extends Component{
    state ={
        services:[
            {
                icon:<FaCocktail/>,
                title:"free",
                info:'some dummy text'
            },
            {
                icon:<FaHiking/>,
                title:"Endless",
                info:'some dummy '
            },
            {
                icon:<FaShuttleVan/>,
                title:"free van",
                info:'some dummy text '
            },
            {
                icon:<FaBeer/>,
                title:"free beer",
                info:'some dummy '
            }
        ]
    }
    render(){
        return(
            <section className="services">
                <Title title="services"/>
                <div classname="services-center">
                    {this.state.services.map((item,index)=>{
                        return <article key={index} className="service">
                                    <span>{item.icon}</span>
                                    <h6>{item.title}</h6>
                                    <p>{item.info}</p>
                                </article>

                    })}
                </div>
            </section>
        )
    }
}
export default Services;