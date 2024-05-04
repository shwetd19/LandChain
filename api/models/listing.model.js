import mongoose from "mongoose";

const listingSchema = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    description: {
      type: String,
    },
    address: {
      type: String,
    },
    regularPrice: {
      type: Number,
    },
    imageUrls: {
      type: Array,
    },
    userRef: {
      type: String,
    },
  },
  { timestamps: true }
);

const Listing = mongoose.model("Listing", listingSchema);

export default Listing;
