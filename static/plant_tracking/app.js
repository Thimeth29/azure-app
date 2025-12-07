// Simple data model and UI logic

const STAGES = [
  { id: 1, name: 'Seed', daysMin: 0, daysMax: 3, translationKey: 'plant.stageSeed' },
  { id: 2, name: 'Seedling', daysMin: 4, daysMax: 10, translationKey: 'plant.stageSeedling' },
  { id: 3, name: 'Small plant', daysMin: 11, daysMax: 18, translationKey: 'plant.stageSmallPlant' },
  { id: 4, name: 'Small plant grown', daysMin: 19, daysMax: 30, translationKey: 'plant.stageSmallPlantGrown' },
  { id: 5, name: 'Grown', daysMin: 31, daysMax: 55, translationKey: 'plant.stageGrown' },
  { id: 6, name: 'Fully grown with flowers', daysMin: 56, daysMax: 365, translationKey: 'plant.stageFullyGrown' },
];

// Helper function to translate stage names
function translateStageName(stage) {
  if (!stage || !window.getTranslation) return stage?.name || '—';
  const translated = window.getTranslation(stage.translationKey);
  return translated || stage.name;
}

// Plant category image mappings
const CATEGORY_IMAGES = {
  'grains-legumes': [
    'seed.png',
    'seedling.png',
    'small-plant.png',
    'small-plant-grown.png',
    'grown.png',
    'fully-grown-flower.png'
  ],
  'fruity-vegetables': [
    'Fruity Vegetables/F 1.png',
    'Fruity Vegetables/F 2.png',
    'Fruity Vegetables/F 3.png',
    'Fruity Vegetables/F 4.png',
    'Fruity Vegetables/F 5.png',
    'Fruity Vegetables/F 6.png'
  ],
  'leafy-stem': [
    'Leafy & Stem Vegetables/L 1.png',
    'Leafy & Stem Vegetables/L 2.png',
    'Leafy & Stem Vegetables/L 3.png',
    'Leafy & Stem Vegetables/L 4.png',
    'Leafy & Stem Vegetables/L 5.png',
    'Leafy & Stem Vegetables/L 6.png'
  ],
  'root-tuberous': [
    'Root & Tuberous Vegetables/R 1.png',
    'Root & Tuberous Vegetables/R 2.png',
    'Root & Tuberous Vegetables/R 3.png',
    'Root & Tuberous Vegetables/R 4.png',
    'Root & Tuberous Vegetables/R 5.png',
    'Root & Tuberous Vegetables/R 6.png'
  ]
};

const els = {
  plantedDate: document.getElementById('planted-date'),
  location: document.getElementById('location'),
  range: document.getElementById('stage-range'),
  stageName: document.getElementById('stage-name'),
  ageDays: document.getElementById('age-days'),
  nextMilestone: document.getElementById('next-milestone'),
  treatments: document.getElementById('treatments'),
  glance: document.getElementById('glance'),
  weather: {
    temp: document.getElementById('w-temp'),
    humidity: document.getElementById('w-humidity'),
    clouds: document.getElementById('w-clouds'),
    desc: document.getElementById('w-desc'),
  },
  images: Array.from({length:6}).map((_,i)=>document.getElementById(`stage-${i+1}`)),
  autoStageBtn: document.getElementById('auto-stage'),
  refreshWeatherBtn: document.getElementById('refresh-weather'),
  history: document.getElementById('history'),
  categoryRadios: document.querySelectorAll('input[name="plant-category"]'),
  // To‑Do
  todoForm: document.getElementById('todo-form'),
  todoInput: document.getElementById('todo-input'),
  todoList: document.getElementById('todo-list'),
  plantName: document.getElementById('plant-name'),
  chartCanvas: document.getElementById('growth-weather-chart'),
  analyticsChartCanvas: document.getElementById('analytics-chart'),
  // Mini widget
  mini: {
    name: document.getElementById('mini-plant-name'),
    age: document.getElementById('mini-age-days'),
    stageName: document.getElementById('mini-stage-name'),
    next: document.getElementById('mini-next-milestone'),
    temp: document.getElementById('mini-temp'),
    humidity: document.getElementById('mini-humidity'),
    images: Array.from({length:6}).map((_,i)=>document.getElementById(`mini-stage-${i+1}`)),
    treatments: document.getElementById('mini-treatments'),
    todoForm: document.getElementById('mini-todo-form'),
    todoInput: document.getElementById('mini-todo-input'),
    todoList: document.getElementById('mini-todo-list'),
  }
};

// Seed default planted date as today for demo
const todayISO = new Date().toISOString().slice(0,10);

// Plant tracking state sync keys
const PLANT_STATE_KEY = 'plant_tracker_state';

// Save plant tracking state to localStorage
function savePlantState(){
  try {
    const state = {
      plantedDate: els.plantedDate?.value || todayISO,
      stage: Number(els.range?.value) || 1,
      location: els.location?.value || '',
      timestamp: Date.now()
    };
    localStorage.setItem(PLANT_STATE_KEY, JSON.stringify(state));
  } catch(e){
    console.error('Error saving plant state:', e);
  }
}

// Load plant tracking state from localStorage
function loadPlantState(){
  try {
    const saved = localStorage.getItem(PLANT_STATE_KEY);
    if(saved){
      const state = JSON.parse(saved);
      // Only use saved state if it's recent (within 30 days)
      const thirtyDaysAgo = Date.now() - (30 * 24 * 60 * 60 * 1000);
      if(state.timestamp && state.timestamp > thirtyDaysAgo){
        return state;
      }
    }
  } catch(e){
    console.error('Error loading plant state:', e);
  }
  return null;
}

