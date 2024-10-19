import { Image_Url } from '../utils/Url';

import './Header.css';
export default function Header(){
    return(
        <>
        <div className='containerheader'>
        <div className='left'>
        <div className='leftSide'>
        
        <img 
                        src={`${Image_Url}eccrlogo.png`} 
                        alt="Logo"
                        className="logo"
                       
                    />

        </div>
        </div>
        <div className='divmiddle'>
        <div className='middle'>
           
        
        <input type='text' className='input' placeholder='Search for Products, Brands and More'></input>

        </div>
        

        </div>
        </div>
        


       
        </>

    )
}