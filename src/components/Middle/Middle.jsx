import './Middle.css'
import back from '../../assets/bank-tree.jpeg'
import chat from '../../assets/icon-chat.png'
import money from '../../assets/icon-money.png'
import security from '../../assets/icon-security.png'




const myStyle = {

    backgroundImage: `url(${back})`,
    height: "420px",
    backgroundPosition: "0 -200px",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    position: "relative",
};

const Middle = () => {
    return (
        <div>
            <div style={myStyle}>
                <div>
                    <div class="hero-content">
                        <h2 class="sr-only">Promoted Content</h2>
                        <p class="subtitle">No fees.</p>
                        <p class="subtitle">No minimum deposit.</p>
                        <p class="subtitle">High interest rates.</p>
                        <p class="text">Open a savings account with Argent Bank today!</p>
                    </div>

                </div>
            </div >
            <div className='feature-container'>
                <div className="feature">
                    <div className='feature-item'>
                        <img src={chat}></img>
                        <h3 class="feature-item-title">You are our #1 priority</h3>
                        <p>
                            Need to talk to a representative? You can get in touch through our
                            24/7 chat or through a phone call in less than 5 minutes.
                        </p>
                    </div>
                    <div className='feature-item'>
                        <img src={money}></img>
                        <h3 class="feature-item-title">More savings means higher rates</h3>
                        <p>
                            The more you save with us, the higher your interest rate will be!
                        </p>
                    </div>
                    <div className='feature-item'>

                        <img src={security}></img>
                        <h3 class="feature-item-title">Security you can trust</h3>
                        <p>
                            We use top of the line encryption to make sure your data and money
                            is always safe.
                        </p>

                    </div>


                </div>
            </div>

        </div>
    )
}
export default Middle;