// Sync widget data from localStorage (for when widget is on other pages)
function syncWidgetFromStorage(){
  if(!els.mini) return;
  
  // Load plant state
  const state = loadPlantState();
  let stageToSet = 1; // Default to stage 1
  
  // Load saved category preference
  const savedCategory = localStorage.getItem('plant_category') || 'grains-legumes';
  const category = CATEGORY_IMAGES[savedCategory] ? savedCategory : 'grains-legumes';
  const imagePaths = CATEGORY_IMAGES[category];
  const basePath = '/static/plant_tracking/assets/';
  
  // Helper to encode path (handles spaces in filenames)
  function encodePath(path){
    return path.split('/').map(part => encodeURIComponent(part)).join('/');
  }
  
  if(state){
    const age = daysBetween(state.plantedDate);
    stageToSet = state.stage || 1;
    
    // Update age
    if(els.mini.age){ 
      els.mini.age.textContent = `${age} day${age===1?'':'s'}`; 
    }
    
    // Update stage
    const stage = STAGES.find(s=>s.id === state.stage);
    if(stage && els.mini.stageName){ 
      els.mini.stageName.textContent = stage.name || '—'; 
    }
    
    // Update next milestone
    const next = STAGES.find(s=>s.id === (stage?.id||1)+1);
    if(els.mini.next){ 
      els.mini.next.textContent = next ? `${next.name} (~${next.daysMin}d)` : 'Maturity'; 
    }
  } else {
    // If no state, try to update from current form values
    if(els.plantedDate?.value && els.range?.value) {
      const age = daysBetween(els.plantedDate.value);
      stageToSet = Number(els.range.value) || 1;
      if(els.mini.age){ 
        els.mini.age.textContent = `${age} day${age===1?'':'s'}`; 
      }
      const currentStage = Number(els.range.value) || 1;
      const stage = STAGES.find(s=>s.id === currentStage);
      if(stage && els.mini.stageName){ 
        els.mini.stageName.textContent = stage.name || '—'; 
      }
      const next = STAGES.find(s=>s.id === (stage?.id||1)+1);
      if(els.mini.next){ 
        els.mini.next.textContent = next ? `${next.name} (~${next.daysMin}d)` : 'Maturity'; 
      }
    }
  }
  
  // Update the mini widget stage images with correct category images and show the correct stage
  if(els.mini?.images?.length && imagePaths){
    els.mini.images.forEach((img, idx)=>{
      const target = idx+1 === stageToSet;
      if(img){
        // Update image source to match category
        const newSrc = basePath + encodePath(imagePaths[idx]);
        if(img.src !== newSrc){
          img.src = newSrc;
        }
        
        // Remove all category classes
        img.classList.remove('category-fruity', 'category-leafy', 'category-root', 'category-grains');
        // Add correct category class for styling
        if(category === 'fruity-vegetables') img.classList.add('category-fruity');
        else if(category === 'leafy-stem') img.classList.add('category-leafy');
        else if(category === 'root-tuberous') img.classList.add('category-root');
        else if(category === 'grains-legumes') img.classList.add('category-grains');
        
        // Remove all active/fade-out classes first
        img.classList.remove('active', 'fade-out');
        // Add appropriate class for stage visibility
        if(target){
          img.classList.add('active');
        } else {
          img.classList.add('fade-out');
        }
      }
    });
  }
  
  // Load weather from localStorage
  try {
    const lastWeather = localStorage.getItem('last_weather_data');
    if(lastWeather){
      const weather = JSON.parse(lastWeather);
      // Check if data is recent (within last hour)
      const oneHourAgo = Date.now() - (60 * 60 * 1000);
      if(weather.timestamp && weather.timestamp > oneHourAgo){
        if(els.mini.temp){ 
          els.mini.temp.textContent = typeof weather.temp==='number' ? `${Math.round(weather.temp)}°C` : '—'; 
        }
        if(els.mini.humidity){ 
          els.mini.humidity.textContent = typeof weather.humidity==='number' ? `${weather.humidity}%` : '—'; 
        }
      } else {
        // Data is old, show dashes
        if(els.mini.temp){ els.mini.temp.textContent = '—'; }
        if(els.mini.humidity){ els.mini.humidity.textContent = '—'; }
      }
    } else {
      // No weather data, show dashes
      if(els.mini.temp){ els.mini.temp.textContent = '—'; }
      if(els.mini.humidity){ els.mini.humidity.textContent = '—'; }
    }
  } catch(e){
    console.error('Error loading weather for widget:', e);
    if(els.mini.temp){ els.mini.temp.textContent = '—'; }
    if(els.mini.humidity){ els.mini.humidity.textContent = '—'; }
  }
}

// Global function to update mini widget from any page
window.updateMiniWidget = function() {
  syncWidgetFromStorage();
  // Also call updateSummary if on plant tracking page
  if(typeof updateSummary === 'function') {
    updateSummary();
  }
};

// Update mini widget when page becomes visible (user switches back to tab)
document.addEventListener('visibilitychange', () => {
  if(!document.hidden) {
    syncWidgetFromStorage();
    if(typeof updateSummary === 'function') {
      updateSummary();
    }
  }
});

if(!els.plantedDate?.value){ 
  const savedState = loadPlantState();
  els.plantedDate.value = savedState?.plantedDate || todayISO;
}

// Chart and data tracking
let growthWeatherChart = null;
let analyticsChart = null;
const CHART_DATA_KEY = 'plant_tracker_chart_data';
let chartData = {
  dates: [],
  growthStages: [],
  temperatures: [],
  humidity: []
};

// Load chart data from localStorage
function loadChartData(){
  try {
    const saved = localStorage.getItem(CHART_DATA_KEY);
    if(saved){
      chartData = JSON.parse(saved);
    }
  } catch(e){
    console.error('Error loading chart data:', e);
  }
}

// Save chart data to localStorage
function saveChartData(){
  try {
    localStorage.setItem(CHART_DATA_KEY, JSON.stringify(chartData));
  } catch(e){
    console.error('Error saving chart data:', e);
  }
}

// Add data point to chart
function addChartDataPoint(stage, temp, humidity){
  const now = new Date();
  const dateStr = now.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
  
  // Keep only last 14 days of data
  if(chartData.dates.length >= 14){
    chartData.dates.shift();
    chartData.growthStages.shift();
    chartData.temperatures.shift();
    chartData.humidity.shift();
  }
  
  chartData.dates.push(dateStr);
  chartData.growthStages.push(stage);
  chartData.temperatures.push(temp !== null && temp !== undefined ? Math.round(temp) : null);
  chartData.humidity.push(humidity !== null && humidity !== undefined ? Math.round(humidity) : null);
  
  saveChartData();
  updateChart();
  updateAnalyticsChart();
}

// Initialize and update chart
function initChart(){
  if(!els.chartCanvas || typeof Chart === 'undefined') return;
  
  const ctx = els.chartCanvas.getContext('2d');
  
  if(growthWeatherChart){
    growthWeatherChart.destroy();
  }
  
  growthWeatherChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: chartData.dates.length > 0 ? chartData.dates : ['Today'],
      datasets: [
        {
          label: 'Growth Stage',
          data: chartData.growthStages.length > 0 ? chartData.growthStages : [1],
          borderColor: 'rgb(58, 167, 109)',
          backgroundColor: 'rgba(58, 167, 109, 0.1)',
          yAxisID: 'y',
          tension: 0.4,
          fill: true
        },
        {
          label: 'Temperature (°C)',
          data: chartData.temperatures.length > 0 ? chartData.temperatures : [null],
          borderColor: 'rgb(255, 99, 132)',
          backgroundColor: 'rgba(255, 99, 132, 0.1)',
          yAxisID: 'y1',
          tension: 0.4,
          fill: false
        },
        {
          label: 'Humidity (%)',
          data: chartData.humidity.length > 0 ? chartData.humidity : [null],
          borderColor: 'rgb(54, 162, 235)',
          backgroundColor: 'rgba(54, 162, 235, 0.1)',
          yAxisID: 'y1',
          tension: 0.4,
          fill: false
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      interaction: {
        mode: 'index',
        intersect: false,
      },
      plugins: {
        legend: {
          display: true,
          position: 'top',
          labels: {
            color: '#2d5a3d',
            font: {
              size: 12
            }
          }
        },
        tooltip: {
          backgroundColor: 'rgba(0, 0, 0, 0.8)',
          titleColor: '#fff',
          bodyColor: '#fff',
          borderColor: 'rgba(255, 255, 255, 0.1)',
          borderWidth: 1
        }
      },
      scales: {
        x: {
          display: true,
          title: {
            display: true,
            text: 'Date',
            color: '#2d5a3d'
          },
          ticks: {
            color: '#2d5a3d',
            maxRotation: 45,
            minRotation: 45
          },
          grid: {
            color: 'rgba(45, 90, 61, 0.1)'
          }
        },
        y: {
          type: 'linear',
          display: true,
          position: 'left',
          title: {
            display: true,
            text: 'Growth Stage',
            color: '#2d5a3d'
          },
          ticks: {
            color: '#2d5a3d',
            stepSize: 1,
            callback: function(value){
              const stageNames = {
                1: 'Seed',
                2: 'Seedling',
                3: 'Small',
                4: 'Growing',
                5: 'Grown',
                6: 'Flower'
              };
              return stageNames[value] || value;
            }
          },
          grid: {
            color: 'rgba(45, 90, 61, 0.1)'
          },
          min: 1,
          max: 6
        },
        y1: {
          type: 'linear',
          display: true,
          position: 'right',
          title: {
            display: true,
            text: 'Temperature / Humidity',
            color: '#2d5a3d'
          },
          ticks: {
            color: '#2d5a3d'
          },
          grid: {
            drawOnChartArea: false,
          },
        }
      }
    }
  });
}

