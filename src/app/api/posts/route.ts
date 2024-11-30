// src/app/api/posts/route.ts

import { NextResponse } from "next/server"

export async function POST(req: Request) {
  try {
    const data = await req.json()
    console.log("Received new post:", data)

    // Biasanya, Anda akan menyimpan data ini ke database
    // Misalnya, Anda dapat memanggil fungsi simpan data ke database di sini

    return NextResponse.json({ message: "Post created successfully!" }, { status: 201 })
  } catch (error) {
    return NextResponse.json({ error: "Failed to create post" }, { status: 500 })
  }
}
