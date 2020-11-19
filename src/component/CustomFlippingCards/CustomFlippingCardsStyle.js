const CustomFlippingCardsStyle = {
  pointer: {
    cursor: 'pointer',
  },
  frontSide: {
    display: 'flex',
    height: 300,
    width: 350,
    // marginRight: 30,
    boxShadow:
      '0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12)',
  },
  frontSideImage: {
    height: '100%',
    width: '100%',
    borderRadius: 5,
  },
  backSide: {
    display: 'flex',
    height: 300,
    width: 350,
    // marginRight: 30,
    backgroundColor: 'white',
    borderRadius: 5,
    flexDirection: 'column',
    boxShadow:
      '0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12)',
  },
  backSideImage: {
    height: 200,
    width: '100%',
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
  },
  backsideText: {
    marginTop: 10,
    fontWeight: '500',
  },
};

export default CustomFlippingCardsStyle;