function updateChart(){
  if(!growthWeatherChart) return;
  
  growthWeatherChart.data.labels = chartData.dates.length > 0 ? chartData.dates : ['Today'];
  growthWeatherChart.data.datasets[0].data = chartData.growthStages.length > 0 ? chartData.growthStages : [1];
  growthWeatherChart.data.datasets[1].data = chartData.temperatures.length > 0 ? chartData.temperatures : [null];
  growthWeatherChart.data.datasets[2].data = chartData.humidity.length > 0 ? chartData.humidity : [null];
  growthWeatherChart.update('none');
  
  // Update analytics chart when main chart updates
  updateAnalyticsChart();
}

// Simple linear regression for forecasting
function linearRegression(x, y) {
  const n = x.length;
  if (n < 2) return { slope: 0, intercept: y[0] || 0 };
  
  let sumX = 0, sumY = 0, sumXY = 0, sumXX = 0;
  for (let i = 0; i < n; i++) {
    sumX += x[i];
    sumY += y[i];
    sumXY += x[i] * y[i];
    sumXX += x[i] * x[i];
  }
  
  const slope = (n * sumXY - sumX * sumY) / (n * sumXX - sumX * sumX);
  const intercept = (sumY - slope * sumX) / n;
  
  return { slope, intercept };
}

// Forecast future values
function forecastGrowth(data, periods = 7) {
  if (data.length < 2) {
    // Not enough data, return current value
    const lastValue = data.length > 0 ? data[data.length - 1] : 1;
    return Array(periods).fill(lastValue);
  }
  
  const x = data.map((_, i) => i);
  const y = data;
  const regression = linearRegression(x, y);
  
  const forecasts = [];
  for (let i = 0; i < periods; i++) {
    const futureX = data.length + i;
    let forecast = regression.slope * futureX + regression.intercept;
    // Constrain growth stage between 1 and 6
    if (y[0] !== undefined && typeof y[0] === 'number') {
      forecast = Math.max(1, Math.min(6, Math.round(forecast * 10) / 10));
    }
    forecasts.push(forecast);
  }
  
  return forecasts;
}

// Initialize analytics chart with forecasting
function initAnalyticsChart(){
  if(!els.analyticsChartCanvas || typeof Chart === 'undefined') return;
  
  const ctx = els.analyticsChartCanvas.getContext('2d');
  
  if(analyticsChart){
    analyticsChart.destroy();
  }
  
  // Prepare data
  const historicalDates = chartData.dates.length > 0 ? chartData.dates : ['Today'];
  const historicalStages = chartData.growthStages.length > 0 ? chartData.growthStages : [1];
  const historicalTemps = chartData.temperatures.length > 0 ? chartData.temperatures : [null];
  const historicalHumidity = chartData.humidity.length > 0 ? chartData.humidity : [null];
  
  // Generate forecasts (7 days ahead)
  const forecastPeriods = 7;
  const forecastStages = forecastGrowth(historicalStages.filter(s => s !== null && s !== undefined), forecastPeriods);
  const forecastTemps = forecastGrowth(historicalTemps.filter(t => t !== null && t !== undefined), forecastPeriods);
  const forecastHumidity = forecastGrowth(historicalHumidity.filter(h => h !== null && h !== undefined), forecastPeriods);
  
  // Create forecast dates
  const forecastDates = [];
  const lastDate = historicalDates[historicalDates.length - 1] || 'Today';
  for (let i = 1; i <= forecastPeriods; i++) {
    const date = new Date();
    date.setDate(date.getDate() + i);
    forecastDates.push(date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' }));
  }
  
  // Combine historical and forecast data
  const allDates = [...historicalDates, ...forecastDates];
  const allStages = [...historicalStages, ...forecastStages];
  const allTemps = [...historicalTemps, ...forecastTemps];
  const allHumidity = [...historicalHumidity, ...forecastHumidity];
  
  // Find the split point for styling
  const splitIndex = historicalDates.length;
  
  analyticsChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: allDates,
      datasets: [
        {
          label: 'Growth Stage (Historical)',
          data: allStages.slice(0, splitIndex),
          borderColor: 'rgb(58, 167, 109)',
          backgroundColor: 'rgba(58, 167, 109, 0.1)',
          yAxisID: 'y',
          tension: 0.4,
          fill: true,
          borderWidth: 2
        },
        {
          label: 'Growth Stage (Forecast)',
          data: [...Array(splitIndex).fill(null), ...allStages.slice(splitIndex)],
          borderColor: 'rgb(58, 167, 109)',
          backgroundColor: 'rgba(58, 167, 109, 0.1)',
          yAxisID: 'y',
          tension: 0.4,
          fill: false,
          borderWidth: 2,
          borderDash: [5, 5],
          pointStyle: 'dash'
        },
        {
          label: 'Temperature (°C) (Historical)',
          data: allTemps.slice(0, splitIndex),
          borderColor: 'rgb(255, 99, 132)',
          backgroundColor: 'rgba(255, 99, 132, 0.1)',
          yAxisID: 'y1',
          tension: 0.4,
          fill: false,
          borderWidth: 2
        },
        {
          label: 'Temperature (°C) (Forecast)',
          data: [...Array(splitIndex).fill(null), ...allTemps.slice(splitIndex)],
          borderColor: 'rgb(255, 99, 132)',
          backgroundColor: 'rgba(255, 99, 132, 0.1)',
          yAxisID: 'y1',
          tension: 0.4,
          fill: false,
          borderWidth: 2,
          borderDash: [5, 5],
          pointStyle: 'dash'
        },
        {
          label: 'Humidity (%) (Historical)',
          data: allHumidity.slice(0, splitIndex),
          borderColor: 'rgb(54, 162, 235)',
          backgroundColor: 'rgba(54, 162, 235, 0.1)',
          yAxisID: 'y1',
          tension: 0.4,
          fill: false,
          borderWidth: 2
        },
        {
          label: 'Humidity (%) (Forecast)',
          data: [...Array(splitIndex).fill(null), ...allHumidity.slice(splitIndex)],
          borderColor: 'rgb(54, 162, 235)',
          backgroundColor: 'rgba(54, 162, 235, 0.1)',
          yAxisID: 'y1',
          tension: 0.4,
          fill: false,
          borderWidth: 2,
          borderDash: [5, 5],
          pointStyle: 'dash'
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      interaction: {
        mode: 'index',
        intersect: false,
      },
      plugins: {
        legend: {
          display: true,
          position: 'top',
          labels: {
            color: '#2d5a3d',
            font: {
              size: 11
            }
          }
        },
        tooltip: {
          backgroundColor: 'rgba(0, 0, 0, 0.8)',
          titleColor: '#fff',
          bodyColor: '#fff',
          borderColor: 'rgba(255, 255, 255, 0.1)',
          borderWidth: 1
        }
      },
      scales: {
        x: {
          display: true,
          title: {
            display: true,
            text: 'Date',
            color: '#2d5a3d'
          },
          ticks: {
            color: '#2d5a3d',
            maxRotation: 45,
            minRotation: 45
          },
          grid: {
            color: 'rgba(45, 90, 61, 0.1)'
          }
        },
        y: {
          type: 'linear',
          display: true,
          position: 'left',
          title: {
            display: true,
            text: 'Growth Stage',
            color: '#2d5a3d'
          },
          ticks: {
            color: '#2d5a3d',
            stepSize: 1,
            callback: function(value){
              const stageNames = {
                1: 'Seed',
                2: 'Seedling',
                3: 'Small',
                4: 'Growing',
                5: 'Grown',
                6: 'Flower'
              };
              return stageNames[value] || value;
            }
          },
          grid: {
            color: 'rgba(45, 90, 61, 0.1)'
          },
          min: 1,
          max: 6
        },
        y1: {
          type: 'linear',
          display: true,
          position: 'right',
          title: {
            display: true,
            text: 'Temperature / Humidity',
            color: '#2d5a3d'
          },
          ticks: {
            color: '#2d5a3d'
          },
          grid: {
            drawOnChartArea: false,
          },
        }
      }
    }
  });
}

