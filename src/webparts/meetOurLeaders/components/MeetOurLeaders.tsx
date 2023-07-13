import * as React from 'react';
import "../components/global.scss";
import { IMeetOurLeadersProps } from './IMeetOurLeadersProps';
import { sp } from "@pnp/sp";
import * as jQuery from "jquery";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'
// import "swiper/css/navigation";
import { breakpoints } from './breakpoints';
// import { escape } from '@microsoft/sp-lodash-subset';

export default class MeetOurLeaders extends React.Component<IMeetOurLeadersProps, any> {

  public constructor(props: IMeetOurLeadersProps, any) {

    super(props);

    this.state = {

      MeetOurLeaders: [],

    };

  }

  public render(): React.ReactElement<IMeetOurLeadersProps> {
    jQuery("#workbenchPageContent").prop("style", "max-width: none"); jQuery(".SPCanvas-canvas").prop("style", "max-width: none"); jQuery(".CanvasZone").prop("style", "max-width: none");

    return (
      <div className='mainContainer'>
        <h3>Meet Our Leaders</h3>

        <Swiper

              modules={[Navigation]}

              // slidesPerView={4}

              className="pictureContainer"

              navigation

              spaceBetween={15}

              breakpoints={breakpoints}

            >

              {this.state.MeetOurLeaders?.map((item, i) => (

                <SwiperSlide key={i}>

                  <div className='picture1' key={i} style={{
                    background: `linear-gradient(1.24deg, #000000 7.8%, rgba(0, 0, 0, 0) 94.09%),url(${
                    item?.Pictures
                    })`,backgroundPosition: "center", backgroundSize: "cover"
                    }}>
                      <div className='pictureContent'>
                        <div className='titleContainer'>
                          <h4>{item?.Title}</h4>
                          <h5>{item?.Role}</h5>
                        </div>
                        <div className='profileVector'></div>
                      </div>
                  </div>

                </SwiperSlide>

              ))}

            </Swiper>
      </div>
    );
  }
  public componentDidMount() {

    

    this._getAnniversary();

  }private _getAnniversary(): void {

    sp.web.lists

      .getByTitle(`MeetOurLeaders`)

      .items.get()

      .then((res) => {

        this.setState({ MeetOurLeaders: res });

      });

  }
}
