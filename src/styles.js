
export default {
    header:{
        backgroundColor: '#F6F6F1',
        height: '15vh',
        width: '100%',
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'row',
        border: '1.5px solid #E8E7E7',
        alignItems: 'center'
    },
    logo:{
        height: '14vh',
        objectFit: 'contain',
        

    },
    contactUs:{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        alignContent: 'center',
        alignSelf: 'stretch',
        width: '100%',
        
    },
    icons:{
        height:'50px',
        width: '50px',
        textAlign:'center',
        padding: '5%',
        
    },
    title:{
        fontSize: '6rem',
       width: '100%',
        objectFit:'contain',
        marginTop: "2%",
        whiteSpace: 'nowrap'
    },
    areaTitle:{
        display: 'flex',
        justifyContent: 'row',
       
        
    },
    container:{
        display: 'flex',
        justifyContent: 'flex-start',
        margin: '1%',
        maxWidth: '100%',
        backgroundColor: 'white',
        paddingTop: '8%', 
        boxSizing: 'fit-content'
    },
    map:{
        width: '100%',
        height: '38vh',
        objectFit: 'cover',
        boxSizing: 'border-box'

    },
    cardMap:{ 
        height: '80vh',
        marginRight: '1vw',
        fontFamily: 'Exo 2, sans-serif',
        textAlign: 'center',
    },
    infoGeralText:{
        fontSize: '1.8rem',
        height: '34vh',
        
        
        padding: '3%',
        display: 'grid',
        alignItems: 'center',
       
    },
    infoLocalText:{
        fontSize: '2.5rem',
        
    },
    infosLocal:{
        display: 'flex',
        flexDirection: 'row', 
        width: '100%',
        boxSizing: 'border-box',
        alignItems: 'center',
        alignContent: 'center',
       
    },
    time:{
        height: '2em',
        marginLeft: '1%',
        marginRight: '1%',
    },
    timer:{
        height: '33px',
        width: '33px',
        marginLeft: '5px'
    },
    line:{
        content: "",
        width: '50%',
        height: '3px',
        backgroundColor: '#4285F4',
        borderWidth: '0 0 5px 0',
        
    },
    tag:{
        whiteSpace: 'nowrap',
        backgroundColor: '#D8D8D8',
        border: 'radius',
        opacity: '0.45',
        fontWeight: 'bold',
        borderRadius: '51px',
        margin: '1px',
        padding: '1px', 
        fontSize: '1.7rem',
        boxSizing: 'border-box',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        
    },
    

    cardTag:{
        objectFit: 'cover',
        width: '100%'
    },
    cardPaiTag:{
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gridGap: '5px',
    boxSizing: 'border-box',
    position: 'relative',
    height: '5em',
    whiteSpace: 'nowrap',
    },
    contentStyle: {
        height: '38vh',
        width: '100%',
        objectFit: 'cover',
        lineHeight: '200px',
        textAlign: 'center',
        backgroundColor: '#4285F4',
        marginTop: '1%'
      },
      
    Card1: {
        width: '100%',
        display: 'flex',
        justifyContent: 'row'
    },
    cardForm:{
        fontSize: '4rem',
        backgroundColor: 'blue',
        width: '100vw'
    },
    cardApto:{
    height:'80vh',
    backgroundColor: '#F6F6F1', 
  zIndex: '1',
    borderRadius: '2%',
    border: '1.5px solid #E8E7E7',}
}