function updateAnalyticsChart(){
  if(!analyticsChart) {
    initAnalyticsChart();
    return;
  }
  
  // Prepare data
  const historicalDates = chartData.dates.length > 0 ? chartData.dates : ['Today'];
  const historicalStages = chartData.growthStages.length > 0 ? chartData.growthStages : [1];
  const historicalTemps = chartData.temperatures.length > 0 ? chartData.temperatures : [null];
  const historicalHumidity = chartData.humidity.length > 0 ? chartData.humidity : [null];
  
  // Generate forecasts
  const forecastPeriods = 7;
  const forecastStages = forecastGrowth(historicalStages.filter(s => s !== null && s !== undefined), forecastPeriods);
  const forecastTemps = forecastGrowth(historicalTemps.filter(t => t !== null && t !== undefined), forecastPeriods);
  const forecastHumidity = forecastGrowth(historicalHumidity.filter(h => h !== null && h !== undefined), forecastPeriods);
  
  // Create forecast dates
  const forecastDates = [];
  for (let i = 1; i <= forecastPeriods; i++) {
    const date = new Date();
    date.setDate(date.getDate() + i);
    forecastDates.push(date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' }));
  }
  
  // Combine historical and forecast data
  const allDates = [...historicalDates, ...forecastDates];
  const allStages = [...historicalStages, ...forecastStages];
  const allTemps = [...historicalTemps, ...forecastTemps];
  const allHumidity = [...historicalHumidity, ...forecastHumidity];
  
  const splitIndex = historicalDates.length;
  
  // Update chart data
  analyticsChart.data.labels = allDates;
  analyticsChart.data.datasets[0].data = allStages.slice(0, splitIndex);
  analyticsChart.data.datasets[1].data = [...Array(splitIndex).fill(null), ...allStages.slice(splitIndex)];
  analyticsChart.data.datasets[2].data = allTemps.slice(0, splitIndex);
  analyticsChart.data.datasets[3].data = [...Array(splitIndex).fill(null), ...allTemps.slice(splitIndex)];
  analyticsChart.data.datasets[4].data = allHumidity.slice(0, splitIndex);
  analyticsChart.data.datasets[5].data = [...Array(splitIndex).fill(null), ...allHumidity.slice(splitIndex)];
  
  analyticsChart.update('none');
}

// Get current category (default to grains-legumes)
function getCurrentCategory(){
  const selected = document.querySelector('input[name="plant-category"]:checked');
  return selected ? selected.value : 'grains-legumes';
}

// Update images based on category
function updateCategoryImages(category, callback){
  const imagePaths = CATEGORY_IMAGES[category] || CATEGORY_IMAGES['grains-legumes'];
  const basePath = '/static/plant_tracking/assets/';
  
  // Get current active stage to preserve it
  const currentStage = Number(els.range.value) || 1;
  
  // Helper to encode path (handles spaces in filenames)
  function encodePath(path){
    return path.split('/').map(part => encodeURIComponent(part)).join('/');
  }
  
  let imagesToLoad = 0;
  let imagesLoaded = 0;
  
  function checkAllLoaded(){
    imagesLoaded++;
    if(imagesLoaded >= imagesToLoad){
      // Preserve active state after all images are loaded
      if(callback){
        callback();
      } else {
        // If no callback, ensure current stage is active
        setActiveStage(currentStage);
      }
    }
  }
  
  // Update main bubble images - update immediately for real-time visibility
  els.images.forEach((img, idx) => {
    if(img){
      imagesToLoad++;
      const wasActive = img.classList.contains('active');
      const target = idx + 1 === currentStage;
      
      // Remove category classes
      img.classList.remove('category-fruity', 'category-leafy', 'category-root', 'category-grains');
      // Add category class for styling immediately
      if(category === 'fruity-vegetables') img.classList.add('category-fruity');
      else if(category === 'leafy-stem') img.classList.add('category-leafy');
      else if(category === 'root-tuberous') img.classList.add('category-root');
      else if(category === 'grains-legumes') img.classList.add('category-grains');
      
      const newSrc = basePath + encodePath(imagePaths[idx]);
      if(img.src !== newSrc){
        // Update image source immediately for real-time update
        img.src = newSrc;
        // Set active/fade-out state immediately based on current stage
        img.classList.remove('active', 'fade-out');
        if(target){
          img.classList.add('active');
        } else {
          img.classList.add('fade-out');
        }
        img.onload = checkAllLoaded;
        img.onerror = checkAllLoaded; // Continue even if image fails to load
      } else {
        // Same src, update active state immediately
        img.classList.remove('active', 'fade-out');
        if(target){
          img.classList.add('active');
        } else {
          img.classList.add('fade-out');
        }
        checkAllLoaded();
      }
    }
  });
  
  // Update mini widget images - update immediately for real-time visibility
  // Re-query mini widget elements to ensure we find them even if they weren't found initially
  const miniImages = els.mini?.images?.length ? els.mini.images : 
    Array.from({length:6}).map((_,i)=>document.getElementById(`mini-stage-${i+1}`)).filter(img => img !== null);
  
  if(miniImages && miniImages.length > 0){
    miniImages.forEach((img, idx) => {
      if(img && imagePaths[idx]){
        imagesToLoad++;
        const target = idx + 1 === currentStage;
        
        // Remove category classes
        img.classList.remove('category-fruity', 'category-leafy', 'category-root', 'category-grains');
        // Add category class for styling immediately
        if(category === 'fruity-vegetables') img.classList.add('category-fruity');
        else if(category === 'leafy-stem') img.classList.add('category-leafy');
        else if(category === 'root-tuberous') img.classList.add('category-root');
        else if(category === 'grains-legumes') img.classList.add('category-grains');
        
        const newSrc = basePath + encodePath(imagePaths[idx]);
        // Always update image source to force reload (even if src appears same, category changed)
        // Use cache busting to ensure fresh load - remove existing query params first
        const cleanSrc = newSrc.split('?')[0];
        const cacheBustSrc = cleanSrc + '?t=' + Date.now();
        img.src = cacheBustSrc;
        
        // Set active/fade-out state immediately based on current stage
        img.classList.remove('active', 'fade-out');
        if(target){
          img.classList.add('active');
        } else {
          img.classList.add('fade-out');
        }
        
        img.onload = checkAllLoaded;
        img.onerror = checkAllLoaded;
      }
    });
  }
  
  // If no images to load, call callback immediately
  if(imagesToLoad === 0){
    if(callback){
      callback();
    } else {
      setActiveStage(currentStage);
    }
  }
  
  // Save category preference
  localStorage.setItem('plant_category', category);
}

// Load saved category preference
function loadCategoryPreference(initialStage = null){
  const saved = localStorage.getItem('plant_category');
  const stageToSet = initialStage !== null ? initialStage : (Number(els.range?.value) || 1);
  
  if(saved && CATEGORY_IMAGES[saved]){
    const radio = document.querySelector(`input[name="plant-category"][value="${saved}"]`);
    if(radio){
      radio.checked = true;
    }
    updateCategoryImages(saved, () => {
      setActiveStage(stageToSet);
      updateSummary();
      renderHistory();
    });
  } else {
    // Default to grains-legumes
    updateCategoryImages('grains-legumes', () => {
      setActiveStage(stageToSet);
      updateSummary();
      renderHistory();
    });
  }
}

function daysBetween(fromISO, toDate = new Date()){
  const from = new Date(fromISO);
  return Math.max(0, Math.round((toDate - from) / (1000*60*60*24)));
}

function inferStageByAge(ageDays){
  return STAGES.find(s => ageDays >= s.daysMin && ageDays <= s.daysMax) || STAGES[STAGES.length-1];
}

function setActiveStage(stageId){
  els.images.forEach((img, idx)=>{
    const target = idx+1 === stageId;
    img.classList.toggle('active', target);
    img.classList.toggle('fade-out', !target);
  });
  // mirror mini images if present
  if(els.mini?.images?.length){
    els.mini.images.forEach((img, idx)=>{
      const target = idx+1 === stageId;
      if(img){
        img.classList.toggle('active', target);
        img.classList.toggle('fade-out', !target);
      }
    });
  }
  const stage = STAGES.find(s=>s.id===stageId);
  const stageName = translateStageName(stage);
  els.stageName.textContent = stageName;
  if(els.mini?.stageName){ els.mini.stageName.textContent = stageName; }
  if(els.range){ els.range.value = String(stageId); }
  
  // Update summary to ensure Age and Next are updated in mini widget
  updateSummary();
  
  // Save state after stage change
  savePlantState();
}

function updateSummary(){
  const plantedDate = els.plantedDate?.value || todayISO;
  const age = daysBetween(plantedDate);
  const daysText = window.getTranslation ? window.getTranslation('plant.days') : 'days';
  els.ageDays.textContent = `${age} ${daysText}`;
  if(els.mini?.age){ els.mini.age.textContent = `${age} ${daysText}`; }
  const currentStage = Number(els.range?.value) || 1;
  const stage = STAGES.find(s=>s.id === currentStage);
  const stageName = translateStageName(stage);
  els.stageName.textContent = stageName;
  if(els.mini?.stageName){ els.mini.stageName.textContent = stageName; }
  const next = STAGES.find(s=>s.id === (stage?.id||1)+1);
  const nextName = next ? translateStageName(next) : (window.getTranslation ? window.getTranslation('plant.maturityCondition') : 'Maturity');
  const nextText = next ? `${nextName} (~${next.daysMin}d)` : nextName;
  els.nextMilestone.textContent = nextText;
  if(els.mini?.next){ els.mini.next.textContent = nextText; }
  
  // Save state after update
  savePlantState();
}

function renderHistory(){
  const planted = new Date(els.plantedDate.value);
  const aroundText = window.getTranslation ? window.getTranslation('plant.around') : 'around';
  const entireHistoryText = window.getTranslation ? window.getTranslation('plant.entireHistory') : 'entire history';
  const items = STAGES.map(s=>{
    const date = new Date(planted.getTime());
    date.setDate(date.getDate() + s.daysMin);
    const stageName = translateStageName(s);
    return `→ ${stageName} ${aroundText} ${date.toLocaleDateString()}`;
  });
  els.history.textContent = `${entireHistoryText} → ${items.join(' → ')}`;
}

function recommendTreatments(weather){
  const stage = STAGES.find(s=>s.id === Number(els.range.value));
  const recs = [];
  const temp = weather?.tempC;
  const humidity = weather?.humidity;
  const clouds = weather?.clouds;

  if(stage.id <= 2){
    recs.push({t:'Moist soil', d:'Keep top 2-3 cm damp, not soggy.', translationKey: null});
  } else if(stage.id <= 4){
    recs.push({t:'Regular watering', d:'Water when top 3-4 cm is dry.', translationKey: null});
  } else {
    recs.push({t:'Deep watering', d:'Soak to root depth weekly.', translationKey: 'plant.deepWatering', descKey: 'plant.deepWateringDesc'});
  }

  // Weather-influenced adjustments
  if(typeof temp === 'number'){
    if(temp > 32) recs.push({t:'Shade/heat relief', d:'Provide shade cloth during peak sun.', translationKey: null});
    if(temp < 10) recs.push({t:'Cold protection', d:'Cover at night or move indoors.', translationKey: null});
  }
  if(typeof humidity === 'number' && humidity < 35){
    recs.push({t:'Humidity boost', d:'Mulch soil to reduce evaporation.', translationKey: null});
  }
  if(typeof clouds === 'number' && clouds > 70){
    recs.push({t:'Sunlight', d:'Ensure 6–8h of bright light; move closer to sun.', translationKey: null});
  }

  // Nutrients by stage
  if(stage.id === 3 || stage.id === 4){
    recs.push({t:'Balanced fertilizer', d:'NPK 10-10-10 at 1/2 strength weekly.', translationKey: 'plant.treatmentFertilizer'});
  } else if(stage.id >= 5){
    recs.push({t:'Bloom booster', d:'Higher P & K; avoid excess nitrogen.', translationKey: 'plant.bloomBooster', descKey: 'plant.bloomBoosterDesc'});
  }

  // Translate treatment recommendations
  const translatedRecs = recs.map(r => {
    let title = r.t;
    let desc = r.d;
    if (window.getTranslation && r.translationKey) {
      title = window.getTranslation(r.translationKey) || r.t;
    }
    if (window.getTranslation && r.descKey) {
      desc = window.getTranslation(r.descKey) || r.d;
    }
    return {t: title, d: desc};
  });

  els.treatments.innerHTML = translatedRecs.map(r => `<li><span class="badge">${r.t}</span><span>${r.d}</span></li>`).join('');
  
  // Update mini widget treatments
  if(els.mini?.treatments){
    els.mini.treatments.innerHTML = translatedRecs.slice(0, 3).map(r => `<li>${r.t}: ${r.d}</li>`).join('');
  }
}

async function fetchWeather(loc){
  // Accept "City" or "lat,lng"
  try{
    let latLng = null;
    if(/^-?\d+\.?\d*,\s*-?\d+\.?\d*$/.test(loc)){
      const [lat,lng] = loc.split(',').map(Number);
      latLng = {lat, lng};
    } else if(loc){
      // Geocode via Open-Meteo geocoding (no key)
      const g = await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(loc)}&count=1`);
      const gj = await g.json();
      if(gj?.results?.length){
        latLng = {lat: gj.results[0].latitude, lng: gj.results[0].longitude};
      }
    }
    if(!latLng){
      // try browser location
      latLng = await new Promise(resolve=>{
        if(!navigator.geolocation){ resolve(null); return; }
        navigator.geolocation.getCurrentPosition(
          p=>resolve({lat:p.coords.latitude, lng:p.coords.longitude}),
          ()=>resolve(null),
          {enableHighAccuracy:false, timeout:3000}
        );
      });
    }
    if(!latLng){ throw new Error('No location'); }

    const w = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latLng.lat}&longitude=${latLng.lng}&current=temperature_2m,relative_humidity_2m,cloud_cover,weather_code`);
    const jw = await w.json();
    const current = jw?.current || {};
    const data = {
      tempC: current.temperature_2m,
      humidity: current.relative_humidity_2m,
      clouds: current.cloud_cover,
      desc: codeToDesc(current.weather_code)
    };
    renderWeather(data);
    recommendTreatments(data);
    
    // Update mini widget after weather fetch
    updateSummary();
    
    // Sync to chart
    if(typeof data.tempC === 'number' && typeof data.humidity === 'number'){
      const currentStage = Number(els.range.value) || 1;
      addChartDataPoint(currentStage, data.tempC, data.humidity);
    }
    return data;
  }catch(e){
    renderWeather();
    recommendTreatments();
    updateSummary(); // Update mini widget even on error
    return null;
  }
}

