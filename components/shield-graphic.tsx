import Image from "next/image"

export default function ShieldGraphic() {
  return (
    <div className="relative w-64 h-64">
      <Image
        src="/placeholder.svg?height=256&width=256"
        alt="Security Shield"
        width={256}
        height={256}
        className="w-full h-full"
      />

      {/* Left Circle with Asterisks */}
      <div className="absolute top-1/2 left-0 transform -translate-x-1/2 -translate-y-1/2">
        <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center">
          <div className="text-blue-500 font-bold text-2xl">
            <div className="grid grid-cols-2 gap-x-1 gap-y-0">
              <span>*</span>
              <span>*</span>
              <span>*</span>
              <span>*</span>
            </div>
          </div>
        </div>
      </div>

      {/* Center Circle with Checkmark */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div className="w-28 h-28 rounded-full bg-white border-4 border-black flex items-center justify-center">
          <Image
            src="/placeholder.svg?height=40&width=40"
            alt="Checkmark"
            width={40}
            height={40}
            className="w-10 h-10"
          />
        </div>
      </div>

      {/* Right Circle with Lock */}
      <div className="absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2">
        <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center">
          <div className="bg-blue-600 p-2 rounded">
            <Image src="/placeholder.svg?height=32&width=32" alt="Lock" width={32} height={32} className="w-8 h-8" />
          </div>
        </div>
      </div>

      {/* Connecting Lines */}
      <div className="absolute top-1/2 left-0 w-full h-0.5 bg-gray-700" />
    </div>
  )
}
