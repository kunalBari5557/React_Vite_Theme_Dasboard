import { iconsImgs } from "../../utils/images"
import "./Subscriptions.css";

const Subscriptions = () => {
     const subscriptions = [
        {
            id: 24,
            title: "LinkedIn",
            due_date: "23/12/04",
            amount: 20000
        },
        {
            id: 25,
            title: "Netflix",
            due_date: "23/12/10",
            amount: 5000
        },
        {
            id: 26,
            title: "DSTV",
            due_date: "23/12/22",
            amount: 2000
        }
    ];
  return (
    <div className="subgrid-two-item grid-common grid-c5">
        <div className="grid-c-title">
            <h3 className="grid-c-title-text">Subscriptions</h3>
            <button className="grid-c-title-icon">
                <img src={ iconsImgs.plus } />
            </button>
        </div>
        <div className="grid-c5-content">
            <div className="grid-items">
                {
                    subscriptions.map((subscription) => (
                        <div className="grid-item" key = {subscription.id}>
                            <div className="grid-item-l">
                                <div className="icon">
                                    <img src={ iconsImgs.alert } />
                                </div>
                                <p className="text text-silver-v1">{ subscription.title } <span>due { subscription.due_date }</span></p>
                            </div>
                            <div className="grid-item-r">
                                <span className="text-silver-v1">$ { subscription.amount }</span>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default Subscriptions