function codeToDesc(code){
  const map = {
    0:'Clear', 1:'Mainly clear', 2:'Partly cloudy', 3:'Overcast',
    45:'Fog', 48:'Depositing rime fog', 51:'Drizzle', 61:'Rain', 71:'Snow', 95:'Thunderstorm'
  };
  return map[code] || '—';
}

function renderWeather(data){
  // First check for synced weather data from weather page
  if(!data){
    try {
      const lastWeather = localStorage.getItem('last_weather_data');
      if (lastWeather) {
        const weather = JSON.parse(lastWeather);
        // Check if data is recent (within last 2 hours)
        const twoHoursAgo = Date.now() - (2 * 60 * 60 * 1000);
        if (weather.timestamp && weather.timestamp > twoHoursAgo) {
          // Use synced weather data
          data = {
            tempC: weather.temp,
            humidity: weather.humidity,
            clouds: null, // Not available in synced data
            desc: `From ${weather.city}`
          };
        }
      }
    } catch (error) {
      console.error('Error reading synced weather data:', error);
    }
  }
  
  els.weather.temp.textContent = typeof data?.tempC==='number' ? `${Math.round(data.tempC)}°C` : '—';
  els.weather.humidity.textContent = typeof data?.humidity==='number' ? `${data.humidity}%` : '—';
  els.weather.clouds.textContent = typeof data?.clouds==='number' ? `${data.clouds}%` : '—';
  els.weather.desc.textContent = data?.desc || '—';
  if(els.mini){
    if(els.mini.temp){ els.mini.temp.textContent = typeof data?.tempC==='number' ? `${Math.round(data.tempC)}°C` : '—'; }
    if(els.mini.humidity){ els.mini.humidity.textContent = typeof data?.humidity==='number' ? `${data.humidity}%` : '—'; }
  }
  
  // Add data point to chart when weather is updated
  if(data && typeof data.tempC === 'number' && typeof data.humidity === 'number'){
    const currentStage = Number(els.range.value) || 1;
    addChartDataPoint(currentStage, data.tempC, data.humidity);
  }
}

