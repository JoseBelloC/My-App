import { Truck } from 'lucide-react';

const Card = (props) => {
    return(
        <div style={{
            display: "flex",
            flexDirection: "column",
            width: "265px",
            height:"440px",
            justifyContent: "space-between",
            backgroundColor: "#D9D9D9"
            }}>
                <img src={props.image} height={185} width={265}/>
                <div style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    margin: "0 10px 0 10px"
                    }}>
                        <h3>{props.name}</h3>
                        <p style={{color: "#EE9972"}}>{props.price}</p>
                </div>
                <p style={{
                    margin: "0 10px 0 10px"
                }}>
                    {props.content}
                </p>
                <div>
                    <button className='deliverybtn'>Order a delivery</button>
                    <Truck />

                </div>
        </div>
    );
}

export default Card;