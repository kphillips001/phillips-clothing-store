const INITIAL_STATE = {
  sections: [
    {
    title: 'hats',
    imageUrl: 'https://ik.imagekit.io/zvynnhdsd9/pexels-photo-2146723-min_iSiB0RaLq.png',
    id: 1,
    linkUrl: 'shop/hats'
  },
  {
    title: 'jackets',
    imageUrl: 'https://ik.imagekit.io/zvynnhdsd9/amanda-vick-zw_oaDbfzyE-unsplash_-dpl71rfe.png',
    id: 2,
    linkUrl: 'shop/jackets'
  },
  {
    title: 'sneakers',
    imageUrl: 'https://ik.imagekit.io/zvynnhdsd9/pexels-photo-1027130-min_hGb35HdVa.png',
    id: 3,
    linkUrl: 'shop/sneakers'
  },
  {
    title: 'womens',
    imageUrl: 'https://ik.imagekit.io/zvynnhdsd9/pexels-photo-2473952-min_gEeE3doKX.png',
    size: 'large',
    id: 4,
    linkUrl: 'shop/womens'
  },
  {
    title: 'mens',
    imageUrl: 'https://ik.imagekit.io/zvynnhdsd9/pexels-photo-842811-min_Mbel9m3rC.png',
    size: 'large',
    id: 5,
    linkUrl: 'shop/mens'
      }
    ]
  };
  
  const directoryReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
      default:
        return state; 
    }
  };
  
  export default directoryReducer