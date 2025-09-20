import { motion } from 'framer-motion';

const tags = [
  'IT', 'Agriculture', 'Energy', 'Manufacturing', 'Finance', 'Tourism', 'Transport',
  'Retail', 'Healthcare', 'Education', 'Real Estate', 'Telecom', 'Mining', 'Logistics',
  'Automotive', 'Food', 'Media', 'Construction'
];

export default function IndustryGlitchTags() {
  return (
    <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
      {tags.map((tag, i) => {
        const angle = (i / tags.length) * 2 * Math.PI;
        const x = 230 + 120 * Math.cos(angle) + Math.random() * 40;
        const y = 170 + 70 * Math.sin(angle) + Math.random() * 32;
        return (
          <motion.div
            key={tag}
            initial={{ opacity: 0, x: x - 230, y: y - 170, scale: 0.9 }}
            animate={{ opacity: 1, x: x - 230, y: y - 170, scale: 1 }}
            transition={{ delay: 0.5 + i * 0.05, duration: 1.2 }}
            className="absolute font-mono font-bold text-cyan-400 text-lg select-none"
            style={{
              left: x,
              top: y,
              textShadow: '0 0 8px #00fff7, 0 0 18px #212d4c'
            }}
          >
            <span className="glitch">{tag}</span>
            <style jsx>{`
              .glitch {
                position: relative;
                color: #00fff7;
                text-shadow:
                  1px 0 #0ff,
                  2px 1px #00d1ff,
                  -1px 0 #fff,
                  0 2px #0ff;
                animation: glitch 1.7s infinite linear alternate;
              }
              @keyframes glitch {
                0% { text-shadow: 0 0 8px #00fff7, 0 0 20px #212d4c; }
                20% { text-shadow: 2px 0 #fff, -2px 0 #00d1ff; }
                40% { text-shadow: -1px 1px #0ff, 2px 2px #fff; }
                60% { text-shadow: 2px 2px #00fff7, -2px -2px #212d4c; }
                80% { text-shadow: 0 2px #fff, 2px 0 #00fff7; }
                100% { text-shadow: 0 0 20px #00fff7, 0 0 32px #212d4c; }
              }
            `}</style>
          </motion.div>
        );
      })}
    </div>
  );
}