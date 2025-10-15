import CodingGame from "@/pages/components/CodingGame";

export function CodingGameSection() {
  return (
    <section className="py-12 sm:py-16 md:py-20 px-4 relative overflow-hidden bg-[#a3bafa]/5">
      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Header Section */}
        <div className="text-center mb-8 sm:mb-12">
          {/* Headline */}
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 text-blue-600 px-2">
            🎮 Học lập trình qua trò chơi
          </h2>

          {/* Subheadline */}
          <p className="text-sm sm:text-base lg:text-lg text-muted-foreground max-w-2xl mx-auto px-3">
            Thử ngay game lập trình tương tác! Học cách sử dụng loops, điều kiện
            và biến thông qua việc điều khiển rocket đến ngôi sao.
          </p>
        </div>

        {/* Game Container */}
        <div>
          <CodingGame />
        </div>
      </div>
    </section>
  );
}
