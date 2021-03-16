import mongoose from 'mongoose';

const farmerSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      default: 'Local Producer',
    },
    city: {
      type: String,
      required: true,
      default: 'Amsterdam',
    },
    address: {
      type: String,
      required: false,
    },
    image: {
      type: String,
      required: true,
      default: 'sampleFarm.jpg',
    },
    description: {
      type: String,
      required: true,
      default: 'sample description',
    },
  },
  {
    timestamps: true,
  }
);
const Farmer = mongoose.model('Farmer', farmerSchema);
export default Farmer;
