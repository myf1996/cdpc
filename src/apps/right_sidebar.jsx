import React from 'react';
import Muharram_1443AH from '../assets/reports/Muharram_1443AH.pdf';


const RightSiderbar = (props) => {

    const news = [
        {title:"To farmers' delight, rains provide surplus water. ", date:"24 July, 2021" , new:true, link:"https://epaper.dawn.com/DetailNews.php?StoryText=24_07_2021_012_001"}, 
        {title:"Next week's monsoon blessing for some growers, worry for others" ,date : "8 July, 2021",  new:false, link:"https://epaper.dawn.com/DetailNews.php?StoryText=08_07_2021_009_002"}, 
        
        {title:"February recorded third driest month in six decades.", date:"9 March, 2021" ,  new:false, link:"https://epaper.dawn.com/DetailNews.php?StoryText=09_03_2021_014_005"}, 
        {title:"January 17th driest month since 1961: Met Office; Country received below average rains. " , date:"4 March, 2021"  ,new:false, link:"https://epaper.dawn.com/DetailNews.php?StoryText=04_03_2021_012_004"}, 

        {title:"International Journal of Science 'NATURE' story on Turbat 54 °C temperature.", date:"16 September, 2019" ,  new:false, link:"https://www.nature.com/articles/d41586-019-02632-2"}, 
        {title:"Recent scorching temperatures in Kuwait and Pakistan confirmed as third and fourth hottest on Earth. ", date:"18 June, 2019" ,  new:false, link:"https://www.washingtonpost.com/weather/2019/06/18/recent-scorching-temperatures-kuwait-pakistan-confirmed-third-fourth-hottest-measured-earth/"}, 

        {title:"WMO verifies 3rd and 4th hottest temperature recorded on Earth; WMP Press Release.", date:"18 June, 2019" ,  new:false, link:"https://public.wmo.int/en/media/press-release/wmo-verifies-3rd-and-4th-hottest-temperature-recorded-earth"}, 
        {title:"Temperature extreme records: World Meteorological Organization metrological and meteorological evaluation of the 54.0°C observations in Mitribah, Kuwait and Turbat, Pakistan in 2016/2017; International Journal of Climatology.", date:"17 June, 2019",  new:false , link:"https://rmets.onlinelibrary.wiley.com/doi/abs/10.1002/joc.6132"}, 

        {title:"Pakistan may have just endured the hottest April over Globe: Washington Post.", date:"May 1, 2018" ,  new:false, link:"https://www.washingtonpost.com/news/capital-weather-gang/wp/2018/05/01/a-city-in-pakistan-may-have-just-endured-the-hottest-april-temperature-ever-observed-on-earth/"}, 
        {title:"March is 3rd warmest on record, many contrasts : WMO.", date:"April 06, 2018" ,  new:false, link:"https://public.wmo.int/en/media/news/march-3rd-warmest-record-many-contrasts"}, 
      ]

      const newEvent = [
        {title:"Monsoon 2021 rainfall." ,link:"/monsoon_2021_rainfall" }, 
        {title:"New Moon Sighting.", link:Muharram_1443AH}, 
        
      ]

    return (
    <>
      <div className="rightsidebar">
      <div>
          <h4 className="rightsidebar-heading4 new"> NEW</h4>
              <ul>
                {newEvent.map((item) => (
                        <li><a href={item.link}>{item.title}</a></li>
                    ))
                }
              </ul>
          </div>
     
          <div className="news">
            <h4 className="rightsidebar-heading4"> PMD-CDPC in NEWS</h4>
            <marquee className="news-marquee" direction="up" scrollamount="6">
                {news.map((item) => (
                <p><a href={item.link}>{item.title}</a><span className="news-date">{item.date}</span></p>
              ))
              }
                
                
            </marquee>
          </div>
          <div className="clearfix"></div>
          
     </div>
    </>
  );
};

export default RightSiderbar;
