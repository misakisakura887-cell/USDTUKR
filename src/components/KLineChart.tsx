'use client';

import { useEffect, useRef } from 'react';

interface ChartData {
  time: string;
  open: number;
  high: number;
  low: number;
  close: number;
  volume?: number;
}

interface KLineChartProps {
  data: ChartData[];
  width?: number;
  height?: number;
}

export function KLineChart({ data, width = 800, height = 400 }: KLineChartProps) {
  const chartContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!chartContainerRef.current || !data.length) return;

    // Create a simple candlestick visualization using Canvas
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = width;
    canvas.height = height;
    canvas.style.width = '100%';
    canvas.style.height = `${height}px`;
    
    // Clear existing content
    chartContainerRef.current.innerHTML = '';
    chartContainerRef.current.appendChild(canvas);

    // Draw background
    ctx.fillStyle = '#1f2937';
    ctx.fillRect(0, 0, width, height);

    // Calculate data range
    const prices = data.flatMap(d => [d.high, d.low]);
    const minPrice = Math.min(...prices);
    const maxPrice = Math.max(...prices);
    const priceRange = maxPrice - minPrice;
    const padding = priceRange * 0.1;

    const chartTop = 20;
    const chartBottom = height - 40;
    const chartHeight = chartBottom - chartTop;
    const chartLeft = 50;
    const chartRight = width - 50;
    const chartWidth = chartRight - chartLeft;

    const candleWidth = Math.max(2, chartWidth / data.length * 0.8);
    const candleSpacing = chartWidth / data.length;

    // Draw grid lines
    ctx.strokeStyle = '#374151';
    ctx.lineWidth = 1;
    
    // Horizontal grid lines
    for (let i = 0; i <= 5; i++) {
      const y = chartTop + (chartHeight / 5) * i;
      ctx.beginPath();
      ctx.moveTo(chartLeft, y);
      ctx.lineTo(chartRight, y);
      ctx.stroke();
      
      // Price labels
      const price = maxPrice + padding - ((maxPrice + padding - (minPrice - padding)) / 5) * i;
      ctx.fillStyle = '#d1d5db';
      ctx.font = '12px Inter';
      ctx.textAlign = 'right';
      ctx.fillText(price.toFixed(4), chartLeft - 10, y + 4);
    }

    // Vertical grid lines
    for (let i = 0; i <= 4; i++) {
      const x = chartLeft + (chartWidth / 4) * i;
      ctx.beginPath();
      ctx.moveTo(x, chartTop);
      ctx.lineTo(x, chartBottom);
      ctx.stroke();
    }

    // Draw candlesticks
    data.forEach((candle, index) => {
      const x = chartLeft + index * candleSpacing + candleSpacing / 2;
      
      const openY = chartBottom - ((candle.open - (minPrice - padding)) / (maxPrice + padding - (minPrice - padding))) * chartHeight;
      const closeY = chartBottom - ((candle.close - (minPrice - padding)) / (maxPrice + padding - (minPrice - padding))) * chartHeight;
      const highY = chartBottom - ((candle.high - (minPrice - padding)) / (maxPrice + padding - (minPrice - padding))) * chartHeight;
      const lowY = chartBottom - ((candle.low - (minPrice - padding)) / (maxPrice + padding - (minPrice - padding))) * chartHeight;

      const isGreen = candle.close > candle.open;
      
      // Draw wick
      ctx.strokeStyle = isGreen ? '#10b981' : '#ef4444';
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(x, highY);
      ctx.lineTo(x, lowY);
      ctx.stroke();

      // Draw body
      ctx.fillStyle = isGreen ? '#10b981' : '#ef4444';
      const bodyTop = Math.min(openY, closeY);
      const bodyHeight = Math.abs(closeY - openY);
      ctx.fillRect(x - candleWidth / 2, bodyTop, candleWidth, Math.max(bodyHeight, 1));
    });

    // Draw axes
    ctx.strokeStyle = '#4b5563';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(chartLeft, chartTop);
    ctx.lineTo(chartLeft, chartBottom);
    ctx.lineTo(chartRight, chartBottom);
    ctx.stroke();

    // Add title
    ctx.fillStyle = '#ffffff';
    ctx.font = 'bold 16px Inter';
    ctx.textAlign = 'left';
    ctx.fillText('UKR/USDT Price Chart', chartLeft, 15);

  }, [data, width, height]);

  return (
    <div className="w-full bg-gray-800 rounded-lg p-4">
      <div ref={chartContainerRef} className="w-full" style={{ height: `${height}px` }} />
    </div>
  );
}