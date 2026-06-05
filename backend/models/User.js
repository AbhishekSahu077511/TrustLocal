const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: { 
    type: String, 
    required: true 
  },
  email: { 
    type: String, 
    required: true, 
    unique: true,
    lowercase: true,
    trim: true
  },
  password: { 
    type: String, 
    required: true 
  },
  role: { 
    type: String, 
    enum: ['user', 'provider', 'admin'], 
    default: 'user' 
  },
  category: { 
    type: String, 
    default: '' 
  },
  image: { 
    type: String, 
    default: '' 
  },
  
  // --- NAYA: OTP & VERIFICATION LOGIC ---
  isVerified: { 
    type: Boolean, 
    default: false 
  }, 
  otp: {
    type: String,
    default: null
  },
  otpExpires: {
    type: Date,
    default: null
  },
  // --------------------------------------

  createdAt: { 
    type: Date, 
    default: Date.now 
  }
});

module.exports = mongoose.model('User', UserSchema);