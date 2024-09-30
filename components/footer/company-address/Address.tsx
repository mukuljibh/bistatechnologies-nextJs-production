import Link from "next/link"
export default function Address() {
    const emails = ["info@bistatechnologies.com", "support@bistatechnologies.com", "hr@bistatechnologies.com", "operations@bistatechnologies.com"]
    return (
        <section className="space-y-3 ">
            <div className="space-y-5">
                <Link href="/"><img src="/logo.png" width="224" height="56" alt="bista technologies logo" /></Link>
                <h1 className=" text-lg text-orange-500 font-semibold">Headquaters</h1>
            </div>

            <div className="text-gray-600 font-bold">
                <h1>PO Box 20018</h1>
                <h1>Dubai, UAE</h1>
            </div>
            <div className="text-sm text-gray-600 space-y-3">
                {emails.map((email, index) => {
                    return (
                        <h1 key={index} className="hover:text-sky-700 cursor-pointer">{email}</h1>
                    )
                })}
            </div>
        </section>
    )
}