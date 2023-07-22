import prisma from "@/lib/prisma";
import { hash } from "bcryptjs";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { firstName, lastName, email, password } = (await req.json()) as {
      firstName: string;
      lastName: string;
      email: string;
      password: string;
    };

    const isUserExist = await prisma.user.findUnique({
      where: {
        email,
      },
    });

    if (isUserExist) {
      return new NextResponse(
        JSON.stringify({
          status: "error",
          message: "Email is already in use!",
        }),
        {
          status: 400,
        },
      );
    }

    const hashed_password = await hash(password, 12);

    const user = await prisma.user.create({
      data: {
        firstName,
        lastName,
        email: email.toLowerCase(),
        password: hashed_password,
      },
    });

    return NextResponse.json({
      user: {
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
      },
    });
  } catch (error: any) {
    return new NextResponse(
      JSON.stringify({
        status: "error",
        message: error.message,
      }),
      { status: 500 },
    );
  }
}
