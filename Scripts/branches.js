function initMap(){
    var options={
        zoom:11,
        center:{lat:28.6139,lng:77.2090}
    }
    var map = new google.maps.Map(document.getElementById('map'),options);
  
    var markers=[
        {  
          content:'<h6>Chandigarh</h6>'
        },
        { 
          content:'<h6>Ludhiana</h6>'
        },
        { 
          content:'<h6>Ahmedabad</h6>'
        },
        {  
          content:'<h6>Kerela</h6>'
        },
        { 
          content:'<h6>Mumbai</h6>'
        },
        {
          content:'<h6>Delhi</h6>'
        }
  
    ];
  
    for(var i=0;i<markers.length;i++)
    {
      addMarker(markers[i]);
    }
    function addMarker(props){
        var marker=new google.maps.Marker({
        position:props.coords,
        map:map
        });
    
    if(props.content)
    {
        var infowindow=new google.maps.InfoWindow({
        content:props.content
        });
        marker.addListener('click', function(){
        infowindow.open(map, marker);
        });
    }
  
    }
  }