// Event wiring
els.range.addEventListener('input', ()=>{
  const stageId = Number(els.range.value);
  setActiveStage(stageId);
  updateSummary();
  recommendTreatments();
  // Update chart with new stage if weather data is available
  if(els.weather.temp.textContent !== '—'){
    const tempText = els.weather.temp.textContent.replace('°C', '').trim();
    const humidityText = els.weather.humidity.textContent.replace('%', '').trim();
    const temp = parseFloat(tempText);
    const humidity = parseFloat(humidityText);
    if(!isNaN(temp) && !isNaN(humidity)){
      addChartDataPoint(stageId, temp, humidity);
    }
  }
});
els.plantedDate.addEventListener('change', ()=>{ if(document.getElementById('auto-stage').dataset.on==='1'){ autoStage(); } updateSummary(); renderHistory(); savePlantState(); });
els.autoStageBtn.addEventListener('click', ()=>{
  const on = els.autoStageBtn.dataset.on === '1';
  els.autoStageBtn.dataset.on = on ? '0' : '1';
  els.autoStageBtn.textContent = on ? 'Auto stage' : 'Auto stage (on)';
  if(!on) autoStage();
});
els.refreshWeatherBtn.addEventListener('click', ()=>{
  fetchWeather(els.location.value);
});

function autoStage(){
  const age = daysBetween(els.plantedDate.value);
  const stage = inferStageByAge(age);
  setActiveStage(stage.id);
  updateSummary();
  renderHistory();
}

// Check for synced weather data from weather page
function checkSyncedWeatherData() {
  try {
    const lastWeather = localStorage.getItem('last_weather_data');
    if (lastWeather) {
      const weather = JSON.parse(lastWeather);
      // Check if data is recent (within last hour)
      const oneHourAgo = Date.now() - (60 * 60 * 1000);
      if (weather.timestamp && weather.timestamp > oneHourAgo) {
        // Use synced weather data
        const weatherData = {
          tempC: weather.temp,
          humidity: weather.humidity,
          desc: `Synced from ${weather.city}`
        };
        renderWeather(weatherData);
        recommendTreatments(weatherData);
        
        // Add to chart if not already added today
        const today = new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
        const lastDate = chartData.dates.length > 0 ? chartData.dates[chartData.dates.length - 1] : null;
        if (lastDate !== today) {
          const currentStage = Number(els.range.value) || 1;
          addChartDataPoint(currentStage, weather.temp, weather.humidity);
          // Update chart if it's already initialized
          if (growthWeatherChart) {
            updateChart();
          }
        }
      }
    }
  } catch (error) {
    console.error('Error checking synced weather data:', error);
  }
}

// Initialize
loadChartData();
const savedState = loadPlantState();
const initialStage = savedState?.stage || 1;
if(savedState){
  if(els.plantedDate && savedState.plantedDate) els.plantedDate.value = savedState.plantedDate;
  if(els.location && savedState.location) els.location.value = savedState.location;
  if(els.range) els.range.value = String(initialStage);
}

// Load category preference and set active stage after images load
loadCategoryPreference(initialStage);

// Check for synced weather data first, then fetch if not available
checkSyncedWeatherData();
fetchWeather();

// Ensure mini widget is updated on initialization
setTimeout(() => {
  setActiveStage(initialStage);
  updateSummary();
  renderHistory();
  // Sync mini widget from storage
  syncWidgetFromStorage();
  // Initialize chart after a short delay to ensure DOM is ready
  initChart();
  // Initialize analytics chart
  initAnalyticsChart();
  
  // Set up periodic updates for mini widget (every 10 seconds for more frequent updates)
  setInterval(() => {
    // Always update summary (Age, Stage, Next)
    updateSummary();
    // Update weather if location is set
    if(els.location?.value) {
      fetchWeather(els.location.value);
    } else {
      // Try to load weather from storage
      syncWidgetFromStorage();
    }
  }, 10000); // Update every 10 seconds for more frequent updates
}, 100);

// Also update mini widget whenever location changes
if(els.location) {
  els.location.addEventListener('change', () => {
    updateSummary(); // Update immediately
    if(els.location.value) {
      fetchWeather(els.location.value);
    } else {
      syncWidgetFromStorage();
    }
  });
}

// Update mini widget whenever planted date changes
if(els.plantedDate) {
  els.plantedDate.addEventListener('change', () => {
    updateSummary();
  });
}

