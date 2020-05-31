# COVID Atlas 🖥️ 😷 
## NASA Spaces Apps Challenge_COVID19
### Developers: Cesar Méndez y Leo Camacho 
###### ||Data Sources: NASA GIBS API, COVID19 API, World Bank APIs ||
###### ||Challenge: Integrated Assessment ||
###### ||Region: Latin America & Caribbean 🌎 ||

#### A risk measurement tool for populations and governments to take decision on their daily life’s during pandemic events, by combining satellite imagery, economic data and health statistics in near real time.  


#### How it works:

-We use the NASA's Global Imagery Browse Services (GIBS) APIs for the satllite imagery:

<<< function createLayer() {
    var source = new ol.source.WMTS({
      url: 'https://gibs-{a-c}.earthdata.nasa.gov/wmts/epsg4326/best/wmts.cgi?TIME=' + dayParameter(),

