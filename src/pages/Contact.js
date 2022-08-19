import React from 'react'
import { useNavigate } from 'react-router-dom'

const Contact = () => {
    const navigate = useNavigate();
  return (
    <div>
        <h1>Contact Page</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda deserunt voluptates qui ut sunt iste, itaque libero tempora et cumque eum? Magnam ea quidem atque et quisquam minima aliquid nesciunt, incidunt cupiditate quam natus iste consequuntur quas nam saepe ab? Eveniet eius corrupti culpa ipsam porro. Ad, itaque qui? Odit!</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, dolor incidunt totam illum ab eum obcaecati in labore reiciendis vel corporis. Officia, ab! Consectetur, eveniet nobis voluptas aliquam alias veniam.</p>
    <button className="home_btn" onClick={()=>navigate("/")}>Go to Home</button>
    </div>
  )
}

export default Contact