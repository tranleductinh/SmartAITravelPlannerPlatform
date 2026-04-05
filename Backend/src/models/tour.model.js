import mongoose from "mongoose";

const { Schema, model } = mongoose;

const tourImageSchema = new Schema(
  {
    imageUrl: { type: String, required: true, trim: true },
    description: { type: String, default: null },
  },
  {
    _id: true,
    versionKey: false,
  },
);

const tourServiceSchema = new Schema(
  {
    name: { type: String, required: true, trim: true },
    description: { type: String, default: null },
    type: {
      type: String,
      enum: ["HOTEL", "TRANSPORT", "FOOD", "TICKET", "OTHER"],
      default: "OTHER",
    },
    price: { type: Number, default: 0, min: 0 },
    isActive: { type: Boolean, default: true },
  },
  {
    _id: true,
    versionKey: false,
  },
);

const tourActivitySchema = new Schema(
  {
    time: { type: String, default: null },
    title: { type: String, required: true, trim: true },
    address: { type: String, default: null },
    long: { type: Number, default: null },
    lat: { type: Number, default: null },
  },
  {
    _id: true,
    versionKey: false,
  },
);

const tourItinerarySchema = new Schema(
  {
    dayNumber: { type: Number, required: true, min: 1 },
    title: { type: String, required: true, trim: true },
    description: { type: String, default: null },
    activities: { type: [tourActivitySchema], default: [] },
  },
  {
    _id: true,
    versionKey: false,
  },
);

const tourSchema = new Schema(
  {
    quantity: { type: Number, default: 0, min: 0 },
    price: { type: Number, default: 0, min: 0 },
    location: { type: String, default: null, trim: true },
    description: { type: String, default: null },
    numberOfDay: { type: Number, default: 1, min: 1 },
    startDay: { type: Date, default: null },
    type: {
      type: String,
      enum: ["PRIVATE", "GROUP", "CUSTOM"],
      default: "GROUP",
    },
    minSlots: { type: Number, default: 1, min: 1 },
    maxSlots: { type: Number, default: 1, min: 1 },
    isActive: { type: Boolean, default: true },

    itineraries: { type: [tourItinerarySchema], default: [] },
    services: { type: [tourServiceSchema], default: [] },
    images: { type: [tourImageSchema], default: [] },
  },
  {
    timestamps: true,
    versionKey: false,
  },
);



const Tour = model("Tour", tourSchema);

export default Tour;