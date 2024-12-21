import greek from "../images/icons_assets/greeksalad.jpg";
import bruchetta from "../images/icons_assets/bruchetta.svg";
import lemon from "../images/icons_assets/lemondessert.jpg";
import Manuel from "../images/images/Persona1.jpg";
import Maria from "../images/images/Persona2.jpg";
import Moira from "../images/images/Persona3.jpg";
import Santiago from "../images/images/Persona4.jpg";

const menu = [
    {
        img: greek,
        name: "Greek Salad",
        price: "$12.99",
        content: "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons. "
    },
    {
        img: bruchetta,
        name: "Bruchetta",
        price: "$5.99",
        content: "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil. "
    },
    {
        img: lemon,
        name: "Lemon Dessert",
        price: "$5.00",
        content: "This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined."
    }
]

const review = [
    {
        rating: "4,5",
        name: "Manuel",
        imagen:  Manuel,
        reviewtxt: "Amazing pasta, truly authentic flavors."
    },
    {
        rating: "5",
        name: "Maria",
        imagen: Maria,
        reviewtxt: "Cozy atmosphere, exceptional service."
    },
    {
        rating: "4",
        name: "Moira",
        imagen: Moira,
        reviewtxt: "Best pizza in the city!",
    },
    {   
        rating: "5",
        name: "Santiago",
        imagen: Santiago,
        reviewtxt: "Delicious meals, worth every penny."
    }
]

export{menu, review};