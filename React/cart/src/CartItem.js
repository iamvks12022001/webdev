import React from 'react';

class CartItem extends React.Component{
    constructor(){
        super();//this  will call constructor of React component ,class which we extend
        this.state={
            price:945,
            title:'Mobile Phone',
            qty:1,
            img:''
        }
        //this.increaseQuantity=this.increaseQuantity.bind(this);
        this.testing();
    }

    testing(){
        const promise=new Promise((resolve,reject)=>{
            setTimeout(()=>{
                resolve('done');

            },5000);
        })
        promise.then(()=>{
            this.setState({qty:this.state.qty+10});
            this.setState({qty:this.state.qty+10});
            this.setState({qty:this.state.qty+10});
            console.log('state: ',this.state);
        });
    }
    increaseQuantity=()=>{
      //  console.log("qty inc by 1 ", this.state);
      //  this.state.qty++;

    //  setState form 1
    //   this.setState({
    //       qty:this.state.qty+1
    //   });

    //setState form -2

    this.setState((prevState)=>{
            return{
                  qty:prevState.qty+1
            }
    },()=>{
        console.log('new state: ',this.state);
    });
    //console.log(this.state);// try to check asynchronous behaviour of setState function
//   or 
//     this.setState(function(prevState){
//         return{
//               qty:prevState.qty+1
//         }
//       });
   }
decreaseQuantity=()=>{
        const {qty}=this.state;
        if(qty==0)
        {
            return;
        }
            //console.log("qty dec by 1 ", this.state);

            this.setState((prevState)=>{
                return{
                    qty:prevState.qty-1
                }
        },()=>{
            console.log('new state: ',this.state);
        });

   }

    render(){
        console.log("render");
        const{price,title,qty}=this.state;
        return(
           <div className='cart-item'>
               <div className='left-block'>
                   <img style={styles.image}/>

               </div>
               <div className='right-block'>
                   <div style={{fontSize:25}}>{this.state.title}</div>  {/*inline styling*/}
                   <div style={{color:'#777'}}>Rs: {price}</div>
                   <div style={{color:'#777'}}>Qty: {qty}</div>
                   <div className='cart-item-actions'>
                    {/* Buttons */}  
                    <img alt="increase" 
                    className="action-icons"
                     src="https://image.flaticon.com/icons/png/128/992/992651.png"
                     onClick={this.increaseQuantity}
                     />

                    <img alt="decrease"
                     className="action-icons" 
                     src="https://image.flaticon.com/icons/png/512/992/992683.png"
                     onClick={this.decreaseQuantity}
                     />

                    <img alt="delete" 
                    className="action-icons" 
                    src="https://t4.ftcdn.net/jpg/00/98/26/11/240_F_98261175_Sv69O3rZsHApYkjAdrWbgQixYHwyZyOr.jpg"/>

                   </div>
               </div>
           </div>
        );
    }
}

//styling the cartitem by object

const styles={
    image:{
        height:100,
        width:110,
        borderRadius:4,
        background:'#ccc'
    }
}
export default CartItem;