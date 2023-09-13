'use client'

import BreadCrumb from "@/components/breadcrumb/bread-crumb"
import { useRouter } from "next/navigation"

export default function GlobalError({
    error,
    reset,
}: {
    error: Error
    reset: () => void
}) {
    const router = useRouter()
    return (
        <div>
            <BreadCrumb name="Error" />
            <div className="container py-5">
                <div className="flex flex-col items-center justify-center gap-5 shadow p-5">
                    <h2 className="text-4xl">Oops. Đã xảy ra lỗi! </h2>
                    <button onClick={() => router.push('/')} className="text-4xl">Vui lòng thử lại</button>
                </div>
            </div>
        </div>
    )
}