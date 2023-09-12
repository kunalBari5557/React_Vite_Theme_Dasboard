import "./Transactions.css";
import { iconsImgs } from "../../utils/images";
import { personsImgs } from "../../utils/images";
const Transactions = () => {
     const transactions = [
        {
            id: 11, 
            name: "Sarah Parker",
            image: personsImgs.person_four,
            date: "23/12/04",
            amount: 22000
        },
        {
            id: 12, 
            name: "Krisitine Carter",
            image: personsImgs.person_three,
            date: "23/07/21",
            amount: 20000
        },
        {
            id: 13, 
            name: "Irene Doe",
            image: personsImgs.person_two,
            date: "23/08/25",
            amount: 30000
        }
    ];
  return (
    <div className="grid-one-item grid-common grid-c2">
        <div className="grid-c-title">
            <h3 className="grid-c-title-text">All Transactions</h3>
            <button className="grid-c-title-icon">
                <img src={ iconsImgs.plus } />
            </button>
        </div>

        <div className="grid-content">
            <div className="grid-items">
                {
                    transactions.map((transaction) => (
                        <div className="grid-item" key = { transaction.id }>
                            <div className="grid-item-l">
                                <div className="avatar img-fit-cover">
                                    <img src={ transaction.image } alt="" />
                                </div>
                                <p className="text">{ transaction.name } <span>{ transaction.date }</span></p>
                            </div>
                            <div className="grid-item-r">
                                <span className="text-scarlet">$ { transaction.amount }</span>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default Transactions
