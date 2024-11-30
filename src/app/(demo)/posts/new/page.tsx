"use client"

import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { ContentLayout } from "@/components/admin-panel/content-layout"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"

// Schema validasi untuk form
const postSchema = z.object({
  title: z.string().min(1, "Title is required"),
  content: z.string().min(1, "Content is required"),
  author: z.string().min(1, "Author is required"),
  status: z.enum(["draft", "published"]).default("draft"),
})

export default function NewPostPage() {
  // Inisialisasi useForm dengan resolver zod
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(postSchema),
  })

  // Fungsi untuk menangani submit form
  const onSubmit = (data: any) => {
    console.log("New post created", data)
    // Logika untuk menyimpan data atau mengirim ke backend
  }

  return (
    <ContentLayout title="Create New Post">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* Title Field */}
        <div>
          <Label htmlFor="title">Title</Label>
          <Input {...register("title")} id="title" placeholder="Post title" />
          {/* Cek apakah ada error dan render pesan kesalahan */}
          {errors.title && (
            <span className="text-red-500 text-sm">
              {/* Menampilkan pesan error */}
              {(errors.title as any)?.message || "Error"} 
            </span>
          )}
        </div>

        {/* Content Field */}
        <div>
          <Label htmlFor="content">Content</Label>
          <Textarea {...register("content")} id="content" placeholder="Post content" />
          {/* Cek apakah ada error dan render pesan kesalahan */}
          {errors.content && (
            <span className="text-red-500 text-sm">
              {/* Menampilkan pesan error */}
              {(errors.content as any)?.message || "Error"}
            </span>
          )}
        </div>

        {/* Author Field */}
        <div>
          <Label htmlFor="author">Author</Label>
          <Input {...register("author")} id="author" placeholder="Author name" />
          {/* Cek apakah ada error dan render pesan kesalahan */}
          {errors.author && (
            <span className="text-red-500 text-sm">
              {/* Menampilkan pesan error */}
              {(errors.author as any)?.message || "Error"}
            </span>
          )}
        </div>

        {/* Status Field */}
        <div>
          <Label htmlFor="status">Status</Label>
          <select {...register("status")} id="status" className="w-full">
            <option value="draft">Draft</option>
            <option value="published">Published</option>
          </select>
        </div>

        {/* Submit Button */}
        <Button type="submit">Submit</Button>
      </form>
    </ContentLayout>
  )
}