// Category change handler
els.categoryRadios.forEach(radio => {
  radio.addEventListener('change', (e) => {
    if(e.target.checked){
      const currentStage = Number(els.range.value) || 1;
      const category = e.target.value;
      
      // Save category preference immediately
      localStorage.setItem('plant_category', category);
      
      // Dispatch custom event for same-page mini widget updates
      window.dispatchEvent(new CustomEvent('categoryChanged', { detail: { category } }));
      
      // Force update mini widget images immediately before calling updateCategoryImages
      const imagePaths = CATEGORY_IMAGES[category] || CATEGORY_IMAGES['grains-legumes'];
      const basePath = '/static/plant_tracking/assets/';
      
      function encodePath(path){
        return path.split('/').map(part => encodeURIComponent(part)).join('/');
      }
      
      // Update mini widget images immediately for real-time feedback
      // Re-query mini widget elements in case they weren't found initially
      const miniImages = els.mini?.images?.length ? els.mini.images : 
        Array.from({length:6}).map((_,i)=>document.getElementById(`mini-stage-${i+1}`)).filter(img => img !== null);
      
      if(miniImages && miniImages.length > 0){
        miniImages.forEach((img, idx) => {
          if(img && imagePaths[idx]){
            const target = idx + 1 === currentStage;
            const newSrc = basePath + encodePath(imagePaths[idx]);
            
            // Remove category classes
            img.classList.remove('category-fruity', 'category-leafy', 'category-root', 'category-grains');
            // Add category class for styling immediately
            if(category === 'fruity-vegetables') img.classList.add('category-fruity');
            else if(category === 'leafy-stem') img.classList.add('category-leafy');
            else if(category === 'root-tuberous') img.classList.add('category-root');
            else if(category === 'grains-legumes') img.classList.add('category-grains');
            
            // Update image source immediately with cache busting to force reload
            // Remove any existing query parameters first
            const cleanSrc = newSrc.split('?')[0];
            img.src = cleanSrc + '?t=' + Date.now();
            
            // Set active/fade-out state immediately
            img.classList.remove('active', 'fade-out');
            if(target){
              img.classList.add('active');
            } else {
              img.classList.add('fade-out');
            }
          }
        });
      }
      
      // Update images immediately for real-time feedback
      updateCategoryImages(category, () => {
        // Ensure current stage remains active after image update
        setActiveStage(currentStage);
      });
    }
  });
});

// --- Simple To‑Do management with localStorage persistence ---
const TODO_KEY = 'plant_tracker_todos';
function loadTodos(){
  try { return JSON.parse(localStorage.getItem(TODO_KEY)) || []; } catch { return []; }
}
function saveTodos(items){ localStorage.setItem(TODO_KEY, JSON.stringify(items)); }
function renderTodos(){
  const items = loadTodos();
  els.todoList.innerHTML = items.map((t,i)=>
    `<li class="todo-item ${t.done?'done':''}" data-idx="${i}">
      <input type="checkbox" ${t.done?'checked':''} aria-label="Mark done" />
      <span class="todo-text">${escapeHtml(t.text)}</span>
      <button class="todo-del" aria-label="Delete">Delete</button>
    </li>`
  ).join('');
  
  // Update mini widget todos
  if(els.mini?.todoList){
    els.mini.todoList.innerHTML = items.slice(0, 5).map((t,i)=>
      `<li class="${t.done?'done':''}" data-idx="${i}">
        <input type="checkbox" ${t.done?'checked':''} />
        <span>${escapeHtml(t.text)}</span>
      </li>`
    ).join('');
  }
}
function escapeHtml(s){ return s.replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;','\'':'&#39;'}[c])); }

els.todoForm?.addEventListener('submit', (e)=>{
  e.preventDefault();
  const text = (els.todoInput.value||'').trim();
  if(!text) return;
  const items = loadTodos();
  items.unshift({text, done:false, ts:Date.now()});
  saveTodos(items);
  els.todoInput.value = '';
  renderTodos();
});

els.todoList?.addEventListener('click', (e)=>{
  const li = e.target.closest('.todo-item');
  if(!li) return;
  const idx = Number(li.dataset.idx);
  const items = loadTodos();
  if(e.target.matches('input[type="checkbox"]')){
    items[idx].done = !items[idx].done;
    saveTodos(items);
    renderTodos();
  } else if(e.target.matches('.todo-del')){
    items.splice(idx,1);
    saveTodos(items);
    renderTodos();
  }
});

// Mini widget todo form
els.mini?.todoForm?.addEventListener('submit', (e)=>{
  e.preventDefault();
  const text = (els.mini.todoInput.value||'').trim();
  if(!text) return;
  const items = loadTodos();
  items.unshift({text, done:false, ts:Date.now()});
  saveTodos(items);
  els.mini.todoInput.value = '';
  renderTodos();
  
  // Immediately update mini widget todos
  if(els.mini?.todoList){
    els.mini.todoList.innerHTML = items.slice(0, 5).map((t,i)=>
      `<li class="${t.done?'done':''}" data-idx="${i}">
        <input type="checkbox" ${t.done?'checked':''} />
        <span>${escapeHtml(t.text)}</span>
      </li>`
    ).join('');
  }
});

// Mini widget todo list interactions
els.mini?.todoList?.addEventListener('click', (e)=>{
  const li = e.target.closest('li');
  if(!li) return;
  const idx = Number(li.dataset.idx);
  const items = loadTodos();
  if(e.target.matches('input[type="checkbox"]')){
    items[idx].done = !items[idx].done;
    saveTodos(items);
    renderTodos();
  }
});

renderTodos();

