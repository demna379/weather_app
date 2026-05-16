
let bool = true

const dark_light = document.getElementById('dark_light')

const btn_ball = document.getElementById('btn_ball')
const searc_bar = document.getElementById('searc_bar')
const sect_1 = document.getElementById('sect_1')

const sunrise = document.getElementById('sunrise')
const sunset = document.getElementById('sunset')

const humidity = document.getElementById('humidity')
const wind = document.getElementById('wind')
const pressure = document.getElementById('pressure')
const UV = document.getElementById('UV')

document.getElementById('btn').addEventListener('click', () => {
    if (bool == true) {
        document.body.style.transition = '0.2s'
        document.body.style.background = 'linear-gradient(129deg,rgba(255, 255, 255, 1) 35%, rgba(70, 97, 115, 1) 71%)'
        searc_bar.style.backgroundColor = 'rgba(217, 217, 217, 1)'
        sect_1.style.backgroundColor = 'rgba(217, 217, 217, 1)'
        btn_ball.style.left = '0%'
        dark_light.textContent = 'Light Mode'
        dark_light.style.color = 'black'
        bool = false
    } else {
        document.body.style.background = 'linear-gradient(110.05deg, #383838 30%, rgba(0, 0, 0, 0.931) 71.82%)'
        btn_ball.style.left = '65%'
        searc_bar.style.backgroundColor = 'rgba(68, 68, 68, 1)'
        sect_1.style.backgroundColor = 'rgba(68, 68, 68, 1)'
        dark_light.textContent = 'Dark Mode'
        dark_light.style.color = 'white'
        bool = true
    }
})

const API_KEY = '64dfe94a32474c07b45103424260905'
const submit = document.getElementById('submit')

const temperature = document.getElementById('temperature')
const Feels = document.getElementById('Feels')
const humidity_percent = document.getElementById('humidity_percent')
const wind_speed = document.getElementById('wind_speed')
const pressure_number = document.getElementById('pressure_number')
const UV_number = document.getElementById('UV_number')

const picture = document.getElementById('picture')
const namess = document.getElementById('namess')

submit.addEventListener('click', async () => {
    let input = document.getElementById('input').value
    let result = await (await fetch(`https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${input}&aqi=yes `)).json()
    temperature.textContent = result.current.temp_f +'°F'
    Feels.textContent = result.current.feelslike_c +'°C'
    humidity_percent.textContent = result.current.humidity + '%'
    wind_speed.textContent = result.current.wind_kph + 'km/h'
    pressure_number.textContent = result.current.pressure_mb + 'hPa'
    UV_number.textContent = result.current.uv

    picture.src = result.current.condition.icon
    namess.textContent = result.current.condition.text

    console.log(result)
})

// air_quality
// :
// { co: 118.85, no2: 1.85, o3: 75, so2: 1.35, pm2_5: 2.25, … }
// chance_of_rain
// :
// 100
// chance_of_snow
// :
// 0
// cloud
// :
// 62
// condition
// :
// { text: 'Light rain', icon: '//cdn.weatherapi.com/weather/64x64/day/296.png', code: 1183 }
// dewpoint_c
// :
// 10.6
// dewpoint_f
// :
// 51.1
// feelslike_c
// :
// 11.2
// feelslike_f
// :
// 52.1
// gust_kph
// :
// 24.4
// gust_mph
// :
// 15.2
// heatindex_c
// :
// 12.6
// heatindex_f
// :
// 54.8
// humidity
// :
// 88
// is_day
// :
// 1
// last_updated
// :
// "2026-05-16 13:00"
// last_updated_epoch
// :
// 1778922000
// precip_in
// :
// 0.04
// precip_mm
// :
// 1.12
// pressure_in
// :
// 29.68
// pressure_mb
// :
// 1005
// temp_c
// :
// 13.1
// temp_f
// :
// 55.6
// uv
// :
// 6.2
// vis_km
// :
// 10
// vis_miles
// :
// 6
// will_it_rain
// :
// 1
// will_it_snow
// :
// 0
// wind_degree
// :
// 328
// wind_dir
// :
// "NNW"
// wind_kph
// :
// 21.2
// wind_mph
// :
// 13.2
// windchill_c
// :
// 10.6
// windchill_f
// :
// 51.1
// [[Prototype]]
// :
// Object