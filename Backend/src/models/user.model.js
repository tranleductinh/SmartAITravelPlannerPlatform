import mongoose from "mongoose";

const { Schema, model } = mongoose;

const travelerProfileSchema = new Schema(
  {
    serviceTier: {
      type: String,
      default: null,
    },
    countryCount: {
      type: Number,
      default: null,
    },
    preferences: {
      type: Schema.Types.Mixed,
      default: null,
    },
  },
  { _id: false },
);

const guideProfileSchema = new Schema(
  {
    specialty: {
      type: String,
      default: null,
    },
    location: {
      type: String,
      default: null,
    },
    rating: {
      type: Number,
      default: null,
    },
    lastLoginAt: {
      type: Date,
      default: null,
    },
  },
  { _id: false },
);

const adminProfileSchema = new Schema(
  {
    accessLevel: {
      type: String,
      default: null,
    },
  },
  { _id: false },
);

const userSchema = new Schema(
  {
    providerId: {
      type: Schema.Types.ObjectId,
      ref: "Provider",
      default: null,
    },

    role: {
      type: String,
      enum: ["traveler", "provider", "guide", "admin"],
      required: true,
      default: "traveler",
    },

    fullName: {
      type: String,
      required: true,
      trim: true,
    },

    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },

    passwordHash: {
      type: String,
      default: null,
    },

    phoneNumber: {
      type: String,
      default: null,
    },

    avatarUrl: {
      type: String,
      default: null,
    },

    status: {
      type: String,
      enum: ["active", "inactive", "pending", "banned"],
      required: true,
      default: "pending",
    },

    travelerProfile: {
      type: travelerProfileSchema,
      default: null,
    },

    guideProfile: {
      type: guideProfileSchema,
      default: null,
    },

    adminProfile: {
      type: adminProfileSchema,
      default: null,
    },

    lastLoginAt: {
      type: Date,
      default: null,
    },
    refreshToken: {
      type: String,
      select: false,
    },
    authType: { type: String, enum: ["local", "google"], default: "local" },
    password: {
      type: String,
    },
    google_id: {
      type: String,
    },
  },
  {
    timestamps: { createdAt: "createdAt", updatedAt: "updatedAt" },
    versionKey: false,
  },
);

const User = model("User", userSchema);

export default User;