// Placeholder for fetching plant name from database
// Function to translate vegetable names
function translateVegetableName(englishName) {
  if (!window.getTranslation || !englishName || englishName === '—') return englishName;
  
  // Extract base name (remove parentheses content like "Beans (Bonchi)" -> "Beans")
  let baseName = englishName.split('(')[0].trim();
  
  // Map vegetable names to translation keys
  const vegetableMap = {
    // Grains & Legumes
    'Beans': 'vegetable.beans',
    'Black Gram': 'vegetable.blackGram',
    'Chickpeas': 'vegetable.chickpeas',
    'Corn': 'vegetable.corn',
    'Drumstick': 'vegetable.drumstick',
    'Fenugreek': 'vegetable.fenugreek',
    'Green Gram': 'vegetable.greenGram',
    'Yard Long Beans': 'vegetable.yardLongBeans',
    'Lentils': 'vegetable.lentils',
    'Okra': 'vegetable.okra',
    'Soybean': 'vegetable.soybean',
    'Cowpea': 'vegetable.cowpea',
    'Pigeon Pea': 'vegetable.pigeonPea',
    'Lima Beans': 'vegetable.limaBeans',
    'Winged Beans': 'vegetable.wingedBeans',
    'Horse Gram': 'vegetable.horseGram',
    'Rice': 'vegetable.rice',
    'Finger Millet': 'vegetable.fingerMillet',
    'Maize': 'vegetable.maize',
    'Sorghum': 'vegetable.sorghum',
    // Fruity Vegetables
    'Tomato': 'vegetable.tomato',
    'Ash Plantain': 'vegetable.ashPlantain',
    'Breadfruit': 'vegetable.breadfruit',
    'Jackfruit': 'vegetable.jackfruit',
    'Tender Jackfruit': 'vegetable.tenderJackfruit',
    'Capsicum': 'vegetable.capsicum',
    'Green Chilies': 'vegetable.greenChilies',
    'Red Chilies': 'vegetable.redChilies',
    'Bell Pepper': 'vegetable.bellPepper',
    'Brinjal': 'vegetable.brinjal',
    'Eggplant': 'vegetable.brinjal',
    'Thai Eggplant': 'vegetable.thaiEggplant',
    'Cucumber': 'vegetable.cucumber',
    'Bitter Gourd': 'vegetable.bitterGourd',
    'Snake Gourd': 'vegetable.snakeGourd',
    'Ridge Gourd': 'vegetable.ridgeGourd',
    'Bottle Gourd': 'vegetable.bottleGourd',
    'Ash Pumpkin': 'vegetable.ashPumpkin',
    'Pumpkin': 'vegetable.pumpkin',
    'Watermelon': 'vegetable.watermelon',
    'Musk Melon': 'vegetable.muskMelon',
    'Cantaloupe': 'vegetable.cantaloupe',
    // Leafy & Stem Vegetables
    'Cabbage': 'vegetable.cabbage',
    'Lettuce': 'vegetable.lettuce',
    'Spinach': 'vegetable.spinach',
    'Amaranth Leaves': 'vegetable.amaranthLeaves',
    'Gotukola': 'vegetable.gotukola',
    'Kangkung': 'vegetable.kangkung',
    'Water Spinach': 'vegetable.kangkung',
    'Agati Leaves': 'vegetable.agatiLeaves',
    'Mint': 'vegetable.mint',
    'Curry Leaves': 'vegetable.curryLeaves',
    'Coriander Leaves': 'vegetable.corianderLeaves',
    'Fenugreek Leaves': 'vegetable.fenugreekLeaves',
    'Mustard Greens': 'vegetable.mustardGreens',
    'Radish Leaves': 'vegetable.radishLeaves',
    'Beetroot Leaves': 'vegetable.beetrootLeaves',
    'Sweet Potato Leaves': 'vegetable.sweetPotatoLeaves',
    'Cassava Leaves': 'vegetable.cassavaLeaves',
    'Pumpkin Leaves': 'vegetable.pumpkinLeaves',
    'Drumstick Leaves': 'vegetable.drumstickLeaves',
    'Moringa Leaves': 'vegetable.moringaLeaves',
    'Rocket Leaves': 'vegetable.rocketLeaves',
    'Basil': 'vegetable.basil',
    'Spring Onions': 'vegetable.springOnions',
    'Leeks': 'vegetable.leeks',
    'Celery': 'vegetable.celery',
    'Chinese Cabbage': 'vegetable.chineseCabbage',
    'Pak Choi': 'vegetable.pakChoi',
    'Bok Choy': 'vegetable.bokChoy',
    // Root & Tuberous Vegetables
    'Potato': 'vegetable.potato',
    'Sweet Potato': 'vegetable.sweetPotato',
    'Cassava': 'vegetable.cassava',
    'Manioc': 'vegetable.cassava',
    'Carrot': 'vegetable.carrot',
    'Radish': 'vegetable.radish',
    'Beetroot': 'vegetable.beetroot',
    'Beet': 'vegetable.beetroot',
    'Onion': 'vegetable.onion',
    'Garlic': 'vegetable.garlic',
    'Ginger': 'vegetable.ginger',
    'Turmeric': 'vegetable.turmeric',
    'Yam': 'vegetable.yam',
    'Elephant Foot Yam': 'vegetable.elephantFootYam',
    'Taro': 'vegetable.taro',
    'Arrowroot': 'vegetable.arrowroot',
    'Lotus Roots': 'vegetable.lotusRoots',
    'Kohila': 'vegetable.kohila',
    'Chinese Potato': 'vegetable.chinesePotato',
    'Purple Yam': 'vegetable.purpleYam',
    'Water Yam': 'vegetable.waterYam',
    'Greater Yam': 'vegetable.greaterYam',
    'Lesser Yam': 'vegetable.lesserYam',
    'Turnip': 'vegetable.turnip',
    'Parsnip': 'vegetable.parsnip',
    'Daikon Radish': 'vegetable.daikonRadish'
  };
  
  // Try exact match first
  let translationKey = vegetableMap[baseName];
  
  // If no exact match, try case-insensitive match
  if (!translationKey) {
    const lowerBaseName = baseName.toLowerCase();
    for (const [key, value] of Object.entries(vegetableMap)) {
      if (key.toLowerCase() === lowerBaseName) {
        translationKey = value;
        break;
      }
    }
  }
  
  if (translationKey) {
    const translated = window.getTranslation(translationKey);
    if (translated && translated !== translationKey) {
      return translated;
    }
  }
  
  return englishName;
}

async function fetchPlantName(){
  // Get plant name from sessionStorage
  const savedPlant = sessionStorage.getItem('selectedPlant');
  let plantName = savedPlant || '—';
  
  // Translate plant name if available
  if (plantName !== '—') {
    plantName = translateVegetableName(plantName);
  }
  
  if (els.plantName) {
    els.plantName.textContent = plantName;
  }
  
  if(els.mini?.name){ 
    els.mini.name.textContent = plantName;
    // Update location display if available
    const savedLocation = sessionStorage.getItem('selectedPlantLocation');
    const miniLocationEl = document.getElementById('mini-plant-location');
    const miniLocationRow = document.getElementById('mini-plant-location-row');
    if (miniLocationEl && miniLocationRow && savedLocation) {
      // Translate city name in location
      let translatedLocation = savedLocation;
      if (window.translateCityName && typeof window.translateCityName === 'function') {
        if (savedLocation.includes(',')) {
          const parts = savedLocation.split(',');
          const cityPart = parts[parts.length - 1].trim();
          const translatedCity = window.translateCityName(cityPart);
          if (translatedCity && translatedCity !== cityPart) {
            parts[parts.length - 1] = translatedCity;
            translatedLocation = parts.join(', ');
          }
        } else {
          const translated = window.translateCityName(savedLocation);
          if (translated && translated !== savedLocation) {
            translatedLocation = translated;
          }
        }
      }
      miniLocationEl.textContent = translatedLocation;
      miniLocationRow.style.display = 'flex';
    } else if (miniLocationRow) {
      miniLocationRow.style.display = 'none';
    }
  }
  
  // Re-translate when language changes
  if (!window.plantNameTranslationListener) {
    window.plantNameTranslationListener = true;
    window.addEventListener('languageChanged', function() {
      const savedPlant = sessionStorage.getItem('selectedPlant');
      if (savedPlant && els.plantName) {
        els.plantName.textContent = translateVegetableName(savedPlant);
      }
      if (savedPlant && els.mini?.name) {
        els.mini.name.textContent = translateVegetableName(savedPlant);
      }
      
      // Re-translate location displays
      const savedLocation = sessionStorage.getItem('selectedPlantLocation');
      if (savedLocation) {
        let translatedLocation = savedLocation;
        if (window.translateCityName && typeof window.translateCityName === 'function') {
          if (savedLocation.includes(',')) {
            const parts = savedLocation.split(',');
            const cityPart = parts[parts.length - 1].trim();
            const translatedCity = window.translateCityName(cityPart);
            if (translatedCity && translatedCity !== cityPart) {
              parts[parts.length - 1] = translatedCity;
              translatedLocation = parts.join(', ');
            }
          } else {
            const translated = window.translateCityName(savedLocation);
            if (translated && translated !== savedLocation) {
              translatedLocation = translated;
            }
          }
        }
        
        // Update plant location display
        const plantLocationEl = document.getElementById('plant-location');
        if (plantLocationEl && translatedLocation) {
          plantLocationEl.innerHTML = `<img src="/static/images/Location_pin .ico" style="width: 20px; height: 20px; filter: drop-shadow(0 0 4px rgba(168, 224, 99, 0.8)) drop-shadow(0 0 8px rgba(168, 224, 99, 0.5));" alt="Location"> ${translatedLocation}`;
        }
        
        // Update mini location display
        const miniLocationEl = document.getElementById('mini-plant-location');
        if (miniLocationEl) {
          miniLocationEl.textContent = translatedLocation;
        }
        
        // Update location input field
        const locationInput = document.getElementById('location');
        if (locationInput && locationInput.value) {
          let locationValue = locationInput.value;
          if (window.translateCityName && typeof window.translateCityName === 'function') {
            if (locationValue.includes(',')) {
              const parts = locationValue.split(',');
              const cityPart = parts[parts.length - 1].trim();
              const translatedCity = window.translateCityName(cityPart);
              if (translatedCity && translatedCity !== cityPart) {
                parts[parts.length - 1] = translatedCity;
                locationValue = parts.join(', ');
              }
            } else {
              const translated = window.translateCityName(locationValue);
              if (translated && translated !== locationValue) {
                locationValue = translated;
              }
            }
          }
          locationInput.value = locationValue;
        }
      }
    });
  }
}

fetchPlantName();

// Hover-based plant widget - no JavaScript needed for folding
console.log('Plant widget loaded - hover to unfold!');

