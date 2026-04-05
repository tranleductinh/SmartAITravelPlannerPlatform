import mongoose from "mongoose";

const { Schema, model } = mongoose;

const travelerItemSchema = new Schema(
  {
    fullName: { type: String, required: true, trim: true },
    phone: { type: String, default: null },
    email: { type: String, default: null, trim: true },
    note: { type: String, default: null },
  },
  {
    _id: true,
    versionKey: false,
  },
);

const bookingActivitySchema = new Schema(
  {
    itineraryId: { type: Schema.Types.ObjectId, default: null },
    activityId: { type: Schema.Types.ObjectId, default: null },
    dayNumber: { type: Number, default: null },
    title: { type: String, default: null, trim: true },
    time: { type: String, default: null },
    status: {
      type: String,
      enum: ["PENDING", "ONGOING", "DONE", "SKIPPED"],
      default: "PENDING",
    },
  },
  {
    _id: true,
    versionKey: false,
  },
);

const bookingServiceSchema = new Schema(
  {
    serviceId: { type: Schema.Types.ObjectId, default: null },
    name: { type: String, required: true, trim: true },
    type: {
      type: String,
      enum: ["HOTEL", "TRANSPORT", "FOOD", "TICKET", "OTHER"],
      default: "OTHER",
    },
    price: { type: Number, default: 0, min: 0 },
  },
  {
    _id: true,
    versionKey: false,
  },
);

const bookingSchema = new Schema(
  {
    travelerId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    guideId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      default: null,
    },
    tourId: {
      type: Schema.Types.ObjectId,
      ref: "Tour",
      required: true,
    },

    travelers: { type: [travelerItemSchema], default: [] },

    bookingDate: { type: Date, default: Date.now },

    status: {
      type: String,
      enum: ["PENDING", "CONFIRMED", "IN_PROGRESS", "COMPLETED", "CANCELLED"],
      default: "PENDING",
    },

    payment: {
      type: String,
      enum: ["UNPAID", "PARTIAL", "PAID", "REFUNDED"],
      default: "UNPAID",
    },

    totalAmount: { type: Number, default: 0, min: 0 },

    orderCode: { type: String, default: null, trim: true },
    trackingCode: { type: String, default: null, trim: true },

    bookingActivities: { type: [bookingActivitySchema], default: [] },
    selectedServices: { type: [bookingServiceSchema], default: [] },
  },
  {
    timestamps: true,
    versionKey: false,
  },
);


const Booking = model("Booking", bookingSchema);

export default Booking;