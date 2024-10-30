import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

// Initialize Prisma client
const prisma = new PrismaClient();

export async function POST(req: NextRequest) {
  try {
    const { name, email, phone, preferredCity, preferredBudget } = await req.json();

    // Save to MongoDB using Prisma
    const registration = await prisma.registration.create({
      data: {
        name,
        email,
        phone,
        preferredCity,
        preferredBudget,
      },
    });

    return NextResponse.json({ message: "Registration successful", registration }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ message: "Failed to register", error: error instanceof Error ? error.message : "An unknown error occurred" }, { status: 500 });
  }
}
