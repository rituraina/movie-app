import React from "react";

class Navbar extends React.Component {
render(){
    const{cartCount}=this.props;
    return(
    <>
    {/* using inline styling in nav and Title */}
    <div style={{ width: "101%", 
                  height: 50, 
                //   backgroundColor:"rgb(59, 148, 148)",    
                  background:"linear-gradient(160deg,rgb(59, 148, 148),#d5dede)",
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                 }}>

        <div style={{color: "#ffffff",
                     fontFamily: "cursive",
                     textShadow: "5px 5px 3px rgb(76, 5, 14)",
                     fontSize: 32,
                     marginLeft: 8}}>

            Movie App
        </div>
        <div style={style.cartContainer}>
            <img alt="Cart Icon" src="https://cdn-icons-png.flaticon.com/128/3737/3737173.png" style={style.cartIcon}/>
            <span style={style.cartCount}>{cartCount}</span>
            {/* <cartCount show={true}>{cartCount}</cartCount> */}
        </div>
    </div>
    
    </>
    )
}
}
export default Navbar;

// used inline style in react also like this
const style={
    cartContainer:{
      position:"relative",
      cursor:"pointer",

    },
cartIcon:{
    marginTop:5,
    height:43,
    marginRight:20,
    
},
cartCount:{
    background:"orange",
    borderRadius:"50%",
    padding:"3px 6px",
    position:"absolute",
    right:10,
    fontsize:10,
   


}

}