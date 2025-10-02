import { ScrollSection } from "./ScrollSection";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { motion } from "framer-motion";

// Demo component showing scroll animations usage
export function ScrollDemo() {
  return (
    <div className="space-y-20">
      {/* Hero Section Demo */}
      <ScrollSection variant="parallax" intensity={0.3}>
        <div className="h-screen bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
          <motion.div
            className="text-center text-white space-y-6"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="text-6xl font-bold animate-text-wave">
              Hero Title
            </h1>
            <p className="text-xl">Parallax background with staggered text reveal</p>
          </motion.div>
        </div>
      </ScrollSection>

      {/* Stats Section Demo */}
      <ScrollSection variant="fade" delay={0.2}>
        <div className="py-20 bg-gray-50">
          <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
            <StatCounter endValue={1000} label="Students" />
            <StatCounter endValue={50} label="Courses" />
            <StatCounter endValue={95} label="Satisfaction" suffix="%" />
          </div>
        </div>
      </ScrollSection>

      {/* Programs Section Demo */}
      <ScrollSection variant="scale" direction="up">
        <div className="py-20">
          <div className="container mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12">Our Programs</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <ProgramCard
                title="Web Development"
                description="Learn modern web technologies"
                delay={0}
              />
              <ProgramCard
                title="Mobile Apps"
                description="Build iOS and Android apps"
                delay={0.1}
              />
              <ProgramCard
                title="Data Science"
                description="Master data analysis and ML"
                delay={0.2}
              />
            </div>
          </div>
        </div>
      </ScrollSection>
    </div>
  );
}

// Stat Counter Component
function StatCounter({ endValue, label, suffix = "" }: {
  endValue: number;
  label: string;
  suffix?: string;
}) {
  const { counter, ref } = useScrollAnimation({
    outputRange: [0, endValue]
  });

  return (
    <motion.div
      ref={ref}
      className="text-center p-8 bg-white rounded-lg shadow-lg"
      whileInView={{ scale: [0.8, 1.05, 1] }}
      transition={{ duration: 0.6 }}
    >
      <motion.div
        className="text-4xl font-bold text-blue-600 mb-2"
        style={{ rotate: counter }}
      >
        {Math.round(counter.get())}
        {suffix}
      </motion.div>
      <div className="text-gray-600">{label}</div>
    </motion.div>
  );
}

// Program Card Component
function ProgramCard({ title, description, delay }: {
  title: string;
  description: string;
  delay: number;
}) {
  return (
    <motion.div
      className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ y: -5 }}
    >
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
      <motion.button
        className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Learn More
      </motion.button>
    </motion.div>
  );
}