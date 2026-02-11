"use client"

import { useState } from "react"
import { Send, MessageSquare } from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

export default function FeedbackDialog() {
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setLoading(true)

    const formData = new FormData(e.currentTarget)

    // TODO: API / Directus руу илгээх
    await new Promise((r) => setTimeout(r, 1000))

    setLoading(false)
    setSuccess(true)
    e.currentTarget.reset()
  }

  return (
    <Dialog>
      {/* Trigger button */}
      <DialogTrigger asChild>
        <button className="inline-flex items-center text-sm gap-2 bg-white text-blue-600 border px-4 py-2 rounded-2xl hover:bg-blue-50 transition ">

          Санал хүсэлт
        </button>
      </DialogTrigger>

      {/* Dialog */}
      <DialogContent className="sm:max-w-[520px]">
        <DialogHeader>
          <DialogTitle>Санал, хүсэлт илгээх</DialogTitle>
        </DialogHeader>

        {success && (
          <div className="rounded-lg bg-green-50 text-green-700 px-4 py-3 text-sm mb-4">
            ✅ Таны санал амжилттай илгээгдлээ.
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Type */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Төрөл
            </label>
            <select
              name="type"
              required
              className="w-full rounded-lg border px-3 py-2"
            >
              <option value="">Сонгох</option>
              <option value="suggestion">Санал</option>
              <option value="request">Хүсэлт</option>
              <option value="complaint">Гомдол</option>
              <option value="thanks">Талархал</option>
            </select>
          </div>

          {/* Name */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Нэр
            </label>
            <input
              name="name"
              required
              placeholder="Таны нэр"
              className="w-full rounded-lg border px-3 py-2"
            />
          </div>

          {/* Phone */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Утас
            </label>
            <input
              name="phone"
              placeholder="9911xxxx"
              className="w-full rounded-lg border px-3 py-2"
            />
          </div>

          {/* Message */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Дэлгэрэнгүй
            </label>
            <textarea
              name="message"
              required
              rows={4}
              className="w-full rounded-2xl border border-gray-900 p-3 focus:border-blue-600 focus:ring focus:ring-blue-100 transition"
              placeholder="Санал, хүсэлтээ бичнэ үү..."
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={loading}
            className="w-full inline-flex items-center justify-center gap-2 bg-blue-600 text-white px-4 py-2.5 rounded-xl hover:bg-blue-700 transition disabled:opacity-60"
          >
            <Send className="w-4 h-4" />
            {loading ? "Илгээж байна..." : "Илгээх"}
          </button>
        </form>
      </DialogContent>
    </Dialog>
  )
}
