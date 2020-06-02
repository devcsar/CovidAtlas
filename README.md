# COVID Atlas 🖥️ 😷 
## NASA Spaces Apps Challenge_COVID19
### Developers: Cesar Méndez y Leo Camacho 
###### ||Data Sources: [NASA GIBS API](https://wiki.earthdata.nasa.gov/display/GIBS/GIBS+API+for+Developers), [COVID19 API](https://covid19api.com/), [World Bank APIs](https://datahelpdesk.worldbank.org/knowledgebase/articles/889392-about-the-indicators-api-documentation) ||
###### ||Challenge: Integrated Assessment ||
###### ||Region: Latin America & Caribbean 🌎 ||

#### A risk measurement tool for populations and governments to take decision on their daily life’s during pandemic events, by combining satellite imagery, economic data and health statistics in near real time.  


#### How it works:

-We use the ***NASA's Global Imagery Browse Services (GIBS) APIs*** for the satellite imagery and visualize the Data Layers from  _Web Map Title Service (WMTS)_ such as:

- Layer
- Matrix Set
- titleGrid
- origin
- resolution
- Tile

```
 function createLayer() {
    var source = new ol.source.WMTS({
      url: 'https://gibs.earthdata.nasa.gov/wmts/epsg4326/best/wmts.cgi?SERVICE=' 


