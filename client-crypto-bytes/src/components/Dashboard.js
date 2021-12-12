
const Dashboard = (props) => {
    const allCoins = props.coins.map((c, i) => {
        return (
            <li>
                <div>
                    {c.id}
                    <br />
                    ${Number(c.priceUsd).toFixed(2)}
                </div>
            </li>
            
        )
    })






    return (
        <>
            <div>
                <h2>This is your dashboard</h2>
                <ul>
                    {allCoins}
                </ul>
                
            </div>
        </>
    )
}

export default Dashboard
