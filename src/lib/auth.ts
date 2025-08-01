import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs'
import { supabaseAdmin } from './supabase'

const JWT_SECRET = process.env.JWT_SECRET!
const JWT_EXPIRES_IN = process.env.JWT_EXPIRES_IN || '7d'

export interface User {
  id: string
  email: string
  firstName: string
  lastName: string
  phone?: string
  emailVerified: boolean
  createdAt: string
  lastLogin?: string
}

export interface JWTPayload {
  userId: string
  email: string
  iat: number
  exp: number
}

// Hash password
export async function hashPassword(password: string): Promise<string> {
  const saltRounds = 12
  return bcrypt.hash(password, saltRounds)
}

// Verify password
export async function verifyPassword(password: string, hashedPassword: string): Promise<boolean> {
  return bcrypt.compare(password, hashedPassword)
}

// Generate JWT token
export function generateToken(userId: string, email: string): string {
  return jwt.sign(
    { userId, email },
    JWT_SECRET,
    { expiresIn: JWT_EXPIRES_IN }
  )
}

// Verify JWT token
export function verifyToken(token: string): JWTPayload | null {
  try {
    return jwt.verify(token, JWT_SECRET) as JWTPayload
  } catch (error) {
    return null
  }
}

// Create user in database
export async function createUser(userData: {
  email: string
  password: string
  firstName: string
  lastName: string
  phone?: string
}): Promise<User> {
  const { email, password, firstName, lastName, phone } = userData
  
  // Hash password
  const passwordHash = await hashPassword(password)
  
  // Insert user into database
  const { data, error } = await supabaseAdmin
    .from('users')
    .insert({
      email: email.toLowerCase(),
      password_hash: passwordHash,
      first_name: firstName,
      last_name: lastName,
      phone: phone || null,
      email_verified: false
    })
    .select()
    .single()

  if (error) {
    throw new Error(error.message)
  }

  return {
    id: data.id,
    email: data.email,
    firstName: data.first_name,
    lastName: data.last_name,
    phone: data.phone,
    emailVerified: data.email_verified,
    createdAt: data.created_at,
    lastLogin: data.last_login
  }
}

// Get user by email
export async function getUserByEmail(email: string): Promise<User | null> {
  const { data, error } = await supabaseAdmin
    .from('users')
    .select('*')
    .eq('email', email.toLowerCase())
    .single()

  if (error || !data) {
    return null
  }

  return {
    id: data.id,
    email: data.email,
    firstName: data.first_name,
    lastName: data.last_name,
    phone: data.phone,
    emailVerified: data.email_verified,
    createdAt: data.created_at,
    lastLogin: data.last_login
  }
}

// Get user by ID
export async function getUserById(userId: string): Promise<User | null> {
  const { data, error } = await supabaseAdmin
    .from('users')
    .select('*')
    .eq('id', userId)
    .single()

  if (error || !data) {
    return null
  }

  return {
    id: data.id,
    email: data.email,
    firstName: data.first_name,
    lastName: data.last_name,
    phone: data.phone,
    emailVerified: data.email_verified,
    createdAt: data.created_at,
    lastLogin: data.last_login
  }
}

// Update user last login
export async function updateLastLogin(userId: string): Promise<void> {
  await supabaseAdmin
    .from('users')
    .update({ 
      last_login: new Date().toISOString(),
      updated_at: new Date().toISOString()
    })
    .eq('id', userId)
}

// Authenticate user
export async function authenticateUser(email: string, password: string): Promise<{ user: User; token: string } | null> {
  // Get user from database
  const { data, error } = await supabaseAdmin
    .from('users')
    .select('*')
    .eq('email', email.toLowerCase())
    .single()

  if (error || !data) {
    return null
  }

  // Verify password
  const isValidPassword = await verifyPassword(password, data.password_hash)
  if (!isValidPassword) {
    return null
  }

  // Update last login
  await updateLastLogin(data.id)

  // Generate token
  const token = generateToken(data.id, data.email)

  const user: User = {
    id: data.id,
    email: data.email,
    firstName: data.first_name,
    lastName: data.last_name,
    phone: data.phone,
    emailVerified: data.email_verified,
    createdAt: data.created_at,
    lastLogin: new Date().toISOString()
  }

  return { user, token }
}