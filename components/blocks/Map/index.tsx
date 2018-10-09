import * as React from 'react'
import {
  GoogleMap,
  Marker,
  withGoogleMap,
  withScriptjs,
} from 'react-google-maps'

const MyMapComponent = withScriptjs(
  withGoogleMap(() => (
    <GoogleMap defaultZoom={16} defaultCenter={{ lat: 59.9385, lng: 30.3701 }}>
      <Marker
        position={{ lat: 59.9385, lng: 30.3701 }}
        icon={'/static/img/ballon.png'}
      />
    </GoogleMap>
  )),
)

export class Map extends React.Component {
  render() {
    const apiKey = 'AIzaSyCBxqFD5hZqiJQ1NKyj-FVs-lPC4906jXY'
    return (
      <section className='map'>
        <MyMapComponent
          googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${apiKey}&v=3.exp&libraries=geometry,drawing,places`}
          loadingElement={<div style={{ height: '100%' }} />}
          containerElement={<div style={{ height: '470px' }} />}
          mapElement={<div style={{ height: '100%' }} />}
        />
      </section>
    )
  }
}
