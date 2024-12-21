const ReviewCard = (props) => {
    return(
        <div style={{backgroundColor: "white",
            width: "250px",
            height: "200px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center"
        }}> 
            <div style={{
                display: "flex",
                flexDirection: "row", 
                justifyContent: "center",
                alignItems: "center",
                gap: "5px",
                width: "150px"

                }}>
                <h3 style={{fontSize: "18px"}}>
                    {props.rating}    
                </h3>
                <svg xmlns="http://www.w3.org/2000/svg" height= {30} width={30} viewBox="0 0 576 512"><path fill="#FFD43B" d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/>
                </svg>
            </div>
            <div style={{
                display: "flex",
                flexDirection: "row",
                width: "200px",
                justifyContent: "space-between"
            }}>
                <img src={props.img} height={75} width={75} style={{borderRadius: "10px"}}/>
                <h3>{props.name}</h3>
            </div>
            <p style={{fontSize: "15px"}}>{props.reviewtxt}</p>
        </div>
    );
}

export default ReviewCard;