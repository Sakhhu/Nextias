import React, { useState, useEffect } from 'react';
import { useTheme } from '../../context/ThemeContext';

const ProgressChart = ({ 
  title, 
  data = [], 
  type = 'line', 
  color = 'blue',
  height = 200 
}) => {
  const { darkMode } = useTheme();
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    // Generate sample data if not provided
    if (data.length === 0) {
      const sampleData = [
        { label: 'Week 1', value: 65 },
        { label: 'Week 2', value: 72 },
        { label: 'Week 3', value: 68 },
        { label: 'Week 4', value: 85 },
        { label: 'Week 5', value: 90 },
        { label: 'Week 6', value: 88 },
        { label: 'Week 7', value: 92 },
        { label: 'Week 8', value: 95 }
      ];
      setChartData(sampleData);
    } else {
      setChartData(data);
    }
  }, [data]);

  const maxValue = Math.max(...chartData.map(d => d.value), 100);
  const minValue = 0;

  const colorClasses = {
    blue: 'rgb(59, 130, 246)',
    green: 'rgb(34, 197, 94)',
    yellow: 'rgb(234, 179, 8)',
    red: 'rgb(239, 68, 68)',
    purple: 'rgb(168, 85, 247)',
    indigo: 'rgb(99, 102, 241)'
  };

  const bgColorClasses = {
    blue: 'rgba(59, 130, 246, 0.1)',
    green: 'rgba(34, 197, 94, 0.1)',
    yellow: 'rgba(234, 179, 8, 0.1)',
    red: 'rgba(239, 68, 68, 0.1)',
    purple: 'rgba(168, 85, 247, 0.1)',
    indigo: 'rgba(99, 102, 241, 0.1)'
  };

  if (chartData.length === 0) {
    return (
      <div className={`p-6 rounded-xl ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-md animate-pulse`}>
        <div className="h-48 bg-gray-300 rounded"></div>
      </div>
    );
  }

  return (
    <div className={`p-6 rounded-xl ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-md`}>
      <h3 className={`text-lg font-semibold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
        {title}
      </h3>
      
      <div className="relative" style={{ height: `${height}px` }}>
        {/* Y-axis labels */}
        <div className="absolute left-0 top-0 bottom-0 w-8 flex flex-col justify-between text-xs text-gray-500">
          <span>100%</span>
          <span>75%</span>
          <span>50%</span>
          <span>25%</span>
          <span>0%</span>
        </div>

        {/* Chart area */}
        <div className="ml-10 h-full relative">
          {/* Grid lines */}
          <div className="absolute inset-0 flex flex-col justify-between">
            {[0, 1, 2, 3, 4].map((i) => (
              <div 
                key={i} 
                className={`border-b ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}
              />
            ))}
          </div>

          {/* Chart content */}
          <div className="relative h-full">
            {type === 'line' ? (
              <svg className="w-full h-full" viewBox="0 0 400 200">
                {/* Area fill */}
                <defs>
                  <linearGradient id={`gradient-${color}`} x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor={colorClasses[color]} stopOpacity="0.3" />
                    <stop offset="100%" stopColor={colorClasses[color]} stopOpacity="0" />
                  </linearGradient>
                </defs>
                
                {/* Area */}
                <path
                  d={`M ${chartData.map((d, i) => `${(i * 400) / (chartData.length - 1)},${200 - (d.value / maxValue) * 200}`).join(' L ')} L 400,200 L 0,200 Z`}
                  fill={`url(#gradient-${color})`}
                />
                
                {/* Line */}
                <path
                  d={`M ${chartData.map((d, i) => `${(i * 400) / (chartData.length - 1)},${200 - (d.value / maxValue) * 200}`).join(' L ')}`}
                  fill="none"
                  stroke={colorClasses[color]}
                  strokeWidth="2"
                />
                
                {/* Points */}
                {chartData.map((d, i) => (
                  <circle
                    key={i}
                    cx={(i * 400) / (chartData.length - 1)}
                    cy={200 - (d.value / maxValue) * 200}
                    r="4"
                    fill={colorClasses[color]}
                    className="hover:r-6 transition-all cursor-pointer"
                  />
                ))}
              </svg>
            ) : (
              <div className="flex items-end justify-between h-full px-2">
                {chartData.map((d, i) => (
                  <div
                    key={i}
                    className="flex-1 mx-1 relative group cursor-pointer"
                  >
                    <div
                      className="w-full transition-all duration-300 hover:opacity-80"
                      style={{
                        height: `${(d.value / maxValue) * 100}%`,
                        backgroundColor: colorClasses[color]
                      }}
                    />
                    <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-gray-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                      {d.value}%
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* X-axis labels */}
          <div className="absolute bottom-0 left-0 right-0 flex justify-between text-xs text-gray-500 mt-2">
            {chartData.map((d, i) => (
              <span key={i} className="text-center">
                {d.label}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Legend */}
      <div className="mt-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div 
            className="w-3 h-3 rounded-full"
            style={{ backgroundColor: colorClasses[color] }}
          />
          <span className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            Performance
          </span>
        </div>
        <span className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
          Last {chartData.length} periods
        </span>
      </div>
    </div>
  );
};

export default ProgressChart;
