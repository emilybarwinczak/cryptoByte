import { createFollowedCoin } from "../api/coindb"
import { useState } from "react"

const FollowList = (props) => {
    // const [symbol, setSymbol] = useState('')
    // const [marketCapUsd, setMarketCapUsd] = useState('')
    // const [maxSupply, setMaxSupply] = useState('')
    // const [rank, setRank] = useState('')
    // const [name, setName] = useState('')
    // const [priceUsd, setPriceUsd] = useState('')
    // const [supply, setSupply] = useState('')
    // const [changePercent24Hr, setChangePercent24Hr] = useState('')
    // const [volumeUsd24Hr, setVolumeUsd24Hr] = useState('')
    // const [vwap24Hr, setVWap24Hr] = useState('')
    
    createFollowedCoin(info => {
        console.log(`This is info: ${info} and this is props: ${props}`)
    })

    return (
        <>
        <h1>Follow List</h1>
        </>
    )
}

const Dashboard = (props) => {
    const allCoins = props.coins.map((c, i) => {
        return (
            <li>
                <div>
                    {c.id}
                    <br />
                    ${Number(c.priceUsd).toFixed(2)}
                    <button onClick={() => createFollowedCoin(c)}>Add to Favorites</button>
                </div>
            </li>
            
        )
    })

    const followedCoins = props.followedCoin.map((f, i) => {
        return (
            <li>
                <div>
                    {f.name}
                </div>
            </li>
        )
    })

    return (
        <>
            <div>
                <h2>This is your dashboard</h2>
                    <h4>Followed Coins: </h4>
                    <ul>
                        {followedCoins}
                    </ul>
                    <h4>Current Info on coins: </h4>
                    <ul>
                        {allCoins}
                    </ul>
            </div>
        </>
    )
}

export default Dashboard
