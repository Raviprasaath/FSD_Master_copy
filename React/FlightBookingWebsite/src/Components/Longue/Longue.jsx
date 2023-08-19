import ImageGrid from '../../assets/loungeImg.jpg'


const Longue = () => {
    return (
        <div className="lounge container section">
            <div className="sectionContainer grid">
                
                <div className="imgDiv">
                    <img src={ImageGrid}/>
                </div>

                <div className='textDiv'>
                    <h2>Unaccompainted Minor Lounge</h2>
                
                    <div className='grids grid'>

                        <div className="singleGrid">
                            <span className='gridTitle'>
                                Help through the airport
                            </span>
                            <p>
                                You can also call airlines from your phone and book a ticketto fav location!
                            </p>
                        </div>

                        <div className="singleGrid">
                            <span className='gridTitle'>
                                Proiorty Boarding
                            </span>
                            <p>
                                Help through the airport
                            </p>
                        </div>

                        <div className="singleGrid">
                            <span className='gridTitle'>
                                Chauffeur-drive service
                            </span>
                            <p>
                                You can also call airlines from your phone and book a ticketto fav location!
                            </p>
                        </div>


                    </div>
                </div>


            </div>

        </div>
    )
}

export default Longue;