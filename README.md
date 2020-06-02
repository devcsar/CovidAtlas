# COVID Atlas 🖥️ 😷 http://covidatlas.co/
## NASA Spaces Apps Challenge_COVID19
### Developers: Cesar Méndez y Leo Camacho 
###### ||Data Sources: [NASA GIBS API](https://wiki.earthdata.nasa.gov/display/GIBS/GIBS+API+for+Developers), [COVID19 API](https://covid19api.com/), [World Bank APIs](https://datahelpdesk.worldbank.org/knowledgebase/articles/889392-about-the-indicators-api-documentation) ||
###### ||Challenge: Integrated Assessment ||
###### ||Region: Latin America & Caribbean 🌎 ||

[Submission to NASA Spaces Apps COVID19 Challenge] (https://covid19.spaceappschallenge.org/challenges/covid-challenges/integrated-assessment/teams/covid-atlas/project)

#### A risk measurement tool for populations and governments to take decision on their daily life’s during pandemic events, by combining satellite imagery, economic data and health statistics in near real time.  


#### How it works:

> Step 1: Earth Exploration

We use the ***NASA's Global Imagery Browse Services (GIBS) APIs*** as a Data Provider for the satellite imagery and visualize the Data Layers using  ***Web Map Title Service (WMTS)*** such as:

- URL: https://gibs.earthdata.nasa.gov/wmts/
- Layer: (e.g. "MODIS / Terra")
- Matrix Set:'EPSG_(n)m'
- Origin:[Lat, Long]
- Resolution:[0...2]
- Tile: Open Layers

> Create Layer function:

```
 function createLayer() {
    var source = new ol.source.WMTS({
      url: 'https://gibs.earthdata.nasa.gov/wmts/epsg4326/best/wmts.cgi?SERVICE='
      layer: 'MODIS_Terra_Property1_Property(n)',
      format: 'image/jpeg',
      matrixSet: 'EPSG_(N)m',
      tileGrid: new ol.tilegrid.WMTS({
        origin: [Lat, Long],
        resolutions: [
          0...(n)
        ],
        matrixIds: [0, 1, 2, 3, 4, 5, 6, 7, 8],
        tileSize: 512
      })
    });
```


> Step 2: Get COVID19 cases

We use the ***COVID19 API*** from Data Providers such as World Health Organization to get the epidemiologic data of ***Total Test results*** values by Country/Region such as:       
- Positive cases: ${covid19['positive']}
- Negative cases: ${covid19['negative']}
- Hospitalized: ${covid19['hospitalized']}
- Death: ${covid19['death']}`
- Recovered: ${covid19['recovered']}`

- URL: curl --location --request GET 'https://www.who.int/rss-feeds/news-english.xml'

```<script>
      const getCovidStats = async() => {
        try {
          const response = await fetch('https://covidtracking.com/api/country');
          const usa = await response.json();

          covid19 = country[0];
        }
        catch (err) {
          console.log(`Error: ${err}`);
        }
        finally {
          markup = `
            Tests:          ${covid19['totalTestResults']}
            Positive:       ${covid19['positive']}
            Negative:       ${covid19['negative']}
            Hospitalized:   ${covid19['hospitalized']}
            Deaths:         ${covid19['death']}`
          document.getElementById('main').innerText = markup;
        }
      };
      getCovidStats();
    </script>
```

### What's next?

Correlate socio economic variables such as Keywords Trends, GDP per Capita, Country Debt, Public Transport, and other predictors for our risk and prevention model based on Teledection and Computational Epidemiology modeling.    

> Step 3: World Bank Data

```
 http://api.worldbank.org/en/countries/country/indicators/
```

- Country Income

```
http://api.worldbank.org/V2/incomeLevel/LIC/country
```

- Total Population

```
http://api.worldbank.org/v2/country/cr/indicator/SP.POP.TOTL?date=2010:2020
```

World Bank API supports the following four output formats: XML, JSON, JSONp, JSON-stat

> Step 4: Social Media API

Meassure near real time Key word trends in search engines

```
googleTrends.dailyTrends({
  trendDate: new Date('2019-01-10'),
  geo: 'US',
}, function(err, results) {
  if (err) {
    console.log(err);
  }else{
    console.log(results);
  }
});
```




