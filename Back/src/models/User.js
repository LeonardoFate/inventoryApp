
import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, 'Por favor, agrega un nombre de usuario'],
      unique: true,
      trim: true,
    },
    email: {
      type: String,
      required: [true, 'Por favor, agrega un correo electrónico'],
      unique: true,
      lowercase: true,
      match: [/.+\@.+\..+/, 'Por favor, agrega un correo electrónico válido'],
    },
    password: {
      type: String,
      required: [true, 'Por favor, agrega una contraseña'],
      minlength: 6,
      select: false, // No retorna la contraseña por defecto
    },
    role: {
      type: String,
      enum: ['user', 'admin'],
      default: 'user',
    },
  },
  {
    timestamps: true,
  }
);

// Encripta la contraseña antes de guardar
userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) {
    next();
  }

  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

// Compara la contraseña ingresada con la almacenada
userSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

const User = mongoose.model('User', userSchema);
export default User;
