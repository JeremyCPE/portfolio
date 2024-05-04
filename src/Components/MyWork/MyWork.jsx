import React from 'react'
import './MyWork.css'
import MyWork_Data from '../../assets/mywork_data'
import arrow_icon from '../../assets/arrow_icon.svg'


const MyWork = () => {
  return (
        <div className="mywork">
            <div className="mywork-title">
                <h1>My latest work</h1>
                <img src="" alt="" />
            </div>
            <div className="mywork-container">
                {MyWork_Data.map((work,index) =>{
                    return <img key={index}src={work.w_img} />
                }
            )}
            </div>
            <div className="mywork-showmore">
                <p>Show me</p>
                <img src={arrow_icon} alt="" />
            </div>
        </div>  
    )
}
export default MyWork