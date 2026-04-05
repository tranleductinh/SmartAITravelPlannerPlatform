import mongoose from "mongoose";

const { Schema, model } = mongoose;

const hotelImageSchema = new Schema(
  {
    imageUrl: { type: String, required: true, trim: true },
    description: { type: String, default: null },
  },
  {
    _id: true,
    versionKey: false,
  },
);

const hotelSchema = new Schema(
  {
    providerId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    name: { type: String, required: true, trim: true },
    description: { type: String, default: null },

    address: { type: String, default: null },
    city: { type: String, default: null },

    lat: { type: Number, default: null },
    long: { type: Number, default: null },

    isActive: { type: Boolean, default: true },

    images: { type: [hotelImageSchema], default: [] },
  },
  {
    timestamps: true,
    versionKey: false,
  },
);

hotelSchema.index({ providerId: 1 });
hotelSchema.index({ city: 1 });
hotelSchema.index({ isActive: 1 });

const Hotel = model("Hotel", hotelSchema);

export default Hotel;