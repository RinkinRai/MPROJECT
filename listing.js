const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const listingSchema = new Schema ({
    title: {
       type: String,
       required: true,
    },
    description: String,
    image: {
        type: String,
        default:
            "https://images.unsplash.com/photo-307224264?utm_campaign=adp_photos_sponsored&utm_content=https%3A%2F%2Funsplash.com%2Fphotos%2Fa-church-in-the-middle-of-a-field-with-mountains-in-the-background-FmOPaefLRA0",
        set:(v) =>
         v === "" 
        ? "https://images.unsplash.com/photo-307224264?utm_campaign=adp_photos_sponsored&utm_content=https%3A%2F%2Funsplash.com%2Fphotos%2Fa-church-in-the-middle-of-a-field-with-mountains-in-the-background-FmOPaefLRA0"
         : v,
    },

    price: Number,
    location: String,
    country: String,
});

const Listing = mongoose.model("Listing", listingSchema);
module.exports = Listing;