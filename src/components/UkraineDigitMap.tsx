import React from 'react';

const digitPath =
  "M100,100 L140,110 L160,180 L180,220 L250,230 L270,190 L300,210 L310,250 L330,260 L350,230 L370,200 L400,210 L420,180 L410,140 L390,120 L370,110 L340,90 L320,80 L290,90 L260,100 Z"; // 伪乌克兰地图轮廓

export default function UkraineDigitMap() {
  const digits = [];
  for (let i = 0; i < 140; i++) {
    const angle = (i / 140) * 2 * Math.PI;
    const x = 230 + 120 * Math.cos(angle) + Math.random() * 10;
    const y = 170 + 70 * Math.sin(angle) + Math.random() * 10;
    const digit = Math.floor(Math.random() * 10);
    digits.push(
      <text
        key={i}
        x={x}
        y={y}
        fontSize="18"
        fill="#00d1ff"
        opacity={0.8 - Math.random() * 0.3}
        fontWeight="bold"
        style={{ textShadow: '0 0 4px #00d1ff, 0 0 8px #1e2a45' }}
      >
        {digit}
      </text>
    );
  }

  return (
    <svg
      width={460}
      height={340}
      viewBox="0 0 460 340"
      className="drop-shadow-2xl"
      style={{ filter: 'blur(0.5px)' }}
    >
      {/* 地图轮廓线 */}
      <path
        d={digitPath}
        stroke="#00FFF7"
        strokeWidth={6}
        fill="none"
        style={{
          filter: 'drop-shadow(0px 0px 12px #00FFF7)'
        }}
      />
      {/* 数字点阵 */}
      {digits}
    </svg>
  );
}